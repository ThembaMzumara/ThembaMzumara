import { Layout, LayoutBank } from '../types/layout';

export const selectLayoutForDay = (
  layoutBank: LayoutBank,
  dayOfWeek: number
): Layout | null => {
  const availableLayouts = layoutBank[dayOfWeek] || [];
  if (availableLayouts.length === 0) return null;
  
  const dayOfYear = parseInt(new Date().toLocaleDateString('en-US', { 
    day: 'numeric',
    month: 'numeric'
  }).replace('/', ''));
  
  return availableLayouts[dayOfYear % availableLayouts.length];
};
