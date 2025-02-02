import { LayoutBank } from '../types/layout';
import MasterYoda from '../components/layouts/default/MasterYoda';
import ObiWanKenobi from '../components/layouts/saturday/ObiWanKenobi';
import HanSolo from '../components/layouts/monday/HanSolo';
import LukeSkywalker from '../components/layouts/friday/LukeSkywalker';
import PrincessLeia from '../components/layouts/sunday/PrincessLeia';
import DarthVader from '../components/layouts/thursday/DarthVader';
import TheMandalorian from '../components/layouts/tuesday/TheMandalorian';
import AhsokaTano from '../components/layouts/wednesday/AhsokaTano';

export const layoutBank: LayoutBank = {
  0: [
    {
      id: 'master-yoda',
      component: MasterYoda,
      dayOfWeek: 0,
      theme: 'dark',
    },
    {
      id: 'luke-skywalker',
      component: LukeSkywalker,
      dayOfWeek: 0,
      theme: 'dark',
    },
  ], // Sunday layouts
  1: [
    {
      id: 'obi-wan-kenobi',
      component: ObiWanKenobi,
      dayOfWeek: 1,
      theme: 'light',
    },
  ], // Monday layouts
  2: [
    {
      id: 'the-mandalorian',
      component: TheMandalorian,
      dayOfWeek: 2,
      theme: 'dark',
    },
  ], // Tuesday layouts
  3: [
    {
      id: 'ahsoka-tano',
      component: AhsokaTano,
      dayOfWeek: 3,
      theme: 'dark',
    },
  ], // Wednesday layouts
  4: [
    {
      id: 'darth-vader',
      component: DarthVader,
      dayOfWeek: 4,
      theme: 'dark',
    },
  ], // Thursday layouts
  5: [
    {
      id: 'han-solo',
      component: HanSolo,
      dayOfWeek: 5,
      theme: 'light',
    },
  ], // Friday layouts
  6: [
    {
      id: 'princess-leia',
      component: PrincessLeia,
      dayOfWeek: 6,
      theme: 'light',
    },
  ], // Saturday layouts
};
