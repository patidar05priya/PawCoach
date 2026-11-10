import type { AppTheme } from './types';

export const THEMES: AppTheme[] = [
  {
    id: 'zoomies',
    name: 'Zoomies',
    description: 'High energy, bright and bouncy',
    colors: { primary: '#e64980', background: '#fff0f6', text: '#2b1a3a' },
    font: "'Fredoka Variable', system-ui, sans-serif",
    emoji: { icon: '🏃', dog: '🐶', treat: '', celebrate: '🎉' },
  },
  {
    id: 'golden',
    name: 'Golden Retriever',
    description: 'Warm, sunny and friendly',
    colors: { primary: '#f59f00', background: '#fffbf0', text: '#3d2c00' },
    font: "'Nunito Variable', system-ui, sans-serif",
    emoji: { icon: '🐕', dog: '🐕', treat: '', celebrate: '☀️' },
  },
  {
    id: 'husky',
    name: 'Husky',
    description: 'Cool, crisp and snowy',
    colors: { primary: '#4c8fd6', background: '#f3f8fc', text: '#1c2a3a' },
    font: "'Inter Variable', system-ui, sans-serif",
    emoji: { icon: '🐺', dog: '🐺', treat: '', celebrate: '🏔️' },
  },
  {
    id: 'shiba',
    name: 'Shiba Inu',
    description: 'Playful with a little sass',
    colors: { primary: '#f76707', background: '#fff8f0', text: '#3a1f0a' },
    font: "'Baloo 2 Variable', system-ui, sans-serif",
    emoji: { icon: '🦊', dog: '🦊', treat: '🍡', celebrate: '✨' },
  },
  {
    id: 'naptime',
    name: 'Nap Time',
    description: 'Calm, soft and dreamy',
    colors: { primary: '#9775fa', background: '#f6f4ff', text: '#2a2540' },
    font: "'Quicksand Variable', system-ui, sans-serif",
    emoji: { icon: '😴', dog: '🐶', treat: '', celebrate: '🌙' },
  },
];

export const DEFAULT_THEME_ID = 'zoomies';

export function getTheme(id: string | null): AppTheme {
  return THEMES.find((t) => t.id === id) ?? THEMES.find((t) => t.id === DEFAULT_THEME_ID)!;
}
