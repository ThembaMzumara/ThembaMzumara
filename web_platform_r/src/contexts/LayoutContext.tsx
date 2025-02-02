// src/contexts/layout/LayoutContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import { Layout } from '../types/layout';

interface LayoutContextProps {
  currentLayout: Layout | null;
  setCurrentLayout: (layout: Layout | null) => void;
  countdown: number | null;
  setCountdown: (countdown: number | null) => void;
  deploymentTimestamp: number | null;
  setDeploymentTimestamp: (timestamp: number | null) => void;
}

// Create context with default values
export const LayoutContext = createContext<LayoutContextProps>({
  currentLayout: null,
  setCurrentLayout: () => {},
  countdown: null,
  setCountdown: () => {},
  deploymentTimestamp: null,
  setDeploymentTimestamp: () => {},
});

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [currentLayout, setCurrentLayout] = useState<Layout | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [deploymentTimestamp, setDeploymentTimestamp] = useState<number | null>(null);

  const value = {
    currentLayout,
    setCurrentLayout,
    countdown,
    setCountdown,
    deploymentTimestamp,
    setDeploymentTimestamp,
  };

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
};