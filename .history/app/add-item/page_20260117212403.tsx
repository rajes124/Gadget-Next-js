'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import toast from 'react-hot-toast';

export default function AddItemPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Smartphones',
    description: '',
    imageUrl: '',
  });

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push('/login');
      toast.error('Please login first');
      return;
    }
    setUser(currentUser);
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate form
      if (!formData.name || !formData.price || !formData.description) {
        toast.error('Please fill all fields');
        setLoading(false);
        return;
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success('Gadget added successfully!');
      setFormData({ name: '', price: '', category: 'Smartphones', description: '', imageUrl: '' });
      router.push('/items');
    } catch (error) {
      toast.error('Failed to add gadget');
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen pt-20 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="glass-effect rounded-2xl p-8">
          <h1 className="text-4xl font-bold gradient-text mb-2 text-center">Add New Gadget</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Share your favorite gadget with the community
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 focus:border-purple-500 focus:outline-none transition"
                placeholder="e.g., iPhone 15 Pro Max"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 focus:border-purple-500 focus:outline-none transition"
                  placeholder="1500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 focus:border-purple-500 focus:outline-none transition"
                >
                  <option>Smartphones</option>
                  <option>Laptops</option>
                  <option>Wearables</option>
                  <option>Accessories</option>
                  <option>Tablets</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 focus:border-purple-500 focus:outline-none transition resize-none"
                rows={6}
                placeholder="Describe your gadget..."
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Image URL (Optional)
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 focus:border-purple-500 focus:outline-none transition"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 gradient-btn text-white py-3 rounded-lg font-bold disabled:opacity-50"
              >
                {loading ? 'Adding Gadget...' : 'Add Gadget'}
              </button>
              <button
                type="button"
                onClick={() => router.push('/items')}
                className="flex-1 border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-bold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
