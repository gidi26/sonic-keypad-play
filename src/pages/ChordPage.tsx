import { useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sun, Moon } from "lucide-react";

import chordVoicingA from "@/assets/chord-voicing-a.jpg";
import chordVoicingB from "@/assets/chord-voicing-b.jpg";
import chordVoicingC from "@/assets/chord-voicing-c.jpg";

type Variant = "a" | "b" | "c";

const CHORD_IMAGE_BASE_URL = "https://app-fusion.gidiferreira.com/wp-content/uploads/2025/01";

const tonalities = [
  { id: "C", name: "C", prefix: "c" },
  { id: "C#", name: "C#", prefix: "c-" },
  { id: "D", name: "D", prefix: "d" },
  { id: "D#", name: "D#", prefix: "d-" },
  { id: "E", name: "E", prefix: "e" },
  { id: "F", name: "F", prefix: "f" },
  { id: "F#", name: "F#", prefix: "f-" },
  { id: "G", name: "G", prefix: "g" },
  { id: "G#", name: "G#", prefix: "g-" },
  { id: "A", name: "A", prefix: "a" },
  { id: "A#", name: "A#", prefix: "a-" },
  { id: "B", name: "B", prefix: "b" },
];

const chordTypes = [
  { id: 1, name: "m9(11)" },
  { id: 2, name: "m9" },
  { id: 3, name: "m7+(9)" },
  { id: 4, name: "M9(13)" },
  { id: 5, name: "M9(v1)" },
  { id: 6, name: "M9(v2)" },
  { id: 7, name: "7(9,11)" },
  { id: 8, name: "#5(#9)" },
  { id: 9, name: "7(9,11,13)" },
  { id: 10, name: "5+(7,b9,13)" },
];

const fallbackByVariant: Record<Variant, string> = {
  a: chordVoicingA,
  b: chordVoicingB,
  c: chordVoicingC,
};

function ChordImage({
  src,
  fallbackSrc,
  alt,
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  return (
    <img
      src={failed ? fallbackSrc : src}
      alt={alt}
      className="w-full h-auto"
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}

const ChordPage = () => {
  const { language, setLanguage } = useLanguage();
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark";
  });

  const [selectedTonality, setSelectedTonality] = useState("C");
  const [selectedChord, setSelectedChord] = useState(1);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    document.title = "Neo Soul Jazz Chords | CHORD";
  }, []);

  const getImageUrl = (chordId: number, variant: Variant) => {
    const tonality = tonalities.find((t) => t.id === selectedTonality);
    const prefix = tonality?.prefix || "c";
    // Pattern: {prefix}{chordId}{variant}.jpg -> c1a.jpg, c-1a.jpg, a-3c.jpg
    return `${CHORD_IMAGE_BASE_URL}/${prefix}${chordId}${variant}.jpg`;
  };

  return (
    <SidebarProvider>
      <div className={`min-h-screen flex w-full ${isDark ? 'bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]' : 'bg-gradient-to-b from-gray-100 to-gray-200'}`}>
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className={`flex items-center justify-between p-4 border-b ${isDark ? 'border-white/10' : 'border-gray-300'}`}>
            <div className="flex items-center gap-4">
              <SidebarTrigger className={`${isDark ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-300'} p-2 rounded`} />
            </div>
            
            {/* Theme and Language Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-300 hover:bg-gray-400'}`}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
              
              <div className="flex gap-2">
                {['pt', 'en', 'es'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang as 'pt' | 'en' | 'es')}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      language === lang
                        ? 'bg-red-500 text-white'
                        : isDark 
                          ? 'bg-white/10 text-white hover:bg-white/20'
                          : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center p-6 overflow-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-red-500 italic font-serif">NEO SOUL JAZZ</span>
              <span className={`ml-2 font-light tracking-wider ${isDark ? 'text-white' : 'text-gray-800'}`}>CHORDS</span>
            </h1>

            {/* Tonality Selection */}
            <div className="flex flex-wrap justify-center gap-3 mb-6 max-w-3xl">
              {tonalities.map((tonality) => (
                <button
                  key={tonality.id}
                  onClick={() => setSelectedTonality(tonality.id)}
                  className={`w-12 h-12 rounded-full border-2 font-bold text-sm transition-all ${
                    selectedTonality === tonality.id
                      ? 'border-red-600 bg-red-600/20 text-red-500 shadow-[0_0_15px_rgba(185,28,28,0.5)]'
                      : isDark
                        ? 'border-gray-600 bg-transparent text-gray-400 hover:border-gray-400 hover:text-white'
                        : 'border-gray-400 bg-transparent text-gray-500 hover:border-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tonality.name}
                </button>
              ))}
            </div>

            {/* Chord Display Card */}
            <div className={`backdrop-blur-sm rounded-2xl p-6 max-w-2xl w-full border ${isDark ? 'bg-black/40 border-white/10' : 'bg-white/80 border-gray-300'}`}>
              {/* Chord Type Selection */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {chordTypes.map((chord) => (
                  <button
                    key={chord.id}
                    onClick={() => setSelectedChord(chord.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedChord === chord.id
                        ? 'bg-red-600/20 border border-red-600 text-red-500'
                        : isDark
                          ? 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                          : 'bg-gray-200 border border-gray-300 text-gray-500 hover:border-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {chord.name}
                  </button>
                ))}
              </div>

              {/* Current Chord Display */}
              <div className="mb-4 text-center">
                <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {selectedTonality}{chordTypes.find(c => c.id === selectedChord)?.name}
                </span>
              </div>

              {/* Chord Images */}
              <div className="space-y-4 max-w-sm mx-auto">
                {(["a", "b", "c"] as const).map((variant) => (
                  <div key={variant} className="rounded-xl overflow-hidden">
                    <ChordImage
                      src={getImageUrl(selectedChord, variant)}
                      fallbackSrc={fallbackByVariant[variant]}
                      alt={`${selectedTonality} ${chordTypes.find((c) => c.id === selectedChord)?.name} - Voicing ${variant.toUpperCase()}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ChordPage;
