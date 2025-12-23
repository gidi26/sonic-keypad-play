// Movement 19 - JUMP - Dynamic chord data based on tonality

interface Movement19ChordData {
  dominantChord: string;
  passingChord1: string;
  passingChord2: string;
  relativeChord: string;
}

const movement19ChordMap: Record<string, Movement19ChordData> = {
  'C': { dominantChord: 'E7', passingChord1: 'D/F#', passingChord2: 'E/G#', relativeChord: 'Am7' },
  'C#': { dominantChord: 'F7', passingChord1: 'D#/G', passingChord2: 'F/A', relativeChord: 'A#m7' },
  'D': { dominantChord: 'F#7', passingChord1: 'E/G#', passingChord2: 'F#/A#', relativeChord: 'Bm7' },
  'D#': { dominantChord: 'G7', passingChord1: 'F/A', passingChord2: 'G/B', relativeChord: 'Cm7' },
  'E': { dominantChord: 'G#7', passingChord1: 'F#/A#', passingChord2: 'G#/C', relativeChord: 'C#m7' },
  'F': { dominantChord: 'A7', passingChord1: 'G/B', passingChord2: 'A/C#', relativeChord: 'Dm7' },
  'F#': { dominantChord: 'A#7', passingChord1: 'G#/C', passingChord2: 'A#/D', relativeChord: 'D#m7' },
  'G': { dominantChord: 'B7', passingChord1: 'A/C#', passingChord2: 'B/D#', relativeChord: 'Em7' },
  'G#': { dominantChord: 'C7', passingChord1: 'A#/D', passingChord2: 'C/E', relativeChord: 'Fm7' },
  'A': { dominantChord: 'C#7', passingChord1: 'B/D#', passingChord2: 'C#/F', relativeChord: 'F#m7' },
  'A#': { dominantChord: 'D7', passingChord1: 'C/E', passingChord2: 'D/F#', relativeChord: 'Gm7' },
  'B': { dominantChord: 'D7', passingChord1: 'C#/F', passingChord2: 'D#/G', relativeChord: 'G#m7' },
};

type Language = 'pt' | 'en' | 'es';

interface ContainerText {
  redTitle: string;
  grayText: string;
}

export const getMovement19Texts = (tonality: string, language: Language): ContainerText[] => {
  const chordData = movement19ChordMap[tonality] || movement19ChordMap['C'];
  
  const texts: Record<Language, ContainerText[]> = {
    pt: [
      { redTitle: 'Técnica', grayText: 'Cromático Descendente para o Dominante' },
      { redTitle: 'Técnica', grayText: 'Cromático Descendente para o Dominante' },
      { redTitle: 'Técnica', grayText: 'Cromático Descendente para o Dominante' },
      { redTitle: 'Função 5', grayText: `${chordData.dominantChord} Acorde Dominante` },
      { redTitle: 'Técnica', grayText: `${chordData.passingChord1} Passagem para acorde relativo` },
      { redTitle: 'Técnica', grayText: `${chordData.passingChord2} Passagem para acorde relativo` },
      { redTitle: 'Técnica', grayText: 'Nota de apoio para o acorde relativo' },
      { redTitle: 'Função 1', grayText: `${chordData.relativeChord} Acorde relativo` },
    ],
    en: [
      { redTitle: 'Technique', grayText: 'Descending Chromatic Chord to the Dominant' },
      { redTitle: 'Technique', grayText: 'Descending Chromatic Chord to the Dominant' },
      { redTitle: 'Technique', grayText: 'Descending Chromatic Chord to the Dominant' },
      { redTitle: 'Function 5', grayText: `${chordData.dominantChord} Dominant Chord` },
      { redTitle: 'Technique', grayText: `${chordData.passingChord1} Passage to Relative Chord` },
      { redTitle: 'Technique', grayText: `${chordData.passingChord2} Passage to Relative Chord` },
      { redTitle: 'Technique', grayText: 'Supporting Note for the Relative Chord' },
      { redTitle: 'Function 1', grayText: `${chordData.relativeChord} Relative Chord` },
    ],
    es: [
      { redTitle: 'Técnica', grayText: 'Acorde cromático descendente a la dominante' },
      { redTitle: 'Técnica', grayText: 'Acorde cromático descendente a la dominante' },
      { redTitle: 'Técnica', grayText: 'Acorde cromático descendente a la dominante' },
      { redTitle: 'Función 5', grayText: `${chordData.dominantChord} Acorde de dominante` },
      { redTitle: 'Técnica', grayText: `${chordData.passingChord1} Paso al acorde relativo` },
      { redTitle: 'Técnica', grayText: `${chordData.passingChord2} Paso al acorde relativo` },
      { redTitle: 'Técnica', grayText: 'Nota de apoyo para el acorde relativo' },
      { redTitle: 'Función 1', grayText: `${chordData.relativeChord} Acorde relativo` },
    ],
  };
  
  return texts[language] || texts['pt'];
};

export const movement19Data = {
  getTexts: getMovement19Texts,
  containerCount: 8,
};
