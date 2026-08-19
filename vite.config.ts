import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

const devRsvpServerPlugin = (): Plugin => ({
  name: 'dev-rsvp-server',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const url = req.url?.split('?')[0];
      if (url === '/.netlify/functions/submit-rsvp' || url === '/api/submit-rsvp') {
        if (req.method === 'OPTIONS') {
          res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
          });
          res.end(JSON.stringify({ status: 'ok' }));
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });

          req.on('end', async () => {
            try {
              const payload = JSON.parse(body || '{}');
              const { turnstileToken, formData } = payload;

              if (!formData || !formData.fullName || !formData.mobileNumber) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: 'Missing required guest details' }));
                return;
              }

              // Turnstile verification in dev (if secret set)
              const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
              if (turnstileSecret) {
                if (!turnstileToken) {
                  res.writeHead(400, { 'Content-Type': 'application/json' });
                  res.end(
                    JSON.stringify({
                      success: false,
                      error: 'Please complete the security verification and try again.',
                    })
                  );
                  return;
                }

                const turnstileVerifyBody = new URLSearchParams();
                turnstileVerifyBody.append('secret', turnstileSecret);
                turnstileVerifyBody.append('response', turnstileToken);

                const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: turnstileVerifyBody,
                });

                const turnstileResult = await turnstileRes.json();
                if (!turnstileResult.success) {
                  res.writeHead(400, { 'Content-Type': 'application/json' });
                  res.end(
                    JSON.stringify({
                      success: false,
                      error: 'Please complete the security verification and try again.',
                    })
                  );
                  return;
                }
              }

              // Telegram message
              const botToken = process.env.TELEGRAM_BOT_TOKEN;
              const chatId = process.env.TELEGRAM_CHAT_ID;

              if (!botToken || !chatId) {
                console.error('[Dev Server] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured in environment');
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(
                  JSON.stringify({
                    success: false,
                    error: 'Unable to submit RSVP (server credentials not configured in environment)',
                  })
                );
                return;
              }

              const name = formData.fullName?.trim() || 'Not provided';
              const mobile = formData.mobileNumber?.trim() || 'Not provided';
              const members = formData.attendingCount ? String(formData.attendingCount) : 'Not provided';
              const eventsList =
                Array.isArray(formData.eventsAttending) && formData.eventsAttending.length > 0
                  ? formData.eventsAttending.map((e: string) => `• ${e}`).join('\n')
                  : 'Not provided';
              const arrivalDate = formData.arrivalDate?.trim() || 'Not provided';
              const arrivalTime = formData.arrivalTime?.trim() || 'Not provided';
              const arrivalFrom = formData.arrivalFrom?.trim() || 'Not provided';
              const departureDate = formData.departureDate?.trim() || 'Not provided';
              const departureTime = formData.departureTime?.trim() || 'Not provided';
              const departureTo = formData.departureTo?.trim() || 'Not provided';
              const travelMode = formData.travelMode?.trim() || 'Not provided';
              const transportAssistance = formData.transportAssistance?.trim() || 'No';
              const specialRequirements = formData.specialRequirements?.trim() || 'Not provided';

              const messageText = `🔔 NEW WEDDING RSVP\n\n👤 Guest Information\nName: ${name}\nMobile: ${mobile}\nMembers Attending: ${members}\n\n💍 Events Attending\n${eventsList}\n\n✈️ Travel Information\nArrival: ${arrivalDate} at ${arrivalTime}\nFrom: ${arrivalFrom}\n\nDeparture: ${departureDate} at ${departureTime}\nTo: ${departureTo}\n\nMode of Travel: ${travelMode}\nTransportation Assistance: ${transportAssistance}\n\n📝 Additional Information\n${specialRequirements}`;

              const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  chat_id: chatId,
                  text: messageText,
                }),
              });

              const telegramData = await telegramRes.json();
              if (!telegramData.ok) {
                console.error('[Dev Server] Telegram API Error:', telegramData);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: 'Unable to submit RSVP' }));
                return;
              }

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true }));
            } catch (err) {
              console.error('[Dev Server] Error handling RSVP submission:', err);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: 'Unable to submit RSVP' }));
            }
          });
          return;
        }
      }
      next();
    });
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), devRsvpServerPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
