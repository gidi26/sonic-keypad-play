import { useState, useEffect, useRef, ReactNode } from "react";
import { PianoKeyboard, TimbreType } from "@/components/PianoKeyboard";
import { cn } from "@/lib/utils";
import { Moon, Sun, Play } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface PageLayoutProps {
  movementId: number;
  tonalityId: number;
  children?: ReactNode;
}

const PageLayout = ({ movementId, tonalityId }: PageLayoutProps) => {
  const tonalityNames = [
    "C ou Am", "C# ou A#m", "D ou Bm", "D# ou Cm", "E ou C#m", "F ou Dm",
    "F# ou D#m", "G ou Em", "G# ou Fm", "A ou F#m", "A# ou Gm", "B ou G#m"
  ];
  const tonalityName = tonalityNames[tonalityId - 1] || "Unknown";
  const [selectedTimbre, setSelectedTimbre] = useState<TimbreType>('acoustic');
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  const currentAudioContextRef = useRef<AudioContext | null>(null);
  const playButtonAudioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const stopCurrentAudio = () => {
    if (currentAudioContextRef.current) {
      currentAudioContextRef.current.close();
      currentAudioContextRef.current = null;
    }
    if (playButtonAudioContextRef.current) {
      playButtonAudioContextRef.current.close();
      playButtonAudioContextRef.current = null;
    }
  };

  const playButtonSound = () => {
    // Stop any keyboard audio playing
    stopCurrentAudio();
    
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    playButtonAudioContextRef.current = audioContext;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
    
    setTimeout(() => {
      audioContext.close();
      if (playButtonAudioContextRef.current === audioContext) {
        playButtonAudioContextRef.current = null;
      }
    }, 300);
  };

  const keyboards = [
    { note: "C4", frequency: 261.63, label: "C4", description: "Middle C - The foundation of all music" },
    { note: "D4", frequency: 293.66, label: "D4", description: "Second note - Rising melody" },
    { note: "E4", frequency: 329.63, label: "E4", description: "Third note - Creating harmony" },
    { note: "F4", frequency: 349.23, label: "F4", description: "Fourth note - Smooth transition" },
    { note: "G4", frequency: 392.00, label: "G4", description: "Fifth note - The dominant" },
    { note: "A4", frequency: 440.00, label: "A4 ⭐", description: "Concert pitch - Reference tone" },
    { note: "B4", frequency: 493.88, label: "B4", description: "Seventh note - Leading tone" },
    { note: "C5", frequency: 523.25, label: "C5", description: "Octave higher - Bright sound" },
    { note: "D5", frequency: 587.33, label: "D5", description: "High melody - Soaring" },
    { note: "E5", frequency: 659.25, label: "E5", description: "Upper register - Crystal clear" },
    { note: "F5", frequency: 698.46, label: "F5", description: "Treble range - Delicate" },
    { note: "G5", frequency: 783.99, label: "G5", description: "High dominant - Powerful" },
    { note: "A5", frequency: 880.00, label: "A5", description: "Upper A - Brilliant tone" },
    { note: "B5", frequency: 987.77, label: "B5", description: "Top register - Ethereal" },
    { note: "C6", frequency: 1046.50, label: "C6", description: "Two octaves up - Sparkling" },
  ];

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b border-border bg-card relative">
            <div className="container mx-auto px-2 py-4">
              <div className="flex items-center justify-center gap-8">
                {/* Sidebar Toggle */}
                <SidebarTrigger className="absolute left-4 top-1/2 -translate-y-1/2 scale-150" />

                <div className="h-px w-24 bg-border" />
                <div className="text-center">
                  <h1 className="text-4xl md:text-7xl font-black tracking-tight font-poppins">
                    mov {movementId}
                  </h1>
                  <p className="text-2xl md:text-4xl font-bold text-primary mt-2 font-anton tracking-wide">
                    CLUSTER
                  </p>
                </div>
                <div className="h-px w-24 bg-border" />
              </div>
              
              {/* Theme Toggle Button */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-500 text-white border-2 border-white hover:bg-gray-600 transition-all"
                aria-label="Alternar tema"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-2 py-4">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <p className="text-xl md:text-4xl font-bold text-[#737373] dark:text-white">
              {tonalityName}
            </p>
            
            {/* Timbre Selection Buttons */}
            <div className="flex justify-between items-center gap-4 mt-[30px]">
              {/* Play Button */}
              <button
                onClick={playButtonSound}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-[hsl(var(--gray-container))] border-2 border-black dark:border-white flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-all active:scale-95"
                aria-label="Play"
              >
                <Play className="w-5 h-5 md:w-6 md:h-6 fill-black text-black dark:fill-white dark:text-white" />
              </button>
              
              {/* Timbre Buttons */}
              <div className="flex justify-end gap-2 md:gap-4">
                <button
                  onClick={() => setSelectedTimbre('acoustic')}
                  className={cn(
                    "px-[0.67rem] py-[0.34rem] md:px-[1.2rem] md:py-[0.6rem] rounded-[20px] font-semibold text-sm md:text-base text-white transition-all",
                    selectedTimbre === 'acoustic' ? "bg-red-600" : "bg-black"
                  )}
                >
                  Acústico
                </button>
                <button
                  onClick={() => setSelectedTimbre('digital')}
                  className={cn(
                    "px-[0.67rem] py-[0.34rem] md:px-[1.2rem] md:py-[0.6rem] rounded-[20px] font-semibold text-sm md:text-base text-white transition-all",
                    selectedTimbre === 'digital' ? "bg-red-600" : "bg-black"
                  )}
                >
                  Digital
                </button>
                <button
                  onClick={() => setSelectedTimbre('electric')}
                  className={cn(
                    "px-[0.67rem] py-[0.34rem] md:px-[1.2rem] md:py-[0.6rem] rounded-[20px] font-semibold text-sm md:text-base text-white transition-all",
                    selectedTimbre === 'electric' ? "bg-red-600" : "bg-black"
                  )}
                >
                  Elétrico
                </button>
              </div>
            </div>
          </div>

          {/* 15 Keyboards in alternating layout */}
          <div className="space-y-8">
            {keyboards.map((keyboard, index) => (
              <div
                key={keyboard.note}
                className={cn(
                  "rounded-3xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in",
                  index % 2 === 0 
                    ? (isDark ? "bg-[hsl(var(--gray-container))]" : "bg-[#c6c3c3]")
                    : "bg-card"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <PianoKeyboard
                  note={keyboard.note}
                  frequency={keyboard.frequency}
                  label={keyboard.label}
                  description={keyboard.description}
                  reversed={index % 2 !== 0}
                  timbre={selectedTimbre}
                  onPlay={stopCurrentAudio}
                  audioContextRef={currentAudioContextRef}
                />
              </div>
            ))}
          </div>

          {/* Info Footer */}
          <div className="text-center pt-12 space-y-4">
            <p className="text-sm text-muted-foreground">
              The Nord Piano 6 - Professional Stage Piano
            </p>
            <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-lg">
              15 Interactive Piano Keys
            </div>
            </div>
          </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default PageLayout;
