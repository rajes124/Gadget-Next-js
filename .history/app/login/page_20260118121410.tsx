'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn, signInWithGoogle } from '@/lib/auth';
import toast from 'react-hot-toast';
import { Mail, Lock, Eye, EyeOff, LogIn, Chrome, Zap } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      await signIn(email, password);
      toast.success('Login successful!');
      router.push('/items');
    } catch (error: any) {
      const errorMessage = error.code === 'auth/user-not-found' 
        ? 'User not found. Please sign up first.'
        : error.code === 'auth/wrong-password'
        ? 'Incorrect password'
        : error.message || 'Login failed';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900">
      <div className="w-full max-w-md animate-slide-in-up">
        <div className="glass-effect rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold gradient-text mb-2">Welcome Back</h1>
            <p className="text-gray-600 dark:text-gray-400">Sign in to your GadgetHub account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 focus:border-purple-500 focus:outline-none transition"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 focus:border-purple-500 focus:outline-none transition"
                  placeholder="••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full gradient-btn text-white py-3 rounded-lg font-bold disabled:opacity-50 flex items-center justify-center gap-2 hover:shadow-lg transition animate-slide-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-400">Or continue with</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="mt-6 space-y-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition border-2 border-gray-200 dark:border-gray-600"
            >
              <Zap className="w-5 h-5 text-yellow-500" />
              Google
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-gray-900 dark:bg-gray-800 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition border-2 border-gray-800 dark:border-gray-700"
            >
              <Github className="w-5 h-5" />
              GitHub
            </button>
          </div>

          {/* Links */}
          <div className="mt-6 text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link href="/forgot-password" className="text-purple-600 hover:text-purple-700 text-sm font-medium transition">
              Forgot password?
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <Link href="/register" className="text-purple-600 font-semibold hover:text-purple-700 transition">
                Sign up free
              </Link>
            </p>
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-green-500" />
            <span>Secured by Firebase Authentication</span>
          </p>
        </div>
      </div>
    </div>
  );
}
