'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { logout, getCurrentUser } from '@/lib/auth';
import toast from 'react-hot-toast';
import {
  Home,
  Package,
  Plus,
  LogOut,
  User,
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Edit,
} from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

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
    setProfileDropdownOpen(false);
  };

  if (!mounted) return null;

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-slate-900 shadow-lg z-50 backdrop-blur-md bg-opacity-95 dark:bg-opacity-95 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold gradient-text hover:scale-105 transition-transform">
          <Package className="w-8 h-8" />
          <span>GadgetHub</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className={`flex items-center gap-2 transition-all ${
              isActive('/') ? 'text-purple-600 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-purple-600'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link
            href="/items"
            className={`flex items-center gap-2 transition-all ${
              isActive('/items') ? 'text-purple-600 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-purple-600'
            }`}
          >
            <Package className="w-5 h-5" />
            <span>Items</span>
          </Link>
          {user && (
            <Link
              href="/add-item"
              className={`flex items-center gap-2 transition-all ${
                isActive('/add-item') ? 'text-purple-600 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-purple-600'
              }`}
            >
              <Plus className="w-5 h-5" />
              <span>Add Item</span>
            </Link>
          )}
        </div>

        {/* Right Side */}
        <div className="flex gap-3 items-center">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* User Section */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg transition-all text-white font-semibold"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">{user.email?.split('@')[0]}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Profile Dropdown */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-10 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Logged in as</p>
                    <p className="font-semibold text-gray-900 dark:text-white truncate">{user.email}</p>
                  </div>
                  <Link
                    href="/profile"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span>View Profile</span>
                  </Link>
                  <Link
                    href="/profile"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-t border-gray-200 dark:border-gray-700"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Update Profile</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="gradient-btn text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
            >
              Login
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700 animate-in slide-in-from-top">
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                isActive('/') ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 font-semibold' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Home className="w-5 h-5" />
              Home
            </Link>
            <Link
              href="/items"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                isActive('/items') ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 font-semibold' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Package className="w-5 h-5" />
              Items
            </Link>
            {user && (
              <Link
                href="/add-item"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                  isActive('/add-item') ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 font-semibold' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Plus className="w-5 h-5" />
                Add Item
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
