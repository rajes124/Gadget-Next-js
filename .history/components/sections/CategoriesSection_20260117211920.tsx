'use client';

export default function CategoriesSection() {
  const categories = [
    { name: 'Smartphones', icon: '📱', color: 'from-blue-500 to-cyan-500' },
    { name: 'Laptops', icon: '💻', color: 'from-purple-500 to-pink-500' },
    { name: 'Wearables', icon: '⌚', color: 'from-green-500 to-emerald-500' },
    { name: 'Accessories', icon: '🎧', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Browse by Category</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="glass-effect p-8 rounded-2xl text-center cursor-pointer hover:scale-105 hover:shadow-2xl transition-all"
            >
              <div className="text-6xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
