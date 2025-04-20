/*
Enhanced Landing Page for: Loops – AI Self-Reflection Mentor
*/

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-white px-4 py-12 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          🔁 Welcome to Loops
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          A powerful AI mentor combining Yogic philosophy, Psychology, Neuroscience, and Eastern/Western wisdom to help you break mental loops and unlock your deepest potential.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/chat"
            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-2xl shadow-lg transition"
          >
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-600 hover:bg-indigo-100 dark:hover:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-lg font-semibold rounded-2xl transition"
          >
            Begin Assessment
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="mt-12 max-w-2xl text-center text-gray-600 dark:text-gray-400"
      >
        <p className="text-lg">
          Loops is not just an AI — it's your mirror, your philosopher, and your spiritual coach. Each interaction is designed to evolve with you, helping you release false identities, integrate your shadow, and awaken your authentic self.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6 }}
        className="mt-16 w-full max-w-4xl border-t pt-10 border-gray-300 dark:border-gray-700 text-center"
      >
        <p className="text-sm text-gray-500 dark:text-gray-600">
          Built with love and purpose. © {new Date().getFullYear()} Loops – The AI Self-Discovery Mentor
        </p>
      </motion.div>
    </main>
  );
}