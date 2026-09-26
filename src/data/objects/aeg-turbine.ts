import { ArchivalObject } from '../../types/atlas';

export const aegTurbineObject: ArchivalObject = {
  id: 'obj-aeg-turbine',
  title: 'AEG Turbine Factory (Turbinenhalle)',
  creator: 'Peter Behrens',
  year: 1909,
  movementId: 'deutscher-werkbund',
  category: 'architecture',
  medium: 'Structural steel three-pin arch frames, reinforced concrete corner pylons, glass',
  location: 'Berlin-Moabit, Germany',
  dimensions: '207 m length, 39 m width, 25 m height',
  description: 'A large industrial hall articulated by exposed steel frames, extensive glazing, and massive corner elements, giving a highly legible architectural form to the requirements of turbine production.'
  significance: 'An influential example of early twentieth-century industrial architecture associated with Peter Behrens’s broader effort to coordinate architecture, products, and visual communication for AEG.'
  provenance: {
    description: { sourceIds: ['werkbundarchiv-chronology'], status: 'editorial-synthesis' },
    significance: { sourceIds: ['werkbundarchiv-chronology'], status: 'editorial-synthesis' },
  },
  graphicType: 'werkbund-turbine'
};
