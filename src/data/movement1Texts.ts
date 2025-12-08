import { Language } from "@/contexts/LanguageContext";
import { movement2Data } from "./movement2Texts";
import { movement3Data } from "./movement3Texts";
import { movement4Data } from "./movement4Texts";
import { movement5Data } from "./movement5Texts";
import { movement6Data } from "./movement6Texts";
import { movement7Data } from "./movement7Texts";
import { movement8Data } from "./movement8Texts";
import { movement9Data } from "./movement9Texts";
import { movement10Data } from "./movement10Texts";

const tonalityKeyMap: { [key: number]: string } = {
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
interface ContainerText {
  label: string;
  description: string;
}

interface TonalityTexts {
  containers: ContainerText[];
}

type Movement1Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

// Helper to generate chord based on tonality
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

// Portuguese texts
const createPtTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Função 0", description: "Nota usada como Cromático Ascendente" },
    { label: "Função 0", description: "Nota usada como Cromático Ascendente" },
    { label: "Função 2", description: "Harmonia com intervalo de 6º" },
    { label: "Função 5", description: "Harmonia com intervalo de 6º" },
    { label: "Função 1", description: `${getChord(tonalityId)} Acorde relativo menor` },
  ],
});

// English texts
const createEnTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Function 0", description: "Note used as Ascending Chromatic" },
    { label: "Function 0", description: "Note used as Ascending Chromatic" },
    { label: "Function 2", description: "Harmony with a 6th interval" },
    { label: "Function 5", description: "Harmony with a 6th interval" },
    { label: "Function 1", description: `${getChord(tonalityId)} Relative minor chord` },
  ],
});

// Spanish texts
const createEsTexts = (tonalityId: number): TonalityTexts => ({
  containers: [
    { label: "Función 0", description: "Nota utilizada como cromática ascendente" },
    { label: "Función 0", description: "Nota utilizada como cromática ascendente" },
    { label: "Función 2", description: "Armonía con intervalo de sexta" },
    { label: "Función 5", description: "Armonía con intervalo de sexta" },
    { label: "Función 1", description: `${getChord(tonalityId)} Acorde relativo menor` },
  ],
});

// Generate data for all tonalities
const generateMovement1Data = (): Movement1Data => {
  const data: Movement1Data = {
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

export const movement1Data = generateMovement1Data();

export const getContainerTexts = (
  movementId: number,
  tonalityId: number,
  containerIndex: number,
  language: Language
): ContainerText => {
  // Movement 1
  if (movementId === 1) {
    const texts = movement1Data[language]?.[tonalityId]?.containers?.[containerIndex - 1];
    if (texts) {
      return texts;
    }
  }
  
  // Movement 2
  if (movementId === 2) {
    const texts = movement2Data[language]?.[tonalityId]?.containers?.[containerIndex - 1];
    if (texts) {
      return texts;
    }
  }
  
  // Movement 3
  if (movementId === 3) {
    const texts = movement3Data[language]?.[tonalityId]?.containers?.[containerIndex - 1];
    if (texts) {
      return texts;
    }
  }
  
  // Movement 4
  if (movementId === 4) {
    const texts = movement4Data[language]?.[tonalityId]?.containers?.[containerIndex - 1];
    if (texts) {
      return texts;
    }
  }
  
  // Movement 5
  if (movementId === 5) {
    const tonalityKey = tonalityKeyMap[tonalityId] || "C";
    const langData = movement5Data[language];
    const tonalityData = langData?.[tonalityKey as keyof typeof langData];
    const containerData = tonalityData?.[containerIndex - 1];
    if (containerData) {
      return {
        label: containerData.title,
        description: containerData.subtitle,
      };
    }
  }
  
  // Movement 6
  if (movementId === 6) {
    const texts = movement6Data[language]?.[tonalityId]?.containers?.[containerIndex - 1];
    if (texts) {
      return texts;
    }
  }
  
  // Movement 7
  if (movementId === 7) {
    const texts = movement7Data[language]?.[tonalityId]?.containers?.[containerIndex - 1];
    if (texts) {
      return texts;
    }
  }
  
  // Movement 8
  if (movementId === 8) {
    const texts = movement8Data[language]?.[tonalityId]?.containers?.[containerIndex - 1];
    if (texts) {
      return texts;
    }
  }
  
  // Movement 9
  if (movementId === 9) {
    const texts = movement9Data[language]?.[tonalityId]?.containers?.[containerIndex - 1];
    if (texts) {
      return texts;
    }
  }
  
  // Movement 10
  if (movementId === 10) {
    const texts = movement10Data[language]?.[tonalityId]?.containers?.[containerIndex - 1];
    if (texts) {
      return texts;
    }
  }
  
  // Default fallback for other movements
  return {
    label: `Container ${containerIndex}`,
    description: `Movement ${movementId}`,
  };
};
