import { assetUrl } from '../utils/assets';
import React from 'react';
import { ShieldCheck, UserCheck, Sliders, DollarSign, Clock, ThumbsUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Comfortable Private Vehicles',
      desc: 'Clean, sanitized, and spacious cars exclusively for you and your family. Never shared with outside passengers.'
    },
    {
      icon: UserCheck,
      title: 'Experienced Mountain Drivers',
      desc: 'Nilgiri local drivers with years of experience on winding ghat roads, hairpin bends, and misty weather conditions.'
    },
    {
      icon: Sliders,
      title: 'Customizable Itineraries',
      desc: 'Flexible travel pacing. Spend extra time at your favorite waterfalls, viewpoints, or tea estates without rush.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      desc: 'Affordable rates covering car, fuel, driver allowance, tolls, and parking fees with absolutely zero hidden charges.'
    },
    {
      icon: Clock,
      title: 'Punctual On-Time Pickup',
      desc: 'Reliable doorstep pickups from hotels, Coimbatore airport, and railway stations so you never miss a schedule.'
    },
    {
      icon: ThumbsUp,
      title: 'Hassle-Free Booking Desk',
      desc: 'Direct WhatsApp communication with our local team. Fast confirmations, transparent quotes, and continuous support.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual & Trust Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white">
              <img
                src={assetUrl("/images/Avalanche-Lake.jpg")}
                alt="Avalanche Lake scenic tour with Hasna Ooty Tours"
                className="w-full h-[440px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-transparent to-transparent" />

              {/* Floating quote card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white">
                <p className="text-xs sm:text-sm font-semibold text-forest-900 italic leading-snug">
                  "Your Journey, Our Responsibility! Sit back, relax, and explore with Hasna Ooty Tours!"
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-nature uppercase tracking-wider">
                    Hasna Ooty Tours Desk
                  </span>
                  <span className="text-xs font-bold text-accent">★★★★★ 4.9/5</span>
                </div>
              </div>
            </div>

            {/* Overlapping stat pill */}
            <div className="absolute -top-4 -right-4 bg-accent text-white py-2 px-4 rounded-2xl shadow-lg flex items-center space-x-2 text-xs font-bold font-display">
              <Sparkles className="w-4 h-4" />
              <span>10+ Years Nilgiri Experience</span>
            </div>
          </div>

          {/* Right Column: Reasons Grid */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-1.5 text-nature font-bold text-xs uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-900 font-display leading-tight">
              Your Trusted Partner for Scenic Car Tours in South India
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              At Hasna Ooty Tours, we believe travel should be more than just transit — it should be a relaxing, delightful experience. Discover why thousands of travelers trust our private car sightseeing tours.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-card transition-all flex items-start space-x-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forest-900 font-display">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

