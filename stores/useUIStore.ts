import { create } from 'zustand';
import { ScreenType } from '../types';

interface Notification {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  duration: number;
  createdAt: number;
}

interface UIState {
  // State
  currentScreen: ScreenType;
  isModalOpen: boolean;
  modalContent: string | null;
  notifications: Notification[];
  isLoading: boolean;
  showTutorial: boolean;

  // Actions
  setScreen: (screen: ScreenType) => void;
  openModal: (content: string) => void;
  closeModal: () => void;
  addNotification: (message: string, type?: Notification['type'], duration?: number) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
  setLoading: (isLoading: boolean) => void;
  setShowTutorial: (show: boolean) => void;
  resetUI: () => void;
}

// Generate unique notification ID
function generateNotificationId(): string {
  return `notif-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export const useUIStore = create<UIState>((set, get) => ({
  // Initial state
  currentScreen: 'title',
  isModalOpen: false,
  modalContent: null,
  notifications: [],
  isLoading: false,
  showTutorial: true,

  // Actions
  setScreen: (screen) => {
    set({ currentScreen: screen });
  },

  openModal: (content) => {
    set({ isModalOpen: true, modalContent: content });
  },

  closeModal: () => {
    set({ isModalOpen: false, modalContent: null });
  },

  addNotification: (message, type = 'info', duration = 3000) => {
    const notification: Notification = {
      id: generateNotificationId(),
      message,
      type,
      duration,
      createdAt: Date.now(),
    };

    set((state) => ({
      notifications: [...state.notifications, notification],
    }));

    // Auto-remove notification after duration
    if (duration > 0) {
      setTimeout(() => {
        get().removeNotification(notification.id);
      }, duration);
    }
  },

  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }));
  },

  clearNotifications: () => {
    set({ notifications: [] });
  },

  setLoading: (isLoading) => {
    set({ isLoading });
  },

  setShowTutorial: (show) => {
    set({ showTutorial: show });
  },

  resetUI: () => {
    set({
      currentScreen: 'title',
      isModalOpen: false,
      modalContent: null,
      notifications: [],
      isLoading: false,
    });
  },
}));
