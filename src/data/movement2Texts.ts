import { Language } from "@/contexts/LanguageContext";

interface ContainerText {
  label: string;
  description: string;
}

interface TonalityTexts {
  containers: ContainerText[];
}

type Movement2Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

// Helper to get dominant chord based on tonality
const getDominantChord = (tonalityId: number): string => {
  const chords: { [key: number]: string } = {
    1: "E5+(7)(9+)",
    2: "F5+(7)(9+)",
    3: "F#5+(7)(9+)",
    4: "G5+(7)(9+)",
    5: "G#5+(7)(9+)",
    6: "A5+(7)(9+)",
    7: "A#5+(7)(9+)",
    8: "B5+(7)(9+)",
    9: "C5+(7)(9+)",
    10: "C#5+(7)(9+)",
    11: "D5+(7)(9+)",
    12: "D#5+(7)(9+)",
  };
  return chords[tonalityId] || "E5+(7)(9+)";
};

// Helper to get major key based on tonality
const getMajorKey = (tonalityId: number): string => {
  const keys: { [key: number]: string } = {
    1: "C",
    2: "C#",
    3: "D",
    4: "D#",
    5: "E",
    6: "F",
    7: "F#",
    8: "G",
    9: "G#",
    10: "A",
    11: "A#",
    12: "B",
  };
  return keys[tonalityId] || "C";
};

// Helper to get minor chord based on tonality
const getMinorChord = (tonalityId: number): string => {
  const chords: { [key: number]: string } = {
    1: "Am7(9)(11)",
    2: "A#m7(9)(11)",
    3: "Bm7(9)(11)",
    4: "Cm7(9)(11)",
    5: "C#m7(9)(11)",
    6: "Dm7(9)(11)",
    7: "D#m7(9)(11)",
    8: "Em7(9)(11)",
    9: "Fm7(9)(11)",
    10: "F#m7(9)(11)",
    11: "Gm7(9)(11)",
    12: "G#m7(9)(11)",
  };
  return chords[tonalityId] || "Am7(9)(11)";
};

// Portuguese texts
const createPtTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Técnica", description: "Acorde usado como Cromático Ascendente" },
    { label: "Técnica", description: "Acorde usado como Cromático Ascendente" },
    { label: "Função 5", description: `${getDominantChord(tonalityId)} Acorde dominante do relativo menor` },
    { label: "Função 5", description: `${getMajorKey(tonalityId)} Estrutura superior do acorde dominante` },
    { label: "Função 1", description: `${getMinorChord(tonalityId)} Acorde relativo menor` },
  ],
});

// English texts
const createEnTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Technique", description: "Chord used as an Ascending Chromatic" },
    { label: "Technique", description: "Chord used as an Ascending Chromatic" },
    { label: "Function 5", description: `${getDominantChord(tonalityId)} Dominant chord of the relative minor` },
    { label: "Function 5", description: `${getMajorKey(tonalityId)} Upper structure of the dominant chord` },
    { label: "Function 1", description: `${getMinorChord(tonalityId)} Relative minor chord` },
  ],
});

// Spanish texts
const createEsTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Técnica", description: "Acorde utilizado como cromático ascendente" },
    { label: "Técnica", description: "Acorde utilizado como cromático ascendente" },
    { label: "Función 5", description: `${getDominantChord(tonalityId)} Acorde de dominante de la relativa menor` },
    { label: "Función 5", description: `${getMajorKey(tonalityId)} Estructura superior del acorde de dominante` },
    { label: "Función 1", description: `${getMinorChord(tonalityId)} Acorde de relativa menor` },
  ],
});

// Generate data for all tonalities
const generateMovement2Data = (): Movement2Data => {
  const data: Movement2Data = {
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

export const movement2Data = generateMovement2Data();
