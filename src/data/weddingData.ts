import { WeddingEvent, FamilySide, VenueInfo } from '../types';

export const COUPLE = {
  bride: "Alefiyah",
  groom: "Aliasgar",
  combined: "Alefiyah & Aliasgar",
  hashtag: "#AlefiyahWedsAliasgar",
  weddingDatesText: "6 — 8 October 2026",
  hijriDatesText: "24 — 26 Rabi al-Akhar 1448\u00A0H",
  hijriYear: "1448\u00A0H",
  location: "Rajkot, Gujarat",
  targetDate: new Date('2026-10-06T16:00:00+05:30'), // Mehendi / Wedding start date 6 October 2026
};

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'mehendi',
    title: 'MEHENDI',
    hijriDate: '24 Rabi al-Akhar 1448\u00A0H',
    gregorianDate: '6 October 2026',
    dayOfWeek: 'Tuesday',
    time: '04:00 PM onwards',
    venueName: 'Garden Fairyland',
    venueDetail: 'Rajkot, Gujarat',
    description: 'Hands adorned, hearts full of cheer,\nCome make some beautiful memories here.',
  },
  {
    id: 'mithi-shitabi',
    title: 'MITHI SHITABI & JAMAN',
    hijriDate: '25 Rabi al-Akhar 1448\u00A0H',
    gregorianDate: '7 October 2026',
    dayOfWeek: 'Wednesday',
    time: '11:45 AM',
    venueName: 'Badri Hall, Ekjan Society',
    venueDetail: 'Rajkot, Gujarat',
    description: 'With Fatema’s blessings shining bright,\nWe gather in faith, love and light.',
  },
  {
    id: 'katha-ni-rasam',
    title: 'KATHA NI RASAM',
    hijriDate: '26 Rabi al-Akhar 1448\u00A0H',
    gregorianDate: '7 October 2026',
    dayOfWeek: 'Wednesday',
    time: '04:00 PM',
    venueName: 'Badri Hall, Ekjan Society',
    venueDetail: 'Rajkot, Gujarat',
    description: 'With Kaki, Mami, Masi & Fayji near,\nWe celebrate traditions we hold so dear.',
  },
  {
    id: 'darees-khushi-nu-jaman',
    title: 'DAREES & KHUSHI NU JAMAN',
    hijriDate: '26 Rabi al-Akhar 1448\u00A0H',
    gregorianDate: '7 October 2026',
    dayOfWeek: 'Wednesday',
    time: '08:00 PM',
    venueName: 'Badri Hall, Ekjan Society',
    venueDetail: 'Rajkot, Gujarat',
    description: 'Blessings are the first step to our new start,\nWith duas from the ones closest to our heart.',
  },
  {
    id: 'nikah-ni-majlis',
    title: 'NIKAH NI MAJLIS & KHUSHI NU JAMAN',
    hijriDate: '27 Rabi al-Akhar 1448\u00A0H',
    gregorianDate: '8 October 2026',
    dayOfWeek: 'Thursday',
    time: 'Procession 11:00 AM · Majlis 12:30 PM',
    processionTime: '11:00 AM',
    majlisTime: '12:30 PM',
    venueName: 'Badri Hall, Ekjan Society',
    venueDetail: 'Rajkot, Gujarat',
    description: 'The promise is made, the bond is sealed,\nNow let the joy of forever be revealed.',
  },
];

export const VENUES: VenueInfo[] = [
  {
    id: 'garden-fairyland',
    name: 'Garden Fairyland',
    locationArea: 'Garden Fairyland',
    city: 'Rajkot, Gujarat',
    fullAddress: 'Garden Fairyland, Rajkot, Gujarat',
    directionsUrl: 'https://maps.google.com/?q=Garden+Fairyland+Rajkot',
    associatedEvents: ['Mehendi'],
    note: 'Celebration venue for Mehendi evening',
  },
  {
    id: 'badri-hall',
    name: 'Badri Hall, Ekjan Society',
    locationArea: 'Ekjan Society',
    city: 'Rajkot, Gujarat',
    fullAddress: 'Badri Hall, Ekjan Society, Rajkot, Gujarat',
    directionsUrl: 'https://maps.google.com/?q=Badri+Hall+Ekjan+Society+Rajkot',
    associatedEvents: [
      'Mithi Shitabi & Jaman',
      'Katha ni Rasam',
      'Darees & Khushi nu Jaman',
      'Nikah ni Majlis & Khushi nu Jaman',
    ],
    note: 'Primary venue for ceremonies & Nikah Majlis',
  },
];

export const FAMILY_DATA: FamilySide[] = [
  {
    side: "Bride's Family",
    members: [
      { relation: 'Grandfather', name: 'Saifuddin Sheikh Hasanali Tinwala' },
      { relation: 'Father', name: 'Taher Sheikh Saifuddin Tinwala' },
      { relation: 'Mother', name: 'Rashida Taher Tinwala' },
      { relation: 'Brother', name: 'Burhanuddin Taher Tinwala' },
    ],
  },
  {
    side: "Groom's Family",
    members: [
      { relation: 'Grandmother', name: 'Arwa Husain Shakir' },
      { relation: 'Mother', name: 'Tasneem Shabbir Shakir' },
      { relation: 'Father', name: 'Shabbir Husain Shakir' },
      { relation: 'Brother', name: 'Mustafa Shabbir Shakir' },
      { relation: 'Brother', name: 'Huzaifa Shabbir Shakir' },
    ],
  },
];

export const RSVP_CONTACTS = [
  {
    name: 'Taher Tinwala',
    relation: "Bride's Father",
    phone: '9408793430',
    formattedPhone: '+91 94087 93430',
    callAction: 'Call Taher',
    whatsappMessage: 'Salam / Hello Taher Bhai, regarding Alefiyah and Aliasgar\'s wedding RSVP:',
  },
  {
    name: 'Rashida Tinwala',
    relation: "Bride's Mother",
    phone: '9426188052',
    formattedPhone: '+91 94261 88052',
    callAction: 'Call Rashida',
    whatsappMessage: 'Salam / Hello Rashida Bhabhi, regarding Alefiyah and Aliasgar\'s wedding RSVP:',
  },
];

export const HOME_LOCATION = {
  title: 'Our Home',
  address: '201 Maimoon Apartment, Sadar Bazar, Rajkot',
  city: 'Rajkot, Gujarat',
  directionsUrl: 'https://share.google/rSs5HQDFTbsrz5eBF',
  note: 'Family residence for visiting and warm welcomes',
};
