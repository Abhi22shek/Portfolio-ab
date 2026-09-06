import { motion, useScroll, useTransform } from 'motion/react';
import { useTheme } from '@/lib/ThemeContext';

// Shape 1: Rotating Cyber Diamond with CSS float
const CyberDiamond = ({ className = '', style }: { className?: string; style?: any }) => (
  <motion.div
    style={style}
    className={`pointer-events-none will-change-transform ${className}`}
  >
    <div className='animate-float-slow'>
      <div className='relative w-12 h-12 lg:w-14 lg:h-14 border-2 border-primary/55 bg-primary/10 rounded-sm shadow-md shadow-primary/15 flex items-center justify-center rotate-45'>
        <div className='w-5 h-5 lg:w-6 lg:h-6 border border-primary/50 flex items-center justify-center'>
          <div className='w-1.5 h-1.5 rounded-full bg-primary animate-ping' />
        </div>
      </div>
    </div>
  </motion.div>
);

// Shape 2: Concentric Radar Orbit Ring with CSS float & spin
const DualOrbitRing = ({ className = '', style }: { className?: string; style?: any }) => (
  <motion.div
    style={style}
    className={`pointer-events-none will-change-transform ${className}`}
  >
    <div className='animate-float-reverse'>
      <div className='relative w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-primary/50 flex items-center justify-center bg-card/40 shadow-sm'>
        <div className='w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-dashed border-primary/70 animate-spin-slow flex items-center justify-center'>
          <div className='w-2 h-2 rounded-full bg-primary' />
        </div>
      </div>
    </div>
  </motion.div>
);

// Shape 3: Tactical Precision Crosshair with CSS float
const TacticalCrosshair = ({ className = '', style }: { className?: string; style?: any }) => (
  <motion.div
    style={style}
    className={`pointer-events-none will-change-transform ${className}`}
  >
    <div className='animate-float-slow'>
      <div className='relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center'>
        <div className='absolute w-full h-[2px] bg-primary/70 rounded-full' />
        <div className='absolute h-full w-[2px] bg-primary/70 rounded-full' />
        <div className='w-5 h-5 rounded-full border-2 border-primary/80 bg-background/90 z-10 flex items-center justify-center shadow-sm'>
          <div className='w-1.5 h-1.5 rounded-full bg-primary' />
        </div>
      </div>
    </div>
  </motion.div>
);

// Shape 4: Wireframe Hexagon with CSS float
const WireframeHexagon = ({ className = '', style }: { className?: string; style?: any }) => (
  <motion.div
    style={style}
    className={`pointer-events-none will-change-transform ${className}`}
  >
    <div className='animate-float-reverse'>
      <svg width='56' height='56' viewBox='0 0 64 64' fill='none' className='drop-shadow-sm'>
        <polygon
          points='32,4 58,19 58,45 32,60 6,45 6,19'
          stroke='var(--primary)'
          strokeWidth='2'
          fill='rgba(184, 72, 24, 0.08)'
          strokeDasharray='4 3'
        />
        <circle cx='32' cy='32' r='8' stroke='var(--primary)' strokeWidth='1.5' fill='none' />
        <circle cx='32' cy='32' r='2.5' fill='var(--primary)' />
      </svg>
    </div>
  </motion.div>
);

// Shape 5: Retro Tech Spec Capsule
const TechCapsule = ({ text, className = '', style }: { text: string; className?: string; style?: any }) => (
  <motion.div
    style={style}
    className={`pointer-events-none will-change-transform ${className}`}
  >
    <div className='animate-float-slow'>
      <div className='px-3 py-1.5 rounded-full border-2 border-primary/50 bg-card/90 shadow-sm flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider text-primary whitespace-nowrap'>
        <span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
        <span>{text}</span>
      </div>
    </div>
  </motion.div>
);

// Shape 6: Dashed Matrix Square
const DashedSquare = ({ className = '', style }: { className?: string; style?: any }) => (
  <motion.div
    style={style}
    className={`pointer-events-none will-change-transform ${className}`}
  >
    <div className='animate-float-reverse'>
      <div className='w-12 h-12 lg:w-14 lg:h-14 border-2 border-dashed border-primary/60 rounded-xl bg-card/40 shadow-sm flex items-center justify-center'>
        <div className='w-5 h-5 lg:w-6 lg:h-6 border-2 border-primary/70 rotate-45 flex items-center justify-center'>
          <div className='w-1.5 h-1.5 rounded-full bg-primary' />
        </div>
      </div>
    </div>
  </motion.div>
);

// Shape 7: Triangle Delta
const TriangleDelta = ({ className = '', style }: { className?: string; style?: any }) => (
  <motion.div
    style={style}
    className={`pointer-events-none will-change-transform ${className}`}
  >
    <div className='animate-float-slow'>
      <svg width='50' height='50' viewBox='0 0 56 56' fill='none' className='drop-shadow-sm'>
        <polygon
          points='28,6 50,48 6,48'
          stroke='var(--primary)'
          strokeWidth='2'
          fill='rgba(184, 72, 24, 0.08)'
        />
        <circle cx='28' cy='6' r='3' fill='var(--primary)' />
        <circle cx='50' cy='48' r='3' fill='var(--primary)' />
        <circle cx='6' cy='48' r='3' fill='var(--primary)' />
        <circle cx='28' cy='34' r='4' stroke='var(--primary)' strokeWidth='1.5' />
      </svg>
    </div>
  </motion.div>
);

// Shape 8: 8-Point Retro Star
const RetroStar = ({ className = '', style }: { className?: string; style?: any }) => (
  <motion.div
    style={style}
    className={`pointer-events-none will-change-transform ${className}`}
  >
    <div className='animate-float-reverse'>
      <div className='relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center animate-spin-slow'>
        <div className='absolute w-full h-[2px] bg-primary/70' />
        <div className='absolute h-full w-[2px] bg-primary/70' />
        <div className='absolute w-full h-[2px] bg-primary/70 rotate-45' />
        <div className='absolute h-full w-[2px] bg-primary/70 rotate-45' />
        <div className='w-3 h-3 rounded-full bg-primary/90' />
      </div>
    </div>
  </motion.div>
);

const ParallaxBackground = () => {
  const { preferences } = useTheme();
  const isDarkPreset = ['dark', 'ocean', 'royal'].includes(preferences.preset);
  const { scrollYProgress } = useScroll();

  // Optimized shared parallax transforms (reduced hook overhead, hardware friendly)
  const grid1Y = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const grid2Y = useTransform(scrollYProgress, [0, 1], [0, -680]);

  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [60, -480]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [140, -380]);
  const orb4Y = useTransform(scrollYProgress, [0, 1], [250, -200]);

  const yFast = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const yMed = useTransform(scrollYProgress, [0, 1], [0, -380]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [-40, 160]);

  return (
    <>
      {/* ============================================================ */}
      {/* 1. FIXED VIEWPORT LAYER: DOT MATRIX & LIGHTS (DARK PRESETS) */}
      {/* ============================================================ */}
      {isDarkPreset && (
        <div
          className='fixed inset-0 pointer-events-none overflow-hidden z-0 animate-in fade-in duration-500'
          style={{ contain: 'paint' }}
        >
          {/* DOT GRID 1: Fine Dot Matrix (Speed 1: -260px) */}
          <motion.div
            style={{ y: grid1Y, transform: 'translateZ(0)' }}
            className='absolute -top-10 -bottom-80 inset-x-0 w-full opacity-90 will-change-transform'
          >
            <div
              className='w-full h-full'
              style={{
                backgroundImage: 'radial-gradient(circle, var(--dot-grid-1) 1.5px, transparent 1.5px)',
                backgroundSize: '32px 32px',
              }}
            />
          </motion.div>

          {/* DOT GRID 2: Macro Accent Grid (Speed 2: -680px, 2.6x faster!) */}
          <motion.div
            style={{ y: grid2Y, transform: 'translateZ(0)' }}
            className='absolute -top-10 -bottom-[700px] inset-x-0 w-full opacity-75 will-change-transform'
          >
            <div
              className='w-full h-full'
              style={{
                backgroundImage: `
                  radial-gradient(circle, var(--dot-grid-2) 2px, transparent 2px),
                  linear-gradient(to right, var(--dot-grid-line) 1px, transparent 1px),
                  linear-gradient(to bottom, var(--dot-grid-line) 1px, transparent 1px)
                `,
                backgroundSize: '64px 64px',
              }}
            />
          </motion.div>

          {/* GRADIENT LIGHTS / ORBS (BLACK THEME ONLY) */}
          <motion.div
            style={{ y: orb1Y, transform: 'translateZ(0)' }}
            className='absolute -top-20 -right-20 w-[440px] h-[440px] rounded-full will-change-transform animate-pulse-soft'
          >
            <div
              className='w-full h-full rounded-full'
              style={{
                background: 'radial-gradient(circle, var(--orb-1) 0%, var(--orb-2) 45%, transparent 70%)',
              }}
            />
          </motion.div>

          <motion.div
            style={{ y: orb2Y, transform: 'translateZ(0)' }}
            className='absolute top-[32%] -left-28 w-[480px] h-[480px] rounded-full will-change-transform animate-pulse-soft'
          >
            <div
              className='w-full h-full rounded-full'
              style={{
                background: 'radial-gradient(circle, var(--orb-2) 0%, var(--orb-1) 45%, transparent 70%)',
              }}
            />
          </motion.div>

          <motion.div
            style={{ y: orb3Y, transform: 'translateZ(0)' }}
            className='absolute top-[58%] -right-28 w-[460px] h-[460px] rounded-full will-change-transform animate-pulse-soft'
          >
            <div
              className='w-full h-full rounded-full'
              style={{
                background: 'radial-gradient(circle, var(--orb-3) 0%, var(--orb-2) 45%, transparent 70%)',
              }}
            />
          </motion.div>

          <motion.div
            style={{ y: orb4Y, transform: 'translateZ(0)' }}
            className='absolute top-[78%] left-[6%] w-[500px] h-[500px] rounded-full will-change-transform animate-pulse-soft'
          >
            <div
              className='w-full h-full rounded-full'
              style={{
                background: 'radial-gradient(circle, var(--orb-4) 0%, var(--orb-1) 45%, transparent 70%)',
              }}
            />
          </motion.div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 2. SECTION FLOATING SHAPES (GPU COMPOSITED)                 */}
      {/* ============================================================ */}
      <div
        className='absolute inset-0 pointer-events-none overflow-hidden z-0'
        style={{ contain: 'paint' }}
      >
        {/* Hero Shapes */}
        <CyberDiamond
          className='absolute top-[4%] right-[3%] lg:right-[6%]'
          style={{ y: yFast }}
        />
        <DualOrbitRing
          className='absolute top-[8%] left-[3%] lg:left-[5%]'
          style={{ y: yMed }}
        />
        <TechCapsule
          text='SYS // FULLSTACK'
          className='absolute top-[13%] right-[4%] lg:right-[8%]'
          style={{ y: ySlow }}
        />

        {/* Stats Shapes */}
        <TacticalCrosshair
          className='absolute top-[21%] left-[3%] lg:left-[6%]'
          style={{ y: ySlow }}
        />
        <WireframeHexagon
          className='absolute top-[25%] right-[3%] lg:right-[5%]'
          style={{ y: yMed }}
        />

        {/* Projects Shapes */}
        <DashedSquare
          className='absolute top-[34%] left-[2%] lg:left-[4%]'
          style={{ y: yFast }}
        />
        <DualOrbitRing
          className='absolute top-[40%] right-[2%] lg:right-[5%]'
          style={{ y: yReverse }}
        />

        {/* About Shapes */}
        <TriangleDelta
          className='absolute top-[53%] left-[3%] lg:left-[5%]'
          style={{ y: yMed }}
        />
        <TacticalCrosshair
          className='absolute top-[58%] right-[3%] lg:right-[6%]'
          style={{ y: ySlow }}
        />

        {/* Services Shapes */}
        <WireframeHexagon
          className='absolute top-[67%] left-[3%] lg:left-[6%]'
          style={{ y: yFast }}
        />

        {/* Resume Shapes */}
        <RetroStar
          className='absolute top-[79%] left-[3%] lg:left-[5%]'
          style={{ y: yMed }}
        />

        {/* Contact Shapes */}
        <CyberDiamond
          className='absolute top-[91%] left-[3%] lg:left-[5%]'
          style={{ y: yFast }}
        />
        <DualOrbitRing
          className='absolute top-[95%] right-[3%] lg:right-[6%]'
          style={{ y: yMed }}
        />
      </div>
    </>
  );
};

export default ParallaxBackground;
