import { Language } from "@/contexts/LanguageContext";

interface ContainerText {
  label: string;
  description: string;
}

interface TonalityTexts {
  containers: ContainerText[];
}

type Movement11Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

const getChord = (tonalityId: number): string => {
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

const createPtTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Função 0", description: "Nota usada como Cromático Decrescente" },
    { label: "Função 0", description: "Nota usada como Cromático Decrescente" },
    { label: "Função 0", description: "Harmonia em sexta para aproximação do dominante" },
    { label: "Função 5", description: "Harmonia em sexta com função dominante" },
    { label: "Função 0", description: "Nota de apoio para a Tônica" },
    { label: "Função 0", description: "Nota de apoio para a Tônica" },
    { label: "Função 1", description: `${getChord(tonalityId)} Acorde relativo menor` },
    { label: "Função 1", description: `${getChord(tonalityId)} Acorde relativo menor` },
  ],
});

const createEnTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Function 0", description: "Note used as a descending chromatic chord" },
    { label: "Function 0", description: "Note used as a descending chromatic chord" },
    { label: "Function 0", description: "Sixth harmony for approaching the dominant" },
    { label: "Function 5", description: "Sixth harmony with dominant function" },
    { label: "Function 0", description: "Supporting note for the tonic" },
    { label: "Function 0", description: "Supporting note for the tonic" },
    { label: "Function 1", description: `${getChord(tonalityId)} Relative minor chord` },
    { label: "Function 1", description: `${getChord(tonalityId)} Relative minor chord` },
  ],
});

const createEsTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Función 0", description: "Nota usada como Cromático Decrescente" },
    { label: "Función 0", description: "Nota usada como Cromático Decrescente" },
    { label: "Función 0", description: "Sexta armonía para acercarse a la dominante" },
    { label: "Función 5", description: "Harmonia em sexta com Función dominante" },
    { label: "Función 0", description: "Nota de apoyo para la tónica" },
    { label: "Función 0", description: "Nota de apoyo para la tónica" },
    { label: "Función 1", description: `${getChord(tonalityId)} Acorde relativo menor` },
    { label: "Función 1", description: `${getChord(tonalityId)} Acorde relativo menor` },
  ],
});

const generateMovement11Data = (): Movement11Data => {
  const data: Movement11Data = {
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

export const movement11Data = generateMovement11Data();
