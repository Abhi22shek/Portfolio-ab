import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type {
  ThemePreferences,
  ThemeContextType,
  ThemePreset,
  FontSize,
  AnimationSpeed,
} from '@/types/theme';
import { DEFAULT_THEME_PREFERENCES } from '@/types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-theme-preferences';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<ThemePreferences>(DEFAULT_THEME_PREFERENCES);
  const [mounted, setMounted] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ThemePreferences;
        setPreferences(parsed);
        applyTheme(parsed);
      } catch (error) {
        console.error('Failed to parse theme preferences:', error);
        applyTheme(DEFAULT_THEME_PREFERENCES);
      }
    } else {
      // Check for legacy theme preference
      const legacyTheme = localStorage.getItem('theme') as ThemePreset | null;
      if (legacyTheme === 'dark' || legacyTheme === 'light') {
        const migratedPrefs = { ...DEFAULT_THEME_PREFERENCES, preset: legacyTheme };
        setPreferences(migratedPrefs);
        applyTheme(migratedPrefs);
      } else {
        // Use system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialPrefs = {
          ...DEFAULT_THEME_PREFERENCES,
          preset: (prefersDark ? 'dark' : 'light') as ThemePreset,
        };
        setPreferences(initialPrefs);
        applyTheme(initialPrefs);
      }
    }
  }, []);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      applyTheme(preferences);
    }
  }, [preferences, mounted]);

  const applyTheme = (prefs: ThemePreferences) => {
    const root = document.documentElement;
    const body = document.body;

    // Apply theme preset
    root.classList.remove(
      'dark',
      'light',
      'ocean',
      'cherry-blossom',
      'royal',
      'retro'
    );
    body.classList.remove(
      'dark',
      'light',
      'ocean',
      'cherry-blossom',
      'royal',
      'retro'
    );
    root.classList.add(prefs.preset);
    body.classList.add(prefs.preset);

    // Apply accent color
    if (prefs.accentColor) {
      root.style.setProperty('--accent-override', prefs.accentColor);
    } else {
      root.style.removeProperty('--accent-override');
    }

    // Apply font size
    const fontSizeMap: Record<FontSize, string> = {
      small: '0.875',
      medium: '1',
      large: '1.125',
      'extra-large': '1.25',
    };
    root.style.setProperty('--font-size-scale', fontSizeMap[prefs.fontSize]);

    // Apply animation speed
    const animationSpeedMap: Record<AnimationSpeed, string> = {
      none: '0',
      reduced: '0.5',
      normal: '1',
      enhanced: '1.5',
    };
    root.style.setProperty('--animation-speed-scale', animationSpeedMap[prefs.animationSpeed]);

    // Apply cursor glow preference
    root.setAttribute('data-cursor-glow', prefs.cursorGlowEnabled.toString());
  };

  const setPreset = (preset: ThemePreset) => {
    setPreferences((prev) => ({ ...prev, preset }));
  };

  const setAccentColor = (color: string | null) => {
    setPreferences((prev) => ({ ...prev, accentColor: color }));
  };

  const setFontSize = (fontSize: FontSize) => {
    setPreferences((prev) => ({ ...prev, fontSize }));
  };

  const setAnimationSpeed = (speed: AnimationSpeed) => {
    setPreferences((prev) => ({ ...prev, animationSpeed: speed }));
  };

  const toggleCursorGlow = () => {
    setPreferences((prev) => ({ ...prev, cursorGlowEnabled: !prev.cursorGlowEnabled }));
  };

  const resetToDefaults = () => {
    setPreferences(DEFAULT_THEME_PREFERENCES);
  };

  const value: ThemeContextType = {
    preferences,
    setPreset,
    setAccentColor,
    setFontSize,
    setAnimationSpeed,
    toggleCursorGlow,
    resetToDefaults,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
