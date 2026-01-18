'use client';

import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 gradient-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
            <span className="flex items-center gap-2 text-sm md:text-base">
              <TrendingUp className="w-4 h-4" />
              <span>Latest Tech Gadgets for 2024</span>
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-in-down">
            Discover Smart Gadgets for a Smarter Life
          </h1>
          <p className="text-lg md:text-2xl mb-8 opacity-90 animate-slide-in-up max-w-3xl mx-auto">
            Explore the latest technology and innovations. Find your perfect gadget and join thousands of satisfied users.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link href="/items" className="gradient-btn text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-lg">
              <span>Browse Gadgets</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/login" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-lg">
              <span>Add Your Gadget</span>
              <Zap className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { icon: Zap, title: 'Fast Delivery', desc: 'Quick shipping to your doorstep' },
            { icon: TrendingUp, title: 'Best Prices', desc: 'Competitive pricing guaranteed' },
            { icon: Zap, title: 'Quality Assured', desc: 'Premium gadgets only' },
          ].map((feature, idx) => {
            const IconComp = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
              >
                <IconComp className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="opacity-80 text-sm">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
