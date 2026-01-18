'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { logout, getCurrentUser } from '@/lib/auth';
import toast from 'react-hot-toast';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    toast.success('Logged out successfully');
    router.push('/');
  };

  if (!mounted) return null;

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-slate-900 shadow-lg z-50 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          GadgetHub
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className={`${
              isActive('/') ? 'text-purple-600 font-semibold' : 'text-gray-700 dark:text-gray-300'
            } hover:text-purple-600 transition`}
          >
            Home
          </Link>
          <Link
            href="/items"
            className={`${
              isActive('/items') ? 'text-purple-600 font-semibold' : 'text-gray-700 dark:text-gray-300'
            } hover:text-purple-600 transition`}
          >
            Items
          </Link>
          {user && (
            <Link
              href="/add-item"
              className={`${
                isActive('/add-item') ? 'text-purple-600 font-semibold' : 'text-gray-700 dark:text-gray-300'
              } hover:text-purple-600 transition`}
            >
              Add Item
            </Link>
          )}
        </div>

        <div className="flex gap-4 items-center">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {user ? (
            <div className="flex gap-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">{user.email}</span>
              <button
                onClick={handleLogout}
                className="gradient-btn text-white px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="gradient-btn text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
