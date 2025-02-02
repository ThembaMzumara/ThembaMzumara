// src/App.tsx
import React from 'react';
import { LayoutManager } from './components/LayoutManager';
import { layoutBank } from './config/layoutBank';
import { ThemeProvider } from './contexts/ThemeContext';
import { LayoutProvider } from './contexts/LayoutContext';

const App: React.FC = () => {
  const deploymentTimestamp = process.env.REACT_APP_DEPLOYMENT_TIMESTAMP 
    ? parseInt(process.env.REACT_APP_DEPLOYMENT_TIMESTAMP) 
    : undefined;

  return (
    <ThemeProvider>
      <LayoutProvider>
        <LayoutManager 
          layoutBank={layoutBank}
          deploymentTimestamp={deploymentTimestamp}
        />
      </LayoutProvider>
    </ThemeProvider>
  );
};

export default App;