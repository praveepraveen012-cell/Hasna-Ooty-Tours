import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import MobileStickyBookingBar from './components/MobileStickyBookingBar';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TourPackagesPage from './pages/TourPackagesPage';
import PackageDetailPage from './pages/PackageDetailPage';
import TourTypesPage from './pages/TourTypesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-light text-ink selection:bg-nature selection:text-white">
      <ScrollToTop />
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tour-packages" element={<TourPackagesPage />} />
          <Route path="/tour-packages/:slug" element={<PackageDetailPage />} />
          <Route path="/tour-types" element={<TourTypesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Floating WhatsApp CTA */}
      <WhatsAppFloatingButton />

      {/* Mobile-Only Sticky Bottom CTA Bar */}
      <MobileStickyBookingBar />
    </div>
  );
}

