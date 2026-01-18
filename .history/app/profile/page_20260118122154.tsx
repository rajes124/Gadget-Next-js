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
      rDisplayName(currentUser.displayName || currentUser.email?.split('@')[0] || 'User');
    seteturn;
    }
    setUser(currentUser);
    setLoading(false);
  }, [router]);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      router.push('/');
    } catch (error) {
      toast.error('Failed to logout');
    

  const handleUpdateProfile = async () => {
    if (!displayName.trim()) {
      toast.error('Display name cannot be empty');
      return;
    }

    setSaving(true);
    try {
      // Update locally first
      const updatedUser = { ...user, displayName };
      setUser(updatedUser);

      // Try to save to backend
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
  };}
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Profile Settings
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your account information
              </p>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Email Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Email Address
              </h3>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white break-all">
              {user.email}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Your primary email account
            </p>
          </div>

          {/* User ID Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                User ID
              </h3>
            </div>
            <p className="text-sm font-mono text-gray-900 dark:text-white break-all bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              {user.uid}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Unique identifier for your account
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Active Status */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 text-center">
            <Zap className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Account Status
            </h4>
            <p className="text-green-600 dark:text-green-400 font-semibold">Active</p>
          </div>

          {/* Member Since */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 text-center">
            <Clock className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Member Since
            </h4>
            <p className="text-orange-600 dark:text-orange-400 font-semibold">
              2024
            </p>
          </div>

          {/* Security */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 text-center">
            <Shield className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Security
            </h4>
            <p className="text-blue-600 dark:text-blue-400 font-semibold">Verified</p>
          </div>
        </div>

        {/* Logout Section */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Session Management
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Click the button below to logout from your account. You'll be able to login again anytime.
          </p>
          <button
            onClick={handleLogout}
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg active:scale-95"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout from Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}
