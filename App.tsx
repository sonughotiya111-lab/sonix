import React, { useState, useEffect, createContext } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import PaymentPage from './components/PaymentPage';
import PlansPage from './components/PlansPage';
import { ToastProvider } from './components/ToastContext';
import { ThemeContextType, UserSettings } from './types';
import { PremiumProvider } from './components/PremiumContext';

// Admin Components
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';

// Tools
import PasswordGenerator from './components/tools/PasswordGenerator';
import ImageCompressor from './components/tools/ImageCompressor';
import UnitConverter from './components/tools/UnitConverter';
import QrCodeGenerator from './components/tools/QrCodeGenerator';
import ColorPicker from './components/tools/ColorPicker';
import PdfTools from './components/tools/PdfTools';
import QrReader from './components/tools/QrReader';
import ImageConverter from './components/tools/ImageConverter';
import ImageToPdf from './components/tools/ImageToPdf';
import Base64Converter from './components/tools/Base64Converter';
import BarcodeGenerator from './components/tools/BarcodeGenerator';
import ZipTools from './components/tools/ZipTools';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  settings: { 
    theme: 'dark', 
    reducedMotion: false, 
    soundEnabled: true, 
    favorites: [],
    subscription: { isPremium: false, plan: 'free', expiry: null, trialUsed: false },
    usageCount: 0
  },
  updateSettings: () => {}
});

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  // If on admin route, render without the main Layout wrapper (full screen)
  if (isAdminRoute) {
    return (
      <Routes location={location}>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes location={location}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/tools/password-gen" element={<PasswordGenerator />} />
        <Route path="/tools/image-compressor" element={<ImageCompressor />} />
        <Route path="/tools/unit-converter" element={<UnitConverter />} />
        <Route path="/tools/qr-generator" element={<QrCodeGenerator />} />
        <Route path="/tools/color-picker" element={<ColorPicker />} />
        <Route path="/tools/pdf-tools" element={<PdfTools />} />
        <Route path="/tools/qr-reader" element={<QrReader />} />
        <Route path="/tools/image-converter" element={<ImageConverter />} />
        <Route path="/tools/image-to-pdf" element={<ImageToPdf />} />
        <Route path="/tools/base64-converter" element={<Base64Converter />} />
        <Route path="/tools/barcode-gen" element={<BarcodeGenerator />} />
        <Route path="/tools/zip-tools" element={<ZipTools />} />
        <Route path="*" element={<div className="p-10 text-center text-slate-500">Tool coming soon...</div>} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [settings, setSettings] = useState<UserSettings>({
    theme: 'dark',
    reducedMotion: false,
    soundEnabled: true,
    favorites: [],
    subscription: { isPremium: false, plan: 'free', expiry: null, trialUsed: false },
    usageCount: 0
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem('sonix-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({
          ...prev,
          ...parsed,
          subscription: parsed.subscription || prev.subscription,
          usageCount: typeof parsed.usageCount === 'number' ? parsed.usageCount : 0
        }));
        setTheme(parsed.theme);
      } catch (e) {
        console.error("Failed to parse settings", e);
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    const newSettings = { ...settings, theme };
    localStorage.setItem('sonix-settings', JSON.stringify(newSettings));
  }, [theme, settings]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const updateSettings = (newSettings: Partial<UserSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, settings, updateSettings }}>
      <ToastProvider>
        <PremiumProvider>
          <HashRouter>
            <AppContent />
          </HashRouter>
        </PremiumProvider>
      </ToastProvider>
    </ThemeContext.Provider>
  );
};

export default App;