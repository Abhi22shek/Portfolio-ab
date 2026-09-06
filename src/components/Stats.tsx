import { motion, useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import { statsData } from '@/constants';
import { scaleUp, staggerContainer } from '@/lib/animation';

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
  const cardRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || !numberRef.current) return;

    const targetNumber = parseInt(stat.number.replace(/[^0-9]/g, '')) || 0;
    const suffix = stat.number.replace(/[0-9]/g, '');
    const duration = 1600; // 1.6 seconds
    const startTime = performance.now();
    let rafId: number;

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * targetNumber);

      if (numberRef.current) {
        numberRef.current.textContent = `${current}${suffix}`;
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(updateCounter);
      } else if (numberRef.current) {
        numberRef.current.textContent = stat.number;
      }
    };

    rafId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, stat.number]);

  return (
    <motion.div
      ref={cardRef}
      variants={scaleUp}
      className='border border-border bg-card rounded-xl flex justify-center items-center flex-col py-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden group cursor-pointer'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      <motion.p
        ref={numberRef}
        className='text-4xl capitalize font-bold leading-number relative z-10 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent'
        animate={isInView ? { scale: [1, 1.08, 1] } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        0{stat.number.replace(/[0-9]/g, '')}
      </motion.p>
      <p className='text-muted-foreground relative z-10'>{stat.label}</p>
    </motion.div>
  );
};

export default Stats;
