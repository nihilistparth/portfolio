import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Scene3D } from './3D/Scene3D';
import { ErrorBoundary } from './ErrorBoundary';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm [Your Name]
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 dark:text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <ErrorBoundary fallback={
            <div className="w-full h-[500px] bg-gray-900 rounded-lg flex items-center justify-center text-white">
              Could not load 3D scene
            </div>
          }>
            <Scene3D />
          </ErrorBoundary>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 -z-10" />
    </section>
  );
};

export default Hero; 