'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { logout, getCurrentUser } from '@/lib/auth';
import toast from 'react-hot-toast';
import {
  User,
  Mail,
  LogOut,
  ArrowLeft,
  Shield,
  Clock,
  Zap,
  Edit2,
  Save,
  X,
} from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push('/login');
      return;
    }

    setUser(currentUser);
    setDisplayName(currentUser.displayName || currentUser.email?.split('@')[0] || 'User');
    setLoading(false);
  }, [router]);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      router.push('/');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };

  const handleUpdateProfile = async () => {
    if (!displayName.trim()) {
      toast.error('Display name cannot be empty');
      return;
    }

    setSaving(true);
    try {
      const updatedUser = { ...user, displayName };
      setUser(updatedUser);

      try {
        const response = await fetch('http://localhost:5000/api/users/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user.email,
            displayName,
          }),
        });

        if (response.ok) {
          toast.success('Profile updated successfully!');
        }
      } catch (backendError) {
        console.warn('Could not update in backend:', backendError);
        toast.success('Profile updated locally!');
      }

      setIsEditMode(false);
    } catch (error) {
      toast.error('Failed to update profile');
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // বাকি return part একদম তোমার original code-এর মতো (UI, cards, footer সব same)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header with Avatar */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg overflow-hidden">
              {user?.photoURL ? (
                <Image
                  src={user.photoURL}
                  alt={user.displayName}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-10 h-10 text-white" />
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {displayName}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your account information
              </p>
            </div>
          </div>
        </div>

        {/* Update Display Name Form */}
        {isEditMode && (
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 mb-8 animate-in fade-in slide-in-from-top">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Edit2 className="w-5 h-5" />
              Update Display Name
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-700 focus:border-purple-500 focus:outline-none transition text-gray-900 dark:text-white"
                placeholder="Enter your display name"
              />
              <div className="flex gap-3">
                <button
                  onClick={handleUpdateProfile}
                  disabled={saving}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold disabled:opacity-50 transition"
                >
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save Changes
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setIsEditMode(false);
                    setDisplayName(user.displayName || user.email?.split('@')[0] || 'User');
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* বাকি সব card, features grid, logout section একদম তোমার original code-এর মতো */}
        {/* ... তোমার বাকি return JSX paste করো ... */}

      </div>
    </div>
  );
}