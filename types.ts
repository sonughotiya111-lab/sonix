import { LucideIcon } from 'lucide-react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  path: string;
  icon: LucideIcon;
  category: 'graphics' | 'security' | 'utility' | 'developer';
  isNew?: boolean;
}

export interface Subscription {
  isPremium: boolean;
  plan: 'free' | 'monthly' | 'yearly' | 'lifetime' | 'trial';
  expiry: number | null; // Timestamp
  trialUsed: boolean;
  paymentPending?: boolean; // New: Tracks if user submitted a UTR
}

export interface UserSettings {
  theme: 'light' | 'dark';
  reducedMotion: boolean;
  soundEnabled: boolean;
  favorites: string[]; 
  lastUsedTool?: string;
  subscription: Subscription;
  usageCount: number;
}

export type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  settings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => void;
};

export type PremiumContextType = {
  isPremium: boolean;
  usageCount: number;
  maxFreeUses: number;
  incrementUsage: () => boolean; // Returns true if allowed, false if blocked
  activatePlan: (plan: Subscription['plan'], durationDays?: number) => void;
  redeemCoupon: (code: string) => { success: boolean; message: string };
  submitPayment: (amount: string, utr: string) => void;
  daysLeft: number | null;
  paymentPending: boolean;
};