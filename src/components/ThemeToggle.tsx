import { motion } from 'motion/react';
import { Palette, Waves, Flower2, Crown, Coffee, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';
import type { ThemePreset } from '@/types/theme';

interface ThemeToggleProps {
  compact?: boolean;
  className?: string;
}

const THEME_ICONS: Record<ThemePreset, typeof Moon> = {
  dark: Moon,
  light: Sun,
  ocean: Waves,
  'cherry-blossom': Flower2,
  royal: Crown,
  retro: Coffee,
};

const ThemeToggle = ({ compact = false, className = '' }: ThemeToggleProps) => {
  const { preferences, toggleCustomizer } = useTheme();
  const CurrentIcon = THEME_ICONS[preferences.preset] || Palette;

  if (compact) {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleCustomizer}
        aria-label={`Manage themes (current: ${preferences.preset})`}
        title={`Theme: ${preferences.preset} (Click to manage all themes)`}
        className={`relative p-2.5 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer shadow-sm ${className}`}
      >
        <motion.div
          key={preferences.preset}
          initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.25 }}
          className='flex items-center justify-center'
        >
          <CurrentIcon className='size-4 text-primary' />
        </motion.div>
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.96 }}
      onClick={toggleCustomizer}
      aria-label='Manage themes, colors & fonts'
      title='Click to manage all themes, colors & fonts'
      className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/90 bg-card/90 hover:bg-card hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer ${className}`}
    >
      <div className='flex items-center gap-1.5 text-xs font-semibold'>
        <motion.div
          key={preferences.preset}
          initial={{ rotate: -180, scale: 0.5 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className='p-1 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200'
        >
          <CurrentIcon className='size-3.5' />
        </motion.div>
        <span className='capitalize font-medium text-foreground text-xs tracking-wide'>
          {preferences.preset.replace('-', ' ')}
        </span>
      </div>

      <div className='w-px h-3.5 bg-border/80 group-hover:bg-primary/30 transition-colors' />

      <div className='flex items-center gap-1 text-[11px] text-muted-foreground group-hover:text-primary transition-colors font-medium'>
        <Palette className='size-3 text-primary' />
        <span className='hidden sm:inline text-[10px] font-mono uppercase tracking-wider text-muted-foreground group-hover:text-foreground'>
          Themes
        </span>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
