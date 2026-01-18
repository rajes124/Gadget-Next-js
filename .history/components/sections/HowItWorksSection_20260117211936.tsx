'use client';

export default function HowItWorksSection() {
  const steps = [
    { number: 1, title: 'Login', description: 'Create your account or sign in' },
    { number: 2, title: 'Browse Items', description: 'Explore our gadget collection' },
    { number: 3, title: 'View Details', description: 'Check product specifications' },
    { number: 4, title: 'Add New Gadget', description: 'Contribute to our catalog' },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="flex justify-center mb-6">
                <div className="gradient-bg w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              {step.number < 4 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-1 gradient-bg"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
