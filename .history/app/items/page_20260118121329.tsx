'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import toast from 'react-hot-toast';

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
  const router = useRouter();
  const [items, setItems] = useState(DEMO_ITEMS);
  const [filteredItems, setFilteredItems] = useState(DEMO_ITEMS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

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

        <div className="glass-effect p-6 rounded-2xl mb-8">
          <input
            type="text"
            placeholder="Search gadgets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 focus:border-purple-500 focus:outline-none transition mb-6"
          />

          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === cat
                    ? 'gradient-btn text-white'
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
            {filteredItems.map((item) => (
              <div key={item.id} className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all group">
                <div className="bg-gradient-to-br from-gray-200 dark:from-gray-700 to-gray-300 dark:to-gray-800 h-48 flex items-center justify-center overflow-hidden">
                  <div className="text-7xl group-hover:scale-110 transition-transform">📱</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.name}</h3>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold gradient-text">${item.price}</span>
                    <Link
                      href={`/items/${item.id}`}
                      className="gradient-btn text-white px-4 py-2 rounded-lg text-sm font-semibold"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">No items found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Try adjusting your search filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="gradient-btn text-white px-6 py-3 rounded-lg font-semibold"
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
