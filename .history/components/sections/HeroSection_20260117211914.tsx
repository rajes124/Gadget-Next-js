'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 gradient-bg text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover Smart Gadgets for a Smarter Life
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Explore the latest technology and innovations. Find your perfect gadget today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/items" className="gradient-btn text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Browse Gadgets →
            </Link>
            <Link href="/login" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Add Your Gadget
            </Link>
          </div>
        </div>
        <div className="mt-12 text-center opacity-80">
          <div className="inline-block bg-white bg-opacity-20 rounded-2xl p-8 backdrop-blur">
            <div className="text-6xl">📱</div>
            <p className="mt-4">Premium Gadgets Collection</p>
          </div>
        </div>
      </div>
    </section>
  );
}
