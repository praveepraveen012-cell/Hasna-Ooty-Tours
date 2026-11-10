import { SITE_CONFIG } from '../config/site.js';

/**
 * Encodes and opens WhatsApp in a new tab with the given message
 */
export function openWhatsApp(message) {
  if (!message) return;
  const encoded = encodeURIComponent(message.trim());
  const url = `${SITE_CONFIG.whatsappBaseUrl}?text=${encoded}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Builds standard tour package booking enquiry message
 */
export function buildPackageBookingMessage({
  packageName = 'Custom Tour Package',
  destination = 'Ooty & Nilgiris',
  travelDate = 'Flexible / To be decided',
  travellers = '2 Adults',
  tourType = 'Sightseeing Tour',
  pickupLocation = 'Ooty / Coimbatore',
  vehiclePreference = 'Comfortable Private Car',
  notes = '',
}) {
  return `Hello Hasna Ooty Tours,
I am interested in booking the following tour package.

Package Name: ${packageName}
Destination: ${destination}
Travel Date: ${travelDate || 'Flexible'}
Number of Travellers: ${travellers || '2'}
Tour Type: ${tourType}
Pickup Location: ${pickupLocation || 'Ooty'}
Preferred Vehicle: ${vehiclePreference}
${notes ? `Additional Notes: ${notes}\n` : ''}
Please share the package details, availability and best price.

Thank you.`;
}

/**
 * Builds vehicle-specific car rental booking enquiry
 */
export function buildVehicleBookingMessage({
  vehicleName,
  seatingCapacity,
  travelDate = 'Flexible',
  destination = 'Ooty & Sightseeing',
  pickupLocation = 'Ooty / Coimbatore',
  duration = 'Full Day / Multiple Days',
  name = '',
}) {
  return `Hello Hasna Ooty Tours,
I would like to book a private vehicle for sightseeing / outstation travel.

Vehicle: ${vehicleName} (${seatingCapacity})
Destination / Route: ${destination}
Travel Date: ${travelDate || 'Flexible'}
Duration: ${duration}
Pickup Location: ${pickupLocation}
${name ? `Guest Name: ${name}\n` : ''}
Please share availability and the best all-inclusive rental rate.

Thank you.`;
}

/**
 * Builds Contact Us / General Enquiry message
 */
export function buildContactEnquiryMessage({
  name,
  mobile,
  email,
  destination,
  travelDate,
  travellers,
  pickupLocation,
  tourType,
  message,
}) {
  return `Hello Hasna Ooty Tours,
I have an enquiry regarding a tour booking:

Guest Name: ${name || 'Traveler'}
Mobile: ${mobile || 'Not provided'}
Email: ${email || 'Not provided'}
Destination: ${destination || 'Ooty'}
Travel Date: ${travelDate || 'Flexible'}
Number of Travellers: ${travellers || '2'}
Tour Type: ${tourType || 'Sightseeing'}
Pickup Location: ${pickupLocation || 'Ooty'}
${message ? `Enquiry / Message: ${message}\n` : ''}
Please share details, availability and the best quote.

Thank you.`;
}

