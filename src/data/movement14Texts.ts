import { Language } from "@/contexts/LanguageContext";

interface ContainerText {
  label: string;
  description: string;
}

interface TonalityTexts {
  containers: ContainerText[];
}

type Movement14Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

// Helper functions to get chords based on tonality
const getContextChord = (tonalityId: number): string => {
  const chords: { [key: number]: string } = {
    1: "G7+(9)",
    2: "G#7+(9)",
    3: "A7+(9)",
    4: "A#7+(9)",
    5: "B7+(9)",
    6: "C7+(9)",
    7: "C#7+(9)",
    8: "D7+(9)",
    9: "D#7+(9)",
    10: "E7+(9)",
    11: "F7+(9)",
    12: "F#7+(9)",
  };
  return chords[tonalityId] || "G7+(9)";
};

const getDominantAlt = (tonalityId: number): string => {
  const chords: { [key: number]: string } = {
    1: "B alt",
    2: "C alt",
    3: "C# alt",
    4: "D alt",
    5: "D# alt",
    6: "E alt",
    7: "F alt",
    8: "F# alt",
    9: "G alt",
    10: "G# alt",
    11: "A alt",
    12: "A# alt",
  };
  return chords[tonalityId] || "B alt";
};

const getRelativeMinor = (tonalityId: number): string => {
  const chords: { [key: number]: string } = {
    1: "Em7(9)(11)",
    2: "Fm7(9)(11)",
    3: "F#m7(9)(11)",
    4: "Gm7(9)(11)",
    5: "G#m7(9)(11)",
    6: "Am7(9)(11)",
    7: "A#m7(9)(11)",
    8: "Bm7(9)(11)",
    9: "Cm7(9)(11)",
    10: "C#m7(9)(11)",
    11: "Dm7(9)(11)",
    12: "D#m7(9)(11)",
  };
  return chords[tonalityId] || "Em7(9)(11)";
};

const getSubdominant = (tonalityId: number): string => {
  const chords: { [key: number]: string } = {
    1: "Dm7(9)",
    2: "D#m7(9)",
    3: "Em7(9)",
    4: "Fm7(9)",
    5: "F#m7(9)",
    6: "Gm7(9)",
    7: "G#m7(9)",
    8: "Am7(9)",
    9: "A#m7(9)",
    10: "Bm7(9)",
    11: "Cm7(9)",
    12: "C#m7(9)",
  };
  return chords[tonalityId] || "Dm7(9)";
};

const getDominantChord = (tonalityId: number): string => {
  const chords: { [key: number]: string } = {
    1: "G7(9)(13)",
    2: "G#7(9)(13)",
    3: "A7(9)(13)",
    4: "A#7(9)(13)",
    5: "B7(9)(13)",
    6: "C7(9)(13)",
    7: "C#7(9)(13)",
    8: "D7(9)(13)",
    9: "D#7(9)(13)",
    10: "E7(9)(13)",
    11: "F7(9)(13)",
    12: "F#7(9)(13)",
  };
  return chords[tonalityId] || "G7(9)(13)";
};

const getTonicChord = (tonalityId: number): string => {
  const chords: { [key: number]: string } = {
    1: "C7+(9)",
    2: "C#7+(9)",
    3: "D7+(9)",
    4: "D#7+(9)",
    5: "E7+(9)",
    6: "F7+(9)",
    7: "F#7+(9)",
    8: "G7+(9)",
    9: "G#7+(9)",
    10: "A7+(9)",
    11: "A#7+(9)",
    12: "B7+(9)",
  };
  return chords[tonalityId] || "C7+(9)";
};

// Portuguese texts
const createPtTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Função 0", description: `${getContextChord(tonalityId)} Acorde de contexto` },
    { label: "Função 5", description: `${getDominantAlt(tonalityId)} Acorde Dominante do movimento 1` },
    { label: "Função 1", description: `${getRelativeMinor(tonalityId)} Relativa menor do Movimento 1` },
    { label: "Função 2", description: `${getSubdominant(tonalityId)} Subdominante Movimento 2` },
    { label: "Função 5", description: `${getDominantChord(tonalityId)} Acorde dominante Movimento 2` },
    { label: "Função 1", description: `${getTonicChord(tonalityId)} Tônica` },
  ],
});

// English texts
const createEnTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Function 0", description: `${getContextChord(tonalityId)} Context Chord` },
    { label: "Function 5", description: `${getDominantAlt(tonalityId)} Dominant Chord of Movement 1` },
    { label: "Function 1", description: `${getRelativeMinor(tonalityId)} Relative Minor Chord of Movement 1` },
    { label: "Function 2", description: `${getSubdominant(tonalityId)} Subdominant of Movement 2` },
    { label: "Function 5", description: `${getDominantChord(tonalityId)} Dominant Chord of Movement 2` },
    { label: "Function 1", description: `${getTonicChord(tonalityId)} Tonic` },
  ],
});

// Spanish texts
const createEsTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Función 0", description: `${getContextChord(tonalityId)} Acorde de contexto` },
    { label: "Función 5", description: `${getDominantAlt(tonalityId)} Acorde de Dominante del Movimiento 1` },
    { label: "Función 1", description: `${getRelativeMinor(tonalityId)} Acorde Menor Relativo del Movimiento 1` },
    { label: "Función 2", description: `${getSubdominant(tonalityId)} Subdominante del Movimiento 2` },
    { label: "Función 5", description: `${getDominantChord(tonalityId)} Acorde de Dominante del Movimiento 2` },
    { label: "Función 1", description: `${getTonicChord(tonalityId)} Tónica` },
  ],
});

// Generate data for all tonalities
const generateMovement14Data = (): Movement14Data => {
  const data: Movement14Data = {
    pt: {},
    en: {},
    es: {},
  };

  for (let i = 1; i <= 12; i++) {
    data.pt[i] = createPtTexts(i);
    data.en[i] = createEnTexts(i);
    data.es[i] = createEsTexts(i);
  }

  return data;
};

export const movement14Data = generateMovement14Data();
