'use client';

import Link from 'next/link';
import { Smartphone, Laptop, Watch, ShoppingCart } from 'lucide-react';

export default function FeaturedSection() {
  const featured = [
    {
      id: '1',
      name: 'iPhone 15 Pro',
      price: 1500,
      icon: Smartphone,
      description: 'Latest Apple flagship phone with advanced features',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: '2',
      name: 'MacBook Pro 16"',
      price: 2500,
      icon: Laptop,
      description: 'Powerful laptop with M3 Max chip for professionals',
      color: 'from-gray-600 to-gray-700',
    },
    {
      id: '3',
      name: 'Apple Watch Ultra 2',
      price: 800,
      icon: Watch,
      description: 'Advanced smartwatch with health features',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Gadgets</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Hand-picked products for you</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.id} 
                className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${item.color} h-64 flex items-center justify-center`}>
                  <IconComp className="w-32 h-32 text-white opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold gradient-text">${item.price}</span>
                    <Link href={`/items/${item.id}`} className="gradient-btn text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>View</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
