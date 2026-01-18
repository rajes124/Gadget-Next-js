'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const DEMO_ITEMS: Record<string, any> = {
  '1': {
    id: '1',
    name: 'iPhone 15 Pro',
    price: 1500,
    category: 'Smartphones',
    description: 'Experience the power of Apple technology with the latest iPhone 15 Pro.',
    fullDescription:
      'The iPhone 15 Pro features a stunning Super Retina XDR display, powerful A17 Pro chip, and advanced camera system with ProMotion technology. Perfect for photography and videography.',
    specs: ['6.1" display', 'A17 Pro chip', 'Triple camera system', 'Titanium design', '5G'],
    image: 'https://images.unsplash.com/photo-1592286927505-1fed6c3d8b71?w=500&h=500&fit=crop'
  },
  '2': {
    id: '2',
    name: 'MacBook Pro 16"',
    price: 2500,
    category: 'Laptops',
    description: 'Powerful laptop designed for professionals',
    fullDescription:
      'The MacBook Pro 16" is engineered for professionals who demand speed and power. With the M3 Max chip, stunning Liquid Retina XDR display, and exceptional battery life.',
    specs: ['16" Liquid Retina XDR', 'M3 Max chip', '36GB Unified Memory', 'ProMotion 120Hz', 'Long battery life'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop'
  },
  '3': {
    id: '3',
    name: 'Apple Watch Ultra 2',
    price: 800,
    category: 'Wearables',
    description: 'Advanced smartwatch with health features',
    fullDescription:
      'Push your limits with Apple Watch Ultra 2. Built to withstand extreme conditions with advanced health and fitness features.',
    specs: ['Action button', 'Always-On display', 'Advanced health sensors', 'Water resistant', 'Customizable bands'],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop'
  },
  '4': {
    id: '4',
    name: 'Sony WH-1000XM5',
    price: 400,
    category: 'Accessories',
    description: 'Premium noise-canceling headphones',
    fullDescription:
      'Experience crystal-clear sound with industry-leading noise cancellation. Perfect for music lovers and professionals.',
    specs: ['Noise cancellation', '8-hour battery', 'Hi-Res Audio', 'Comfortable design', 'Touch controls'],
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop'
  },
  '5': {
    id: '5',
    name: 'iPad Pro 12.9"',
    price: 1200,
    category: 'Tablets',
    description: 'Premium tablet for creative professionals',
    fullDescription: 'The iPad Pro 12.9" is the ultimate creative device with M2 chip and stunning display.',
    specs: ['12.9" Liquid Retina display', 'M2 chip', 'Apple Pencil support', 'ProMotion 120Hz', 'All-day battery'],
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop'
  },
  '6': {
    id: '6',
    name: 'Samsung Galaxy S24',
    price: 1000,
    category: 'Smartphones',
    description: 'Latest Samsung flagship smartphone',
    fullDescription: 'Samsung Galaxy S24 brings cutting-edge technology and stunning design together.',
    specs: ['6.1" Dynamic AMOLED', 'Snapdragon 8 Gen 3', 'Advanced AI features', '50MP camera', '5G'],
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop'
  },
};

export default function ItemDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    try {
      // Backend থেকে চেষ্টা করো
      const response = await fetch(`http://localhost:5000/api/items/${id}`);
      
      if (response.ok) {
        const data = await response.json();
        setItem({
          ...data,
          id: data._id || data.id,
          image: data.imageUrl || '',
          // backend-এ না থাকলে default দাও যাতে UI break না করে
          fullDescription: data.fullDescription || data.description || 'No detailed description available.',
          specs: data.specs || ['Key features will be added soon.'],
          category: data.category || 'Uncategorized',
        });
      } else {
        // backend-এ না পেলে → demo চেক (শুধু short id-এর জন্য)
        const demoItem = DEMO_ITEMS[id];
        if (demoItem) {
          setItem(demoItem);
        } else {
          setItem(null);
        }
      }
    } catch (error) {
      console.warn('Could not fetch item from backend, checking demo:', error);
      // error হলে demo চেক
      const demoItem = DEMO_ITEMS[id];
      if (demoItem) {
        setItem(demoItem);
      } else {
        setItem(null);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block">
            <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading item details...</p>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">📦 Item not found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">The gadget you're looking for doesn't exist or has been removed.</p>
          <Link href="/items" className="gradient-btn text-white px-6 py-3 rounded-lg inline-block hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
            Browse All Items
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen pt-20 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/items" className="text-purple-600 hover:text-purple-700 hover:translate-x-1 mb-6 inline-block transition-all duration-300">
          ← Back to Items
        </Link>

        <div className="glass-effect rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image Container */}
            <div className="bg-gradient-to-br from-gray-200 dark:from-gray-700 to-gray-300 dark:to-gray-800 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
              {item.image ? (
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="text-9xl">📱</div>
              )}
            </div>

            {/* Details Section */}
            <div>
              <div className="mb-4 inline-block">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition-all">
                  {item.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold gradient-text mb-4 leading-tight">{item.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{item.description}</p>

              <div className="mb-8 pb-8 border-b border-gray-300 dark:border-gray-600">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-semibold">About this product:</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.fullDescription}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold gradient-text mb-4">Key Specifications</h3>
                <ul className="space-y-3">
                  {item.specs && item.specs.map((spec: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-purple-600 text-lg font-bold">✓</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-300 dark:border-gray-600 pt-8">
                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm font-semibold">Price</p>
                  <p className="text-5xl font-bold gradient-text">${item.price}</p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 gradient-btn text-white py-3 rounded-lg font-bold hover:scale-105 hover:shadow-2xl disabled:scale-95 transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                  <button className="flex-1 border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-bold hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:scale-105 transition-all duration-300">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">More Gadgets</h3>
          <Link href="/items" className="text-purple-600 hover:text-purple-700 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
            Browse all items <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}