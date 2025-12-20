import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Sidebar from '@/components/Sidebar';
import FloatingMenu from './components/FloatingMenu.tsx';
import Profile from './components/Profile.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import ThemeCustomizer from './components/ThemeCustomizer.tsx';
import SkipToContent from './components/SkipToContent.tsx';
import { ThemeProvider } from './lib/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <SkipToContent />
      <LoadingScreen />
      <ThemeCustomizer />
      <div className='min-h-screen lg:justify-center lg:items-start lg:gap-10 lg:flex'>
        <Sidebar />
        <FloatingMenu />
        <Profile />
        <App />
      </div>
    </ThemeProvider>
  </StrictMode>
);
