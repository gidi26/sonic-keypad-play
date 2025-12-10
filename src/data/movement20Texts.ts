export interface Movement20ContainerText {
  function: string;
  description: string;
}

export interface Movement20TonalityTexts {
  containers: Movement20ContainerText[];
}

export interface Movement20LanguageTexts {
  [tonality: string]: Movement20TonalityTexts;
}

export interface Movement20Data {
  pt: Movement20LanguageTexts;
  en: Movement20LanguageTexts;
  es: Movement20LanguageTexts;
}

const tonalities = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Dominant chords for each tonality (V7(9) of the major key)
const dominantChords: { [key: string]: string } = {
  'C': 'G7(9)',
  'C#': 'G#7(9)',
  'D': 'A7(9)',
  'D#': 'A#7(9)',
  'E': 'B7(9)',
  'F': 'C7(9)',
  'F#': 'C#7(9)',
  'G': 'D7(9)',
  'G#': 'D#7(9)',
  'A': 'E7(9)',
  'A#': 'F7(9)',
  'B': 'F#7(9)'
};

// Tonic chords for each tonality
const tonicChords: { [key: string]: string } = {
  'C': 'C9(13)',
  'C#': 'C#9(13)',
  'D': 'D9(13)',
  'D#': 'D#9(13)',
  'E': 'E9(13)',
  'F': 'F9(13)',
  'F#': 'F#9(13)',
  'G': 'G9(13)',
  'G#': 'G#9(13)',
  'A': 'A9(13)',
  'A#': 'A#9(13)',
  'B': 'B9(13)'
};

const generatePortugueseTexts = (): Movement20LanguageTexts => {
  const result: Movement20LanguageTexts = {};
  
  tonalities.forEach(tonality => {
    result[tonality] = {
      containers: [
        { function: "Função 0", description: "Cromático Descendente para o Dominante" },
        { function: "Função 0", description: "Cromático Descendente para o Dominante" },
        { function: "Função 0", description: "Cromático Descendente para o Dominante" },
        { function: "Função 5", description: `${dominantChords[tonality]} Acorde Dominante` },
        { function: "Função 1", description: `${tonicChords[tonality]} Tônica` }
      ]
    };
  });
  
  return result;
};

const generateSpanishTexts = (): Movement20LanguageTexts => {
  const result: Movement20LanguageTexts = {};
  
  tonalities.forEach(tonality => {
    result[tonality] = {
      containers: [
        { function: "Función 0", description: "Acorde Cromático Descendente a Dominante" },
        { function: "Función 0", description: "Acorde Cromático Descendente a Dominante" },
        { function: "Función 0", description: "Acorde Cromático Descendente a Dominante" },
        { function: "Función 5", description: `${dominantChords[tonality]} Acorde Dominante` },
        { function: "Función 1", description: `${tonicChords[tonality]} Tónica` }
      ]
    };
  });
  
  return result;
};

const generateEnglishTexts = (): Movement20LanguageTexts => {
  const result: Movement20LanguageTexts = {};
  
  tonalities.forEach(tonality => {
    result[tonality] = {
      containers: [
        { function: "Function 0", description: "Chromatic Descending Chord to Dominant" },
        { function: "Function 0", description: "Chromatic Descending Chord to Dominant" },
        { function: "Function 0", description: "Chromatic Descending Chord to Dominant" },
        { function: "Function 5", description: `${dominantChords[tonality]} Dominant Chord` },
        { function: "Function 1", description: `${tonicChords[tonality]} Tonic` }
      ]
    };
  });
  
  return result;
};

export const movement20Data: Movement20Data = {
  pt: generatePortugueseTexts(),
  en: generateEnglishTexts(),
  es: generateSpanishTexts()
};

export const getMovement20Text = (
  language: 'pt' | 'en' | 'es',
  tonality: string,
  containerIndex: number
): Movement20ContainerText | null => {
  const langData = movement20Data[language];
  if (!langData) return null;
  
  const tonalityData = langData[tonality];
  if (!tonalityData) return null;
  
  return tonalityData.containers[containerIndex] || null;
};
