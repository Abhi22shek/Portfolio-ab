export type ThemePreset =
    | 'light'
    | 'dark'
    | 'ocean'
    | 'cherry-blossom'
    | 'royal'
    | 'retro';

export type FontSize = 'small' | 'medium' | 'large' | 'extra-large';

export type AnimationSpeed = 'none' | 'reduced' | 'normal' | 'enhanced';

export interface ThemePreferences {
    preset: ThemePreset;
    accentColor: string | null;
    fontSize: FontSize;
    animationSpeed: AnimationSpeed;
    cursorGlowEnabled: boolean;
}

export interface ThemeContextType {
    preferences: ThemePreferences;
    setPreset: (preset: ThemePreset) => void;
    setAccentColor: (color: string | null) => void;
    setFontSize: (size: FontSize) => void;
    setAnimationSpeed: (speed: AnimationSpeed) => void;
    toggleCursorGlow: () => void;
    resetToDefaults: () => void;
}

export const DEFAULT_THEME_PREFERENCES: ThemePreferences = {
    preset: 'dark',
    accentColor: null,
    fontSize: 'medium',
    animationSpeed: 'normal',
    cursorGlowEnabled: true,
};

export const PRESET_ACCENT_COLORS = [
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Purple', value: '#a855f7' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Green', value: '#10b981' },
    { name: 'Orange', value: '#f97316' },
    { name: 'Red', value: '#ef4444' },
];
