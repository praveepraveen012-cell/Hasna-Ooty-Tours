import { assetUrl } from '../utils/assets.js';
export const VEHICLES = [
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Luxury SUV',
    seatingCapacity: '7 Seater',
    seatsNumber: 7,
    luggage: '4 Large Bags + Small Handbags',
    ac: true,
    image: assetUrl('/images/innova-crysta.png'),
    badge: 'Most Popular for Families & Groups',
    features: [
      '7 Seater Luxury Reclining Captain Seats',
      'High Ground Clearance for Hill Roads',
      'Dual Air Conditioning & Climate Control',
      'Smooth Suspension for Ghat Bends',
      'Spacious Boot for Luggage',
      'Sanitized Before Every Departure'
    ],
    idealFor: 'Families, Honeymoon Couples desiring extra luxury, and 5-6 guests traveling on long hill routes.',
    description: 'The Toyota Innova Crysta is our flagship premium vehicle offering unmatched comfort, superior cabin insulation, and plush seating for relaxed travel through Ooty, Kodaikanal, Coorg, and Wayanad.'
  },
  {
    id: 'innova',
    name: 'Toyota Innova',
    category: 'Spacious Family SUV',
    seatingCapacity: '7 Seater',
    seatsNumber: 7,
    luggage: '3 Large Bags + Backpacks',
    ac: true,
    image: assetUrl('/images/toyota-remove.png'),
    badge: 'Reliable Workhorse',
    features: [
      '7 Seater Capacity (Comfortable 6 Adults + 1 Child)',
      'Proven Nilgiri Mountain Climbing Power',
      'Generous Legroom across All Rows',
      'Powerful Front & Rear AC',
      'Wide Windows for Panoramic Sightseeing',
      'Expert Hill-Terrain Chauffeur'
    ],
    idealFor: 'Small groups, medium-sized families, and hill station excursions.',
    description: 'The classic Toyota Innova has earned its reputation across the Nilgiris as the most dependable and comfortable family SUV for mountain hairpin bends and scenic outstation trips.'
  },
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    category: 'Compact Executive Sedan',
    seatingCapacity: '5 Seater',
    seatsNumber: 5,
    luggage: '2 Large Trolleys + Handbags',
    ac: true,
    image: assetUrl('/images/swift.png'),
    badge: 'Best Value for Couples & Small Families',
    features: [
      '5 Seater (Driver + 4 Passengers)',
      'Smooth, Quiet Ride Quality',
      'Chilled Air Conditioning',
      'Easy Maneuverability in Busy Hill Stations',
      'Generous 378-Litre Boot Capacity',
      'Economical & Highly Fuel-Efficient'
    ],
    idealFor: 'Couples, solo travelers, and small families up to 3-4 passengers looking for budget-friendly comfort.',
    description: 'Swift Dzire combines elegant sedan comfort with agility on winding hill roads, making it the perfect pocket-friendly choice for local sightseeing and Coimbatore-Ooty transfers.'
  },
  {
    id: 'toyota-etios',
    name: 'Toyota Etios',
    category: 'Spacious Comfort Sedan',
    seatingCapacity: '5 Seater',
    seatsNumber: 5,
    luggage: '3 Large Trolleys + Daypacks',
    ac: true,
    image: assetUrl('/images/etios.png'),
    badge: 'Maximum Legroom & Boot Space',
    features: [
      '5 Seater with Best-in-Class Rear Seat Legroom',
      'Massive 592-Litre Luggage Trunk',
      'Plush, Wide Cushioning for Long Drives',
      'Effective Air Conditioning',
      'Sturdy Build Quality for Mountain Passes',
      'Professional Nilgiri Route Driver'
    ],
    idealFor: 'Airport transfers (Coimbatore to Ooty) and travelers carrying multiple large travel suitcases.',
    description: 'The Toyota Etios offers an exceptionally cavernous boot and remarkable rear-seat passenger room, making long intercity journeys between Coimbatore, Mysore, and Ooty effortless.'
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    category: 'Mini Coach / Group Van',
    seatingCapacity: '12+1 Seater',
    seatsNumber: 13,
    luggage: '10+ Large Bags',
    ac: true,
    image: assetUrl('/images/innova-crysta.png'), // fallback
    badge: 'Ultimate Choice for Large Groups',
    features: [
      '12+1 Pushback Reclining Seats',
      'Individual AC Vents & LED Lighting',
      'High Ceiling with Walk-Through Aisle',
      'Audio & Video Entertainment System',
      'Massive Rear Luggage Compartment',
      'Uniformly Trained Mountain Drivers'
    ],
    idealFor: 'Family reunions, corporate retreats, wedding parties, and friends groups.',
    description: 'When traveling in a group, keep everyone together with our sanitized, pushback-seat Tempo Travellers designed for group sightseeings in Ooty, Mysore, and Kodaikanal.'
  }
];

