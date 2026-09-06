import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useTheme } from '@/lib/ThemeContext';

const GlowCursor = () => {
  const { preferences } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const isHoveringRef = useRef(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Ultra-responsive spring config: zero perceived latency, silky-smooth follow
  const springConfig = { damping: 38, stiffness: 720, mass: 0.08 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only apply on fine pointer devices (desktops/laptops)
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) return;

    let rafId: number | null = null;

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }

      // Throttle hover detection to animation frames and avoid getComputedStyle
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = null;
          const target = e.target as HTMLElement | null;
          if (target) {
            const isInteractive = Boolean(
              target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')
            );
            if (isInteractive !== isHoveringRef.current) {
              isHoveringRef.current = isInteractive;
              setIsHovering(isInteractive);
            }
          }
        });
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!preferences.cursorGlowEnabled || !isVisible) return null;

  return (
    <motion.div
      className='fixed top-0 left-0 pointer-events-none z-[9999] hidden sm:block will-change-transform'
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {/* Glow aura - GPU friendly */}
      <div
        className={`rounded-full transition-all duration-200 ${
          isHovering
            ? 'w-14 h-14 bg-primary/25 scale-125'
            : 'w-10 h-10 bg-primary/15'
        }`}
        style={{
          boxShadow: isHovering
            ? '0 0 25px 8px rgba(184, 72, 24, 0.25)'
            : '0 0 15px 4px rgba(184, 72, 24, 0.15)',
        }}
      />

      {/* Center sharp dot */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-transform duration-150 ${
          isHovering ? 'w-3 h-3 scale-110' : 'w-2 h-2'
        }`}
      />
    </motion.div>
  );
};

export default GlowCursor;
