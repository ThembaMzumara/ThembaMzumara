import { LayoutBank } from '../types/layout';
import MasterYoda from '../components/layouts/default/Layout';

export const layoutBank: LayoutBank = {
  0: [
    {
      id: 'master-yoda',
      component: MasterYoda,
      dayOfWeek: 0,
      theme: 'dark' ,
    },
  ], // Sunday layouts
  1: [], // Monday layouts
  2: [], // Tuesday layouts
  3: [], // Wednesday layouts
  4: [], // Thursday layouts
  5: [], // Friday layouts
  6: [], // Saturday layouts
};
