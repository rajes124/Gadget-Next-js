'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import toast from 'react-hot-toast';
import { Upload, X } from 'lucide-react';

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

      // Save to backend
      const response = await fetch('http://localhost:5000/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          price: parseFloat(formData.price),
          category: formData.category,
          description: formData.description,
          imageUrl: formData.imageUrl,
          addedBy: user.email || user.uid,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add gadget');
      }

      const newItem = await response.json();
      console.log('Item saved:', newItem);

      toast.success('Gadget added successfully!');
      setFormData({ name: '', price: '', category: 'Smartphones', description: '', imageUrl: '' });
      router.push('/items');
    } catch (error: any) {
      console.error('Error:', error);
      toast.error(error.message || 'Failed to add gadget');
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
                Product Image
              </label>
              <div className="space-y-4">
                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 focus:border-purple-500 focus:outline-none transition"
                  placeholder="https://example.com/image.jpg"
                />
                
                {/* Image Preview */}
                {formData.imageUrl && (
                  <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                    <Image
                      src={formData.imageUrl}
                      alt="Product preview"
                      fill
                      className="w-full h-full object-cover"
                      onError={() => toast.error('Failed to load image')}
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, imageUrl: '' })}
                      className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  💡 Paste an image URL from Unsplash, Pexels, or any image host
                </p>
              </div>
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
