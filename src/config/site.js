import { assetUrl } from '../utils/assets.js';

export const SITE_CONFIG = {
  name: 'Hasna Ooty Tours',
  tagline: 'Your Trusted Partner for Scenic Car Tours in South India',
  phone: '+91 98948 61681',
  phoneCall: '+919894861681',
  whatsappNumber: '919894861681',
  whatsappBaseUrl: 'https://wa.me/919894861681',
  email: 'Imranisha9@gmail.com',
  address: 'Ooty, The Nilgiris, Tamil Nadu, India',
  locationDetails: 'Commercial Road / Main Town, Ooty, The Nilgiris - 643001',
  mapsUrl: 'https://maps.google.com/?q=Ooty+Nilgiris+Tamil+Nadu',
  hours: '24/7 Customer Support & Travel Desk',
  logos: {
    dark: assetUrl('/images/hasna-logo-transparent.png'),
    white: assetUrl('/images/hasna-logo-transparent.png'),
    fav: assetUrl('/images/hasna-logo-transparent.png'),
    original: assetUrl('/images/hasna-logo.jpg'),
  },
  navItems: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Tour Packages', path: '/tour-packages' },
    { label: 'Tour Type', path: '/tour-types' },
    { label: 'Contact Us', path: '/contact' },
  ],
  stats: [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Happy Travelers', value: '15,000+' },
    { label: 'Verified Cars', value: '100% Private' },
    { label: 'Hill Driving Safety', value: '100%' },
  ]
};
