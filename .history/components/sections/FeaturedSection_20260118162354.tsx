'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Smartphone,  ShoppingCart } from 'lucide-react';

export default function FeaturedSection() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/items');
        if (response.ok) {
          const data = await response.json();
          // Get first 3 items as featured
          setItems(data.slice(0, 3));
        }
      } catch (error) {
        console.log('Using default featured items');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedItems();
  }, []);

  const defaultFeatured = [
    {
      id: '1',
      name: 'iPhone 15 Pro',
      price: 1500,
      description: 'Latest Apple flagship phone with advanced features',
      image: 'https://images.unsplash.com/photo-1592286927505-1fed6c3d8b71?w=500&h=500&fit=crop',
    },
    {
      id: '2',
      name: 'MacBook Pro 16"',
      price: 2500,
      description: 'Powerful laptop with M3 Max chip for professionals',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop',
    },
    {
      id: '3',
      name: 'Apple Watch Ultra 2',
      price: 800,
      description: 'Advanced smartwatch with health features',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    },
  ];

  // Use real items if available, otherwise use default
  const featured = items.length > 0 
    ? items.map((item: any) => ({
        id: item._id || item.id,
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.imageUrl,
        addedBy: item.addedBy,
      }))
    : defaultFeatured;

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Gadgets</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {items.length > 0 ? 'Latest products from our community' : 'Hand-picked products for you'}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((item: any, idx: number) => (
            <div
              key={item.id}
              className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group animate-slide-in-up transform hover:scale-105 hover:-translate-y-2 cursor-pointer flex flex-col"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Image Container */}
              <div className="bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center overflow-hidden relative">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <Smartphone className="w-32 h-32 text-gray-400 opacity-80 group-hover:scale-125 transition-transform duration-500" />
                )}
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Content - button fixed করার জন্য flex-col + mt-auto */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded group-hover:bg-pink-600 transition-all duration-300 transform group-hover:scale-110">
                    {item.category || 'Featured'}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm group-hover:text-gray-500 transition-colors duration-300 flex-grow line-clamp-4">
                  {item.description}
                </p>

                {item.addedBy && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                    By: {item.addedBy}
                  </p>
                )}

                {/* Price and Button - mt-auto দিয়ে নিচে fixed */}
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300 origin-left">
                    ${item.price}
                  </span>
                  <Link
                    href={`/items/${item.id}`}
                    className="gradient-btn text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>View</span>
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