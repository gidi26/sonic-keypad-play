import { Language } from "@/contexts/LanguageContext";

interface ContainerText {
  label: string;
  description: string;
}

interface TonalityTexts {
  containers: ContainerText[];
}

type Movement15Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

// Chord mappings for each tonality
const chordMappings: { [key: number]: {
  approachSubdom: string;
  subdomChord: string;
  approachDom: string;
  domChord: string;
  relativeMinor: string;
}} = {
  1: { approachSubdom: "C#m", subdomChord: "B7(9-)(11+)", approachDom: "F", domChord: "E7(9)", relativeMinor: "Am7(9)(11)" },
  2: { approachSubdom: "Dm", subdomChord: "C7(9-)(11+)", approachDom: "F#", domChord: "F7(9)", relativeMinor: "A#m7(9)(11)" },
  3: { approachSubdom: "D#m", subdomChord: "C#7(9-)(11+)", approachDom: "G", domChord: "F#7(9)", relativeMinor: "Bm7(9)(11)" },
  4: { approachSubdom: "Em", subdomChord: "D7(9-)(11+)", approachDom: "G#", domChord: "G7(9)", relativeMinor: "Cm7(9)(11)" },
  5: { approachSubdom: "Fm", subdomChord: "D#7(9-)(11+)", approachDom: "A", domChord: "G#7(9)", relativeMinor: "C#m7(9)(11)" },
  6: { approachSubdom: "F#m", subdomChord: "E7(9-)(11+)", approachDom: "A#", domChord: "A7(9)", relativeMinor: "Dm7(9)(11)" },
  7: { approachSubdom: "Gm", subdomChord: "F7(9-)(11+)", approachDom: "B", domChord: "A#7(9)", relativeMinor: "D#m7(9)(11)" },
  8: { approachSubdom: "G#m", subdomChord: "F#7(9-)(11+)", approachDom: "C", domChord: "B7(9)", relativeMinor: "Em7(9)(11)" },
  9: { approachSubdom: "Am", subdomChord: "G7(9-)(11+)", approachDom: "C#", domChord: "C7(9)", relativeMinor: "Fm7(9)(11)" },
  10: { approachSubdom: "A#m", subdomChord: "G#7(9-)(11+)", approachDom: "D", domChord: "C#7(9)", relativeMinor: "F#m7(9)(11)" },
  11: { approachSubdom: "Bm", subdomChord: "A7(9-)(11+)", approachDom: "D#", domChord: "D7(9)", relativeMinor: "Gm7(9)(11)" },
  12: { approachSubdom: "Cm", subdomChord: "A#7(9-)(11+)", approachDom: "E", domChord: "D#7(9)", relativeMinor: "G#m7(9)(11)" },
};

// Portuguese texts
const createPtTexts = (tonalityId: number): TonalityTexts => {
  const chords = chordMappings[tonalityId];
  return {
    containers: [
      { label: "Função 0", description: `${chords.approachSubdom} Aproximação para o acorde Subdominante` },
      { label: "Função 2", description: `${chords.subdomChord} Acorde Subdominante` },
      { label: "Função 0", description: `${chords.approachDom} Aproximação para o acorde dominante` },
      { label: "Função 5", description: `${chords.domChord} Acorde dominante` },
      { label: "Função 0", description: "Notas de apoio a relativa menor" },
      { label: "Função 1", description: `${chords.relativeMinor} Relativa Menor` },
    ],
  };
};

// English texts
const createEnTexts = (tonalityId: number): TonalityTexts => {
  const chords = chordMappings[tonalityId];
  return {
    containers: [
      { label: "Function 0", description: `${chords.approachSubdom} Approximation to the Subdominant Chord` },
      { label: "Function 2", description: `${chords.subdomChord} Subdominant Chord` },
      { label: "Function 0", description: `${chords.approachDom} Approximation to the Dominant Chord` },
      { label: "Function 5", description: `${chords.domChord} Dominant Chord` },
      { label: "Function 0", description: "Supporting Notes to the Relative Minor" },
      { label: "Function 1", description: `${chords.relativeMinor} Relative Minor` },
    ],
  };
};

// Spanish texts
const createEsTexts = (tonalityId: number): TonalityTexts => {
  const chords = chordMappings[tonalityId];
  return {
    containers: [
      { label: "Función 0", description: `${chords.approachSubdom} Aproximación al acorde de subdominante` },
      { label: "Función 2", description: `${chords.subdomChord} Acorde de subdominante` },
      { label: "Función 0", description: `${chords.approachDom} Aproximación al acorde de dominante` },
      { label: "Función 5", description: `${chords.domChord} Acorde de dominante` },
      { label: "Función 0", description: "Notas de apoyo a la relativa menor" },
      { label: "Función 1", description: `${chords.relativeMinor} Relativa Menor` },
    ],
  };
};

// Generate data for all tonalities
const generateMovement15Data = (): Movement15Data => {
  const data: Movement15Data = {
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

export const movement15Data = generateMovement15Data();
