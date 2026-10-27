// Contact details and links used across the site. Update these in one place.
export const site = {
  name: 'Jeff Sironi',
  location: 'Central Ohio',
  email: 'hello@jeffsironi.com',
  linkedin: 'https://www.linkedin.com/in/jeffsironi/',
  // Booking page for "Find a time". Leave empty to open an email instead.
  bookingUrl: 'https://calendar.app.google/X91jwJz8WVuU2aSUA',
};

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
