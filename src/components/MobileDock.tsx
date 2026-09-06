import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { useScroll, useMotionValueEvent } from 'motion/react';
import ThemeToggle from './ThemeToggle';

const MobileDock = () => {
  const [active, setActive] = useState('#hero');
  const activeRef = useRef('#hero');
  const [isVisible, setIsVisible] = useState(true);
  const isVisibleRef = useRef(true);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // Hide dock when scrolling down fast, show when scrolling up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const diff = latest - lastScrollY.current;
    if (diff > 15 && isVisibleRef.current) {
      isVisibleRef.current = false;
      setIsVisible(false);
    } else if (diff < -8 && !isVisibleRef.current) {
      isVisibleRef.current = true;
      setIsVisible(true);
    }
    lastScrollY.current = latest;
  });

  // Track active section via lightweight IntersectionObserver (no layout thrashing)
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
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className='fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden'
        >
          <div className='flex items-center gap-1 px-3 py-2 bg-card/90 backdrop-blur-xl border border-border rounded-2xl shadow-2xl'>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = active === link.link;
              return (
                <a
                  key={link.label}
                  href={link.link}
                  onClick={() => {
                    activeRef.current = link.link;
                    setActive(link.link);
                  }}
                  className='relative p-2.5 rounded-xl transition-all duration-300'
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId='dock-active'
                      className='absolute inset-0 bg-primary/10 rounded-xl'
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  <motion.div
                    animate={{ scale: isActive ? 1.15 : 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className='relative z-10'
                  >
                    <Icon
                      className={cn(
                        'size-5 transition-colors duration-300',
                        isActive ? 'text-primary' : 'text-muted-foreground'
                      )}
                    />
                  </motion.div>

                  {/* Active dot indicator */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className='absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary'
                    />
                  )}
                </a>
              );
            })}

            {/* Divider */}
            <div className='w-px h-5 bg-border mx-0.5' />

            {/* Theme Toggle Button */}
            <ThemeToggle compact className='p-2 border-0 bg-transparent shadow-none hover:bg-primary/10' />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileDock;
