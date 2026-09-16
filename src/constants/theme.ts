import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#F4F4F5',
    background: '#09090B',
    backgroundElement: '#18181B',
    backgroundSelected: '#27272A',
    textSecondary: '#A1A1AA',
    accent: '#7C9CFF',
    separator: '#2A2A2E',
    chip: '#1F1F23',
  },
  dark: {
    text: '#F4F4F5',
    background: '#09090B',
    backgroundElement: '#18181B',
    backgroundSelected: '#27272A',
    textSecondary: '#A1A1AA',
    accent: '#7C9CFF',
    separator: '#2A2A2E',
    chip: '#1F1F23',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export const Shadows = {
  card: '0 1px 2px rgba(0, 0, 0, 0.35)',
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
export const WebTabOffset = 96;

export const PortfolioGrid = {
  minCardWidth: 160,
  compactMaxWidth: 600,
  minColumns: 2,
  metaHeight: 104,
  iconInset: 16,
} as const;
