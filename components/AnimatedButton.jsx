import { motion } from 'framer-motion';

export default function AnimatedButton({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}