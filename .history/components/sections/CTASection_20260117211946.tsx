'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="gradient-bg py-20 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Ready to Explore the Future of Tech?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of tech enthusiasts discovering the latest gadgets every day.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/login" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition">
            Get Started →
          </Link>
          <Link href="/items" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:bg-opacity-10 transition">
            View Items
          </Link>
        </div>
      </div>
    </section>
  );
}
