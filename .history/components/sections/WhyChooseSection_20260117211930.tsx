'use client';

export default function WhyChooseSection() {
  const reasons = [
    { icon: '🔒', title: 'Secure Login', description: 'Protected user authentication' },
    { icon: '✅', title: 'Verified Products', description: 'Quality guaranteed gadgets' },
    { icon: '⚡', title: 'Fast Delivery', description: 'Quick and reliable shipping' },
    { icon: '🎨', title: 'Modern UI', description: 'Beautiful, responsive design' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Why Choose GadgetHub?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center p-6">
              <div className="text-6xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
