'use client';

import Link from 'next/link';

export default function FeaturedSection() {
  const featured = [
    {
      id: '1',
      name: 'iPhone 15 Pro',
      price: 1500,
      image: '📱',
      description: 'Latest Apple flagship phone with advanced features',
    },
    {
      id: '2',
      name: 'MacBook Pro 16"',
      price: 2500,
      image: '💻',
      description: 'Powerful laptop with M3 Max chip for professionals',
    },
    {
      id: '3',
      name: 'Apple Watch Ultra 2',
      price: 800,
      image: '⌚',
      description: 'Advanced smartwatch with health features',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Gadgets</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((item) => (
            <div key={item.id} className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-gray-200 dark:from-gray-700 to-gray-300 dark:to-gray-800 h-64 flex items-center justify-center">
                <div className="text-8xl">{item.image}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold gradient-text">${item.price}</span>
                  <Link href={`/items/${item.id}`} className="gradient-btn text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
