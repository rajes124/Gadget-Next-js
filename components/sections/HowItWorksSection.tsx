'use client';

import { LogIn, Package, Eye, Plus, ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    { number: 1, icon: LogIn, title: 'Login', description: 'Create your account or sign in' },
    { number: 2, icon: Package, title: 'Browse Items', description: 'Explore our gadget collection' },
    { number: 3, icon: Eye, title: 'View Details', description: 'Check product specifications' },
    { number: 4, icon: Plus, title: 'Add New Gadget', description: 'Contribute to our catalog' },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-text">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Simple steps to get started</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={step.number} className="relative text-center group animate-slide-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex justify-center mb-6">
                  <div className="gradient-bg w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-110 duration-300">
                    <IconComp className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
                
                {/* Connecting Arrow */}
                {step.number < 4 && (
                  <div className="hidden md:flex absolute top-10 -right-4 items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-purple-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
    </section>
  );
}
