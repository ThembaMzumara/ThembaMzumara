// src/components/LayoutManager.tsx
import React, { useState, useEffect, useContext } from 'react';
import { differenceInSeconds } from 'date-fns';
import { Layout, LayoutBank } from '../types/layout';
import { ThemeContext } from '../contexts/ThemeContext';

interface LayoutManagerProps {
  layoutBank: LayoutBank;
  deploymentTimestamp?: string | number; // Updated type to accept both string and number
  children?: React.ReactNode;
}

export const LayoutManager: React.FC<LayoutManagerProps> = ({
  layoutBank,
  deploymentTimestamp,
  children
}) => {
  const [currentLayout, setCurrentLayout] = useState<Layout | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const updateLayout = () => {
      const now = new Date();
      const dayOfWeek = now.getDay();

      if (deploymentTimestamp) {
        const deploymentDate = new Date(deploymentTimestamp);
        const nextMidnight = new Date(deploymentDate);
        nextMidnight.setDate(nextMidnight.getDate() + 1);
        nextMidnight.setHours(0, 0, 0, 0);

        if (now < nextMidnight) {
          const secondsRemaining = differenceInSeconds(nextMidnight, now);
          setCountdown(secondsRemaining);
          return;
        }
      }

      const layouts = layoutBank[dayOfWeek] || [];
      if (layouts.length > 0) {
        const dayOfYear = new Date().getDate(); // Simplified from format()
        const selectedLayout = layouts[dayOfYear % layouts.length];
        setCurrentLayout(selectedLayout);
        
        if (selectedLayout.theme && themeContext) {
          if (themeContext.theme !== selectedLayout.theme) {
            themeContext.toggleTheme();
          }
        }
      }
      setCountdown(null);
    };

    updateLayout();
    const interval = setInterval(updateLayout, 60000);

    return () => clearInterval(interval);
  }, [layoutBank, deploymentTimestamp, themeContext]);

  if (countdown !== null) {
    return (
      <div className="countdown-layout">
        <h2>Site Update in Progress</h2>
        <p>New layout in: {Math.floor(countdown / 3600)}h {Math.floor((countdown % 3600) / 60)}m {countdown % 60}s</p>
        {children}
      </div>
    );
  }

  if (!currentLayout) {
    return <div>Loading...</div>;
  }

  const SelectedLayout = currentLayout.component;
  return <SelectedLayout />;
};