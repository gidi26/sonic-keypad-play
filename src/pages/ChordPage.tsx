import { useState, useEffect, useRef } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarToggle } from "@/components/SidebarToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sun, Moon, Volume2 } from "lucide-react";

import chordVoicingA from "@/assets/chord-voicing-a.jpg";
import chordVoicingB from "@/assets/chord-voicing-b.jpg";
import chordVoicingC from "@/assets/chord-voicing-c.jpg";

type Variant = "a" | "b" | "c";

const CHORD_IMAGE_BASE_URL = "https://app-fusion.gidiferreira.com/wp-content/uploads/2025/01";
const CHORD_AUDIO_BASE_URL = "http://gidiferreira.com/nsjc";

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

interface ChordImageWithSoundProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  audioUrl: string;
  onPlay: () => void;
  isDark: boolean;
}

// Global audio reference for centralized control
let globalAudioRef: HTMLAudioElement | null = null;

function ChordImageWithSound({
  src,
  fallbackSrc,
  alt,
  audioUrl,
  onPlay,
  isDark,
}: ChordImageWithSoundProps) {
  const [failed, setFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  // Stop this audio when global stop is triggered
  useEffect(() => {
    const handleGlobalStop = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    };

    window.addEventListener('stopAllChordAudio', handleGlobalStop);
    return () => {
      window.removeEventListener('stopAllChordAudio', handleGlobalStop);
      // Cleanup audio on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playSound = () => {
    // If clicking the same audio that's playing, stop it
    if (isPlaying && audioRef.current) {
      // Fade out current audio
      const currentAudio = audioRef.current;
      const fadeInterval = setInterval(() => {
        if (currentAudio.volume > 0.15) {
          currentAudio.volume = Math.max(0, currentAudio.volume - 0.15);
        } else {
          currentAudio.pause();
          currentAudio.volume = 1;
          clearInterval(fadeInterval);
        }
      }, 20);
      setIsPlaying(false);
      if (globalAudioRef === audioRef.current) {
        globalAudioRef = null;
      }
      return;
    }

    // Stop previous global audio with small delay for smooth transition
    if (globalAudioRef && globalAudioRef !== audioRef.current) {
      const prevAudio = globalAudioRef;
      // Fade out previous audio over 100ms
      const fadeInterval = setInterval(() => {
        if (prevAudio.volume > 0.15) {
          prevAudio.volume = Math.max(0, prevAudio.volume - 0.15);
        } else {
          prevAudio.pause();
          prevAudio.volume = 1;
          clearInterval(fadeInterval);
        }
      }, 20);
    }
    
    // Dispatch stop event for other components
    onPlay();
    
    // Create and play new audio
    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    globalAudioRef = audio;
    setIsPlaying(true);

    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
      setIsPlaying(false);
    });

    audio.onended = () => {
      setIsPlaying(false);
      if (globalAudioRef === audio) {
        globalAudioRef = null;
      }
    };
  };

  return (
    <button
      onClick={playSound}
      className={`relative w-full rounded-xl overflow-hidden transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none ${
        isPlaying ? "ring-2 ring-red-500 ring-offset-2" : ""
      } ${isDark ? "ring-offset-[#1a1a1a]" : "ring-offset-gray-100"}`}
    >
      <img
        src={failed ? fallbackSrc : src}
        alt={alt}
        className="w-full h-auto"
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
      />
      {isPlaying && (
        <div className="absolute inset-0 bg-red-500/10 animate-pulse flex items-center justify-center">
          <Volume2 className="w-8 h-8 text-red-500 animate-bounce" />
        </div>
      )}
    </button>
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

  // Stop audio when changing tonality or chord
  useEffect(() => {
    // Stop all audio when selection changes
    if (globalAudioRef) {
      globalAudioRef.pause();
      globalAudioRef.currentTime = 0;
      globalAudioRef = null;
    }
    window.dispatchEvent(new CustomEvent('stopAllChordAudio'));
  }, [selectedTonality, selectedChord]);

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

  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const getImageUrl = (chordId: number, variant: Variant) => {
    const tonality = tonalities.find((t) => t.id === selectedTonality);
    const prefix = tonality?.prefix || "c";
    // Pattern: {prefix}{chordId}{variant}.jpg -> c1a.jpg, c-1a.jpg, a-3c.jpg
    return `${CHORD_IMAGE_BASE_URL}/${prefix}${chordId}${variant}.jpg`;
  };

  const getAudioUrl = (chordId: number, variant: Variant) => {
    const tonality = tonalities.find((t) => t.id === selectedTonality);
    const prefix = tonality?.prefix || "c";
    // Pattern: {prefix}rv{chordId}{variant}.mp3 -> crv1a.mp3, c-rv1a.mp3, arv3c.mp3
    return `${CHORD_AUDIO_BASE_URL}/${prefix}rv${chordId}${variant}.mp3`;
  };

  const stopCurrentAudio = () => {
    // Dispatch event to stop all playing audios with fade effect
    window.dispatchEvent(new CustomEvent('stopChordAudio'));
  };

  return (
    <SidebarProvider>
      <div className={`min-h-screen flex w-full ${isDark ? 'bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]' : 'bg-gradient-to-b from-gray-100 to-gray-200'}`}>
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className={`flex items-center justify-between p-4 border-b ${isDark ? 'border-white/10' : 'border-gray-300'}`}>
            <div className="flex items-center gap-4">
              <SidebarToggle className={`${isDark ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-300'} p-2 rounded`} />
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
            <div className="text-center mb-8">
              <h1 className={`text-4xl md:text-7xl font-black tracking-tight font-poppins ${isDark ? 'text-white' : 'text-foreground'}`}>
                CHORD
              </h1>
              <p className="text-2xl md:text-4xl font-medium text-primary mt-2 font-anton tracking-widest">
                NEO SOUL JAZZ
              </p>
            </div>

            {/* Tonality Selection */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-3xl">
              {tonalities.map((tonality) => (
                <button
                  key={tonality.id}
                  onClick={() => setSelectedTonality(tonality.id)}
                  className={`px-4 py-2 rounded-md border-2 font-bold text-sm transition-all ${
                    selectedTonality === tonality.id
                      ? 'border-red-600 bg-red-600 text-white'
                      : 'border-black bg-black text-white hover:border-red-500 hover:bg-red-500'
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
                    className={`px-4 py-2 rounded-md border-2 text-sm font-bold transition-all ${
                      selectedChord === chord.id
                        ? 'border-red-600 bg-red-600 text-white'
                        : 'border-black bg-black text-white hover:border-red-500 hover:bg-red-500'
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

              {/* Chord Images with Sound */}
              <div className="space-y-4 max-w-sm mx-auto">
                {(["a", "b", "c"] as const).map((variant) => (
                  <ChordImageWithSound
                    key={variant}
                    src={getImageUrl(selectedChord, variant)}
                    fallbackSrc={fallbackByVariant[variant]}
                    alt={`${selectedTonality} ${chordTypes.find((c) => c.id === selectedChord)?.name} - Voicing ${variant.toUpperCase()}`}
                    audioUrl={getAudioUrl(selectedChord, variant)}
                    onPlay={stopCurrentAudio}
                    isDark={isDark}
                  />
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
