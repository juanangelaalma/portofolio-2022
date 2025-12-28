import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="relative">
        {/* Logo */}
        <motion.div
          className="text-5xl font-bold gradient-text mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          JA
        </motion.div>

        {/* Loading bar container */}
        <div className="w-48 h-1 bg-surface rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          className="text-text-secondary text-sm mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading experience...
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}
