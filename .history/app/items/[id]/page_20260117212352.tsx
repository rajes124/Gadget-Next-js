'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
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
  },
  '5': {
    id: '5',
    name: 'iPad Pro 12.9"',
    price: 1200,
    category: 'Tablets',
    description: 'Premium tablet for creative professionals',
    fullDescription: 'The iPad Pro 12.9" is the ultimate creative device with M2 chip and stunning display.',
    specs: ['12.9" Liquid Retina display', 'M2 chip', 'Apple Pencil support', 'ProMotion 120Hz', 'All-day battery'],
  },
  '6': {
    id: '6',
    name: 'Samsung Galaxy S24',
    price: 1000,
    category: 'Smartphones',
    description: 'Latest Samsung flagship smartphone',
    fullDescription: 'Samsung Galaxy S24 brings cutting-edge technology and stunning design together.',
    specs: ['6.1" Dynamic AMOLED', 'Snapdragon 8 Gen 3', 'Advanced AI features', '50MP camera', '5G'],
  },
};

export default function ItemDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const item = DEMO_ITEMS[id];

  if (!item) {
    return (
      <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Item not found</h1>
          <Link href="/items" className="gradient-btn text-white px-6 py-3 rounded-lg inline-block">
            Back to Items
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
        <Link href="/items" className="text-purple-600 hover:underline mb-6 inline-block">
          ← Back to Items
        </Link>

        <div className="glass-effect rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="bg-gradient-to-br from-gray-200 dark:from-gray-700 to-gray-300 dark:to-gray-800 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-9xl">📱</div>
            </div>

            <div>
              <div className="mb-4">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold gradient-text mb-4">{item.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{item.description}</p>

              <div className="mb-8">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Full Description:</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.fullDescription}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold gradient-text mb-4">Key Specifications</h3>
                <ul className="space-y-2">
                  {item.specs.map((spec: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <span className="text-purple-600">✓</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-300 dark:border-gray-600 pt-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Price</p>
                    <p className="text-5xl font-bold gradient-text">${item.price}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 gradient-btn text-white py-3 rounded-lg font-bold hover:scale-105 transition"
                  >
                    Add to Cart
                  </button>
                  <button className="flex-1 border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-bold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">More Gadgets</h3>
          <Link href="/items" className="text-purple-600 hover:underline">
            Browse all items →
          </Link>
        </div>
      </div>
    </div>
  );
}
