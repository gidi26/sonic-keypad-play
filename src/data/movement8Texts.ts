import { Language } from "@/contexts/LanguageContext";

interface ContainerText {
  label: string;
  description: string;
}

interface TonalityTexts {
  containers: ContainerText[];
}

type Movement8Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

// Chord mappings for each tonality
const getChords = (tonalityId: number) => {
  const chordMap: { [key: number]: { approachSub: string; subdominant: string; approachDom: string; dominant: string; relativeMinor: string } } = {
    1: { approachSub: 'C13', subdominant: 'Bm5+', approachDom: 'A4+(7)(9)', dominant: 'G#º', relativeMinor: 'Am7(9)(11)' },
    2: { approachSub: 'C#13', subdominant: 'Cm5+', approachDom: 'A#4+(7)(9)', dominant: 'Aº', relativeMinor: 'A#m7(9)(11)' },
    3: { approachSub: 'D13', subdominant: 'C#m5+', approachDom: 'B4+(7)(9)', dominant: 'A#º', relativeMinor: 'Bm7(9)(11)' },
    4: { approachSub: 'D#13', subdominant: 'Dm5+', approachDom: 'C4+(7)(9)', dominant: 'Bº', relativeMinor: 'Cm7(9)(11)' },
    5: { approachSub: 'E13', subdominant: 'D#m5+', approachDom: 'C#4+(7)(9)', dominant: 'Cº', relativeMinor: 'C#m7(9)(11)' },
    6: { approachSub: 'F13', subdominant: 'Em5+', approachDom: 'D4+(7)(9)', dominant: 'C#º', relativeMinor: 'Dm7(9)(11)' },
    7: { approachSub: 'F#13', subdominant: 'Fm5+', approachDom: 'D#4+(7)(9)', dominant: 'Dº', relativeMinor: 'D#m7(9)(11)' },
    8: { approachSub: 'G13', subdominant: 'F#m5+', approachDom: 'E4+(7)(9)', dominant: 'D#º', relativeMinor: 'Em7(9)(11)' },
    9: { approachSub: 'G#13', subdominant: 'Gm5+', approachDom: 'F4+(7)(9)', dominant: 'Eº', relativeMinor: 'Fm7(9)(11)' },
    10: { approachSub: 'A13', subdominant: 'G#m5+', approachDom: 'F#4+(7)(9)', dominant: 'Fº', relativeMinor: 'F#m7(9)(11)' },
    11: { approachSub: 'A#13', subdominant: 'Am5+', approachDom: 'G4+(7)(9)', dominant: 'F#º', relativeMinor: 'Gm7(9)(11)' },
    12: { approachSub: 'B13', subdominant: 'A#m5+', approachDom: 'G#4+(7)(9)', dominant: 'Gº', relativeMinor: 'G#m7(9)(11)' },
  };
  return chordMap[tonalityId] || chordMap[1];
};

// Portuguese texts
const createPtTexts = (tonalityId: number): TonalityTexts => {
  const chords = getChords(tonalityId);
  return {
    containers: [
      { label: 'Técnica', description: `${chords.approachSub} Acorde usado como aproximação do Subdominante` },
      { label: 'Função 2', description: `${chords.subdominant} Acorde Subdominante` },
      { label: 'Técnica', description: `${chords.approachDom} Acorde usado como aproximação do Dominante` },
      { label: 'Função 5', description: `${chords.dominant} Acorde Dominante` },
      { label: 'Função 1', description: `${chords.relativeMinor} Acorde relativo menor` },
    ],
  };
};

// English texts
const createEnTexts = (tonalityId: number): TonalityTexts => {
  const chords = getChords(tonalityId);
  return {
    containers: [
      { label: 'Technique', description: `${chords.approachSub} Chord used as an approximation of the Subdominant` },
      { label: 'Function 2', description: `${chords.subdominant} Subdominant Chord` },
      { label: 'Technique', description: `${chords.approachDom} Chord used as an approximation of the Dominant` },
      { label: 'Function 5', description: `${chords.dominant} Dominant Chord` },
      { label: 'Function 1', description: `${chords.relativeMinor} Relative minor chord` },
    ],
  };
};

// Spanish texts
const createEsTexts = (tonalityId: number): TonalityTexts => {
  const chords = getChords(tonalityId);
  return {
    containers: [
      { label: 'Técnica', description: `${chords.approachSub} Acorde utilizado como aproximación de la subdominante` },
      { label: 'Función 2', description: `${chords.subdominant} Acorde de subdominante` },
      { label: 'Técnica', description: `${chords.approachDom} Acorde utilizado como aproximación de la dominante` },
      { label: 'Función 5', description: `${chords.dominant} Acorde de dominante` },
      { label: 'Función 1', description: `${chords.relativeMinor} Acorde relativo menor` },
    ],
  };
};

// Generate data for all tonalities
const generateMovement8Data = (): Movement8Data => {
  const data: Movement8Data = {
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

export const movement8Data = generateMovement8Data();
