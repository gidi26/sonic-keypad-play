import { Language } from "@/contexts/LanguageContext";

interface ContainerText {
  label: string;
  description: string;
}

interface TonalityTexts {
  containers: ContainerText[];
}

type Movement9Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

// Chord mappings for each tonality
const dominantChords: { [key: number]: string } = {
  1: "G5+(7)(9+)",
  2: "G#5+(7)(9+)",
  3: "A5+(7)(9+)",
  4: "A#5+(7)(9+)",
  5: "B5+(7)(9+)",
  6: "C5+(7)(9+)",
  7: "C#5+(7)(9+)",
  8: "D5+(7)(9+)",
  9: "D#5+(7)(9+)",
  10: "E5+(7)(9+)",
  11: "F5+(7)(9+)",
  12: "F#5+(7)(9+)",
};

const tonicChords: { [key: number]: string } = {
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

// Portuguese texts
const createPtTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Técnica", description: "Harmonia em sexta para aproximação do dominante" },
    { label: "Técnica", description: "Harmonia em sexta para aproximação do dominante" },
    { label: "Técnica", description: "Harmonia em sexta para aproximação do dominante" },
    { label: "Técnica", description: "Harmonia em sexta para aproximação do dominante" },
    { label: "Técnica", description: "Harmonia em sexta para aproximação do dominante" },
    { label: "Função 5", description: `${dominantChords[tonalityId]} Acorde dominante` },
    { label: "Técnica", description: "Nota de apoio para a Tônica" },
    { label: "Função 1", description: "Nota de apoio para a Tônica" },
    { label: "Função 1", description: `${tonicChords[tonalityId]} Tônica Maior` },
  ],
});

// English texts
const createEnTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Technique", description: "Harmony in sixth for approaching the dominant" },
    { label: "Technique", description: "Harmony in sixth for approaching the dominant" },
    { label: "Technique", description: "Harmony in sixth for approaching the dominant" },
    { label: "Technique", description: "Harmony in sixth for approaching the dominant" },
    { label: "Technique", description: "Harmony in sixth for approaching the dominant" },
    { label: "Function 5", description: `${dominantChords[tonalityId]} Dominant chord` },
    { label: "Technique", description: "Supporting note for the tonic" },
    { label: "Function 1", description: "Supporting note for the tonic" },
    { label: "Function 1", description: `${tonicChords[tonalityId]} Major tonic` },
  ],
});

// Spanish texts
const createEsTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Técnica", description: "Armonía en sexta para acercarse a la dominante" },
    { label: "Técnica", description: "Armonía en sexta para acercarse a la dominante" },
    { label: "Técnica", description: "Armonía en sexta para acercarse a la dominante" },
    { label: "Técnica", description: "Armonía en sexta para acercarse a la dominante" },
    { label: "Técnica", description: "Armonía en sexta para acercarse a la dominante" },
    { label: "Función 5", description: `${dominantChords[tonalityId]} Acorde de dominante` },
    { label: "Técnica", description: "Nota de apoyo para la tónica" },
    { label: "Función 1", description: "Nota de apoyo para la tónica" },
    { label: "Función 1", description: `${tonicChords[tonalityId]} Tónica mayor` },
  ],
});

// Generate data for all tonalities
const generateMovement9Data = (): Movement9Data => {
  const data: Movement9Data = {
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

export const movement9Data = generateMovement9Data();
