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
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Função 5", description: "G7(9)(11) Acorde dominante" },
        { label: "Função 5", description: "Em Voice Leading" },
        { label: "Função 5", description: "Dm Voice Leading" },
        { label: "Função 1", description: "C7(9)(11) Tônica com função Dominante" },
      ],
    },
    2: {
      containers: [
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Função 5", description: "G#7(9)(11) Acorde dominante" },
        { label: "Função 5", description: "Fm Voice Leading" },
        { label: "Função 5", description: "D#m Voice Leading" },
        { label: "Função 1", description: "C#7(9)(11) Tônica com função Dominante" },
      ],
    },
    3: {
      containers: [
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Função 5", description: "A7(9)(11) Acorde dominante" },
        { label: "Função 5", description: "F#m Voice Leading" },
        { label: "Função 5", description: "Em Voice Leading" },
        { label: "Função 1", description: "D7(9)(11) Tônica com função Dominante" },
      ],
    },
    4: {
      containers: [
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Função 5", description: "A#7(9)(11) Acorde dominante" },
        { label: "Função 5", description: "Gm Voice Leading" },
        { label: "Função 5", description: "Fm Voice Leading" },
        { label: "Função 1", description: "D#7(9)(11) Tônica com função Dominante" },
      ],
    },
    5: {
      containers: [
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Função 5", description: "B7(9)(11) Acorde dominante" },
        { label: "Função 5", description: "G#m Voice Leading" },
        { label: "Função 5", description: "F#m Voice Leading" },
        { label: "Função 1", description: "E7(9)(11) Tônica com função Dominante" },
      ],
    },
    6: {
      containers: [
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Função 5", description: "C7(9)(11) Acorde dominante" },
        { label: "Função 5", description: "Am Voice Leading" },
        { label: "Função 5", description: "Gm Voice Leading" },
        { label: "Função 1", description: "F7(9)(11) Tônica com função Dominante" },
      ],
    },
    7: {
      containers: [
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Função 5", description: "C#7(9)(11) Acorde dominante" },
        { label: "Função 5", description: "A#m Voice Leading" },
        { label: "Função 5", description: "G#m Voice Leading" },
        { label: "Função 1", description: "F#7(9)(11) Tônica com função Dominante" },
      ],
    },
    8: {
      containers: [
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Função 5", description: "D7(9)(11) Acorde dominante" },
        { label: "Função 5", description: "Bm Voice Leading" },
        { label: "Função 5", description: "Am Voice Leading" },
        { label: "Função 1", description: "G7(9)(11) Tônica com função Dominante" },
      ],
    },
    9: {
      containers: [
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Função 5", description: "D#7(9)(11) Acorde dominante" },
        { label: "Função 5", description: "Cm Voice Leading" },
        { label: "Função 5", description: "A#m Voice Leading" },
        { label: "Função 1", description: "G#7(9)(11) Tônica com função Dominante" },
      ],
    },
    10: {
      containers: [
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Função 5", description: "E7(9)(11) Acorde dominante" },
        { label: "Função 5", description: "C#m Voice Leading" },
        { label: "Função 5", description: "Bm Voice Leading" },
        { label: "Função 1", description: "A7(9)(11) Tônica com função Dominante" },
      ],
    },
    11: {
      containers: [
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Função 5", description: "F7(9)(11) Acorde dominante" },
        { label: "Função 5", description: "Dm Voice Leading" },
        { label: "Função 5", description: "Cm Voice Leading" },
        { label: "Função 1", description: "A#7(9)(11) Tônica com função Dominante" },
      ],
    },
    12: {
      containers: [
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Técnica", description: "Nota de apoio para Dominante" },
        { label: "Função 5", description: "F#7(9)(11) Acorde dominante" },
        { label: "Função 5", description: "D#m Voice Leading" },
        { label: "Função 5", description: "C#m Voice Leading" },
        { label: "Função 1", description: "B7(9)(11) Tônica com função Dominante" },
      ],
    },
  },
  en: {
    1: {
      containers: [
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Function 5", description: "G7(9)(11) Dominant chord" },
        { label: "Function 5", description: "Em Voice Leading" },
        { label: "Function 5", description: "Dm Voice Leading" },
        { label: "Function 1", description: "C7(9)(11) Tonic with Dominant function" },
      ],
    },
    2: {
      containers: [
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Function 5", description: "G#7(9)(11) Dominant chord" },
        { label: "Function 5", description: "Fm Voice Leading" },
        { label: "Function 5", description: "D#m Voice Leading" },
        { label: "Function 1", description: "C#7(9)(11) Tonic with Dominant function" },
      ],
    },
    3: {
      containers: [
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Function 5", description: "A7(9)(11) Dominant chord" },
        { label: "Function 5", description: "F#m Voice Leading" },
        { label: "Function 5", description: "Em Voice Leading" },
        { label: "Function 1", description: "D7(9)(11) Tonic with Dominant function" },
      ],
    },
    4: {
      containers: [
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Function 5", description: "A#7(9)(11) Dominant chord" },
        { label: "Function 5", description: "Gm Voice Leading" },
        { label: "Function 5", description: "Fm Voice Leading" },
        { label: "Function 1", description: "D#7(9)(11) Tonic with Dominant function" },
      ],
    },
    5: {
      containers: [
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Function 5", description: "B7(9)(11) Dominant chord" },
        { label: "Function 5", description: "G#m Voice Leading" },
        { label: "Function 5", description: "F#m Voice Leading" },
        { label: "Function 1", description: "E7(9)(11) Tonic with Dominant function" },
      ],
    },
    6: {
      containers: [
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Function 5", description: "C7(9)(11) Dominant chord" },
        { label: "Function 5", description: "Am Voice Leading" },
        { label: "Function 5", description: "Gm Voice Leading" },
        { label: "Function 1", description: "F7(9)(11) Tonic with Dominant function" },
      ],
    },
    7: {
      containers: [
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Function 5", description: "C#7(9)(11) Dominant chord" },
        { label: "Function 5", description: "A#m Voice Leading" },
        { label: "Function 5", description: "G#m Voice Leading" },
        { label: "Function 1", description: "F#7(9)(11) Tonic with Dominant function" },
      ],
    },
    8: {
      containers: [
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Function 5", description: "D7(9)(11) Dominant chord" },
        { label: "Function 5", description: "Bm Voice Leading" },
        { label: "Function 5", description: "Am Voice Leading" },
        { label: "Function 1", description: "G7(9)(11) Tonic with Dominant function" },
      ],
    },
    9: {
      containers: [
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Function 5", description: "D#7(9)(11) Dominant chord" },
        { label: "Function 5", description: "Cm Voice Leading" },
        { label: "Function 5", description: "A#m Voice Leading" },
        { label: "Function 1", description: "G#7(9)(11) Tonic with Dominant function" },
      ],
    },
    10: {
      containers: [
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Function 5", description: "E7(9)(11) Dominant chord" },
        { label: "Function 5", description: "C#m Voice Leading" },
        { label: "Function 5", description: "Bm Voice Leading" },
        { label: "Function 1", description: "A7(9)(11) Tonic with Dominant function" },
      ],
    },
    11: {
      containers: [
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Function 5", description: "F7(9)(11) Dominant chord" },
        { label: "Function 5", description: "Dm Voice Leading" },
        { label: "Function 5", description: "Cm Voice Leading" },
        { label: "Function 1", description: "A#7(9)(11) Tonic with Dominant function" },
      ],
    },
    12: {
      containers: [
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Technique", description: "Supporting note for Dominant" },
        { label: "Function 5", description: "F#7(9)(11) Dominant chord" },
        { label: "Function 5", description: "D#m Voice Leading" },
        { label: "Function 5", description: "C#m Voice Leading" },
        { label: "Function 1", description: "B7(9)(11) Tonic with Dominant function" },
      ],
    },
  },
  es: {
    1: {
      containers: [
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Función 5", description: "G7(9)(11) Acorde de dominante" },
        { label: "Función 5", description: "Em Voice Leading" },
        { label: "Función 5", description: "Dm Voice Leading" },
        { label: "Función 1", description: "C7(9)(11) Tónica con Función Dominante" },
      ],
    },
    2: {
      containers: [
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Función 5", description: "G#7(9)(11) Acorde de dominante" },
        { label: "Función 5", description: "Fm Voice Leading" },
        { label: "Función 5", description: "D#m Voice Leading" },
        { label: "Función 1", description: "C#7(9)(11) Tónica con Función Dominante" },
      ],
    },
    3: {
      containers: [
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Función 5", description: "A7(9)(11) Acorde de dominante" },
        { label: "Función 5", description: "F#m Voice Leading" },
        { label: "Función 5", description: "Em Voice Leading" },
        { label: "Función 1", description: "D7(9)(11) Tónica con Función Dominante" },
      ],
    },
    4: {
      containers: [
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Función 5", description: "A#7(9)(11) Acorde de dominante" },
        { label: "Función 5", description: "Gm Voice Leading" },
        { label: "Función 5", description: "Fm Voice Leading" },
        { label: "Función 1", description: "D#7(9)(11) Tónica con Función Dominante" },
      ],
    },
    5: {
      containers: [
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Función 5", description: "B7(9)(11) Acorde de dominante" },
        { label: "Función 5", description: "G#m Voice Leading" },
        { label: "Función 5", description: "F#m Voice Leading" },
        { label: "Función 1", description: "E7(9)(11) Tónica con Función Dominante" },
      ],
    },
    6: {
      containers: [
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Función 5", description: "C7(9)(11) Acorde de dominante" },
        { label: "Función 5", description: "Am Voice Leading" },
        { label: "Función 5", description: "Gm Voice Leading" },
        { label: "Función 1", description: "F7(9)(11) Tónica con Función Dominante" },
      ],
    },
    7: {
      containers: [
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Función 5", description: "C#7(9)(11) Acorde de dominante" },
        { label: "Función 5", description: "A#m Voice Leading" },
        { label: "Función 5", description: "G#m Voice Leading" },
        { label: "Función 1", description: "F#7(9)(11) Tónica con Función Dominante" },
      ],
    },
    8: {
      containers: [
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Función 5", description: "D7(9)(11) Acorde de dominante" },
        { label: "Función 5", description: "Bm Voice Leading" },
        { label: "Función 5", description: "Am Voice Leading" },
        { label: "Función 1", description: "G7(9)(11) Tónica con Función Dominante" },
      ],
    },
    9: {
      containers: [
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Función 5", description: "D#7(9)(11) Acorde de dominante" },
        { label: "Función 5", description: "Cm Voice Leading" },
        { label: "Función 5", description: "A#m Voice Leading" },
        { label: "Función 1", description: "G#7(9)(11) Tónica con Función Dominante" },
      ],
    },
    10: {
      containers: [
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Función 5", description: "E7(9)(11) Acorde de dominante" },
        { label: "Función 5", description: "C#m Voice Leading" },
        { label: "Función 5", description: "Bm Voice Leading" },
        { label: "Función 1", description: "A7(9)(11) Tónica con Función Dominante" },
      ],
    },
    11: {
      containers: [
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Función 5", description: "F7(9)(11) Acorde de dominante" },
        { label: "Función 5", description: "Dm Voice Leading" },
        { label: "Función 5", description: "Cm Voice Leading" },
        { label: "Función 1", description: "A#7(9)(11) Tónica con Función Dominante" },
      ],
    },
    12: {
      containers: [
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Técnica", description: "Nota de apoyo para la dominante" },
        { label: "Función 5", description: "F#7(9)(11) Acorde de dominante" },
        { label: "Función 5", description: "D#m Voice Leading" },
        { label: "Función 5", description: "C#m Voice Leading" },
        { label: "Función 1", description: "B7(9)(11) Tónica con Función Dominante" },
      ],
    },
  },
};
