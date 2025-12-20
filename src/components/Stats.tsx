import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { statsData } from '@/constants';
import { fadeUp, staggerContainer } from '@/lib/animation';

const Stats = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={staggerContainer(0.6)}
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20'
      id='stats'
    >
      {statsData.map((stat, i) => (
        <StatCard key={i} stat={stat} index={i} />
      ))}
    </motion.section>
  );
};

const StatCard = ({ stat, index }: { stat: { number: string; label: string }; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Extract number from string (e.g., "10+" -> 10, "100%" -> 100)
      const targetNumber = parseInt(stat.number.replace(/[^0-9]/g, ''));
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetNumber / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.number]);

  // Format the display number with original suffix
  const displayNumber = stat.number.replace(/[0-9]/g, '').length > 0
    ? count + stat.number.replace(/[0-9]/g, '')
    : count.toString();

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className='border border-border bg-card rounded-xl flex justify-center items-center flex-col py-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden group cursor-pointer'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      <motion.p
        className='text-4xl capitalize font-bold leading-number relative z-10 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent'
        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {displayNumber}
      </motion.p>
      <p className='text-muted-foreground relative z-10'>{stat.label}</p>
    </motion.div>
  );
};

export default Stats;
