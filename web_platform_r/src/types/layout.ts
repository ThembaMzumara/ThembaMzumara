export interface Layout {
  id: string;
  component: React.ComponentType;
  dayOfWeek: number;
  theme?: 'light' | 'dark';
}

export interface LayoutBank {
  [key: number]: Layout[];
}