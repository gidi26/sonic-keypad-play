// Movement 18 - MAJOR PASSING - Multilingual texts for all 12 tonalities

interface Movement18Texts {
  pt: {
    containers: { redTitle: string; grayText: string }[];
  };
  en: {
    containers: { redTitle: string; grayText: string }[];
  };
  es: {
    containers: { redTitle: string; grayText: string }[];
  };
}

// Chord mappings for each tonality
const tonalityChords: Record<string, {
  dominant: string;
  passing1: string;
  passing2: string;
  tonic: string;
}> = {
  'C': { dominant: 'G7', passing1: 'F/A', passing2: 'G/B', tonic: 'C' },
  'C#': { dominant: 'G#7', passing1: 'F#/A#', passing2: 'G#/C', tonic: 'C#' },
  'D': { dominant: 'A7', passing1: 'G/B', passing2: 'A/C#', tonic: 'D' },
  'D#': { dominant: 'A#7', passing1: 'G#/C', passing2: 'A#/D', tonic: 'D#' },
  'E': { dominant: 'B7', passing1: 'A/C#', passing2: 'B/D#', tonic: 'E' },
  'F': { dominant: 'C7', passing1: 'A#/D', passing2: 'C/E', tonic: 'F' },
  'F#': { dominant: 'C#7', passing1: 'B/D#', passing2: 'C#/F', tonic: 'F#' },
  'G': { dominant: 'D7', passing1: 'C/E', passing2: 'D/F#', tonic: 'G' },
  'G#': { dominant: 'D#7', passing1: 'C#/F', passing2: 'D#/G', tonic: 'G#' },
  'A': { dominant: 'E7', passing1: 'D/F#', passing2: 'E/G#', tonic: 'A' },
  'A#': { dominant: 'F7', passing1: 'D#/G', passing2: 'F/A', tonic: 'A#' },
  'B': { dominant: 'F#7', passing1: 'E/G#', passing2: 'F#/A#', tonic: 'B' },
};

export const getMovement18Texts = (tonality: string): Movement18Texts => {
  const chords = tonalityChords[tonality] || tonalityChords['C'];

  return {
    pt: {
      containers: [
        { redTitle: 'Técnica', grayText: 'Nota de aproximação para o acorde dominante' },
        { redTitle: 'Técnica', grayText: 'Nota de aproximação para o acorde dominante' },
        { redTitle: 'Função 5', grayText: `${chords.dominant} Acorde Dominante` },
        { redTitle: 'Técnica', grayText: `${chords.passing1} Acorde de passagem para a Tônica` },
        { redTitle: 'Técnica', grayText: `${chords.passing2} Acorde de passagem para a Tônica` },
        { redTitle: 'Função 1', grayText: `${chords.tonic} Tônica` },
      ]
    },
    en: {
      containers: [
        { redTitle: 'Technique', grayText: 'Approach note for the dominant chord' },
        { redTitle: 'Technique', grayText: 'Approach note for the dominant chord' },
        { redTitle: 'Function 5', grayText: `${chords.dominant} Dominant Chord` },
        { redTitle: 'Technique', grayText: `${chords.passing1} Passing chord to the Tonic` },
        { redTitle: 'Technique', grayText: `${chords.passing2} Passing chord to the Tonic` },
        { redTitle: 'Function 1', grayText: `${chords.tonic} Tonic` },
      ]
    },
    es: {
      containers: [
        { redTitle: 'Técnica', grayText: 'Nota de aproximación para el acorde de dominante' },
        { redTitle: 'Técnica', grayText: 'Nota de aproximación para el acorde de dominante' },
        { redTitle: 'Función 5', grayText: `${chords.dominant} Acorde de dominante` },
        { redTitle: 'Técnica', grayText: `${chords.passing1} Pasando el acorde a la tónica` },
        { redTitle: 'Técnica', grayText: `${chords.passing2} Pasando el acorde a la tónica` },
        { redTitle: 'Función 1', grayText: `${chords.tonic} Tónica` },
      ]
    }
  };
};

export const movement18Data = {
  getTexts: getMovement18Texts,
  containerCount: 6
};
