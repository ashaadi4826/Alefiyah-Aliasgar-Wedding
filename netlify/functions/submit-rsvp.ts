import type { Handler, HandlerEvent } from '@netlify/functions';

interface RSVPFormData {
  fullName: string;
  mobileNumber: string;
  attendingCount: number;
  eventsAttending: string[];
  arrivalDate?: string;
  arrivalTime?: string;
  arrivalFrom?: string;
  departureDate?: string;
  departureTime?: string;
  departureTo?: string;
  travelMode?: string;
  transportAssistance?: string;
  specialRequirements?: string;
}

interface RequestPayload {
  turnstileToken?: string;
  formData: RSVPFormData;
}

function formatTelegramMessage(data: RSVPFormData): string {
  const name = data.fullName?.trim() || 'Not provided';
  const mobile = data.mobileNumber?.trim() || 'Not provided';
  const members = data.attendingCount ? String(data.attendingCount) : 'Not provided';

  let eventsList = 'Not provided';
  if (Array.isArray(data.eventsAttending) && data.eventsAttending.length > 0) {
    eventsList = data.eventsAttending.map((e) => `• ${e}`).join('\n');
  }

  const arrivalDate = data.arrivalDate?.trim() || 'Not provided';
  const arrivalTime = data.arrivalTime?.trim() || 'Not provided';
  const arrivalFrom = data.arrivalFrom?.trim() || 'Not provided';

  const departureDate = data.departureDate?.trim() || 'Not provided';
  const departureTime = data.departureTime?.trim() || 'Not provided';
  const departureTo = data.departureTo?.trim() || 'Not provided';

  const travelMode = data.travelMode?.trim() || 'Not provided';
  const transportAssistance = data.transportAssistance?.trim() || 'No';
  const specialRequirements = data.specialRequirements?.trim() || 'Not provided';

  return `🔔 NEW WEDDING RSVP

👤 Guest Information
Name: ${name}
Mobile: ${mobile}
Members Attending: ${members}

💍 Events Attending
${eventsList}

✈️ Travel Information
Arrival: ${arrivalDate} at ${arrivalTime}
From: ${arrivalFrom}

Departure: ${departureDate} at ${departureTime}
To: ${departureTo}

Mode of Travel: ${travelMode}
Transportation Assistance: ${transportAssistance}

📝 Additional Information
${specialRequirements}`;
}

export const handler: Handler = async (event: HandlerEvent) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'OK' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: 'Method Not Allowed' }),
    };
  }

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Invalid request body' }),
      };
    }

    const payload: RequestPayload = JSON.parse(event.body);
    const { turnstileToken, formData } = payload;

    if (!formData || !formData.fullName || !formData.mobileNumber) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Missing required guest details' }),
      };
    }

    if (!formData.eventsAttending || formData.eventsAttending.length === 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Please select at least one event' }),
      };
    }

    // 1. Cloudflare Turnstile Verification (Server-Side)
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      if (!turnstileToken) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            error: 'Please complete the security verification and try again.',
          }),
        };
      }

      const clientIp = event.headers['x-forwarded-for'] || event.headers['client-ip'] || '';
      const turnstileVerifyBody = new URLSearchParams();
      turnstileVerifyBody.append('secret', turnstileSecret);
      turnstileVerifyBody.append('response', turnstileToken);
      if (clientIp) {
        turnstileVerifyBody.append('remoteip', clientIp);
      }

      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: turnstileVerifyBody,
      });

      const turnstileResult = await turnstileRes.json();
      if (!turnstileResult.success) {
        console.warn('Cloudflare Turnstile verification failed:', turnstileResult);
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            error: 'Please complete the security verification and try again.',
          }),
        };
      }
    }

    // 2. Telegram Bot API Integration (Server-Side)
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Server Configuration Error: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Unable to submit RSVP',
        }),
      };
    }

    const messageText = formatTelegramMessage(formData);
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
      }),
    });

    const telegramData = await telegramResponse.json();

    if (!telegramData.ok) {
      console.error('Telegram Bot API Error:', telegramData);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Unable to submit RSVP',
        }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
      }),
    };
  } catch (error) {
    console.error('RSVP Submission Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Unable to submit RSVP',
      }),
    };
  }
};
