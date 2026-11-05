import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PACKAGES } from '../data/packagesData';
import PackageCard from './PackageCard';

export default function FeaturedPackages({ onEnquire }) {
  const [activeTab, setActiveTab] = useState('All');

  const filterTabs = ['All', 'Ooty', 'Kodaikanal', 'Coorg', 'Mysore', 'Wayanad'];

  const filtered = activeTab === 'All'
    ? PACKAGES.slice(0, 6)
    : PACKAGES.filter(p => p.destination.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 text-accent font-bold text-xs uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Handcrafted Private Car Itineraries</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-900 font-display">
            Featured Tour Packages
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Enjoy full flexibility, well-maintained private cars, and friendly local drivers. No hidden charges.
          </p>

          {/* Destination Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-forest-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {tab === 'All' ? 'All Top Packages' : `${tab}`}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onEnquire={onEnquire} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/tour-packages"
            className="inline-flex items-center space-x-2 bg-forest-50 hover:bg-forest-100 text-forest-800 font-bold px-8 py-3.5 rounded-full border border-forest-200 transition-all text-sm font-display group"
          >
            <span>Browse All {PACKAGES.length} Tour Packages</span>
            <ArrowRight className="w-4 h-4 text-forest-600 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

