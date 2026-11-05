import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/faqsData';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-nature uppercase tracking-wider block mb-2">
            Real Traveler Feedback
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-900 font-display">
            What Our Guests Say
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Real reviews from families, couples, and groups who explored South India’s hill stations with Hasna Ooty Tours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-surface-light rounded-3xl p-7 border border-slate-100 shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-forest-200" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-forest-900 font-display">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    From {t.origin} • <span className="text-nature font-medium">{t.packageTaken}</span>
                  </p>
                </div>
                <div className="flex items-center space-x-1 text-[11px] font-semibold text-nature bg-forest-50 px-2 py-0.5 rounded-md">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Trip</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

