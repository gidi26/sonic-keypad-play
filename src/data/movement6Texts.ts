// Movement 6 texts for all tonalities and languages

import { Language } from '../contexts/LanguageContext';

export interface ContainerText {
  label: string;
  description: string;
}

export interface TonalityTexts {
  containers: ContainerText[];
}

export type Movement6Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

// Helper function to get the chord based on tonality
const getChords = (tonalityId: number): { subdominant: string; approach: string; dominant: string; relative: string } => {
  const chordMap: { [key: number]: { subdominant: string; approach: string; dominant: string; relative: string } } = {
    1: { subdominant: 'B7(9)(11+)', approach: 'F5+(7)(9+)', dominant: 'E5+(7)(9+)', relative: 'Am7(9)(11)' },
    2: { subdominant: 'C7(9)(11+)', approach: 'F#5+(7)(9+)', dominant: 'F5+(7)(9+)', relative: 'A#m7(9)(11)' },
    3: { subdominant: 'C#7(9)(11+)', approach: 'G5+(7)(9+)', dominant: 'F#5+(7)(9+)', relative: 'Bm7(9)(11)' },
    4: { subdominant: 'D7(9)(11+)', approach: 'G#5+(7)(9+)', dominant: 'G5+(7)(9+)', relative: 'Cm7(9)(11)' },
    5: { subdominant: 'D#7(9)(11+)', approach: 'A5+(7)(9+)', dominant: 'G#5+(7)(9+)', relative: 'C#m7(9)(11)' },
    6: { subdominant: 'E7(9)(11+)', approach: 'A#5+(7)(9+)', dominant: 'A5+(7)(9+)', relative: 'Dm7(9)(11)' },
    7: { subdominant: 'F7(9)(11+)', approach: 'B5+(7)(9+)', dominant: 'A#5+(7)(9+)', relative: 'D#m7(9)(11)' },
    8: { subdominant: 'F#7(9)(11+)', approach: 'C5+(7)(9+)', dominant: 'B5+(7)(9+)', relative: 'Em7(9)(11)' },
    9: { subdominant: 'G7(9)(11+)', approach: 'C#5+(7)(9+)', dominant: 'C5+(7)(9+)', relative: 'Fm7(9)(11)' },
    10: { subdominant: 'G#7(9)(11+)', approach: 'D5+(7)(9+)', dominant: 'C#5+(7)(9+)', relative: 'F#m7(9)(11)' },
    11: { subdominant: 'A7(9)(11+)', approach: 'D#5+(7)(9+)', dominant: 'D5+(7)(9+)', relative: 'Gm7(9)(11)' },
    12: { subdominant: 'A#7(9)(11+)', approach: 'E5+(7)(9+)', dominant: 'D#5+(7)(9+)', relative: 'G#m7(9)(11)' },
  };
  return chordMap[tonalityId];
};

// Portuguese texts
const createPtTexts = (tonalityId: number): TonalityTexts => {
  const chords = getChords(tonalityId);
  return {
    containers: [
      { label: 'Função 0', description: 'Nota de cromático ascendente' },
      { label: 'Função 0', description: 'Nota de cromático ascendente' },
      { label: 'Função 2', description: `${chords.subdominant} Acorde subdominante` },
      { label: 'Função 0', description: `${chords.approach} Acorde de aproximação para Dominante` },
      { label: 'Função 5', description: `${chords.dominant} Acorde Dominante Trítono` },
      { label: 'Função 0', description: 'Nota de apoio para o relativo menor' },
      { label: 'Função 1', description: `${chords.relative} Acorde Relativo Menor` },
    ],
  };
};

// English texts
const createEnTexts = (tonalityId: number): TonalityTexts => {
  const chords = getChords(tonalityId);
  return {
    containers: [
      { label: 'Function 0', description: 'Ascending chromatic note' },
      { label: 'Function 0', description: 'Ascending chromatic note' },
      { label: 'Function 2', description: `${chords.subdominant} Subdominant chord` },
      { label: 'Function 0', description: `${chords.approach} Approach chord for the dominant` },
      { label: 'Function 5', description: `${chords.dominant} Dominant Tritone chord` },
      { label: 'Function 0', description: 'Support note for the relative minor' },
      { label: 'Function 1', description: `${chords.relative} Relative minor chord` },
    ],
  };
};

// Spanish texts
const createEsTexts = (tonalityId: number): TonalityTexts => {
  const chords = getChords(tonalityId);
  return {
    containers: [
      { label: 'Función 0', description: 'Nota cromática ascendente' },
      { label: 'Función 0', description: 'Nota cromática ascendente' },
      { label: 'Función 2', description: `${chords.subdominant} Acorde subdominante` },
      { label: 'Función 0', description: `${chords.approach} Acorde de aproximación para la dominante` },
      { label: 'Función 5', description: `${chords.dominant} Acorde Dominante Trítono` },
      { label: 'Función 0', description: 'Nota de apoyo para la relativa menor' },
      { label: 'Función 1', description: `${chords.relative} Acorde de relativa menor` },
    ],
  };
};

// Generate all movement 6 data
const generateMovement6Data = (): Movement6Data => {
  const data: Movement6Data = {
    pt: {},
    en: {},
    es: {},
  };

  for (let tonalityId = 1; tonalityId <= 12; tonalityId++) {
    data.pt[tonalityId] = createPtTexts(tonalityId);
    data.en[tonalityId] = createEnTexts(tonalityId);
    data.es[tonalityId] = createEsTexts(tonalityId);
  }

  return data;
};

export const movement6Data = generateMovement6Data();
