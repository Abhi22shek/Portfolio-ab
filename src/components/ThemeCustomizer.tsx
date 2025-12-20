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
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('themes');
  const [customColor, setCustomColor] = useState('#3b82f6');
  const theme = useTheme();

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setCustomColor(color);
    theme.setAccentColor(color);
  };

  return (
    <>
      {/* Trigger Button - Visible on all screen sizes */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-20 md:right-6 z-40 border-2 border-border hover:border-primary rounded-full bg-card shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Open theme customizer"
      >
        <Palette className="size-5" />
      </Button>

      {/* Customizer Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border shadow-2xl z-[70] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Customize Theme</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Personalize your experience
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close customizer"
                >
                  <X className="size-5" />
                </Button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-border">
                <button
                  onClick={() => setActiveTab('themes')}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'themes'
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Palette className="size-4 inline-block mr-2" />
                  Themes
                </button>
                <button
                  onClick={() => setActiveTab('colors')}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'colors'
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Palette className="size-4 inline-block mr-2" />
                  Colors
                </button>
                <button
                  onClick={() => setActiveTab('accessibility')}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'accessibility'
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Type className="size-4 inline-block mr-2" />
                  A11y
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Themes Tab */}
                {activeTab === 'themes' && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                      Preset Themes
                    </h3>
                    {THEME_PRESETS.map((preset) => {
                      const Icon = preset.icon;
                      const isActive = theme.preferences.preset === preset.id;
                      return (
                        <button
                          key={preset.id}
                          onClick={() => theme.setPreset(preset.id)}
                          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                            isActive
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50 bg-card'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-lg ${
                                isActive ? 'bg-primary text-primary-foreground' : 'bg-muted'
                              }`}
                            >
                              <Icon className="size-5" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold">{preset.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {preset.description}
                              </div>
                            </div>
                            {isActive && (
                              <div className="size-2 rounded-full bg-primary" />
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
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                        Accent Color
                      </h3>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {PRESET_ACCENT_COLORS.map((color) => (
                          <button
                            key={color.value}
                            onClick={() => theme.setAccentColor(color.value)}
                            className={`p-3 rounded-lg border-2 transition-all ${
                              theme.preferences.accentColor === color.value
                                ? 'border-primary scale-105'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <div
                              className="w-full h-12 rounded-md"
                              style={{ backgroundColor: color.value }}
                            />
                            <div className="text-xs mt-2 text-center font-medium">
                              {color.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                        Custom Color
                      </h3>
                      <div className="flex gap-3 items-center">
                        <input
                          type="color"
                          value={customColor}
                          onChange={handleCustomColorChange}
                          className="w-20 h-12 rounded-lg border-2 border-border cursor-pointer"
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
                            placeholder="#3b82f6"
                          />
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => theme.setAccentColor(null)}
                        className="mt-3 w-full"
                      >
                        Reset to Default
                      </Button>
                    </div>
                  </div>
                )}

                {/* Accessibility Tab */}
                {activeTab === 'accessibility' && (
                  <div className="space-y-6">
                    {/* Font Size */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Type className="size-4 text-muted-foreground" />
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          Font Size
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {FONT_SIZES.map((size) => (
                          <button
                            key={size.id}
                            onClick={() => theme.setFontSize(size.id)}
                            className={`px-4 py-3 rounded-lg border-2 transition-all ${
                              theme.preferences.fontSize === size.id
                                ? 'border-primary bg-primary/10'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            {size.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Animation Speed */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="size-4 text-muted-foreground" />
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          Animation Speed
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {ANIMATION_SPEEDS.map((speed) => (
                          <button
                            key={speed.id}
                            onClick={() => theme.setAnimationSpeed(speed.id)}
                            className={`px-4 py-3 rounded-lg border-2 transition-all ${
                              theme.preferences.animationSpeed === speed.id
                                ? 'border-primary bg-primary/10'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            {speed.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Cursor Glow */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <MousePointer2 className="size-4 text-muted-foreground" />
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          Cursor Effect
                        </h3>
                      </div>
                      <button
                        onClick={theme.toggleCursorGlow}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                          theme.preferences.cursorGlowEnabled
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {theme.preferences.cursorGlowEnabled ? 'Enabled' : 'Disabled'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={theme.resetToDefaults}
                  className="w-full"
                >
                  <RotateCcw className="size-4 mr-2" />
                  Reset to Defaults
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
