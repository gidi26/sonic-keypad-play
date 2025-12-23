// Movement 7 texts for all tonalities and languages

import { Language } from '../contexts/LanguageContext';

export interface ContainerText {
  label: string;
  description: string;
}

export interface TonalityTexts {
  containers: ContainerText[];
}

export type Movement7Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

// Helper function to get the chords based on tonality
const getChords = (tonalityId: number): { subdominant: string; approach: string; dominant: string; relative: string } => {
  const chordMap: { [key: number]: { subdominant: string; approach: string; dominant: string; relative: string } } = {
    1: { subdominant: 'B7(9)(11+)', approach: 'A#7(9)(11)', dominant: 'E5+(7)(9+)', relative: 'Am7(9)(11)' },
    2: { subdominant: 'C7(9)(11+)', approach: 'B7(9)(11)', dominant: 'F5+(7)(9+)', relative: 'A#m7(9)(11)' },
    3: { subdominant: 'C#7(9)(11+)', approach: 'C7(9)(11)', dominant: 'F#5+(7)(9+)', relative: 'Bm7(9)(11)' },
    4: { subdominant: 'D7(9)(11+)', approach: 'C#7(9)(11)', dominant: 'G5+(7)(9+)', relative: 'Cm7(9)(11)' },
    5: { subdominant: 'D#7(9)(11+)', approach: 'D7(9)(11)', dominant: 'G#5+(7)(9+)', relative: 'C#m7(9)(11)' },
    6: { subdominant: 'E7(9)(11+)', approach: 'D#7(9)(11)', dominant: 'A5+(7)(9+)', relative: 'D7m(9)(11)' },
    7: { subdominant: 'F7(9)(11+)', approach: 'E7(9)(11)', dominant: 'A#5+(7)(9+)', relative: 'D#m7(9)(11)' },
    8: { subdominant: 'F#7(9)(11+)', approach: 'F7(9)(11)', dominant: 'B5+(7)(9+)', relative: 'Em7(9)(11)' },
    9: { subdominant: 'G7(9)(11+)', approach: 'F#7(9)(11)', dominant: 'C5+(7)(9+)', relative: 'Fm7(9)(11)' },
    10: { subdominant: 'G#7(9)(11+)', approach: 'G7(9)(11)', dominant: 'C#5+(7)(9+)', relative: 'F#m7(9)(11)' },
    11: { subdominant: 'A7(9)(11+)', approach: 'G#7(9)(11)', dominant: 'D5+(7)(9+)', relative: 'Gm7(9)(11)' },
    12: { subdominant: 'A#7(9)(11+)', approach: 'A7(9)(11)', dominant: 'D#5+(7)(9+)', relative: 'G#m7(9)(11)' },
  };
  return chordMap[tonalityId];
};

// Portuguese texts
const createPtTexts = (tonalityId: number): TonalityTexts => {
  const chords = getChords(tonalityId);
  return {
    containers: [
      { label: 'Técnica', description: 'Nota de aproximação do Acorde Subdominante' },
      { label: 'Técnica', description: 'Nota de aproximação do Acorde Subdominante' },
      { label: 'Função 2', description: `${chords.subdominant} Acorde subdominante` },
      { label: 'Técnica', description: `${chords.approach} Acorde de aproximação para Subdominante` },
      { label: 'Função 2', description: `${chords.subdominant.replace('(11+)', '(11)')} Acorde Subdominante` },
      { label: 'Função 5', description: `${chords.dominant} Acorde Dominante` },
      { label: 'Função 1', description: `${chords.relative} Acorde Relativo Menor` },
    ],
  };
};

// English texts
const createEnTexts = (tonalityId: number): TonalityTexts => {
  const chords = getChords(tonalityId);
  return {
    containers: [
      { label: 'Technique', description: 'Approach note to the Subdominant Chord' },
      { label: 'Technique', description: 'Approach note to the Subdominant Chord' },
      { label: 'Function 2', description: `${chords.subdominant} Subdominant chord` },
      { label: 'Technique', description: `${chords.approach} Approach chord to subdominant` },
      { label: 'Function 2', description: `${chords.subdominant.replace('(11+)', '(11)')} Subdominant chord` },
      { label: 'Function 5', description: `${chords.dominant} Dominant chord` },
      { label: 'Function 1', description: `${chords.relative} Relative minor chord` },
    ],
  };
};

// Spanish texts
const createEsTexts = (tonalityId: number): TonalityTexts => {
  const chords = getChords(tonalityId);
  return {
    containers: [
      { label: 'Técnica', description: 'Nota de aproximación del Acorde Subdominante' },
      { label: 'Técnica', description: 'Nota de aproximación del Acorde Subdominante' },
      { label: 'Función 2', description: `${chords.subdominant} Acorde de subdominante` },
      { label: 'Técnica', description: `${chords.approach} Acorde de aproximación a subdominante` },
      { label: 'Función 2', description: `${chords.subdominant.replace('(11+)', '(11)')} Acorde de subdominante` },
      { label: 'Función 5', description: `${chords.dominant} Acorde de dominante` },
      { label: 'Función 1', description: `${chords.relative} Acorde de relativa menor` },
    ],
  };
};

// Generate all movement 7 data
const generateMovement7Data = (): Movement7Data => {
  const data: Movement7Data = {
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

export const movement7Data = generateMovement7Data();
