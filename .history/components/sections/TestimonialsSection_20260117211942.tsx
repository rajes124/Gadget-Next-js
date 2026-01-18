'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Tech Enthusiast',
      avatar: '👩‍💼',
      text: 'Best platform to discover the latest gadgets. Love the modern interface!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Developer',
      text: 'GadgetHub makes it easy to find and compare products. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Designer',
      text: 'Beautiful UI and smooth experience. My go to for tech shopping!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="glass-effect p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
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
