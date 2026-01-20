import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useTheme } from '@/lib/ThemeContext';

const GlowCursor = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Don't render if cursor glow is disabled
  if (!theme.preferences.cursorGlowEnabled) {
    return null;
  }

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smoother spring config
  const springConfig = { damping: 30, stiffness: 400, mass: 0.3 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide system cursor on desktop
    const style = document.createElement('style');
    style.innerHTML = `
      @media (min-width: 500px) {
        * {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.onclick !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.head.removeChild(style);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className='fixed top-0 left-0 pointer-events-none z-[9999] hidden  sm:block'
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className='w-15 h-15 rounded-full bg-primary/20 blur-xl -translate-x-1/2 -translate-y-1/2'
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
          }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className='fixed top-0 left-0 pointer-events-none z-[9999] hidden sm:block'
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className='w-8 h-8 rounded-full border-2 border-primary/30 -translate-x-1/2 -translate-y-1/2'
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
          }}
        />
      </motion.div>

      {/* Main cursor dot */}
      <motion.div
        className='fixed top-0 left-0 pointer-events-none z-[9999] hidden sm:block'
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className='w-2 h-2 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2'
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            type: 'spring',
            damping: 15,
            stiffness: 400,
          }}
        />
      </motion.div>
    </>
  );
};

export default GlowCursor;
