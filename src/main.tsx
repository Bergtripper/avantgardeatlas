import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { AppErrorBoundary } from './components/AppErrorBoundary';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppErrorBoundary>
      <AccessibilityProvider>
        <App />
      </AccessibilityProvider>
    </AppErrorBoundary>
  </StrictMode>,
);
