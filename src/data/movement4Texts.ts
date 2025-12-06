import { Language } from "@/contexts/LanguageContext";

interface ContainerText {
  label: string;
  description: string;
}

interface TonalityTexts {
  containers: ContainerText[];
}

type Movement4Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

// Tonality mapping for Movement 4
const tonalityChords: { [key: number]: { main: string; alt: string; approach: string; dom: string; relMinor: string } } = {
  1: { main: "C", alt: "E", approach: "F#", dom: "G", relMinor: "Am" },
  2: { main: "C#", alt: "F", approach: "G", dom: "G#", relMinor: "A#m" },
  3: { main: "D", alt: "F#", approach: "G#", dom: "A", relMinor: "Bm" },
  4: { main: "D#", alt: "G", approach: "A", dom: "A#", relMinor: "Cm" },
  5: { main: "E", alt: "G#", approach: "A#", dom: "B", relMinor: "C#m" },
  6: { main: "F", alt: "A", approach: "B", dom: "C", relMinor: "Dm" },
  7: { main: "F#", alt: "A#", approach: "C", dom: "C#", relMinor: "D#m" },
  8: { main: "G", alt: "B", approach: "C#", dom: "D", relMinor: "Em" },
  9: { main: "G#", alt: "C", approach: "D", dom: "D#", relMinor: "Fm" },
  10: { main: "A", alt: "C#", approach: "D#", dom: "E", relMinor: "F#m" },
  11: { main: "A#", alt: "D", approach: "E", dom: "F", relMinor: "Gm" },
  12: { main: "B", alt: "D#", approach: "F", dom: "F#", relMinor: "G#m" },
};

// Portuguese texts
const createPtTexts = (tonalityId: number): TonalityTexts => {
  const chords = tonalityChords[tonalityId];
  return {
    containers: [
      { label: "Função 0", description: `${chords.main} Acorde de aproximação para o dominante` },
      { label: "Função 5", description: `${chords.alt} alt Acorde Alterado` },
      { label: "Função 0", description: `${chords.approach} Acorde de aproximação para Relativa menor` },
      { label: "Função 5", description: `${chords.dom} Acorde estrutura superior do dominante` },
      { label: "Função 5", description: `${chords.relMinor}7(9)(11) Acorde Relativo Menor` },
    ],
  };
};

// English texts
const createEnTexts = (tonalityId: number): TonalityTexts => {
  const chords = tonalityChords[tonalityId];
  return {
    containers: [
      { label: "Function 0", description: `${chords.main} Approach chord to dominant` },
      { label: "Function 5", description: `${chords.alt} alt Altered Chord` },
      { label: "Function 0", description: `${chords.approach} Approach chord to relative minor` },
      { label: "Function 5", description: `${chords.dom} Upper structure chord of dominant` },
      { label: "Function 5", description: `${chords.relMinor}7(9)(11) Relative Minor Chord` },
    ],
  };
};

// Spanish texts
const createEsTexts = (tonalityId: number): TonalityTexts => {
  const chords = tonalityChords[tonalityId];
  return {
    containers: [
      { label: "Función 0", description: `${chords.main} Acorde de aproximación a la dominante` },
      { label: "Función 5", description: `${chords.alt} alt Acorde Alterado` },
      { label: "Función 0", description: `${chords.approach} Acorde de aproximación a la relativa menor` },
      { label: "Función 5", description: `${chords.dom} Acorde de estructura superior de la dominante` },
      { label: "Función 5", description: `${chords.relMinor}7(9)(11) Acorde relativa menor` },
    ],
  };
};

// Generate data for all tonalities
const generateMovement4Data = (): Movement4Data => {
  const data: Movement4Data = {
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

export const movement4Data = generateMovement4Data();
