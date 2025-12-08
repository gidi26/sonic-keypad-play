import { Language } from "@/contexts/LanguageContext";

interface ContainerText {
  label: string;
  description: string;
}

interface TonalityTexts {
  containers: ContainerText[];
}

type Movement16Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

// Chord mappings for each tonality
const tonalityChords: { [key: number]: {
  subdominantNegative: string;
  subdominantSub5: string;
  dominant1: string;
  dominant2: string;
  tonic: string;
}} = {
  1: { subdominantNegative: "Bb7+(9)(13)", subdominantSub5: "G#7(9)(11+)(13)", dominant1: "G7(9)(11)", dominant2: "G7(9-)", tonic: "C7+" },
  2: { subdominantNegative: "C7+(9)(13)", subdominantSub5: "A7(9)(11+)(13)", dominant1: "G#7(9)(11)", dominant2: "G#7(9-)", tonic: "C#7+" },
  3: { subdominantNegative: "C#7+(9)(13)", subdominantSub5: "A#7(9)(11+)(13)", dominant1: "A7(9)(11)", dominant2: "A7(9-)", tonic: "D7+" },
  4: { subdominantNegative: "D7+(9)(13)", subdominantSub5: "B7(9)(11+)(13)", dominant1: "A#7(9)(11)", dominant2: "A#7(9-)", tonic: "D#7+" },
  5: { subdominantNegative: "D#7+(9)(13)", subdominantSub5: "C7(9)(11+)(13)", dominant1: "B7(9)(11)", dominant2: "B7(9-)", tonic: "E7+" },
  6: { subdominantNegative: "E7+(9)(13)", subdominantSub5: "C#7(9)(11+)(13)", dominant1: "C7(9)(11)", dominant2: "C7(9-)", tonic: "F7+" },
  7: { subdominantNegative: "F7+(9)(13)", subdominantSub5: "D7(9)(11+)(13)", dominant1: "C#7(9)(11)", dominant2: "C#7(9-)", tonic: "F#7+" },
  8: { subdominantNegative: "F#7+(9)(13)", subdominantSub5: "D#7(9)(11+)(13)", dominant1: "D7(9)(11)", dominant2: "D7(9-)", tonic: "G7+" },
  9: { subdominantNegative: "G7+(9)(13)", subdominantSub5: "E7(9)(11+)(13)", dominant1: "D#7(9)(11)", dominant2: "D#7(9-)", tonic: "G#7+" },
  10: { subdominantNegative: "G#7+(9)(13)", subdominantSub5: "F7(9)(11+)(13)", dominant1: "E7(9)(11)", dominant2: "E7(9-)", tonic: "A7+" },
  11: { subdominantNegative: "A7+(9)(13)", subdominantSub5: "F#7(9)(11+)(13)", dominant1: "F7(9)(11)", dominant2: "F7(9-)", tonic: "A#7+" },
  12: { subdominantNegative: "A#7+(9)(13)", subdominantSub5: "G7(9)(11+)(13)", dominant1: "F#7(9)(11)", dominant2: "F#7(9-)", tonic: "B7+" },
};

// Portuguese texts
const createPtTexts = (tonalityId: number): TonalityTexts => {
  const chords = tonalityChords[tonalityId];
  return {
    containers: [
      { label: "Função 0", description: "Nota de aproximação para o Acorde subdominante" },
      { label: "Função 0", description: "Nota de aproximação para o Acorde subdominante" },
      { label: "Função 2", description: `${chords.subdominantNegative} Acorde subdominante (Harmonia Negativa)` },
      { label: "Função 0", description: "Nota de aproximação para o Acorde subdominante" },
      { label: "Função 2", description: `${chords.subdominantSub5} Acorde subdominante (Sub5)` },
      { label: "Função 0", description: "Nota de aproximação para o Acorde dominante" },
      { label: "Função 5", description: `${chords.dominant1} Acorde dominante` },
      { label: "Função 0", description: "Nota de aproximação para o Acorde dominante" },
      { label: "Função 5", description: `${chords.dominant2} Acorde dominante` },
      { label: "Função 0", description: "Nota de aproximação para a Tônica" },
      { label: "Função 0", description: `${chords.tonic} Tônica` },
    ],
  };
};

// English texts
const createEnTexts = (tonalityId: number): TonalityTexts => {
  const chords = tonalityChords[tonalityId];
  return {
    containers: [
      { label: "Function 0", description: "Approach note for the subdominant chord" },
      { label: "Function 0", description: "Approach note for the subdominant chord" },
      { label: "Function 2", description: `${chords.subdominantNegative} Subdominant chord (Negative Harmony)` },
      { label: "Function 0", description: "Approach note for the subdominant chord" },
      { label: "Function 2", description: `${chords.subdominantSub5} Subdominant chord (Sub5)` },
      { label: "Function 0", description: "Approach note for the dominant chord" },
      { label: "Function 5", description: `${chords.dominant1} Dominant chord` },
      { label: "Function 0", description: "Approach note for the dominant chord" },
      { label: "Function 5", description: `${chords.dominant2} Dominant chord` },
      { label: "Function 0", description: "Approach note for the tonic" },
      { label: "Function 0", description: `${chords.tonic} Tonic` },
    ],
  };
};

// Spanish texts
const createEsTexts = (tonalityId: number): TonalityTexts => {
  const chords = tonalityChords[tonalityId];
  return {
    containers: [
      { label: "Función 0", description: "Nota de aproximación para el acorde de subdominante" },
      { label: "Función 0", description: "Nota de aproximación para el acorde de subdominante" },
      { label: "Función 2", description: `${chords.subdominantNegative} Acorde de subdominante (Armonía Negativa)` },
      { label: "Función 0", description: "Nota de aproximación para el acorde de subdominante" },
      { label: "Función 2", description: `${chords.subdominantSub5} Acorde de subdominante (Sub5)` },
      { label: "Función 0", description: "Nota de aproximación para el acorde de dominante" },
      { label: "Función 5", description: `${chords.dominant1} Acorde de dominante` },
      { label: "Función 0", description: "Nota de aproximación para el acorde de dominante" },
      { label: "Función 5", description: `${chords.dominant2} Acorde de dominante` },
      { label: "Función 0", description: "Nota de aproximación para la tónica" },
      { label: "Función 0", description: `${chords.tonic} Tónica` },
    ],
  };
};

// Generate data for all tonalities
const generateMovement16Data = (): Movement16Data => {
  const data: Movement16Data = {
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

export const movement16Data = generateMovement16Data();
