'use client';

import { Star, User } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Tech Enthusiast',
      initials: 'SJ',
      color: 'from-pink-500 to-purple-500',
      text: 'Best platform to discover the latest gadgets. Love the modern interface!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Developer',
      initials: 'MC',
      color: 'from-blue-500 to-cyan-500',
      text: 'GadgetHub makes it easy to find and compare products. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Designer',
      initials: 'ED',
      color: 'from-green-500 to-emerald-500',
      text: 'Beautiful UI and smooth experience. My go to for tech shopping!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-text">What Our Users Say</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Real experiences from our community</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={testimonial.name} 
              className="glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">\"{testimonial.text}\"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
