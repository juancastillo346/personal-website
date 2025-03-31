'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full p-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold gradient-text"
        >
          JC
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex space-x-8"
        >
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </motion.div>
      </div>
    </nav>
  );
} 