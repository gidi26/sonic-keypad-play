import { Language } from "@/contexts/LanguageContext";

interface ContainerText {
  label: string;
  description: string;
}

interface TonalityTexts {
  containers: ContainerText[];
}

type Movement3Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

// Tonality mapping: tonalityId -> [chord4, dimChord, mainChord]
const tonalityChords: { [key: number]: { fourth: string; dim: string; main: string } } = {
  1: { fourth: "F", dim: "Galt", main: "C" },      // C
  2: { fourth: "F#", dim: "G#alt", main: "C#" },   // C#
  3: { fourth: "G", dim: "Aalt", main: "D" },      // D
  4: { fourth: "G#", dim: "A#alt", main: "D#" },   // D#
  5: { fourth: "A", dim: "Balt", main: "E" },      // E
  6: { fourth: "A#", dim: "Calt", main: "F" },     // F
  7: { fourth: "B", dim: "C#alt", main: "F#" },    // F#
  8: { fourth: "C", dim: "Dalt", main: "G" },      // G
  9: { fourth: "C#", dim: "D#alt", main: "G#" },   // G#
  10: { fourth: "D", dim: "Ealt", main: "A" },     // A
  11: { fourth: "D#", dim: "Falt", main: "A#" },   // A#
  12: { fourth: "E", dim: "F#alt", main: "B" },    // B
};

// Portuguese texts
const createPtTexts = (tonalityId: number): TonalityTexts => {
  const chords = tonalityChords[tonalityId];
  return {
    containers: [
      { label: "Função 2", description: `${chords.fourth}7+(9) Acorde quartal gerando distanciamento` },
      { label: "Função 2", description: `${chords.fourth}7+ Acorde quartal Cluster Inversão` },
      { label: "Função 2", description: `${chords.fourth}7+ Acorde Invertido` },
      { label: "Função 2", description: `${chords.fourth}7+ Acorde Drop` },
      { label: "Função 5", description: `${chords.dim} Acorde com baixo invertido` },
      { label: "Função 1", description: "Harmonia com intervalo de sexta" },
      { label: "Função 2", description: `${chords.main}7+(9) Inversão 1` },
      { label: "Função 5", description: `${chords.main}7+(9) Inversão 2` },
    ],
  };
};

// English texts
const createEnTexts = (tonalityId: number): TonalityTexts => {
  const chords = tonalityChords[tonalityId];
  return {
    containers: [
      { label: "Function 2", description: `${chords.fourth}7+(9) Quartal chord generating distance` },
      { label: "Function 2", description: `${chords.fourth}7+ Quartal chord Cluster Inversion` },
      { label: "Function 2", description: `${chords.fourth}7+ Inverted Chord` },
      { label: "Function 2", description: `${chords.fourth}7+ Acorde Drop` },
      { label: "Function 5", description: `${chords.dim} Chord with inverted bass` },
      { label: "Function 1", description: "Harmony with a sixth interval" },
      { label: "Function 2", description: `${chords.main}7+(9) Inversion 1` },
      { label: "Function 5", description: `${chords.main}7+(9) Inversion 2` },
    ],
  };
};

// Spanish texts
const createEsTexts = (tonalityId: number): TonalityTexts => {
  const chords = tonalityChords[tonalityId];
  return {
    containers: [
      { label: "Función 2", description: `${chords.fourth}7+(9) Distancia de generación de acordes de cuarta` },
      { label: "Función 2", description: `${chords.fourth}7+ Inversión de clúster de acordes de cuarta` },
      { label: "Función 2", description: `${chords.fourth}7+ Acorde Invertido` },
      { label: "Función 2", description: `${chords.fourth}7+ Acorde Drop` },
      { label: "Función 5", description: `${chords.dim} Acorde con bajo invertido` },
      { label: "Función 1", description: "Armonía con intervalo de sexta" },
      { label: "Función 2", description: `${chords.main}7+(9) Inversión 1` },
      { label: "Función 5", description: `${chords.main}7+(9) Inversión 2` },
    ],
  };
};

// Generate data for all tonalities
const generateMovement3Data = (): Movement3Data => {
  const data: Movement3Data = {
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

export const movement3Data = generateMovement3Data();
