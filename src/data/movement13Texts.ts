import { Language } from "@/contexts/LanguageContext";

interface ContainerText {
  redTitle: string;
  grayText: string;
}

interface TonalityTexts {
  [container: string]: ContainerText;
}

interface Movement13Data {
  [language: string]: {
    [tonality: string]: TonalityTexts;
  };
}

export const movement13Data: Movement13Data = {
  pt: {
    "C": {
      "1": { redTitle: "Função 0", grayText: "F#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Função 2", grayText: "B5+(7)(11+) Acorde Subdominante" },
      "3": { redTitle: "Função 5", grayText: "E7(9)(11)(13) Acorde Dominante" },
      "4": { redTitle: "Função 5", grayText: "E5+(7) Acorde Dominante" },
      "5": { redTitle: "Função 2", grayText: "Am Voice Leading" }
    },
    "C#": {
      "1": { redTitle: "Função 0", grayText: "Gm7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Função 2", grayText: "C5+(7)(11+) Acorde Subdominante" },
      "3": { redTitle: "Função 5", grayText: "F7(9)(11)(13) Acorde Dominante" },
      "4": { redTitle: "Função 5", grayText: "F5+(7) Acorde Dominante" },
      "5": { redTitle: "Função 2", grayText: "A#m Voice Leading" }
    },
    "D": {
      "1": { redTitle: "Função 0", grayText: "G#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Função 2", grayText: "C#5+(7)(11+) Acorde Subdominante" },
      "3": { redTitle: "Função 5", grayText: "F#7(9)(11)(13) Acorde Dominante" },
      "4": { redTitle: "Função 5", grayText: "F#5+(7) Acorde Dominante" },
      "5": { redTitle: "Função 2", grayText: "Bm Voice Leading" }
    },
    "D#": {
      "1": { redTitle: "Função 0", grayText: "Am7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Função 2", grayText: "D5+(7)(11+) Acorde Subdominante" },
      "3": { redTitle: "Função 5", grayText: "G7(9)(11)(13) Acorde Dominante" },
      "4": { redTitle: "Função 5", grayText: "G5+(7) Acorde Dominante" },
      "5": { redTitle: "Função 2", grayText: "Cm Voice Leading" }
    },
    "E": {
      "1": { redTitle: "Função 0", grayText: "Am7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Função 2", grayText: "D#5+(7)(11+) Acorde Subdominante" },
      "3": { redTitle: "Função 5", grayText: "G#7(9)(11)(13) Acorde Dominante" },
      "4": { redTitle: "Função 5", grayText: "G#5+(7) Acorde Dominante" },
      "5": { redTitle: "Função 2", grayText: "C#m Voice Leading" }
    },
    "F": {
      "1": { redTitle: "Função 0", grayText: "A#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Função 2", grayText: "E5+(7)(11+) Acorde Subdominante" },
      "3": { redTitle: "Função 5", grayText: "A7(9)(11)(13) Acorde Dominante" },
      "4": { redTitle: "Função 5", grayText: "A5+(7) Acorde Dominante" },
      "5": { redTitle: "Função 2", grayText: "Dm Voice Leading" }
    },
    "F#": {
      "1": { redTitle: "Função 0", grayText: "Bm7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Função 2", grayText: "F5+(7)(11+) Acorde Subdominante" },
      "3": { redTitle: "Função 5", grayText: "A#7(9)(11)(13) Acorde Dominante" },
      "4": { redTitle: "Função 5", grayText: "A#5+(7) Acorde Dominante" },
      "5": { redTitle: "Função 2", grayText: "D#m Voice Leading" }
    },
    "G": {
      "1": { redTitle: "Função 0", grayText: "Cm7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Função 2", grayText: "F#5+(7)(11+) Acorde Subdominante" },
      "3": { redTitle: "Função 5", grayText: "B7(9)(11)(13) Acorde Dominante" },
      "4": { redTitle: "Função 5", grayText: "B5+(7) Acorde Dominante" },
      "5": { redTitle: "Função 2", grayText: "Em Voice Leading" }
    },
    "G#": {
      "1": { redTitle: "Função 0", grayText: "C#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Função 2", grayText: "B5+(7)(11+) Acorde Subdominante" },
      "3": { redTitle: "Função 5", grayText: "C7(9)(11)(13) Acorde Dominante" },
      "4": { redTitle: "Função 5", grayText: "C5+(7) Acorde Dominante" },
      "5": { redTitle: "Função 2", grayText: "Fm Voice Leading" }
    },
    "A": {
      "1": { redTitle: "Função 0", grayText: "Dm7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Função 2", grayText: "C5+(7)(11+) Acorde Subdominante" },
      "3": { redTitle: "Função 5", grayText: "C#7(9)(11)(13) Acorde Dominante" },
      "4": { redTitle: "Função 5", grayText: "C#5+(7) Acorde Dominante" },
      "5": { redTitle: "Função 2", grayText: "F#m Voice Leading" }
    },
    "A#": {
      "1": { redTitle: "Função 0", grayText: "D#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Função 2", grayText: "C#5+(7)(11+) Acorde Subdominante" },
      "3": { redTitle: "Função 5", grayText: "D7(9)(11)(13) Acorde Dominante" },
      "4": { redTitle: "Função 5", grayText: "D5+(7) Acorde Dominante" },
      "5": { redTitle: "Função 2", grayText: "Gm Voice Leading" }
    },
    "B": {
      "1": { redTitle: "Função 0", grayText: "Em7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Função 2", grayText: "D5+(7)(11+) Acorde Subdominante" },
      "3": { redTitle: "Função 5", grayText: "D#7(9)(11)(13) Acorde Dominante" },
      "4": { redTitle: "Função 5", grayText: "D#5+(7) Acorde Dominante" },
      "5": { redTitle: "Função 2", grayText: "G#m Voice Leading" }
    }
  },
  en: {
    "C": {
      "1": { redTitle: "Function 0", grayText: "F#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Function 2", grayText: "B5+(7)(11+) Subdominant Chord" },
      "3": { redTitle: "Function 5", grayText: "E7(9)(11)(13) Dominant Chord" },
      "4": { redTitle: "Function 5", grayText: "E5+(7) Dominant Chord" },
      "5": { redTitle: "Function 2", grayText: "Am Voice Leading" }
    },
    "C#": {
      "1": { redTitle: "Function 0", grayText: "Gm7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Function 2", grayText: "C5+(7)(11+) Subdominant Chord" },
      "3": { redTitle: "Function 5", grayText: "F7(9)(11)(13) Dominant Chord" },
      "4": { redTitle: "Function 5", grayText: "F5+(7) Dominant Chord" },
      "5": { redTitle: "Function 2", grayText: "A#m Voice Leading" }
    },
    "D": {
      "1": { redTitle: "Function 0", grayText: "G#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Function 2", grayText: "C#5+(7)(11+) Subdominant Chord" },
      "3": { redTitle: "Function 5", grayText: "F#7(9)(11)(13) Dominant Chord" },
      "4": { redTitle: "Function 5", grayText: "F#5+(7) Dominant Chord" },
      "5": { redTitle: "Function 2", grayText: "Bm Voice Leading" }
    },
    "D#": {
      "1": { redTitle: "Function 0", grayText: "Am7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Function 2", grayText: "D5+(7)(11+) Subdominant Chord" },
      "3": { redTitle: "Function 5", grayText: "G7(9)(11)(13) Dominant Chord" },
      "4": { redTitle: "Function 5", grayText: "G5+(7) Dominant Chord" },
      "5": { redTitle: "Function 2", grayText: "Cm Voice Leading" }
    },
    "E": {
      "1": { redTitle: "Function 0", grayText: "Am7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Function 2", grayText: "D#5+(7)(11+) Subdominant Chord" },
      "3": { redTitle: "Function 5", grayText: "G#7(9)(11)(13) Dominant Chord" },
      "4": { redTitle: "Function 5", grayText: "G#5+(7) Dominant Chord" },
      "5": { redTitle: "Function 2", grayText: "C#m Voice Leading" }
    },
    "F": {
      "1": { redTitle: "Function 0", grayText: "A#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Function 2", grayText: "E5+(7)(11+) Subdominant Chord" },
      "3": { redTitle: "Function 5", grayText: "A7(9)(11)(13) Dominant Chord" },
      "4": { redTitle: "Function 5", grayText: "A5+(7) Dominant Chord" },
      "5": { redTitle: "Function 2", grayText: "Dm Voice Leading" }
    },
    "F#": {
      "1": { redTitle: "Function 0", grayText: "Bm7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Function 2", grayText: "F5+(7)(11+) Subdominant Chord" },
      "3": { redTitle: "Function 5", grayText: "A#7(9)(11)(13) Dominant Chord" },
      "4": { redTitle: "Function 5", grayText: "A#5+(7) Dominant Chord" },
      "5": { redTitle: "Function 2", grayText: "D#m Voice Leading" }
    },
    "G": {
      "1": { redTitle: "Function 0", grayText: "Cm7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Function 2", grayText: "F#5+(7)(11+) Subdominant Chord" },
      "3": { redTitle: "Function 5", grayText: "B7(9)(11)(13) Dominant Chord" },
      "4": { redTitle: "Function 5", grayText: "B5+(7) Dominant Chord" },
      "5": { redTitle: "Function 2", grayText: "Em Voice Leading" }
    },
    "G#": {
      "1": { redTitle: "Function 0", grayText: "C#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Function 2", grayText: "B5+(7)(11+) Subdominant Chord" },
      "3": { redTitle: "Function 5", grayText: "C7(9)(11)(13) Dominant Chord" },
      "4": { redTitle: "Function 5", grayText: "C5+(7) Dominant Chord" },
      "5": { redTitle: "Function 2", grayText: "Fm Voice Leading" }
    },
    "A": {
      "1": { redTitle: "Function 0", grayText: "Dm7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Function 2", grayText: "C5+(7)(11+) Subdominant Chord" },
      "3": { redTitle: "Function 5", grayText: "C#7(9)(11)(13) Dominant Chord" },
      "4": { redTitle: "Function 5", grayText: "C#5+(7) Dominant Chord" },
      "5": { redTitle: "Function 2", grayText: "F#m Voice Leading" }
    },
    "A#": {
      "1": { redTitle: "Function 0", grayText: "D#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Function 2", grayText: "C#5+(7)(11+) Subdominant Chord" },
      "3": { redTitle: "Function 5", grayText: "D7(9)(11)(13) Dominant Chord" },
      "4": { redTitle: "Function 5", grayText: "D5+(7) Dominant Chord" },
      "5": { redTitle: "Function 2", grayText: "Gm Voice Leading" }
    },
    "B": {
      "1": { redTitle: "Function 0", grayText: "Em7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Function 2", grayText: "D5+(7)(11+) Subdominant Chord" },
      "3": { redTitle: "Function 5", grayText: "D#7(9)(11)(13) Dominant Chord" },
      "4": { redTitle: "Function 5", grayText: "D#5+(7) Dominant Chord" },
      "5": { redTitle: "Function 2", grayText: "G#m Voice Leading" }
    }
  },
  es: {
    "C": {
      "1": { redTitle: "Función 0", grayText: "F#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Función 2", grayText: "B5+(7)(11+) Acorde de subdominante" },
      "3": { redTitle: "Función 5", grayText: "E7(9)(11)(13) Acorde de dominante" },
      "4": { redTitle: "Función 5", grayText: "E5+(7) Acorde de dominante" },
      "5": { redTitle: "Función 2", grayText: "Am Voice Leading" }
    },
    "C#": {
      "1": { redTitle: "Función 0", grayText: "Gm7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Función 2", grayText: "C5+(7)(11+) Acorde de subdominante" },
      "3": { redTitle: "Función 5", grayText: "F7(9)(11)(13) Acorde de dominante" },
      "4": { redTitle: "Función 5", grayText: "F5+(7) Acorde de dominante" },
      "5": { redTitle: "Función 2", grayText: "A#m Voice Leading" }
    },
    "D": {
      "1": { redTitle: "Función 0", grayText: "G#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Función 2", grayText: "C#5+(7)(11+) Acorde de subdominante" },
      "3": { redTitle: "Función 5", grayText: "F#7(9)(11)(13) Acorde de dominante" },
      "4": { redTitle: "Función 5", grayText: "F#5+(7) Acorde de dominante" },
      "5": { redTitle: "Función 2", grayText: "Bm Voice Leading" }
    },
    "D#": {
      "1": { redTitle: "Función 0", grayText: "Am7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Función 2", grayText: "D5+(7)(11+) Acorde de subdominante" },
      "3": { redTitle: "Función 5", grayText: "G7(9)(11)(13) Acorde de dominante" },
      "4": { redTitle: "Función 5", grayText: "G5+(7) Acorde de dominante" },
      "5": { redTitle: "Función 2", grayText: "Cm Voice Leading" }
    },
    "E": {
      "1": { redTitle: "Función 0", grayText: "Am7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Función 2", grayText: "D#5+(7)(11+) Acorde de subdominante" },
      "3": { redTitle: "Función 5", grayText: "G#7(9)(11)(13) Acorde de dominante" },
      "4": { redTitle: "Función 5", grayText: "G#5+(7) Acorde de dominante" },
      "5": { redTitle: "Función 2", grayText: "C#m Voice Leading" }
    },
    "F": {
      "1": { redTitle: "Función 0", grayText: "A#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Función 2", grayText: "E5+(7)(11+) Acorde de subdominante" },
      "3": { redTitle: "Función 5", grayText: "A7(9)(11)(13) Acorde de dominante" },
      "4": { redTitle: "Función 5", grayText: "A5+(7) Acorde de dominante" },
      "5": { redTitle: "Función 2", grayText: "Dm Voice Leading" }
    },
    "F#": {
      "1": { redTitle: "Función 0", grayText: "Bm7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Función 2", grayText: "F5+(7)(11+) Acorde de subdominante" },
      "3": { redTitle: "Función 5", grayText: "A#7(9)(11)(13) Acorde de dominante" },
      "4": { redTitle: "Función 5", grayText: "A#5+(7) Acorde de dominante" },
      "5": { redTitle: "Función 2", grayText: "D#m Voice Leading" }
    },
    "G": {
      "1": { redTitle: "Función 0", grayText: "Cm7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Función 2", grayText: "F#5+(7)(11+) Acorde de subdominante" },
      "3": { redTitle: "Función 5", grayText: "B7(9)(11)(13) Acorde de dominante" },
      "4": { redTitle: "Función 5", grayText: "B5+(7) Acorde de dominante" },
      "5": { redTitle: "Función 2", grayText: "Em Voice Leading" }
    },
    "G#": {
      "1": { redTitle: "Función 0", grayText: "C#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Función 2", grayText: "B5+(7)(11+) Acorde de subdominante" },
      "3": { redTitle: "Función 5", grayText: "C7(9)(11)(13) Acorde de dominante" },
      "4": { redTitle: "Función 5", grayText: "C5+(7) Acorde de dominante" },
      "5": { redTitle: "Función 2", grayText: "Fm Voice Leading" }
    },
    "A": {
      "1": { redTitle: "Función 0", grayText: "Dm7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Función 2", grayText: "C5+(7)(11+) Acorde de subdominante" },
      "3": { redTitle: "Función 5", grayText: "C#7(9)(11)(13) Acorde de dominante" },
      "4": { redTitle: "Función 5", grayText: "C#5+(7) Acorde de dominante" },
      "5": { redTitle: "Función 2", grayText: "F#m Voice Leading" }
    },
    "A#": {
      "1": { redTitle: "Función 0", grayText: "D#m7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Función 2", grayText: "C#5+(7)(11+) Acorde de subdominante" },
      "3": { redTitle: "Función 5", grayText: "D7(9)(11)(13) Acorde de dominante" },
      "4": { redTitle: "Función 5", grayText: "D5+(7) Acorde de dominante" },
      "5": { redTitle: "Función 2", grayText: "Gm Voice Leading" }
    },
    "B": {
      "1": { redTitle: "Función 0", grayText: "Em7(11+) Empilhamento 5 do Subdominante" },
      "2": { redTitle: "Función 2", grayText: "D5+(7)(11+) Acorde de subdominante" },
      "3": { redTitle: "Función 5", grayText: "D#7(9)(11)(13) Acorde de dominante" },
      "4": { redTitle: "Función 5", grayText: "D#5+(7) Acorde de dominante" },
      "5": { redTitle: "Función 2", grayText: "G#m Voice Leading" }
    }
  }
};

export const getMovement13Text = (
  language: Language,
  tonality: string,
  container: string
): ContainerText | null => {
  const langKey = language === "pt" ? "pt" : language === "en" ? "en" : "es";
  return movement13Data[langKey]?.[tonality]?.[container] || null;
};
