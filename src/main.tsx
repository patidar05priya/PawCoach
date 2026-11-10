import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/fredoka';
import '@fontsource-variable/nunito';
import '@fontsource-variable/inter';
import '@fontsource-variable/baloo-2';
import '@fontsource-variable/quicksand';
import '@mantine/core/styles.css';
import './index.css';
import App from './App.tsx';
import AppThemeProvider from './themes/AppThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </StrictMode>,
);
