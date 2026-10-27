// Contact details and links used across the site. Update these in one place.
export const site = {
  name: 'Jeff Sironi',
  location: 'Central Ohio',
  email: 'hello@jeffsironi.com',
  linkedin: 'https://www.linkedin.com/in/jeffsironi/',
  // Paste a Cal.com, Calendly or Google Calendar booking link here.
  // Until then, "Find a time" opens an email instead.
  bookingUrl: '',
};

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
