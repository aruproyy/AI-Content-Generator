"use client" // Ensures the component is a Client Component

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

// Variants for the letter-by-letter animation
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2 * i,
    },
  }),
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  const headingText = "Welcome to Your AI-Powered Tool!";

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 overflow-hidden">
      {/* Floating Clouds */}
      <div className="absolute w-full h-full overflow-hidden top-0 left-0">
        <motion.div
          className="absolute bg-white rounded-full opacity-60 blur-xl"
          style={{ width: '150px', height: '100px', top: '10%', left: '-150px' }}
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bg-white rounded-full opacity-60 blur-xl"
          style={{ width: '200px', height: '120px', top: '50%', left: '-200px' }}
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bg-white rounded-full opacity-60 blur-xl"
          style={{ width: '250px', height: '150px', top: '30%', left: '-250px' }}
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="text-center z-10"
      >
        {/* Letter-by-letter fade-in effect */}
        <motion.h1 className="text-white text-5xl font-bold mb-4 flex justify-center flex-wrap">
          {headingText.split("").map((char, index) => (
            <motion.span key={index} variants={child}>
              {char === " " ? "\u00A0" : char} {/* Add non-breaking space for proper spacing */}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-white text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          Generate blog titles, content, YouTube SEO, and much more with ease.
        </motion.p>

        {/* Tagline with stylish fade and zoom-in effect */}
        <motion.p
          className="text-white text-2xl italic mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        >
          Empower Your Content Creation Journey with AI
        </motion.p>

        <motion.button
          onClick={handleGetStarted}
          className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-100 transition duration-300"
          whileHover={{ scale: 1.1, backgroundColor: '#E0E7FF' }} // Button hover animation
          whileTap={{ scale: 0.95 }} // Button click animation
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Background animation for rotating circles */}
      <motion.div
        className="absolute w-72 h-72 bg-indigo-300 rounded-full opacity-20 blur-2xl z-0"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ top: '10%', left: '70%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-300 rounded-full opacity-30 blur-2xl z-0"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1.2, rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ bottom: '20%', right: '60%' }}
      />
    </div>
  );
}
