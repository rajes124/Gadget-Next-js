'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';

const DEMO_ITEMS = [
  { 
    id: '1', 
    name: 'iPhone 15 Pro', 
    price: 1500, 
    category: 'Smartphones', 
    description: 'Latest Apple flagship with advanced camera',
    image: 'https://images.unsplash.com/photo-1592286927505-1fed6c3d8b71?w=500&h=500&fit=crop'
  },
  { 
    id: '2', 
    name: 'MacBook Pro 16"', 
    price: 2500, 
    category: 'Laptops', 
    description: 'Powerful laptop with M3 Max chip',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop'
  },
  { 
    id: '3', 
    name: 'Apple Watch Ultra 2', 
    price: 800, 
    category: 'Wearables', 
    description: 'Advanced smartwatch with health features',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop'
  },
  { 
    id: '4', 
    name: 'Sony WH-1000XM5', 
    price: 400, 
    category: 'Accessories', 
    description: 'Noise-canceling wireless headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop'
  },
  { 
    id: '5', 
    name: 'iPad Pro 12.9"', 
    price: 1200, 
    category: 'Tablets', 
    description: 'Premium tablet with M2 chip',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop'
  },
  { 
    id: '6', 
    name: 'Samsung Galaxy S24', 
    price: 1000, 
    category: 'Smartphones', 
    description: 'Latest Samsung flagship smartphone',
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop'
  },
];

export default function ItemsPage() {
  const searchParams = useSearchParams();
  const [items, setItems] = useState(DEMO_ITEMS);
  const [filteredItems, setFilteredItems] = useState(DEMO_ITEMS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    
    // Get category from query params
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    
    fetchItems();
  }, [searchParams]);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/items');
      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0) {
          // Map backend items to include image property
          const mappedItems = data.map((item: any) => ({
            ...item,
            id: item._id || item.id,
            image: item.imageUrl || '',
          }));
          setItems(mappedItems);
          setFilteredItems(mappedItems);
        } else {
          setItems(DEMO_ITEMS);
          setFilteredItems(DEMO_ITEMS);
        }
      } else {
        setItems(DEMO_ITEMS);
        setFilteredItems(DEMO_ITEMS);
      }
    } catch (error) {
      console.warn('Could not fetch items from backend, using demo:', error);
      setItems(DEMO_ITEMS);
      setFilteredItems(DEMO_ITEMS);
    }
  };

  useEffect(() => {
    let filtered = items;

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    setFilteredItems(filtered);
  }, [searchTerm, selectedCategory, items]);

  const categories = ['All', ...new Set(DEMO_ITEMS.map((item) => item.category))];

  return (
    <div className="min-h-screen pt-20 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Browse All Gadgets</h1>
          <p className="text-gray-600 dark:text-gray-400">Discover amazing tech products</p>
        </div>

        <div className="glass-effect p-6 rounded-2xl mb-8 animate-fade-in">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="🔍 Search gadgets by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 focus:border-purple-500 focus:outline-none transition"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === cat
                    ? 'gradient-btn text-white shadow-lg scale-105'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id} 
                className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group animate-slide-in-up transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {/* Image Container */}
                <div className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center overflow-hidden relative">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="text-7xl group-hover:scale-125 transition-transform duration-500">📱</div>
                  )}
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors duration-300">{item.name}</h3>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded group-hover:bg-pink-600 transition-all duration-300 transform group-hover:scale-110">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm group-hover:text-gray-500 transition-colors duration-300">{item.description}</p>
                  
                  {/* Price and Button */}
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300 origin-left">${item.price}</span>
                    <Link
                      href={`/items/${item.id}`}
                      className="gradient-btn text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform group-hover:scale-110 shadow-md group-hover:shadow-lg"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">No items found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Try adjusting your search filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="gradient-btn text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-110"
            >
              Clear Filters
            </button>
          </div>
        )}

        {user && (
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Want to add your own gadget?</p>
            <Link
              href="/add-item"
              className="gradient-btn text-white px-8 py-3 rounded-lg font-bold inline-block"
            >
              Add New Gadget
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
