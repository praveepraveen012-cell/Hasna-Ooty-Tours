export const PACKAGES = [
  {
    id: 'ooty-classic-sightseeing-full-day',
    slug: 'ooty-classic-sightseeing-full-day',
    title: 'Ooty Classic Sightseeing Tour',
    destination: 'Ooty',
    duration: 'Full-Day',
    daysCount: 1,
    tourType: 'Private Car Sightseeing',
    badge: 'Bestseller',
    rating: 4.9,
    reviewCount: 340,
    image: '/images/ooty-tours.jpg',
    gallery: [
      '/images/ooty-tours.jpg',
      '/images/Ooty-Lake.png',
      '/images/Botanical-Garden-1.png',
      '/images/Doddabetta.png',
      '/images/Rose-Garden.jpg',
      '/images/Tea-Factory.png',
    ],
    shortDescription: 'Explore the Queen of Hill Stations in the comfort of a dedicated private car with a courteous local driver.',
    overview: 'Discover the breathtaking beauty of Ooty with our exclusive private car sightseeing tour. From tranquil boating in Ooty Lake to panoramic views from Doddabetta Peak, our expert local driver ensures a hassle-free, flexible, and memorable journey through the lush green valleys of the Nilgiris.',
    sightseeingHighlights: [
      'Ooty Lake & Boathouse',
      'Botanical Garden',
      'Doddabetta Peak',
      'Rose Garden',
      'Tea Factory & Museum',
      'Chocolate Factory',
      'Needle Rock Viewpoint'
    ],
    placesCovered: [
      { name: 'Ooty Lake & Boathouse', desc: 'Serene artificial lake built in 1824, ideal for scenic pedal boating and leisure walking.', img: '/images/Ooty-Lake.png' },
      { name: 'Botanical Garden', desc: 'Sprawling 55-acre terraced garden featuring over 650 species of exotic trees, ferns, and bonsai.', img: '/images/Botanical-Garden-1.png' },
      { name: 'Doddabetta Peak', desc: 'Highest mountain in the Nilgiri hills (2,637 m) offering 360-degree views of the valleys.', img: '/images/Doddabetta.png' },
      { name: 'Government Rose Garden', desc: 'One of the largest rose collections in India with more than 20,000 varieties blooming across terraces.', img: '/images/Rose-Garden.jpg' },
      { name: 'Tea Factory & Museum', desc: 'Live demonstration of Nilgiri orthodox CTC tea manufacturing and fresh tea tasting.', img: '/images/Tea-Factory.png' },
      { name: 'Chocolate Factory', desc: 'Watch artisanal handmade chocolates crafted and sample genuine Nilgiri cocoa delicacies.', img: '/images/Chocolate-Factory.jpg' }
    ],
    vehicleOptions: ['Swift Dzire (5 Seater)', 'Toyota Etios (5 Seater)', 'Toyota Innova (7 Seater)', 'Innova Crysta (7 Seater)'],
    itinerary: [
      {
        day: 'Morning (09:00 AM - 01:00 PM)',
        title: 'Lake Boating, Botanical Greens & Rose Fragrance',
        details: 'Pickup from your hotel or Ooty Bus Stand in a sanitized private car. Visit Ooty Lake for refreshing boating, stroll through the historic Botanical Garden, and explore the enchanting terraced Rose Garden.'
      },
      {
        day: 'Afternoon (01:00 PM - 03:30 PM)',
        title: 'Local Lunch & Doddabetta Valley Vista',
        details: 'Enjoy lunch at an authentic Nilgiri restaurant. Drive up to Doddabetta Peak, the highest summit in the Nilgiris, to take in breathtaking views from the telescope house.'
      },
      {
        day: 'Evening (03:30 PM - 06:30 PM)',
        title: 'Tea Factory Tour, Nilgiri Chocolates & Drop',
        details: 'Immerse your senses at the Tea Factory and Tea Museum with tea tasting, followed by local handmade chocolate shopping. Comfortable drop-off back at your hotel or pickup spot.'
      }
    ],
    inclusions: [
      'Dedicated private car for the entire tour',
      'Experienced local chauffeur familiar with Nilgiri routes',
      'Fuel charges, driver allowances, toll fees & car parking fees',
      'Pickup and drop-off from your hotel/stay in Ooty',
      'Flexible sightseeing schedule at each attraction'
    ],
    exclusions: [
      'Entry tickets to monuments, gardens, and boathouse activities',
      'Personal expenses, snacks, and meals',
      'Anything not explicitly mentioned in inclusions'
    ],
    pickupLocations: ['Ooty Town Hotels & Resorts', 'Ooty Central Bus Stand', 'Ooty Railway Station', 'Custom local addresses'],
    featured: true
  },
  {
    id: 'ooty-family-tour-3d2n',
    slug: 'ooty-family-tour-3d2n',
    title: 'Ooty Family Tour Package',
    destination: 'Ooty',
    duration: '3 Days / 2 Nights',
    daysCount: 3,
    tourType: 'Family Tour Packages',
    badge: 'Family Favorite',
    rating: 4.9,
    reviewCount: 215,
    image: '/images/ooty3.png',
    gallery: [
      '/images/ooty3.png',
      '/images/pykara.jpg',
      '/images/Avalanche-Lake.jpg',
      '/images/Botanical-Garden-1.png',
      '/images/Ooty-Lake.png',
    ],
    shortDescription: 'The perfect 3-day family getaway covering iconic Ooty landmarks, Pykara waterfalls, and picturesque valley lakes.',
    overview: 'Looking for a relaxing, family-friendly hill station vacation? Our 3 Days / 2 Nights Ooty Family Tour is designed for all age groups. Enjoy private car travel, leisurely visits to Ooty Lake, Pykara Waterfalls, Botanical Garden, tea estates, and family-friendly viewpoints.',
    sightseeingHighlights: [
      'Ooty Lake – Family Boating & Leisure Walk',
      'Botanical Garden – Explore Nature’s Flora',
      'Doddabetta Peak – Panoramic Mountain View',
      'Rose Garden – Relaxing Terraced Gardens',
      'Pykara Waterfalls & Lake – Fun Family Picnic',
      'Tea Factory & Museum – Tea Tasting for the Family',
      'Pine Forest & Shooting Spot'
    ],
    placesCovered: [
      { name: 'Ooty Lake', desc: 'Tranquil water body perfect for family boat rides.', img: '/images/Ooty-Lake.png' },
      { name: 'Pykara Falls & Lake', desc: 'Gentle cascades through pine glades and thrilling speedboat rides.', img: '/images/pykara.jpg' },
      { name: 'Doddabetta Peak', desc: 'Nilgiris highest vantage point with telescope house.', img: '/images/Doddabetta.png' },
      { name: 'Avalanche Lake', desc: 'Untouched scenic lake surrounded by rolling shoals.', img: '/images/Avalanche-Lake.jpg' },
      { name: 'Tea Factory & Museum', desc: 'Interactive factory visit showcasing orthodox tea leaves.', img: '/images/Tea-Factory.png' },
      { name: 'Needle Rock Viewpoint', desc: 'Spectacular 360-degree landscape overlooking Gudalur valley.', img: '/images/Needle-Rock-Viewpoint.jpg' }
    ],
    vehicleOptions: ['Innova Crysta (7 Seater)', 'Toyota Innova (7 Seater)', 'Swift Dzire (5 Seater)', 'Toyota Etios (5 Seater)'],
    itinerary: [
      {
        day: 'Day 1: Arrival & Classic Ooty Sightseeing',
        title: 'Warm Welcome, Ooty Lake & Botanical Gardens',
        details: 'Pickup from Ooty or Coimbatore. Check into your accommodation. In the afternoon, visit Ooty Lake for boat rides and pony rides, then walk the lush paths of Government Botanical Garden and Rose Garden. Evening free for local market stroll.'
      },
      {
        day: 'Day 2: High Peaks, Tea Experience & Coonoor Gateway',
        title: 'Doddabetta Peak, Tea Factory & Heritage Views',
        details: 'Morning drive to Doddabetta Peak for sweeping vistas. Visit the authentic Tea Factory & Museum for live tea preparation and tea tasting. Proceed toward Coonoor or scenic outskirts for afternoon tea gardens and valley viewpoints.'
      },
      {
        day: 'Day 3: Pykara Waterfalls, Pine Glades & Departure',
        title: 'Pykara Waterfalls, Shooting Point & Homeward Journey',
        details: 'Drive across the Wenlock Downs golf meadows to Pykara Waterfalls and Lake. Enjoy speedboating on Pykara Lake and pine forest strolls. Evening drop-off at Ooty, Mettupalayam, or Coimbatore.'
      }
    ],
    inclusions: [
      'Private air-conditioned car with dedicated chauffeur for all 3 days',
      'Complete fuel, inter-district road taxes, toll charges & parking fees',
      'Assistance with verified family-friendly hotel / resort bookings upon request',
      'Pickup and drop-off from Ooty / Coimbatore / Mettupalayam',
      'Sightseeing itinerary adapted comfortably for elders and kids'
    ],
    exclusions: [
      'Boating charges and attraction entry tickets',
      'Personal food, beverages, and laundry expenses',
      'Hotel stays unless added as an assisted package'
    ],
    pickupLocations: ['Ooty', 'Coimbatore Airport / Railway Station', 'Mettupalayam Station', 'Mysore'],
    featured: true
  },
  {
    id: 'ooty-honeymoon-couple-retreat-3d2n',
    slug: 'ooty-honeymoon-couple-retreat-3d2n',
    title: 'Ooty Romantic Honeymoon Package',
    destination: 'Ooty',
    duration: '3 Days / 2 Nights',
    daysCount: 3,
    tourType: 'Honeymoon Packages',
    badge: 'Romantic Choice',
    rating: 5.0,
    reviewCount: 184,
    image: '/images/Avalanche-Lake.jpg',
    gallery: [
      '/images/Avalanche-Lake.jpg',
      '/images/ooty-tours.jpg',
      '/images/Rose-Garden.jpg',
      '/images/pykara.jpg',
      '/images/kunnur.jpg',
    ],
    shortDescription: 'Cherish every moment together with misty hill viewpoints, quiet couple boat rides, and private scenic chauffeur drives.',
    overview: 'Start your new journey together with a romantic and blissful honeymoon tour! Hasna Ooty Tours crafts intimate, serene journeys designed with privacy and luxury in mind. Experience misty mornings, private rides through pine glades, sunset viewpoints at Doddabetta, and peaceful lakes.',
    sightseeingHighlights: [
      'Ooty Lake – Private Boating for Two',
      'Rose Garden – Romantic Terraced Floral Walk',
      'Botanical Garden – Scenic Walks Hand in Hand',
      'Doddabetta Peak – Romantic Sunset Viewpoint',
      'Tea Factory & Museum – Nilgiri Tea Tasting',
      'Pykara Waterfalls & Lake – Serene Picnic Haven',
      'Scenic Photoshoot Locations in Pine Forest'
    ],
    placesCovered: [
      { name: 'Avalanche Sanctuary Lake', desc: 'Tranquil emerald waters fringed by orchids and magnolias.', img: '/images/Avalanche-Lake.jpg' },
      { name: 'Ooty Lake Boathouse', desc: 'Private row and pedal boating for couples under gentle mist.', img: '/images/Ooty-Lake.png' },
      { name: 'Government Rose Garden', desc: 'Over 20,000 fragrant rose bushes blooming in tiered arches.', img: '/images/Rose-Garden.jpg' },
      { name: 'Pykara Lake & Falls', desc: 'Picturesque waterfalls surrounded by dense shola woodland.', img: '/images/pykara.jpg' },
      { name: 'Doddabetta Summit', desc: 'Watch golden clouds drift across the Nilgiri hills.', img: '/images/Doddabetta.png' }
    ],
    vehicleOptions: ['Innova Crysta (7 Seater Luxury)', 'Toyota Etios (5 Seater Sedan)', 'Swift Dzire (5 Seater Sedan)'],
    itinerary: [
      {
        day: 'Day 1: Misty Welcome & Romance in Ooty',
        title: 'Private Chauffeur Pickup & Sunset Boating',
        details: 'Arrive in Ooty or Coimbatore. Travel in your private executive sedan to Ooty. Check-in and relax. Afternoon private boating at Ooty Lake followed by a leisurely walk through the colourful Rose Garden.'
      },
      {
        day: 'Day 2: Tea Gardens, Nilgiri Peaks & Scenic Photography',
        title: 'Doddabetta Sunset, Tea Estates & Mountain Breezes',
        details: 'Morning drive to Doddabetta Peak for sweeping valley views. Visit a lush tea garden for couple photoshoots, followed by artisanal chocolate tasting and evening relaxation.'
      },
      {
        day: 'Day 3: Pykara Waterfalls, Pine Forest Romance & Drop',
        title: 'Pine Glades, Pykara Speedboat & Departure',
        details: 'Explore the tall pine forests and gentle cascades of Pykara. Enjoy quiet moments by the lake before an easy private drop-off at your departure station or airport.'
      }
    ],
    inclusions: [
      'Executive private car exclusively dedicated to the couple',
      'Polite, discreet, and experienced local chauffeur',
      'All toll fees, fuel, inter-state taxes, and vehicle parking charges',
      'Assistance with romantic resort setups / flower beds upon request',
      'Flexibility for private couple photoshoots at picturesque halts'
    ],
    exclusions: [
      'Entry tickets, special boathouse reservations',
      'Meals and personal indulgences',
      'Hotel tariff unless booked as an all-inclusive assisted package'
    ],
    pickupLocations: ['Coimbatore Airport', 'Coimbatore Junction', 'Ooty Hotel', 'Mettupalayam Railway Station'],
    featured: true
  },
  {
    id: 'kodaikanal-misty-hills-3d2n',
    slug: 'kodaikanal-misty-hills-3d2n',
    title: 'Kodaikanal Tour Package – Princess of Hills',
    destination: 'Kodaikanal',
    duration: '3 Days / 2 Nights',
    daysCount: 3,
    tourType: 'Family Tour Packages',
    badge: 'Popular',
    rating: 4.8,
    reviewCount: 195,
    image: '/images/Kodaikanal-Lake-Boating.jpg',
    gallery: [
      '/images/Kodaikanal-Lake-Boating.jpg',
      '/images/Coakers-Walk.png',
      '/images/Bryant-Park.jpg',
      '/images/Silver-Cascade-Waterfalls.png',
      '/images/Pillar-Rocks.jpg',
      '/images/Pine-Forest.jpg',
      '/images/Guna-Caves.png',
    ],
    shortDescription: 'Escape to the misty hills of Kodaikanal: star-shaped lake, Coaker’s Walk, Pillar Rocks, and pine forests.',
    overview: 'Nestled in the Palani Hills of the Western Ghats, Kodaikanal is the quintessential retreat for nature lovers, honeymooners, and adventure seekers. With Hasna Ooty Tours, enjoy a seamless and comfortable journey in a private car exploring lakes, waterfalls, dense forests, and panoramic viewpoints.',
    sightseeingHighlights: [
      'Kodaikanal Lake & Boating',
      'Coaker’s Walk – 1 km Valley Promenade',
      'Bryant Park – Heritage Botanical Garden',
      'Silver Cascade Waterfalls',
      'Pillar Rocks – 400 ft Granite Cliffs',
      'Green Valley View (Suicide Point)',
      'Pine Forest – Scenic Photoshoot',
      'Guna Caves (Devil’s Kitchen)',
      'Dolphin’s Nose & Echo Rock'
    ],
    placesCovered: [
      { name: 'Kodaikanal Lake', desc: 'Star-shaped lake surrounded by weeping willows, cycling paths, and boat clubs.', img: '/images/Kodaikanal-Lake-Boating.jpg' },
      { name: 'Coaker’s Walk', desc: 'Paved pedestrian path running along the steep mountain edge with valley clouds.', img: '/images/Coakers-Walk.png' },
      { name: 'Bryant Park', desc: 'Manicured botanical park renowned for rose beds, glasshouses, and flowers.', img: '/images/Bryant-Park.jpg' },
      { name: 'Pillar Rocks', desc: 'Three towering vertical granite boulders standing 122 meters high.', img: '/images/Pillar-Rocks.jpg' },
      { name: 'Silver Cascade Waterfalls', desc: 'Rushing 180-foot waterfall formed from Kodai Lake overflow.', img: '/images/Silver-Cascade-Waterfalls.png' },
      { name: 'Pine Forest', desc: 'Atmospheric pine woods planted in the early 20th century.', img: '/images/Pine-Forest.jpg' }
    ],
    vehicleOptions: ['Toyota Innova (7 Seater)', 'Innova Crysta (7 Seater)', 'Swift Dzire (5 Seater)', 'Toyota Etios (5 Seater)'],
    itinerary: [
      {
        day: 'Day 1: Arrival & Kodai Lakeside Stroll',
        title: 'Check-in, Silver Cascade & Kodai Lake',
        details: 'Chauffeur pickup from Madurai, Dindigul, or Coimbatore. Stop by Silver Cascade Waterfalls on the ascent. Check into resort. Evening relaxing boating and horse riding around Kodaikanal Lake.'
      },
      {
        day: 'Day 2: Coaker’s Walk, Pillar Rocks & Pine Woods',
        title: 'Valley Promenades, Granite Cliffs & Guna Caves',
        details: 'Morning stroll along Coaker’s Walk and Bryant Park. Proceed to the magnificent Pillar Rocks, Green Valley View, Guna Caves, and scenic walk among the tall pine trees.'
      },
      {
        day: 'Day 3: Dolphin’s Nose, Kurinji Temple & Departure',
        title: 'Echo Rock, Local Homemade Chocolate & Drop',
        details: 'Visit Dolphin’s Nose for adventurous cliff views and Kurinji Andavar Temple. Shop for Kodai eucalyptus oil and homemade chocolates before comfortable transfer back.'
      }
    ],
    inclusions: [
      'Private dedicated vehicle for all 3 days with experienced mountain driver',
      'All toll taxes, parking fees, driver food/stay charges, and fuel',
      'Pickup and drop from Coimbatore, Madurai, or Kodai Road',
      'Customized stops for valley viewpoints and photography'
    ],
    exclusions: [
      'Entry tickets, camera fees, boating & horse riding charges',
      'Personal food, drinks, and shopping'
    ],
    pickupLocations: ['Madurai Airport / Station', 'Coimbatore Airport / Station', 'Kodai Road Station', 'Ooty Hotel'],
    featured: true
  },
  {
    id: 'coorg-scotland-of-india-3d2n',
    slug: 'coorg-scotland-of-india-3d2n',
    title: 'Coorg Tour Package – Scotland of India',
    destination: 'Coorg',
    duration: '3 Days / 2 Nights',
    daysCount: 3,
    tourType: 'Customized Tour Packages',
    badge: 'Scenic Pick',
    rating: 4.9,
    reviewCount: 168,
    image: '/images/Coffee-Estate-Walk.png',
    gallery: [
      '/images/Coffee-Estate-Walk.png',
      '/images/Abbey-Falls.jpg',
      '/images/Rajas-Seat.png',
      '/images/Dubare-Elephant-Camp.jpg',
      '/images/Golden-Temple-Tibetan-Monastery.jpg',
      '/images/Madikeri-Fort-Museum.jpg',
      '/images/Omkareshwara-Temple.jpg',
    ],
    shortDescription: 'Explore the serene coffee estates of Coorg, Abbey Falls, Dubare Elephant Camp, and Tibetan Golden Temple.',
    overview: 'Coorg (Kodagu), also known as the Scotland of India, is a paradise for nature lovers, adventure seekers, and coffee enthusiasts. With Hasna Ooty Tours, enjoy a private car tour through misty mountains, lush coffee plantations, gushing waterfalls, and peaceful monasteries.',
    sightseeingHighlights: [
      'Abbey Falls – Rushing Forest Cascade',
      'Raja’s Seat – Panoramic Sunset Viewpoint',
      'Madikeri Fort & Museum',
      'Omkareshwara Temple – Islamic & Gothic Architecture',
      'Coffee Estate Guided Plantation Walk',
      'Dubare Elephant Camp – River Cauvery',
      'Nisargadhama Forest Park & Bamboo Groves',
      'Golden Temple (Namdroling Tibetan Monastery)',
      'Chiklihole Dam & Iruppu Falls'
    ],
    placesCovered: [
      { name: 'Abbey Falls', desc: 'Stunning 70-foot waterfall tumbling down amidst spice and coffee estates.', img: '/images/Abbey-Falls.jpg' },
      { name: 'Raja’s Seat', desc: 'Historic garden pavilion where Kodagu kings watched sunset over layered valleys.', img: '/images/Rajas-Seat.png' },
      { name: 'Dubare Elephant Camp', desc: 'Interact with and observe elephants on the banks of the sacred Cauvery River.', img: '/images/Dubare-Elephant-Camp.jpg' },
      { name: 'Golden Temple (Bylakuppe)', desc: 'Magnificent Tibetan Buddhist monastery featuring 40-foot gilded statues.', img: '/images/Golden-Temple-Tibetan-Monastery.jpg' },
      { name: 'Madikeri Fort & Museum', desc: '17th-century palace fort in the heart of Madikeri town.', img: '/images/Madikeri-Fort-Museum.jpg' }
    ],
    vehicleOptions: ['Innova Crysta (7 Seater)', 'Toyota Innova (7 Seater)', 'Swift Dzire (5 Seater)', 'Toyota Etios (5 Seater)'],
    itinerary: [
      {
        day: 'Day 1: Bylakuppe Monastery & Madikeri Sunset',
        title: 'Golden Temple, Nisargadhama & Raja’s Seat',
        details: 'Pickup from Mysore, Mangalore, or Ooty. Visit the world-famous Tibetan Golden Temple in Bylakuppe, followed by bamboo walking at Nisargadhama. Check-in at Madikeri and watch the sunset at Raja’s Seat.'
      },
      {
        day: 'Day 2: Waterfalls, Coffee Aromas & Elephants',
        title: 'Dubare Elephant Camp, Abbey Falls & Coffee Estate Walk',
        details: 'Morning excursion to Dubare Elephant Camp for river crossing and elephant activities. Next, visit Abbey Falls and take a guided coffee and pepper plantation walking tour.'
      },
      {
        day: 'Day 3: Omkareshwara Temple, Fort & Return',
        title: 'Madikeri Fort, Omkareshwara & Drop-off',
        details: 'Visit Omkareshwara Temple and Madikeri Fort. Sample authentic Coorg honey and homemade chocolates before a scenic drive back to your destination.'
      }
    ],
    inclusions: [
      'All 3 days private vehicle with verified driver experienced in Ghats',
      'State permits, tolls, car parking, driver allowances, and fuel included',
      'Flexible sightseeing timings and local spice plantation guidance',
      'Pickup and drop from Mysore / Bangalore / Mangalore / Ooty'
    ],
    exclusions: [
      'Entry tickets, river rafting, and elephant interaction fees',
      'Food, beverages, and personal purchases'
    ],
    pickupLocations: ['Mysore Railway Station / Airport', 'Bangalore Airport', 'Mangalore', 'Ooty'],
    featured: true
  },
  {
    id: 'mysore-royal-heritage-2d1n',
    slug: 'mysore-royal-heritage-2d1n',
    title: 'Mysore Royal Heritage Tour Package',
    destination: 'Mysore',
    duration: '2 Days / 1 Night',
    daysCount: 2,
    tourType: 'Family Tour Packages',
    badge: 'Heritage Choice',
    rating: 4.8,
    reviewCount: 142,
    image: '/images/Mysore-Palace.jpg',
    gallery: [
      '/images/Mysore-Palace.jpg',
      '/images/Brindavan-Gardens-.jpg',
      '/images/Chamundi-Hills-scaled.jpg',
      '/images/St.-Philomenas-Church.jpg',
      '/images/Mysore-Zoo.jpg',
      '/images/KRS-Dam.png',
      '/images/Ranganathittu-Bird-Sanctuary.jpg',
    ],
    shortDescription: 'Experience the grandeur of the City of Palaces, Chamundi Hills, Brindavan Gardens, and historic royal monuments.',
    overview: 'Mysore, the City of Palaces, is famous for its rich cultural heritage, grand royal palaces, magnificent temples, and lush illuminated gardens. Travel in style and comfort with our private car tour services from Ooty, Bangalore, or Mysore city.',
    sightseeingHighlights: [
      'Mysore Palace (Amba Vilas) & Illuminations',
      'Chamundi Hills & Sri Chamundeshwari Temple',
      'St. Philomena’s Neo-Gothic Church',
      'Sri Chamarajendra Zoological Gardens (Mysore Zoo)',
      'Brindavan Gardens & Musical Dancing Fountain',
      'KRS (Krishna Raja Sagara) Dam',
      'Ranganathittu Bird Sanctuary – Cauvery Boat Safari',
      'Mysore Sand Sculpture Museum'
    ],
    placesCovered: [
      { name: 'Mysore Palace', desc: 'Indo-Saracenic architectural masterpiece adorned with stained glass and carved wood.', img: '/images/Mysore-Palace.jpg' },
      { name: 'Brindavan Gardens', desc: 'Terraced ornamental gardens famous for evening illuminated fountains.', img: '/images/Brindavan-Gardens-.jpg' },
      { name: 'Chamundi Hills', desc: 'Ancient hilltop temple perched 1,000 meters high overlooking Mysore.', img: '/images/Chamundi-Hills-scaled.jpg' },
      { name: 'St. Philomena’s Cathedral', desc: 'Towering twin spires built in 1936 inspired by Cologne Cathedral.', img: '/images/St.-Philomenas-Church.jpg' },
      { name: 'Mysore Zoo', desc: 'One of the oldest and best-kept zoological gardens in India.', img: '/images/Mysore-Zoo.jpg' }
    ],
    vehicleOptions: ['Toyota Innova (7 Seater)', 'Innova Crysta (7 Seater)', 'Toyota Etios (5 Seater)', 'Swift Dzire (5 Seater)'],
    itinerary: [
      {
        day: 'Day 1: Chamundi Hills, Grand Palace & Brindavan Fountains',
        title: 'Spiritual Summit, Royal Court & Evening Lights',
        details: 'Pickup from Ooty, Bangalore, or Mysore station. Drive up Chamundi Hills to seek blessings. Check-in. In the afternoon, tour the majestic Mysore Palace. Evening visit to Brindavan Gardens for the musical fountain show.'
      },
      {
        day: 'Day 2: Zoo, Neo-Gothic Church & Bird Sanctuary',
        title: 'Wildlife, St. Philomena’s & Departure',
        details: 'Morning visit to Mysore Zoo and St. Philomena’s Church. Afternoon trip to Ranganathittu Bird Sanctuary for a boat ride among migratory birds before return transfer.'
      }
    ],
    inclusions: [
      'Private air-conditioned car with driver for both days',
      'Driver allowances, parking, tolls, and inter-state tax (if traveling from Ooty)',
      'Pickup and drop from Mysore, Ooty, or Bangalore'
    ],
    exclusions: [
      'Palace entry, camera fees, and musical fountain tickets',
      'Hotel stay unless arranged upon request'
    ],
    pickupLocations: ['Mysore Railway Station', 'Ooty Hotel', 'Bangalore Airport', 'Coimbatore'],
    featured: false
  },
  {
    id: 'wayanad-nature-paradise-3d2n',
    slug: 'wayanad-nature-paradise-3d2n',
    title: 'Wayanad Tour Package – Nature’s Paradise',
    destination: 'Wayanad',
    duration: '3 Days / 2 Nights',
    daysCount: 3,
    tourType: 'Private Car Sightseeing',
    badge: 'Nature Lover',
    rating: 4.9,
    reviewCount: 153,
    image: '/images/Wayanad-Tea-Estates-Tour.jpg',
    gallery: [
      '/images/Wayanad-Tea-Estates-Tour.jpg',
      '/images/Banasura-Sagar-Dam.png',
      '/images/Soochipara-Waterfalls.jpg',
      '/images/Edakkal-Caves.jpg',
      '/images/Pookode-Lake.jpg',
      '/images/Chembra-Peak.jpg',
      '/images/Muthanga-Wildlife-Sanctuary.jpg',
      '/images/Karapuzha-Dam.jpg',
    ],
    shortDescription: 'Lush tea estates, Edakkal caves, Banasura Sagar earthen dam, Soochipara falls, and Muthanga wildlife safari.',
    overview: 'Wayanad, a breathtaking hill station in Kerala, is known for its lush green landscapes, misty mountains, dense forests, waterfalls, and rich wildlife. Travel in total comfort with our private car tour services connecting Ooty, Calicut, and Bangalore.',
    sightseeingHighlights: [
      'Edakkal Caves – Prehistoric Neolithic Petroglyphs',
      'Pookode Lake – Freshwater Lake with Pedal Boating',
      'Soochipara Waterfalls (Sentinel Rock Waterfalls)',
      'Banasura Sagar Dam – Largest Earth Dam in India',
      'Karapuzha Dam – Scenic Waterway & Gardens',
      'Chembra Peak Heart-Shaped Lake View',
      'Muthanga Wildlife Sanctuary – Kerala Jungle Safari',
      'Wayanad Tea & Spice Estates Tour'
    ],
    placesCovered: [
      { name: 'Banasura Sagar Dam', desc: 'Largest earthen dam in India, set against the Banasura hills.', img: '/images/Banasura-Sagar-Dam.png' },
      { name: 'Edakkal Caves', desc: 'Ancient stone age rock carvings etched 1,200 meters above sea level.', img: '/images/Edakkal-Caves.jpg' },
      { name: 'Soochipara Waterfalls', desc: 'Three-tiered waterfall cascading down sheer rock faces.', img: '/images/Soochipara-Waterfalls.jpg' },
      { name: 'Pookode Lake', desc: 'Natural freshwater lake fringed by dense evergreen forests.', img: '/images/Pookode-Lake.jpg' },
      { name: 'Wayanad Tea Estates', desc: 'Endless rolling emerald tea plantations and spice farms.', img: '/images/Wayanad-Tea-Estates-Tour.jpg' }
    ],
    vehicleOptions: ['Innova Crysta (7 Seater)', 'Toyota Innova (7 Seater)', 'Toyota Etios (5 Seater)', 'Swift Dzire (5 Seater)'],
    itinerary: [
      {
        day: 'Day 1: Enroute Ghat View & Pookode Lake',
        title: 'Lakkidi Viewpoint, Pookode Lake & Spice Farms',
        details: 'Pickup from Calicut, Mysore, or Ooty. Pass the famous Thamarassery Churam ghats. Visit Lakkidi View Point and enjoy boating on Pookode Lake. Check into your resort.'
      },
      {
        day: 'Day 2: Banasura Dam, Waterfalls & Tea Estates',
        title: 'Banasura Sagar Dam, Soochipara Falls & Tea Tour',
        details: 'Morning speedboat ride at Banasura Sagar Dam. Proceed to the invigorating Soochipara Waterfalls. Afternoon tea estate plantation visit with tea tasting.'
      },
      {
        day: 'Day 3: Prehistoric Caves & Muthanga Wildlife',
        title: 'Edakkal Caves & Wildlife Sanctuary Safari',
        details: 'Climb up to the fascinating Edakkal Caves to observe prehistoric engravings. Afternoon wildlife jeep safari in Muthanga Wildlife Sanctuary before return drop.'
      }
    ],
    inclusions: [
      'Private air-conditioned car with seasoned hill driver',
      'Inter-state Kerala permit, tolls, parking, fuel, and driver allowances',
      'Doorstep pickup and drop from Ooty, Calicut Airport, or Mysore'
    ],
    exclusions: [
      'Safari jeep bookings, lake boating, and cave entrance fees',
      'Meals, resort tariff, and personal expenditures'
    ],
    pickupLocations: ['Calicut (Kozhikode) Airport / Station', 'Ooty Hotel', 'Mysore', 'Bangalore'],
    featured: true
  },
  {
    id: 'coimbatore-spiritual-heritage-full-day',
    slug: 'coimbatore-spiritual-heritage-full-day',
    title: 'Coimbatore Tour Package – Spiritual & Heritage',
    destination: 'Coimbatore',
    duration: 'Full-Day',
    daysCount: 1,
    tourType: 'Private Car Sightseeing',
    badge: 'Popular',
    rating: 4.8,
    reviewCount: 128,
    image: '/images/coimbatore.jpg',
    gallery: [
      '/images/coimbatore.jpg',
      '/images/Marudhamalai-Temple.jpg',
      '/images/Perur-Pateeswarar-Temple.jpg',
      '/images/Gedee-Car-Museum.jpg',
      '/images/VOC-Park.jpg',
      '/images/TNAU-Botanical-Garden.jpg',
      '/images/Kovai-Kutralam-Waterfalls.jpg',
      '/images/Aliyar-Dam.jpg',
      '/images/Monkey-Falls.jpg',
    ],
    shortDescription: 'Explore the Manchester of South India: Marudhamalai Temple, Perur Pateeswarar, Isha Adiyogi, and Gedee Car Museum.',
    overview: 'Coimbatore is a vibrant blend of cultural heritage, ancient spiritual landmarks, modern industry, and scenic foothills. Hasna Ooty Tours offers seamless private car sightseeing and airport transfer packages with professional drivers.',
    sightseeingHighlights: [
      'Marudhamalai Hill Temple (Lord Murugan)',
      'Perur Pateeswarar Temple – Historic Chola Architecture',
      'Isha Yoga Center & 112-ft Adiyogi Statue',
      'Gedee Car Museum – Vintage Classic Automobiles',
      'TNAU Botanical Garden & Glasshouse',
      'VOC Park & Mini Zoo',
      'Kovai Kutralam Waterfalls & Siruvani Gateway'
    ],
    placesCovered: [
      { name: 'Marudhamalai Temple', desc: '12th-century hill shrine set against the backdrop of the Western Ghats.', img: '/images/Marudhamalai-Temple.jpg' },
      { name: 'Perur Pateeswarar Temple', desc: 'Millennia-old temple with intricately carved pillars depicting dance poses of Shiva.', img: '/images/Perur-Pateeswarar-Temple.jpg' },
      { name: 'Gedee Car Museum', desc: 'Unique automobile museum featuring vintage cars from Germany, Britain, and America.', img: '/images/Gedee-Car-Museum.jpg' },
      { name: 'TNAU Botanical Garden', desc: 'Historic 300-acre agricultural university garden with rare flora.', img: '/images/TNAU-Botanical-Garden.jpg' },
      { name: 'Monkey Falls & Aliyar Dam', desc: 'Scenic waterfalls and dam located on the Pollachi-Valparai road.', img: '/images/Monkey-Falls.jpg' }
    ],
    vehicleOptions: ['Swift Dzire (5 Seater)', 'Toyota Etios (5 Seater)', 'Toyota Innova (7 Seater)', 'Innova Crysta (7 Seater)'],
    itinerary: [
      {
        day: 'Morning (08:30 AM - 12:30 PM)',
        title: 'Marudhamalai Hill Temple & Perur Pateeswarar',
        details: 'Pickup from Coimbatore Airport, Railway Station, or hotel. Visit the hilltop Marudhamalai Temple, followed by the ancient sculptured pillars of Perur Pateeswarar Temple.'
      },
      {
        day: 'Afternoon (12:30 PM - 04:00 PM)',
        title: 'Traditional Lunch & Gedee Car Museum',
        details: 'Enjoy traditional Kongunadu lunch. Explore the world-class Gedee Car Museum and TNAU Botanical Garden.'
      },
      {
        day: 'Evening (04:00 PM - 07:30 PM)',
        title: 'Isha Yoga Adiyogi & Drop-off',
        details: 'Drive to the majestic 112-ft Adiyogi statue at Isha Yoga Center for sunset viewing and the evening laser light and sound show. Drop-off at airport or hotel.'
      }
    ],
    inclusions: [
      'Dedicated AC car with chauffeur for the full day',
      'All parking, toll charges, fuel, and driver allowances',
      'Pickup and drop anywhere within Coimbatore city limits'
    ],
    exclusions: [
      'Special darshan tickets, museum entry passes',
      'Meals and personal purchases'
    ],
    pickupLocations: ['Coimbatore Airport (CJB)', 'Coimbatore Junction (CBE)', 'Gandhipuram', 'Peelamedu'],
    featured: false
  },
  {
    id: 'ooty-coonoor-twin-hills-2d1n',
    slug: 'ooty-coonoor-twin-hills-2d1n',
    title: 'Ooty & Coonoor Twin Hill Experience',
    destination: 'Coonoor',
    duration: '2 Days / 1 Night',
    daysCount: 2,
    tourType: 'Private Car Sightseeing',
    badge: 'Popular',
    rating: 4.9,
    reviewCount: 172,
    image: '/images/kunnur.jpg',
    gallery: [
      '/images/kunnur.jpg',
      '/images/ooty-tours.jpg',
      '/images/Tea-Factory.png',
      '/images/Doddabetta.png',
      '/images/Botanical-Garden-1.png',
    ],
    shortDescription: 'The ultimate Nilgiri combo: Ooty Lake, Doddabetta, Sim’s Park, Lamb’s Rock, and Dolphin’s Nose.',
    overview: 'Experience the best of both Nilgiri hill stations. Day 1 immerses you in Ooty’s signature gardens, tea factories, and lakes, while Day 2 whisks you through Coonoor’s misty tea estates, Sim’s Park, and high cliffs overlooking Catherine Falls.',
    sightseeingHighlights: [
      'Ooty Lake & Boathouse',
      'Botanical Garden & Rose Garden',
      'Doddabetta Peak Viewpoint',
      'Sim’s Park in Coonoor – Rare Botanical Species',
      'Lamb’s Rock – Sheer Cliff over Coimbatore Plains',
      'Dolphin’s Nose – Viewpoint overlooking Catherine Falls',
      'Tea Garden Walks & Orthodox Factory Tasting'
    ],
    placesCovered: [
      { name: 'Sim’s Park (Coonoor)', desc: 'Unusual hybrid botanical garden with rare trees and terraced slopes.', img: '/images/kunnur.jpg' },
      { name: 'Ooty Lake', desc: 'Classic pedal and motor boat rides surrounded by eucalyptus groves.', img: '/images/Ooty-Lake.png' },
      { name: 'Doddabetta Peak', desc: 'Highest Nilgiri elevation overlooking the blue hills.', img: '/images/Doddabetta.png' },
      { name: 'Tea Factory & Museum', desc: 'Detailed production overview and hot Nilgiri tea tasting.', img: '/images/Tea-Factory.png' }
    ],
    vehicleOptions: ['Innova Crysta (7 Seater)', 'Swift Dzire (5 Seater)', 'Toyota Innova (7 Seater)', 'Toyota Etios (5 Seater)'],
    itinerary: [
      {
        day: 'Day 1: Highlights of Ooty',
        title: 'Ooty Lake, Rose Garden & Doddabetta',
        details: 'Pickup from Ooty or Coimbatore. Visit Ooty Lake, Government Botanical Garden, and Rose Garden. Ascend Doddabetta Peak in the afternoon and finish with hot Nilgiri tea tasting.'
      },
      {
        day: 'Day 2: Coonoor Tea Estates & Clifftop Viewpoints',
        title: 'Sim’s Park, Lamb’s Rock & Dolphin’s Nose',
        details: 'Scenic morning drive to Coonoor. Stroll through the lush flora of Sim’s Park, capture dramatic photographs at Lamb’s Rock and Dolphin’s Nose. Return transfer in the evening.'
      }
    ],
    inclusions: [
      'Private car with chauffeur for both days',
      'All fuel, driver batta, tolls, and parking fees',
      'Pickup and drop from Ooty / Mettupalayam / Coimbatore'
    ],
    exclusions: ['Entry tickets, boating, food, and hotel accommodation'],
    pickupLocations: ['Ooty Hotel', 'Mettupalayam Station', 'Coimbatore Airport'],
    featured: true
  },
  {
    id: 'ooty-group-tour-adventure-3d2n',
    slug: 'ooty-group-tour-adventure-3d2n',
    title: 'Ooty Group Tour & Friends Trip',
    destination: 'Ooty',
    duration: '3 Days / 2 Nights',
    daysCount: 3,
    tourType: 'Group Tour Packages',
    badge: 'Group Special',
    rating: 4.8,
    reviewCount: 110,
    image: '/images/Mudumalai.jpg',
    gallery: [
      '/images/Mudumalai.jpg',
      '/images/pykara.jpg',
      '/images/Avalanche-Lake.jpg',
      '/images/ooty-tours.jpg',
    ],
    shortDescription: 'Spacious group and friends getaway in 7-seater Innova Crysta or Tempo Traveller: Pykara, Mudumalai safari, and scenic valley drives.',
    overview: 'Looking for an exciting group getaway? Whether it is a college friends reunion, office team outing, or large family gathering, our Group Tour Packages are designed for seamless group travel with maximum comfort in spacious vehicles.',
    sightseeingHighlights: [
      'Ooty Lake – Group Boating & Fun Contests',
      'Botanical Garden – Outdoor Nature Stroll',
      'Doddabetta Peak – Nilgiris Highest Summit',
      'Pykara Waterfalls – Group Picnic Spot',
      'Mudumalai Tiger Reserve – Wildlife Jungle Safari',
      'Shooting Spot / Pine Forest Walk'
    ],
    placesCovered: [
      { name: 'Mudumalai Tiger Reserve', desc: 'Jungle safari observing wild elephants, deer, and gaurs.', img: '/images/Mudumalai.jpg' },
      { name: 'Pykara Waterfalls & Lake', desc: 'Thrilling group speedboats and relaxing picnic grounds.', img: '/images/pykara.jpg' },
      { name: 'Ooty Lake', desc: 'Group pedal and motor boat rides.', img: '/images/Ooty-Lake.png' },
      { name: 'Avalanche Lake', desc: 'Offbeat nature trail with crystal water reflection.', img: '/images/Avalanche-Lake.jpg' }
    ],
    vehicleOptions: ['Innova Crysta (7 Seater)', 'Toyota Innova (7 Seater)', 'Tempo Traveller (12+1 Seater)'],
    itinerary: [
      {
        day: 'Day 1: Arrival & Classic Ooty Fun',
        title: 'Group Boating & Town Stroll',
        details: 'Group pickup in spacious Innova Crysta or Tempo Traveller. Ooty Lake boating, Botanical Garden, and evening camp relaxation.'
      },
      {
        day: 'Day 2: Mudumalai Safari & Pykara Waterfalls',
        title: 'Wildlife Safari & Speedboating',
        details: 'Descend through the 36 hairpin bends of Kalhatty to Mudumalai Sanctuary for a jungle safari. Return via Pykara Waterfalls for evening speedboating.'
      },
      {
        day: 'Day 3: Doddabetta, Tea Tasting & Return',
        title: 'Summit Views & Homemade Chocolate Shopping',
        details: 'Doddabetta Peak viewing, Tea Factory tour with hot sample sips, chocolate box shopping, and safe return drop.'
      }
    ],
    inclusions: [
      'Spacious group vehicle (Innova Crysta / Tempo Traveller) with dedicated driver',
      'All fuel, driver food/stay allowances, tolls, and inter-district permits',
      'Group luggage handling and flexible photo stops'
    ],
    exclusions: ['Safari tickets, boathouse fees, meals, and accommodations'],
    pickupLocations: ['Coimbatore Airport / Station', 'Mysore Station', 'Ooty Hotel', 'Bangalore'],
    featured: false
  },
  {
    id: 'pykara-mudumalai-nature-circuit-full-day',
    slug: 'pykara-mudumalai-nature-circuit-full-day',
    title: 'Pykara & Mudumalai Wildlife Circuit',
    destination: 'Mudumalai',
    duration: 'Full-Day',
    daysCount: 1,
    tourType: 'Private Car Sightseeing',
    badge: 'Adventure',
    rating: 4.9,
    reviewCount: 96,
    image: '/images/pykara.jpg',
    gallery: [
      '/images/pykara.jpg',
      '/images/Mudumalai.jpg',
      '/images/Needle-Rock-Viewpoint.jpg',
      '/images/Avalanche-Lake.jpg',
    ],
    shortDescription: 'Experience the thrilling Kalhatty Ghat road, Mudumalai jungle safari, and serene Pykara Lake speedboating.',
    overview: 'A thrilling full-day circuit departing from Ooty. Descend the dramatic 36 hairpin bends of Kalhatty Ghat to visit the Theppakadu Elephant Camp and Mudumalai Tiger Reserve, followed by a scenic drive to Pykara Lake and its roaring waterfalls.',
    sightseeingHighlights: [
      'Scenic Kalhatty Ghat Road (36 Hairpin Bends)',
      'Mudumalai National Park & Tiger Reserve',
      'Theppakadu Elephant Camp (Feed & Observe)',
      'Pykara Lake & Speedboat Ride',
      'Pykara Waterfalls & Pine Meadows',
      'Shooting Point / Wenlock Downs'
    ],
    placesCovered: [
      { name: 'Pykara Waterfalls', desc: 'Cascading river rapids surrounded by Nilgiri pines.', img: '/images/pykara.jpg' },
      { name: 'Mudumalai Tiger Reserve', desc: 'Thick teak and bamboo forests home to elephants, tigers, and leopards.', img: '/images/Mudumalai.jpg' },
      { name: 'Needle Rock Viewpoint', desc: 'Panoramic cliff overlooking the Mudumalai and Gudalur plains.', img: '/images/Needle-Rock-Viewpoint.jpg' }
    ],
    vehicleOptions: ['Innova Crysta (7 Seater)', 'Toyota Innova (7 Seater)', 'Swift Dzire (5 Seater)', 'Toyota Etios (5 Seater)'],
    itinerary: [
      {
        day: 'Morning (08:30 AM - 01:00 PM)',
        title: 'Kalhatty Ghats & Mudumalai Wildlife Safari',
        details: 'Depart Ooty via Kalhatty Ghats with sweeping views. Arrive at Theppakadu Elephant Camp and embark on the forest department jungle bus or jeep safari.'
      },
      {
        day: 'Afternoon (01:00 PM - 05:30 PM)',
        title: 'Pykara Lake Speedboating & Waterfalls',
        details: 'Enjoy lunch at Gudalur or Pykara. Head to Pykara Lake for an exhilarating speedboat ride and walk to Pykara Waterfalls.'
      },
      {
        day: 'Evening (05:30 PM - 07:00 PM)',
        title: 'Wenlock Downs Sunset & Return to Ooty',
        details: 'Stop at Wenlock Downs rolling meadows for golden hour photographs before returning to your Ooty hotel.'
      }
    ],
    inclusions: [
      'Private vehicle with experienced hill-terrain driver',
      'All fuel charges, tolls, parking, and driver allowance',
      'Hotel pickup and drop in Ooty'
    ],
    exclusions: ['Forest department safari tickets and lake boathouse fees', 'Lunch and personal expenses'],
    pickupLocations: ['Ooty Hotels and Resorts', 'Coonoor'],
    featured: false
  },
  {
    id: 'kotagiri-serene-excursion-full-day',
    slug: 'kotagiri-serene-excursion-full-day',
    title: 'Kotagiri Serene Tea Hills Excursion',
    destination: 'Kotagiri',
    duration: 'Full-Day',
    daysCount: 1,
    tourType: 'Customized Tour Packages',
    badge: 'Offbeat Haven',
    rating: 4.8,
    reviewCount: 78,
    image: '/images/kotagiri.png',
    gallery: [
      '/images/kotagiri.png',
      '/images/kunnur.jpg',
      '/images/Tea-Factory.png',
    ],
    shortDescription: 'Discover the quietest and oldest Nilgiri hill station: Kodanad Viewpoint, Catherine Falls, and pristine tea estates.',
    overview: 'Escape the crowds with our peaceful Kotagiri private car excursion. Known for having one of the best climates in the world, Kotagiri charms travelers with untouched tea trails, the sweeping drop of Catherine Falls, and the majestic Kodanad Viewpoint looking down into the Bhavani Sagar basin.',
    sightseeingHighlights: [
      'Kodanad Viewpoint (Rangawamy Pillar & Valley View)',
      'Catherine Waterfalls (Double-Cascading Falls)',
      'John Sullivan Memorial (Founder of Modern Ooty)',
      'Endless Tea Plantation Walking Trails',
      'Elk Falls & Shola Woods'
    ],
    placesCovered: [
      { name: 'Kotagiri Tea Estates', desc: 'Vast emerald carpets of tea with cool gentle breezes.', img: '/images/kotagiri.png' },
      { name: 'Sim’s Park Route', desc: 'Scenic connection between Coonoor and Kotagiri.', img: '/images/kunnur.jpg' }
    ],
    vehicleOptions: ['Swift Dzire (5 Seater)', 'Toyota Etios (5 Seater)', 'Innova Crysta (7 Seater)'],
    itinerary: [
      {
        day: 'Full-Day Tour (09:00 AM - 05:30 PM)',
        title: 'Kodanad Viewpoint, Catherine Falls & Tea Heritage',
        details: 'Morning pickup from Ooty. Drive along the scenic Kotagiri ridge road. Visit Kodanad Viewpoint for unmatched views of the Tamil Nadu and Karnataka borders. See Catherine Falls from Dolphin’s viewpoint and visit the John Sullivan Memorial before an easy evening drop.'
      }
    ],
    inclusions: [
      'Private car for full-day sightseeing with professional chauffeur',
      'Fuel, parking fees, and driver allowances included',
      'Pickup and drop from Ooty or Coonoor'
    ],
    exclusions: ['Entry tickets and personal lunch/refreshments'],
    pickupLocations: ['Ooty', 'Coonoor', 'Mettupalayam'],
    featured: false
  }
];

