# Hasna Ooty Tours – Premium Travel Booking Prototype

A completely redesigned, modern, and fully responsive travel booking website prototype for **Hasna Ooty Tours**, inspired by MakeMyTrip's holiday packages user experience while staying 100% faithful to Hasna Ooty Tours' authentic business identity, packages, fleet, and local Nilgiri heritage.

---

## 🌟 Key Features

1. **MakeMyTrip-Inspired UI/UX**:
   - Deep Forest Green (`#123D32`), Nature Green (`#2E765B`), Warm Orange (`#F59E45`), Crisp White (`#FFFFFF`), and Light Mint Backgrounds (`#F5F8F5`).
   - Sticky navigation bar with mobile hamburger drawer and quick WhatsApp CTA.
   - Hero section featuring genuine Ooty tea plantation photography, high-contrast overlay, and typography.
   - Interactive floating MakeMyTrip-style search widget (Destination, Travel Date, Number of Travellers, Tour Category, Pickup City).

2. **10 Authentic Destinations**:
   - Ooty, Coonoor, Kodaikanal, Coorg, Mysore, Wayanad, Coimbatore, Kotagiri, Pykara, Mudumalai.
   - Horizontally scrollable discovery carousel with zoom-on-hover cards.

3. **Complete Tour Package Listing & Dedicated Detail Pages**:
   - Filterable by Destination, Category, Duration (Full-Day vs. Multi-Day), and Keyword.
   - Sorting by Popularity, Rating, and Duration.
   - MakeMyTrip-style package cards with duration badges, vehicle info, and sightseeing chips.
   - Dedicated Package Detail page (`/tour-packages/:slug`) featuring:
     - Interactive photo gallery
     - Package overview & verified highlights
     - Places covered with photo cards
     - Day-wise detailed itinerary
     - Verified inclusions & exclusions
     - Vehicle fleet selector
     - Pre-filled WhatsApp booking form

4. **100% Functional WhatsApp Booking System**:
   - Central configuration in `src/config/site.js` & `src/utils/whatsapp.js`.
   - Number: `+91 98948 61681` (`https://wa.me/919894861681`).
   - Dynamically generated messages encoded with `encodeURIComponent()`.
   - In-page validation before redirecting to WhatsApp in a new tab.
   - Floating WhatsApp button with pulse indicator.
   - Mobile sticky bottom booking bar for instant mobile conversions.

5. **Vehicle Fleet Showcase**:
   - Toyota Innova Crysta (7 Seater Luxury)
   - Toyota Innova (7 Seater Family SUV)
   - Swift Dzire (5 Seater Sedan)
   - Toyota Etios (5 Seater Sedan)
   - Tempo Traveller (12+1 Seater Group Van)
   - "Book This Vehicle" button dynamically populating car details in WhatsApp.

6. **All 70 Original Website Assets Downloaded Locally**:
   - Every image from Hasna Ooty Tours' original website was archived locally into `public/images/`.
   - Zero broken image links or hotlinking failures.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested with Node.js 24)
- npm or pnpm

### Run Locally
```bash
# 1. Navigate to the project directory
cd hasna-ooty-tours

# 2. Install dependencies (if not already installed)
npm install

# 3. Start development server
npm run dev

# 4. Open in browser:
http://localhost:5173
```

Alternatively, from the root workspace:
```bash
npm run hasna
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
hasna-ooty-tours/
├── public/
│   └── images/              # All original Hasna Ooty Tours images (cars, spots, logos)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky navigation with mobile drawer
│   │   ├── Footer.jsx               # Brand footer with stats and contact info
│   │   ├── HeroSection.jsx          # MakeMyTrip hero banner
│   │   ├── SearchPanel.jsx          # Floating travel search bar
│   │   ├── PopularDestinations.jsx  # Scrollable destination cards
│   │   ├── PackageCard.jsx          # MMT-inspired package cards
│   │   ├── FeaturedPackages.jsx     # Tabbed homepage packages
│   │   ├── TourTypesSection.jsx     # Visual categories section
│   │   ├── VehicleFleetSection.jsx  # Car rental showcase
│   │   ├── WhyChooseUsSection.jsx   # 6 core trust pillars
│   │   ├── ExploreAttractions.jsx   # Top Ooty sightseeing spots
│   │   ├── ExperiencesSection.jsx   # Signature Nilgiri experiences
│   │   ├── HowItWorksSection.jsx    # 3-step WhatsApp booking flow
│   │   ├── TestimonialsSection.jsx  # Verified traveler feedback
│   │   ├── FaqSection.jsx           # Accordion FAQ
│   │   ├── FinalCtaBanner.jsx       # Closing banner with WhatsApp CTA
│   │   ├── WhatsAppFloatingButton.jsx # Global floating WhatsApp button
│   │   ├── MobileStickyBookingBar.jsx # Sticky bottom CTA for smartphones
│   │   └── EnquiryModal.jsx         # Popup booking customization modal
│   ├── config/
│   │   └── site.js                  # Central brand details & WhatsApp config
│   ├── data/
│   │   ├── destinationsData.js      # 10 destinations with highlights
│   │   ├── packagesData.js          # All verified tour packages & itineraries
│   │   ├── tourTypesData.js         # 7 holiday categories
│   │   ├── vehiclesData.js          # 5 verified vehicles & seating capacities
│   │   ├── attractionsData.js       # 9 Ooty attractions & timings
│   │   ├── experiencesData.js       # Signature travel experiences
│   │   └── faqsData.js              # FAQs and genuine reviews
│   ├── pages/
│   │   ├── HomePage.jsx             # Comprehensive landing page
│   │   ├── AboutPage.jsx            # About Us, mission, vision & values
│   │   ├── TourPackagesPage.jsx     # Full filterable package catalog
│   │   ├── PackageDetailPage.jsx    # Day-wise itinerary & in-page booking
│   │   ├── TourTypesPage.jsx        # Travel category visual guide
│   │   ├── ContactPage.jsx          # Contact details, form & Google Map
│   │   └── NotFoundPage.jsx         # 404 handler
│   ├── utils/
│   │   └── whatsapp.js              # Central WhatsApp click-to-chat generator
│   ├── App.jsx                      # Router & layout wrapper
│   ├── index.css                    # Tailwind directives & typography
│   └── main.jsx                     # Vite entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 📱 WhatsApp Integration Specification
- **WhatsApp Phone**: `+91 98948 61681`
- **Click-to-Chat URL**: `https://wa.me/919894861681?text=...`
- Pre-populates package name, destination, tentative travel date, number of travellers, pickup point, preferred vehicle, and custom notes.

