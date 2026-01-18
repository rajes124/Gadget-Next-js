'use client';

import { useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate sending password reset email
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('Password reset email sent!');
      setSubmitted(true);
    } catch (error) {
      toast.error('Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-md">
          <div className="glass-effect rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-3xl font-bold gradient-text mb-4">Check Your Email</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We've sent password reset instructions to<br />
              <strong>{email}</strong>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              Check your email and follow the link to reset your password. If you don't see the email, check your spam folder.
            </p>
            <Link
              href="/login"
              className="inline-block gradient-btn text-white px-8 py-3 rounded-lg font-bold"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-md">
        <div className="glass-effect rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center gradient-text mb-2">Reset Password</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 focus:border-purple-500 focus:outline-none transition"
                placeholder="your@email.com"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading || !email}
              className="w-full gradient-btn text-white py-3 rounded-lg font-bold disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Remember your password?{' '}
              <Link href="/login" className="text-purple-600 font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
