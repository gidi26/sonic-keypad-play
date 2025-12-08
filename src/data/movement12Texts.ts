import { Language } from "@/contexts/LanguageContext";

interface ContainerText {
  label: string;
  description: string;
}

interface TonalityTexts {
  containers: ContainerText[];
}

type Movement12Data = {
  [key in Language]: {
    [tonalityId: number]: TonalityTexts;
  };
};

export const movement12Data: Movement12Data = {
  pt: {
    1: {
      containers: [
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 2", description: "G7(9)(11) Acorde dominante" },
        { label: "Função 2", description: "Em Voice Leading" },
        { label: "Função 2", description: "Dm Voice Leading" },
        { label: "Função 1", description: "C7(9)(11) Tônica com função Dominante" },
      ],
    },
    2: {
      containers: [
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 2", description: "G#7(9)(11) Acorde dominante" },
        { label: "Função 2", description: "Fm Voice Leading" },
        { label: "Função 2", description: "D#m Voice Leading" },
        { label: "Função 1", description: "C#7(9)(11) Tônica com função Dominante" },
      ],
    },
    3: {
      containers: [
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 2", description: "A7(9)(11) Acorde dominante" },
        { label: "Função 2", description: "F#m Voice Leading" },
        { label: "Função 2", description: "Em Voice Leading" },
        { label: "Função 1", description: "D7(9)(11) Tônica com função Dominante" },
      ],
    },
    4: {
      containers: [
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 2", description: "A#7(9)(11) Acorde dominante" },
        { label: "Função 2", description: "Gm Voice Leading" },
        { label: "Função 2", description: "Fm Voice Leading" },
        { label: "Função 1", description: "D#7(9)(11) Tônica com função Dominante" },
      ],
    },
    5: {
      containers: [
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 2", description: "B7(9)(11) Acorde dominante" },
        { label: "Função 2", description: "G#m Voice Leading" },
        { label: "Função 2", description: "F#m Voice Leading" },
        { label: "Função 1", description: "E7(9)(11) Tônica com função Dominante" },
      ],
    },
    6: {
      containers: [
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 2", description: "C7(9)(11) Acorde dominante" },
        { label: "Função 2", description: "Am Voice Leading" },
        { label: "Função 2", description: "Gm Voice Leading" },
        { label: "Função 1", description: "F7(9)(11) Tônica com função Dominante" },
      ],
    },
    7: {
      containers: [
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 2", description: "C#7(9)(11) Acorde dominante" },
        { label: "Função 2", description: "A#m Voice Leading" },
        { label: "Função 2", description: "G#m Voice Leading" },
        { label: "Função 1", description: "F#7(9)(11) Tônica com função Dominante" },
      ],
    },
    8: {
      containers: [
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 2", description: "D7(9)(11) Acorde dominante" },
        { label: "Função 2", description: "Bm Voice Leading" },
        { label: "Função 2", description: "Am Voice Leading" },
        { label: "Função 1", description: "G7(9)(11) Tônica com função Dominante" },
      ],
    },
    9: {
      containers: [
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 2", description: "D#7(9)(11) Acorde dominante" },
        { label: "Função 2", description: "Cm Voice Leading" },
        { label: "Função 2", description: "A#m Voice Leading" },
        { label: "Função 1", description: "G#7(9)(11) Tônica com função Dominante" },
      ],
    },
    10: {
      containers: [
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 2", description: "E7(9)(11) Acorde dominante" },
        { label: "Função 2", description: "C#m Voice Leading" },
        { label: "Função 2", description: "Bm Voice Leading" },
        { label: "Função 1", description: "A7(9)(11) Tônica com função Dominante" },
      ],
    },
    11: {
      containers: [
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 2", description: "F7(9)(11) Acorde dominante" },
        { label: "Função 2", description: "Dm Voice Leading" },
        { label: "Função 2", description: "Cm Voice Leading" },
        { label: "Função 1", description: "A#7(9)(11) Tônica com função Dominante" },
      ],
    },
    12: {
      containers: [
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 0", description: "Nota de apoio para Dominante" },
        { label: "Função 2", description: "F#7(9)(11) Acorde dominante" },
        { label: "Função 2", description: "D#m Voice Leading" },
        { label: "Função 2", description: "C#m Voice Leading" },
        { label: "Função 1", description: "B7(9)(11) Tônica com função Dominante" },
      ],
    },
  },
  en: {
    1: {
      containers: [
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 2", description: "G7(9)(11) Dominant chord" },
        { label: "Function 2", description: "Em Voice Leading" },
        { label: "Function 2", description: "Dm Voice Leading" },
        { label: "Function 1", description: "C7(9)(11) Tonic with Dominant function" },
      ],
    },
    2: {
      containers: [
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 2", description: "G#7(9)(11) Dominant chord" },
        { label: "Function 2", description: "Fm Voice Leading" },
        { label: "Function 2", description: "D#m Voice Leading" },
        { label: "Function 1", description: "C#7(9)(11) Tonic with Dominant function" },
      ],
    },
    3: {
      containers: [
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 2", description: "A7(9)(11) Dominant chord" },
        { label: "Function 2", description: "F#m Voice Leading" },
        { label: "Function 2", description: "Em Voice Leading" },
        { label: "Function 1", description: "D7(9)(11) Tonic with Dominant function" },
      ],
    },
    4: {
      containers: [
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 2", description: "A#7(9)(11) Dominant chord" },
        { label: "Function 2", description: "Gm Voice Leading" },
        { label: "Function 2", description: "Fm Voice Leading" },
        { label: "Function 1", description: "D#7(9)(11) Tonic with Dominant function" },
      ],
    },
    5: {
      containers: [
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 2", description: "B7(9)(11) Dominant chord" },
        { label: "Function 2", description: "G#m Voice Leading" },
        { label: "Function 2", description: "F#m Voice Leading" },
        { label: "Function 1", description: "E7(9)(11) Tonic with Dominant function" },
      ],
    },
    6: {
      containers: [
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 2", description: "C7(9)(11) Dominant chord" },
        { label: "Function 2", description: "Am Voice Leading" },
        { label: "Function 2", description: "Gm Voice Leading" },
        { label: "Function 1", description: "F7(9)(11) Tonic with Dominant function" },
      ],
    },
    7: {
      containers: [
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 2", description: "C#7(9)(11) Dominant chord" },
        { label: "Function 2", description: "A#m Voice Leading" },
        { label: "Function 2", description: "G#m Voice Leading" },
        { label: "Function 1", description: "F#7(9)(11) Tonic with Dominant function" },
      ],
    },
    8: {
      containers: [
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 2", description: "D7(9)(11) Dominant chord" },
        { label: "Function 2", description: "Bm Voice Leading" },
        { label: "Function 2", description: "Am Voice Leading" },
        { label: "Function 1", description: "G7(9)(11) Tonic with Dominant function" },
      ],
    },
    9: {
      containers: [
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 2", description: "D#7(9)(11) Dominant chord" },
        { label: "Function 2", description: "Cm Voice Leading" },
        { label: "Function 2", description: "A#m Voice Leading" },
        { label: "Function 1", description: "G#7(9)(11) Tonic with Dominant function" },
      ],
    },
    10: {
      containers: [
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 2", description: "E7(9)(11) Dominant chord" },
        { label: "Function 2", description: "C#m Voice Leading" },
        { label: "Function 2", description: "Bm Voice Leading" },
        { label: "Function 1", description: "A7(9)(11) Tonic with Dominant function" },
      ],
    },
    11: {
      containers: [
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 2", description: "F7(9)(11) Dominant chord" },
        { label: "Function 2", description: "Dm Voice Leading" },
        { label: "Function 2", description: "Cm Voice Leading" },
        { label: "Function 1", description: "A#7(9)(11) Tonic with Dominant function" },
      ],
    },
    12: {
      containers: [
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 0", description: "Supporting note for Dominant" },
        { label: "Function 2", description: "F#7(9)(11) Dominant chord" },
        { label: "Function 2", description: "D#m Voice Leading" },
        { label: "Function 2", description: "C#m Voice Leading" },
        { label: "Function 1", description: "B7(9)(11) Tonic with Dominant function" },
      ],
    },
  },
  es: {
    1: {
      containers: [
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 2", description: "G7(9)(11) Acorde de dominante" },
        { label: "Función 2", description: "Em Voice Leading" },
        { label: "Función 2", description: "Dm Voice Leading" },
        { label: "Función 1", description: "C7(9)(11) Tónica con Función Dominante" },
      ],
    },
    2: {
      containers: [
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 2", description: "G#7(9)(11) Acorde de dominante" },
        { label: "Función 2", description: "Fm Voice Leading" },
        { label: "Función 2", description: "D#m Voice Leading" },
        { label: "Función 1", description: "C#7(9)(11) Tónica con Función Dominante" },
      ],
    },
    3: {
      containers: [
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 2", description: "A7(9)(11) Acorde de dominante" },
        { label: "Función 2", description: "F#m Voice Leading" },
        { label: "Función 2", description: "Em Voice Leading" },
        { label: "Función 1", description: "D7(9)(11) Tónica con Función Dominante" },
      ],
    },
    4: {
      containers: [
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 2", description: "A#7(9)(11) Acorde de dominante" },
        { label: "Función 2", description: "Gm Voice Leading" },
        { label: "Función 2", description: "Fm Voice Leading" },
        { label: "Función 1", description: "D#7(9)(11) Tónica con Función Dominante" },
      ],
    },
    5: {
      containers: [
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 2", description: "B7(9)(11) Acorde de dominante" },
        { label: "Función 2", description: "G#m Voice Leading" },
        { label: "Función 2", description: "F#m Voice Leading" },
        { label: "Función 1", description: "E7(9)(11) Tónica con Función Dominante" },
      ],
    },
    6: {
      containers: [
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 2", description: "C7(9)(11) Acorde de dominante" },
        { label: "Función 2", description: "Am Voice Leading" },
        { label: "Función 2", description: "Gm Voice Leading" },
        { label: "Función 1", description: "F7(9)(11) Tónica con Función Dominante" },
      ],
    },
    7: {
      containers: [
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 2", description: "C#7(9)(11) Acorde de dominante" },
        { label: "Función 2", description: "A#m Voice Leading" },
        { label: "Función 2", description: "G#m Voice Leading" },
        { label: "Función 1", description: "F#7(9)(11) Tónica con Función Dominante" },
      ],
    },
    8: {
      containers: [
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 2", description: "D7(9)(11) Acorde de dominante" },
        { label: "Función 2", description: "Bm Voice Leading" },
        { label: "Función 2", description: "Am Voice Leading" },
        { label: "Función 1", description: "G7(9)(11) Tónica con Función Dominante" },
      ],
    },
    9: {
      containers: [
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 2", description: "D#7(9)(11) Acorde de dominante" },
        { label: "Función 2", description: "Cm Voice Leading" },
        { label: "Función 2", description: "A#m Voice Leading" },
        { label: "Función 1", description: "G#7(9)(11) Tónica con Función Dominante" },
      ],
    },
    10: {
      containers: [
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 2", description: "E7(9)(11) Acorde de dominante" },
        { label: "Función 2", description: "C#m Voice Leading" },
        { label: "Función 2", description: "Bm Voice Leading" },
        { label: "Función 1", description: "A7(9)(11) Tónica con Función Dominante" },
      ],
    },
    11: {
      containers: [
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 2", description: "F7(9)(11) Acorde de dominante" },
        { label: "Función 2", description: "Dm Voice Leading" },
        { label: "Función 2", description: "Cm Voice Leading" },
        { label: "Función 1", description: "A#7(9)(11) Tónica con Función Dominante" },
      ],
    },
    12: {
      containers: [
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 0", description: "Nota de apoyo para la dominante" },
        { label: "Función 2", description: "F#7(9)(11) Acorde de dominante" },
        { label: "Función 2", description: "D#m Voice Leading" },
        { label: "Función 2", description: "C#m Voice Leading" },
        { label: "Función 1", description: "B7(9)(11) Tónica con Función Dominante" },
      ],
    },
  },
};
