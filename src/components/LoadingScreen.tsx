import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  const firstName = 'ABHISHEK';
  const lastName = 'BORANA';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2.4 }}
      className='fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden'
      onAnimationComplete={() => setIsLoading(false)}
    >
      {/* Background gradient pulse */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5'
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className='text-center relative z-10'>
        {/* Staggered first name */}
        <div className='flex justify-center mb-1'>
          {firstName.split('').map((char, i) => (
            <motion.span
              key={`first-${i}`}
              initial={{ y: 40, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className='text-5xl md:text-6xl font-bold tracking-wider inline-block'
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Staggered last name */}
        <div className='flex justify-center'>
          {lastName.split('').map((char, i) => (
            <motion.span
              key={`last-${i}`}
              initial={{ y: 40, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + i * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className='text-5xl md:text-6xl font-bold tracking-wider text-primary inline-block'
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeInOut' }}
          className='h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mt-4 mx-auto max-w-xs'
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className='text-sm text-muted-foreground mt-3 tracking-[0.3em] uppercase'
        >
          Full-Stack Developer
        </motion.p>
      </div>

      {/* Corner decorations */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-primary/30'
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-primary/30'
      />
    </motion.div>
  );
};

export default LoadingScreen;
