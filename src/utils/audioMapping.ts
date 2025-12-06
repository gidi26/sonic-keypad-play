// Audio file mapping system for movements, tonalities, and timbres

export const getTonalityCode = (tonalityId: number): string => {
  const tonalityMap: { [key: number]: string } = {
    1: 'c',   // C ou Am
    2: 'c-',  // C# ou A#m
    3: 'd',   // D ou Bm
    4: 'd-',  // D# ou Cm
    5: 'e',   // E ou C#m
    6: 'f',   // F ou Dm
    7: 'f-',  // F# ou D#m
    8: 'g',   // G ou Em
    9: 'g-',  // G# ou Fm
    10: 'a',  // A ou F#m
    11: 'a-', // A# ou Gm
    12: 'b',  // B ou G#m
  };
  return tonalityMap[tonalityId] || 'c';
};

export const getTimbreCode = (timbre: 'acoustic' | 'digital' | 'electric'): string => {
  const timbreMap = {
    acoustic: 'piano',
    digital: 'mks',
    electric: 'rhodes',
  };
  return timbreMap[timbre];
};

export const getAudioUrl = (
  movementId: number,
  tonalityId: number,
  timbre: 'acoustic' | 'digital' | 'electric',
  containerNum: number
): string => {
  const movementStr = String(movementId).padStart(2, '0');
  const tonalityCode = getTonalityCode(tonalityId);
  const timbreCode = getTimbreCode(timbre);
  
  return `https://gidiferreira.com/audapp/${movementStr}-${tonalityCode}-${timbreCode}-${String(containerNum).padStart(2, '0')}.mp3`;
};

export const getFullAudioUrl = (
  movementId: number,
  tonalityId: number,
  timbre: 'acoustic' | 'digital' | 'electric'
): string => {
  const movementStr = String(movementId).padStart(2, '0');
  const tonalityCode = getTonalityCode(tonalityId);
  const timbreCode = getTimbreCode(timbre);
  
  return `https://gidiferreira.com/audapp/${movementStr}-${tonalityCode}-${timbreCode}-full.mp3`;
};

export const getContainerCount = (movementId: number): number => {
  // Define containers per movement
  const containerMap: { [key: number]: number } = {
    1: 5,   // Movimento 1: 5 containers
    2: 5,   // Movimento 2: 5 containers
    3: 8,   // Movimento 3: 8 containers
    4: 5,   // Movimento 4: 5 containers
    5: 7,   // Movimento 5: 7 containers
    6: 7,   // Movimento 6: 7 containers
    7: 7,   // Movimento 7: 7 containers
    8: 5,   // Movimento 8: 5 containers
    9: 9,   // Movimento 9: 9 containers
    10: 9,  // Movimento 10: 9 containers
    11: 8,  // Movimento 11: 8 containers
    12: 6,  // Movimento 12: 6 containers
    13: 5,  // Movimento 13: 5 containers
    14: 6,  // Movimento 14: 6 containers
    15: 6,  // Movimento 15: 6 containers
    16: 9,  // Movimento 16: 9 containers
    17: 6,  // Movimento 17: 6 containers
    18: 6,  // Movimento 18: 6 containers
    19: 8,  // Movimento 19: 8 containers
    20: 5,  // Movimento 20: 5 containers
  };
  
  return containerMap[movementId] || 15; // Default to 15 for movements not yet configured
};
