import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const FloatingMenu = () => {
  const [active, setActive] = useState('#hero');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const activeRef = useRef('#hero');

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.link.replace('#', ''));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const activeId = `#${visibleEntries[0].target.id}`;
          if (activeId !== activeRef.current) {
            activeRef.current = activeId;
            setActive(activeId);
          }
        }
      },
      {
        rootMargin: '-15% 0px -35% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className='fixed right-10 top-1/2 -translate-y-1/2 bg-card border border-border rounded-full py-4 md:z-50 z-10 hidden lg:block shadow-lg'>
      {navLinks.map((link) => {
        const Icon = link.icon;
        const isActive = active === link.link;
        const isHovered = hoveredLink === link.link;

        return (
          <motion.a
            key={link.label}
            href={link.link}
            onClick={() => setActive(link.link)}
            onMouseEnter={() => setHoveredLink(link.link)}
            onMouseLeave={() => setHoveredLink(null)}
            className={cn(
              'relative flex items-center justify-center rounded-full flex-col mb-4 last:mb-0 px-4 py-2 group',
              'transition-all duration-300 outline-none focus:outline-none'
            )}
            whileHover={{ scale: 1.2, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Icon with smooth color and scale transition */}
            <motion.div
              animate={{
                scale: isActive ? 1.15 : 1,
                rotate: isActive ? [0, -10, 10, 0] : 0,
              }}
              transition={{
                scale: { duration: 0.3 },
                rotate: { duration: 0.5 },
              }}
              className={cn(
                'transition-colors duration-300',
                isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
              )}
            >
              <Icon className='size-5' />
            </motion.div>

            {/* Tooltip on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className='absolute right-full mr-4 px-3 py-2 bg-card border border-border rounded-lg shadow-xl whitespace-nowrap z-50'
                >
                  <span className='text-sm font-medium'>{link.label}</span>
                  {/* Arrow pointing to icon */}
                  <div className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-full'>
                    <div className='w-0 h-0 border-l-[6px] border-l-border border-y-[6px] border-y-transparent' />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ripple effect on active */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className='absolute inset-0 bg-primary/10 rounded-full -z-10'
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </AnimatePresence>

            {/* Pulse animation on active */}
            {isActive && (
              <motion.div
                className='absolute inset-0 bg-primary/20 rounded-full -z-20'
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}
          </motion.a>
        );
      })}

      <div className='w-6 h-px bg-border mx-auto my-2' />
      <div className='flex justify-center'>
        <ThemeToggle compact className='border-0 bg-transparent shadow-none hover:bg-primary/10' />
      </div>
    </div>
  );
};

export default FloatingMenu;