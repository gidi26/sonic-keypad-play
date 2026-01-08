import { Language } from "@/contexts/LanguageContext";

interface ContainerText {
  label: string;
  description: string;
}

interface TonalityTexts {
  containers: ContainerText[];
}

type Movement17Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

// Chord mappings for each tonality
const tonalityChords: { [key: number]: { dominant: string; passing1: string; passing2: string; relative: string } } = {
  1: { dominant: "E7", passing1: "F#º", passing2: "G#º", relative: "Am7" },
  2: { dominant: "F7", passing1: "Gº", passing2: "Aº", relative: "A#m7" },
  3: { dominant: "F#7", passing1: "G#º", passing2: "A#º", relative: "Bm7" },
  4: { dominant: "G7", passing1: "Aº", passing2: "Bº", relative: "Cm7" },
  5: { dominant: "G#7", passing1: "A#º", passing2: "Cº", relative: "C#m7" },
  6: { dominant: "A7", passing1: "Bº", passing2: "C#º", relative: "Dm7" },
  7: { dominant: "A#7", passing1: "Cº", passing2: "Dº", relative: "D#m7" },
  8: { dominant: "B7", passing1: "C#º", passing2: "D#º", relative: "Em7" },
  9: { dominant: "C7", passing1: "Dº", passing2: "Eº", relative: "Fm7" },
  10: { dominant: "C#7", passing1: "D#º", passing2: "Fº", relative: "F#m7" },
  11: { dominant: "D7", passing1: "Eº", passing2: "F#º", relative: "Gm7" },
  12: { dominant: "D#7", passing1: "Fº", passing2: "Gº", relative: "G#m7" },
};

// Portuguese texts
const createPtTexts = (tonalityId: number): TonalityTexts => {
  const chords = tonalityChords[tonalityId];
  return {
    containers: [
      { label: "Técnica", description: "Nota de aproximação para o acorde dominante" },
      { label: "Técnica", description: "Nota de aproximação para o acorde dominante" },
      { label: "Função 5", description: `${chords.dominant} Acorde Dominante` },
      { label: "Técnica", description: `${chords.passing1} Acorde de passagem para o acorde relativo` },
      { label: "Técnica", description: `${chords.passing2} Acorde de passagem para o acorde relativo` },
      { label: "Função 1", description: `${chords.relative} Acorde relativo` },
    ],
  };
};

// English texts
const createEnTexts = (tonalityId: number): TonalityTexts => {
  const chords = tonalityChords[tonalityId];
  return {
    containers: [
      { label: "Technique", description: "Approach note for the dominant chord" },
      { label: "Technique", description: "Approach note for the dominant chord" },
      { label: "Function 5", description: `${chords.dominant} Dominant chord` },
      { label: "Technique", description: `${chords.passing1} Passing chord to the relative chord` },
      { label: "Technique", description: `${chords.passing2} Passing chord to the relative chord` },
      { label: "Function 1", description: `${chords.relative} Relative chord` },
    ],
  };
};

// Spanish texts
const createEsTexts = (tonalityId: number): TonalityTexts => {
  const chords = tonalityChords[tonalityId];
  return {
    containers: [
      { label: "Técnica", description: "Nota de aproximación para el acorde de dominante" },
      { label: "Técnica", description: "Nota de aproximación para el acorde de dominante" },
      { label: "Función 5", description: `${chords.dominant} Acorde de dominante` },
      { label: "Técnica", description: `${chords.passing1} Pasando el acorde al Acorde relativo` },
      { label: "Técnica", description: `${chords.passing2} Pasando el acorde al Acorde relativo` },
      { label: "Función 1", description: `${chords.relative} Acorde relativo` },
    ],
  };
};

// Generate data for all tonalities
const generateMovement17Data = (): Movement17Data => {
  const data: Movement17Data = {
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

export const movement17Data = generateMovement17Data();
