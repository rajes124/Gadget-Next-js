'use client';

import { Lock, CheckCircle, Zap, Palette } from 'lucide-react';

export default function WhyChooseSection() {
  const reasons = [
    { icon: Lock, title: 'Secure Login', description: 'Protected user authentication', color: 'text-blue-600 dark:text-blue-400' },
    { icon: CheckCircle, title: 'Verified Products', description: 'Quality guaranteed gadgets', color: 'text-green-600 dark:text-green-400' },
    { icon: Zap, title: 'Fast Delivery', description: 'Quick and reliable shipping', color: 'text-yellow-600 dark:text-yellow-400' },
    { icon: Palette, title: 'Modern UI', description: 'Beautiful, responsive design', color: 'text-purple-600 dark:text-purple-400' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Why Choose GadgetHub?</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Everything you need for the best experience</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const IconComp = reason.icon;
            return (
              <div 
                key={reason.title} 
                className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center mx-auto mb-4 ${reason.color}`}>
                  <IconComp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{reason.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
