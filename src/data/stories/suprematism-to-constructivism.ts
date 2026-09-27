import { ConnectionStory } from '../../types/atlas';

export const suprematismToConstructivismStory: ConnectionStory = {
  id: 'story-suprematism-to-constructivism',
  title: 'From Suprematism to Constructivism',
  subtitle: 'Diverging Paths within the Russian Avant-Garde',
  timeframe: '1915—1922',
  summary: 'A comparison of two overlapping but distinct trajectories within the Russian avant-garde: Malevich’s non-objective Suprematism and the material, spatial, and production-oriented practices later associated with Constructivism.',
  steps: [
    {
      stepNumber: 1,
      subtitle: 'The Black Square and Zero of Form',
      yearRange: 'December 1915',
      text: 'At the 0.10 exhibition in Petrograd in 1915, Malevich presented Black Square as part of a new non-objective visual language. Suprematism emphasized geometric form and what Malevich described as pure feeling rather than practical function or representation.',
      graphicCue: 'The Zero Point of Art',
      focalMovements: ['suprematism'],
      provenance: {
        text: { sourceIds: ['moma-suprematism'], status: 'documented' },
      }
    },
    {
      stepNumber: 2,
      subtitle: 'Tatlin\'s Corner Reliefs and Material Truth',
      yearRange: '1915—1917',
      text: 'Tatlin’s counter-reliefs, developed in the same period, used actual materials and the physical corner of the room rather than depicting objects within pictorial space. These experiments marked a materially oriented trajectory distinct from Malevich’s non-objective painting.',
      graphicCue: 'The Clash of Two Corners',
      focalMovements: ['constructivism', 'suprematism'],
      provenance: {
        text: { sourceIds: ['moma-constructivism', 'moma-suprematism'], status: 'editorial-synthesis' },
      }
    },
    {
      stepNumber: 3,
      subtitle: 'The 1917 October Revolution',
      yearRange: '1917—1920',
      text: 'The revolutions of 1917 and the subsequent civil war transformed the institutional setting of Russian art. Avant-garde artists became involved in new schools, exhibitions, publishing, propaganda, and debates about whether artistic work should serve social and productive functions.',
      graphicCue: 'The Revolutionary Demand',
      focalMovements: ['constructivism'],
      provenance: {
        text: { sourceIds: ['moma-constructivism'], status: 'editorial-synthesis' },
      }
    },
    {
      stepNumber: 4,
      subtitle: 'Toward Productivist Practice',
      yearRange: 'September 1921',
      text: 'By the early 1920s, figures associated with Constructivism increasingly questioned autonomous easel painting and turned toward design, publishing, exhibition work, and production. Rodchenko’s monochrome paintings became emblematic of this transition, but the shift was neither instantaneous nor universal across the Russian avant-garde.',
      graphicCue: 'The Final Monochromes',
      focalMovements: ['constructivism'],
      provenance: {
        text: { sourceIds: ['moma-constructivism'], status: 'editorial-synthesis' },
      }
    },
    {
      stepNumber: 5,
      subtitle: 'Art Into Production (Productivism)',
      yearRange: '1921—1925',
      text: 'Constructivist and Productivist practitioners worked across textiles, graphic design, photography, exhibition design, furniture, and other applied fields. Some formal devices overlapped with earlier abstract experiments, but Constructivism should not be described simply as Suprematism converted into industrial hardware.',
      graphicCue: 'Entering the Factory',
      focalMovements: ['constructivism', 'bauhaus'],
      provenance: {
        text: { sourceIds: ['moma-constructivism'], status: 'editorial-synthesis' },
      }
    }
  ]
};
