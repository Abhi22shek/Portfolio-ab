import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Palette,
  Type,
  Zap,
  MousePointer2,
  RotateCcw,
  X,
  Moon,
  Sun,
  Waves,
  Flower2,
  Crown,
  Coffee,
} from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';
import { PRESET_ACCENT_COLORS } from '@/types/theme';
import type { ThemePreset, FontSize, AnimationSpeed } from '@/types/theme';
import { Button } from './ui/button';

const THEME_PRESETS: Array<{
  id: ThemePreset;
  name: string;
  icon: typeof Moon;
  description: string;
}> = [
  { id: 'dark', name: 'Dark', icon: Moon, description: 'Classic dark mode' },
  { id: 'light', name: 'Light', icon: Sun, description: 'Clean light mode' },
  { id: 'ocean', name: 'Ocean', icon: Waves, description: 'Cool blues & teals' },
  { id: 'cherry-blossom', name: 'Cherry Blossom', icon: Flower2, description: 'Soft pinks & whites' },
  { id: 'royal', name: 'Royal', icon: Crown, description: 'Deep purple & gold' },
  { id: 'retro', name: 'Retro', icon: Coffee, description: 'Sepia & burnt orange' },
];

const FONT_SIZES: Array<{ id: FontSize; label: string }> = [
  { id: 'small', label: 'Small' },
  { id: 'medium', label: 'Medium' },
  { id: 'large', label: 'Large' },
  { id: 'extra-large', label: 'Extra Large' },
];

const ANIMATION_SPEEDS: Array<{ id: AnimationSpeed; label: string }> = [
  { id: 'none', label: 'None' },
  { id: 'reduced', label: 'Reduced' },
  { id: 'normal', label: 'Normal' },
  { id: 'enhanced', label: 'Enhanced' },
];

type Tab = 'themes' | 'colors' | 'accessibility';

export default function ThemeCustomizer() {
  const [activeTab, setActiveTab] = useState<Tab>('themes');
  const [customColor, setCustomColor] = useState('#f97316');
  const theme = useTheme();

  const isOpen = theme.isCustomizerOpen;
  const setIsOpen = theme.setIsCustomizerOpen;

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setCustomColor(color);
    theme.setAccentColor(color);
  };

  return (
    <AnimatePresence>
      {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[70]"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border shadow-2xl z-[80] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Customize Theme</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Personalize themes, colors & accessibility
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close customizer"
                  className="rounded-full cursor-pointer hover:bg-primary/10"
                >
                  <X className="size-5" />
                </Button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-border">
                <button
                  onClick={() => setActiveTab('themes')}
                  className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors cursor-pointer ${
                    activeTab === 'themes'
                      ? 'border-b-2 border-primary text-primary bg-primary/5'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Palette className="size-4 inline-block mr-2" />
                  Themes
                </button>
                <button
                  onClick={() => setActiveTab('colors')}
                  className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors cursor-pointer ${
                    activeTab === 'colors'
                      ? 'border-b-2 border-primary text-primary bg-primary/5'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Palette className="size-4 inline-block mr-2" />
                  Colors
                </button>
                <button
                  onClick={() => setActiveTab('accessibility')}
                  className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors cursor-pointer ${
                    activeTab === 'accessibility'
                      ? 'border-b-2 border-primary text-primary bg-primary/5'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Type className="size-4 inline-block mr-2" />
                  Font & FX
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Themes Tab */}
                {activeTab === 'themes' && (
                  <div className="grid grid-cols-1 gap-3">
                    {THEME_PRESETS.map((preset) => {
                      const Icon = preset.icon;
                      const isActive = theme.preferences.preset === preset.id;
                      return (
                        <button
                          key={preset.id}
                          onClick={() => theme.setPreset(preset.id)}
                          className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                            isActive
                              ? 'border-primary bg-primary/10 shadow-md'
                              : 'border-border hover:border-primary/50 bg-background/50 hover:bg-background'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2.5 rounded-lg ${
                                isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                              }`}
                            >
                              <Icon className="size-5" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-foreground">{preset.name}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {preset.description}
                              </div>
                            </div>
                            {isActive && (
                              <div className="size-2.5 rounded-full bg-primary animate-pulse" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Colors Tab */}
                {activeTab === 'colors' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                        Preset Accent Colors
                      </h3>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {PRESET_ACCENT_COLORS.map((color) => (
                          <button
                            key={color.value}
                            onClick={() => theme.setAccentColor(color.value)}
                            className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${
                              theme.preferences.accentColor === color.value
                                ? 'border-primary scale-105 shadow-md'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <div
                              className="w-full h-10 rounded-lg shadow-inner"
                              style={{ backgroundColor: color.value }}
                            />
                            <div className="text-xs mt-2 text-center font-medium">
                              {color.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                        Custom Color Picker
                      </h3>
                      <div className="flex gap-3 items-center">
                        <input
                          type="color"
                          value={customColor}
                          onChange={handleCustomColorChange}
                          className="w-16 h-12 rounded-lg border-2 border-border cursor-pointer bg-transparent"
                        />
                        <div className="flex-1">
                          <input
                            type="text"
                            value={customColor}
                            onChange={(e) => {
                              setCustomColor(e.target.value);
                              if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                                theme.setAccentColor(e.target.value);
                              }
                            }}
                            className="w-full px-3 py-2 rounded-lg border-2 border-border bg-background font-mono text-sm"
                            placeholder="#f97316"
                          />
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => theme.setAccentColor(null)}
                        className="mt-3 w-full cursor-pointer"
                      >
                        Reset Accent to Default
                      </Button>
                    </div>
                  </div>
                )}

                {/* Accessibility Tab */}
                {activeTab === 'accessibility' && (
                  <div className="space-y-6">
                    {/* Font Size */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Type className="size-4 text-primary" />
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          Font Size Scaling
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {FONT_SIZES.map((size) => (
                          <button
                            key={size.id}
                            onClick={() => theme.setFontSize(size.id)}
                            className={`px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all cursor-pointer ${
                              theme.preferences.fontSize === size.id
                                ? 'border-primary bg-primary/10 text-primary font-bold shadow-sm'
                                : 'border-border hover:border-primary/50 text-muted-foreground'
                            }`}
                          >
                            {size.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Animation Speed */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="size-4 text-primary" />
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          Animation Speed
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {ANIMATION_SPEEDS.map((speed) => (
                          <button
                            key={speed.id}
                            onClick={() => theme.setAnimationSpeed(speed.id)}
                            className={`px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all cursor-pointer ${
                              theme.preferences.animationSpeed === speed.id
                                ? 'border-primary bg-primary/10 text-primary font-bold shadow-sm'
                                : 'border-border hover:border-primary/50 text-muted-foreground'
                            }`}
                          >
                            {speed.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Cursor Glow */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <MousePointer2 className="size-4 text-primary" />
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          Custom Glow Cursor
                        </h3>
                      </div>
                      <button
                        onClick={theme.toggleCursorGlow}
                        className={`w-full px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all cursor-pointer ${
                          theme.preferences.cursorGlowEnabled
                            ? 'border-primary bg-primary/10 text-primary font-bold shadow-sm'
                            : 'border-border hover:border-primary/50 text-muted-foreground'
                        }`}
                      >
                        {theme.preferences.cursorGlowEnabled ? 'Enabled' : 'Disabled'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border bg-card">
                <Button
                  variant="outline"
                  onClick={theme.resetToDefaults}
                  className="w-full cursor-pointer hover:border-primary"
                >
                  <RotateCcw className="size-4 mr-2" />
                  Reset All to Defaults
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
  );
}
