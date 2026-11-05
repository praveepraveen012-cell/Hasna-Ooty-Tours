import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import PopularDestinations from '../components/PopularDestinations';
import FeaturedPackages from '../components/FeaturedPackages';
import ExploreAttractions from '../components/ExploreAttractions';
import TourTypesSection from '../components/TourTypesSection';
import VehicleFleetSection from '../components/VehicleFleetSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ExperiencesSection from '../components/ExperiencesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import FinalCtaBanner from '../components/FinalCtaBanner';
import EnquiryModal from '../components/EnquiryModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  const handleEnquire = (pkg) => {
    setSelectedPkg(pkg);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section with MakeMyTrip Search Panel */}
      <HeroSection />

      {/* 2. Popular Destinations Discovery */}
      <PopularDestinations />

      {/* 3. Featured Tour Packages */}
      <FeaturedPackages onEnquire={handleEnquire} />

      {/* 4. Explore Ooty Attractions */}
      <ExploreAttractions />

      {/* 5. Tour Categories */}
      <TourTypesSection />

      {/* 6. Vehicle Fleet Showcase */}
      <VehicleFleetSection />

      {/* 7. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 8. Travel Experiences (Tea, Mountains, Waterfalls, Lakes) */}
      <ExperiencesSection />

      {/* 9. Simple 3-Step How It Works */}
      <HowItWorksSection />

      {/* 10. Real Testimonials */}
      <TestimonialsSection />

      {/* 11. Frequently Asked Questions */}
      <FaqSection />

      {/* 12. Final Closing Banner */}
      <FinalCtaBanner />

      {/* Interactive Booking Enquiry Modal */}
      {modalOpen && (
        <EnquiryModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialData={{
            packageName: selectedPkg?.title,
            destination: selectedPkg?.destination,
            tourType: selectedPkg?.tourType,
            pickupLocation: selectedPkg?.pickupLocations?.[0],
            vehiclePreference: selectedPkg?.vehicleOptions?.[0],
          }}
        />
      )}
    </div>
  );
}

