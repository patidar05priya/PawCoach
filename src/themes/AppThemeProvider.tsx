import { createTheme, MantineProvider } from '@mantine/core';
import { generateColors } from '@mantine/colors-generator';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { loadThemeId, saveThemeId } from '../utils/storage';
import { AppThemeContext } from './context';
import { getTheme } from './themes';
import type { AppTheme } from './types';

// Turns our simple theme into a full Mantine theme
function toMantineTheme(theme: AppTheme) {
  return createTheme({
    primaryColor: 'brand',
    colors: { brand: generateColors(theme.colors.primary) },
    autoContrast: true, // dark text on light buttons, white text on dark ones
    fontFamily: theme.font,
    headings: { fontFamily: theme.font, fontWeight: '700' },
    defaultRadius: 'md',
  });
}

export default function AppThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(() => getTheme(loadThemeId()));
  const mantineTheme = useMemo(() => toMantineTheme(theme), [theme]);

  // Page background and text color
  useEffect(() => {
    document.body.style.backgroundColor = theme.colors.background;
    document.body.style.color = theme.colors.text;
    document.body.style.transition = 'background-color 0.3s ease';
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setThemeId: (id: string) => {
        const next = getTheme(id);
        setTheme(next);
        saveThemeId(next.id);
      },
    }),
    [theme],
  );

  return (
    <AppThemeContext.Provider value={value}>
      <MantineProvider theme={mantineTheme}>{children}</MantineProvider>
    </AppThemeContext.Provider>
  );
}
