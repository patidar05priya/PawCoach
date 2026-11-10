import { createContext, useContext } from 'react';
import type { AppTheme } from './types';

interface AppThemeContextValue {
  theme: AppTheme;
  setThemeId: (id: string) => void;
}

export const AppThemeContext = createContext<AppThemeContextValue | null>(null);

export function useAppTheme(): AppThemeContextValue {
  const ctx = useContext(AppThemeContext);
  if (!ctx) throw new Error('useAppTheme must be used inside AppThemeProvider');
  return ctx;
}
