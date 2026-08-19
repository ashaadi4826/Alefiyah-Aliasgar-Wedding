export interface WeddingEvent {
  id: string;
  title: string;
  subtitle?: string;
  hijriDate: string;
  gregorianDate: string;
  dayOfWeek: string;
  time: string;
  processionTime?: string;
  majlisTime?: string;
  venueName: string;
  venueDetail?: string;
  dressCode?: string;
  description?: string;
  coordinatesUrl?: string;
}

export interface FamilyMember {
  relation: string;
  name: string;
}

export interface FamilySide {
  side: "Bride's Family" | "Groom's Family";
  members: FamilyMember[];
}

export interface VenueInfo {
  id: string;
  name: string;
  locationArea: string;
  city: string;
  fullAddress?: string;
  directionsUrl: string;
  associatedEvents: string[];
  note?: string;
}

export interface RSVPFormData {
  fullName: string;
  mobileNumber: string;
  attendingCount: number;
  eventsAttending: string[];
  arrivalDate: string;
  arrivalTime: string;
  arrivalFrom: string;
  departureDate: string;
  departureTime: string;
  departureTo: string;
  travelMode: 'Flight' | 'Train' | 'Car' | 'Other' | '';
  transportAssistance: 'Yes' | 'No' | '';
  specialRequirements: string;
  submittedAt?: string;
}
