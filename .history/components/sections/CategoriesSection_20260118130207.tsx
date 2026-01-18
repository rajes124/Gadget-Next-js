'use client';

import { useRouter } from 'next/navigation';
import { Smartphone, Laptop, Watch, Headphones } from 'lucide-react';

export default function CategoriesSection() {
  const router = useRouter();
  
  const categories = [
    { 
      name: 'Smartphones', 
      icon: Smartphone, 
      color: 'from-blue-500 to-cyan-500',
      description: 'Latest phones & devices'
    },
    { 
      name: 'Laptops', 
      icon: Laptop, 
      color: 'from-purple-500 to-pink-500',
      description: 'Powerful computing devices'
    },
    { 
      name: 'Wearables', 
      icon: Watch, 
      color: 'from-green-500 to-emerald-500',
      description: 'Smart watches & bands'
    },
    { 
      name: 'Accessories', 
      icon: Headphones, 
      color: 'from-orange-500 to-red-500',
      description: 'Cables, cases & more'
    },
  ];

  const handleCategoryClick = (categoryName: string) => {
    router.push(`/items?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Browse by Category</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Find gadgets by type</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div
                key={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
                className="group glass-effect p-8 rounded-2xl text-center cursor-pointer hover:scale-110 hover:shadow-2xl transition-all duration-300 transform animate-slide-in-up active:scale-95"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${cat.color} mb-4 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <IconComp className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
                  {cat.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{cat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
