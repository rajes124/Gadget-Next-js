'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Package } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="gradient-bg py-20 px-4 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm animate-fade-in">
          <span className="flex items-center gap-2 text-sm md:text-base">
            <Zap className="w-4 h-4" />
            <span>Limited Time Offer</span>
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-slide-in-down">
          Ready to Explore the Future of Tech?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-slide-in-up">
          Join thousands of tech enthusiasts discovering the latest gadgets every day.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link href="/login" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-lg">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/items" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center gap-2">
            <Package className="w-5 h-5" />
            <span>View Items</span>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
