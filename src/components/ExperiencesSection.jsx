import React from 'react';
import { Sparkles } from 'lucide-react';
import { TRAVEL_EXPERIENCES } from '../data/experiencesData';

export default function ExperiencesSection() {
  return (
    <section className="py-16 sm:py-20 bg-forest-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2E765B_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 text-accent font-bold text-xs uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Memories That Last a Lifetime</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Signature Nilgiri Travel Experiences
          </h2>
          <p className="mt-3 text-sm sm:text-base text-forest-200">
            From misty mornings overlooking endless tea valleys to serene lake boat cruises and exhilarating mountain drives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAVEL_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="group relative bg-forest-800/80 rounded-3xl overflow-hidden border border-forest-700/60 shadow-lg hover:border-accent/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/30 to-transparent" />

                <span className="absolute top-3 left-3 bg-forest-900/80 backdrop-blur-md text-accent-light text-[11px] font-bold px-2.5 py-1 rounded-full border border-forest-700">
                  {exp.tag}
                </span>

                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg font-bold font-display text-white">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-accent-light">
                    {exp.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs sm:text-sm text-forest-200 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

