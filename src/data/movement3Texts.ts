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
  1: { fourth: "F", dim: "G7(9+)(11)", main: "C" },      // C
  2: { fourth: "F#", dim: "G#7(9+)(11)", main: "C#" },   // C#
  3: { fourth: "G", dim: "A7(9+)(11)", main: "D" },      // D
  4: { fourth: "G#", dim: "A#7(9+)(11)", main: "D#" },   // D#
  5: { fourth: "A", dim: "B7(9+)(11)", main: "E" },      // E
  6: { fourth: "A#", dim: "C7(9+)(11)", main: "F" },     // F
  7: { fourth: "B", dim: "C#7(9+)(11)", main: "F#" },    // F#
  8: { fourth: "C", dim: "D7(9+)(11)", main: "G" },      // G
  9: { fourth: "C#", dim: "D#7(9+)(11)", main: "G#" },   // G#
  10: { fourth: "D", dim: "E7(9+)(11)", main: "A" },     // A
  11: { fourth: "D#", dim: "F7(9+)(11)", main: "A#" },   // A#
  12: { fourth: "E", dim: "F#7(9+)(11)", main: "B" },    // B
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
      { label: "Função 1", description: `${chords.main}7+(9) Inversão 1` },
      { label: "Função 1", description: `${chords.main}7+(9) Inversão 2` },
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
      { label: "Function 1", description: `${chords.main}7+(9) Inversion 1` },
      { label: "Function 1", description: `${chords.main}7+(9) Inversion 2` },
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
      { label: "Función 1", description: `${chords.main}7+(9) Inversión 1` },
      { label: "Función 1", description: `${chords.main}7+(9) Inversión 2` },
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
