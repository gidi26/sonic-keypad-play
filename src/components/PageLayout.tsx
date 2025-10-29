import { useState, useEffect, useRef, ReactNode } from "react";
import { PianoKeyboard, TimbreType } from "@/components/PianoKeyboard";
import { cn } from "@/lib/utils";
import { Moon, Sun, Play, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface PageLayoutProps {
  pageNumber: number;
  children?: ReactNode;
}

const PageLayout = ({ pageNumber }: PageLayoutProps) => {
  const [selectedTimbre, setSelectedTimbre] = useState<TimbreType>('acoustic');
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentAudioContextRef = useRef<AudioContext | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const stopCurrentAudio = () => {
    if (currentAudioContextRef.current) {
      currentAudioContextRef.current.close();
      currentAudioContextRef.current = null;
    }
  };

  const playButtonSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
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

  const pages = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card relative">
        <div className="container mx-auto px-2 pt-2 pb-4">
          <div className="flex items-center justify-center gap-8">
            {/* Menu Hamburger */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-accent transition-colors"
                  aria-label="Menu"
                >
                  <Menu className="w-6 h-6 text-black dark:text-white" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 bg-card border-border">
                <div className="py-6">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Páginas</h2>
                  <nav className="space-y-2">
                    {pages.map((page) => (
                      <Link
                        key={page}
                        to={page === 1 ? "/" : `/page${page}`}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "block px-4 py-3 rounded-lg transition-colors font-medium",
                          location.pathname === (page === 1 ? "/" : `/page${page}`)
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent text-foreground"
                        )}
                      >
                        Página {page}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <div className="h-px w-24 bg-border" />
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                mov 1
              </h1>
              <p className="text-3xl md:text-4xl font-bold text-primary mt-2">
                CLUSTER
              </p>
              <p className="text-[2.5rem] md:text-[3.5rem] font-black tracking-tight text-white mt-1">
                {pageNumber}
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
            <p className="text-3xl md:text-4xl font-bold text-[#737373]">
              Página {pageNumber}
            </p>
            
            {/* Timbre Selection Buttons */}
            <div className="flex justify-between items-center gap-4 mt-[30px]">
              {/* Play Button */}
              <button
                onClick={playButtonSound}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#c6c3c3] dark:bg-[hsl(var(--gray-container))] border-2 border-black dark:border-white flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-all active:scale-95"
                aria-label="Play"
              >
                <Play className="w-5 h-5 md:w-6 md:h-6 fill-black text-black dark:fill-white dark:text-white" />
              </button>
              
              {/* Timbre Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setSelectedTimbre('acoustic')}
                  className={cn(
                    "px-[0.84rem] py-[0.42rem] md:px-[1.2rem] md:py-[0.6rem] rounded-[20px] font-semibold text-white transition-all",
                    selectedTimbre === 'acoustic' ? "bg-red-600" : "bg-black"
                  )}
                >
                  Acústico
                </button>
                <button
                  onClick={() => setSelectedTimbre('digital')}
                  className={cn(
                    "px-[0.84rem] py-[0.42rem] md:px-[1.2rem] md:py-[0.6rem] rounded-[20px] font-semibold text-white transition-all",
                    selectedTimbre === 'digital' ? "bg-red-600" : "bg-black"
                  )}
                >
                  Digital
                </button>
                <button
                  onClick={() => setSelectedTimbre('electric')}
                  className={cn(
                    "px-[0.84rem] py-[0.42rem] md:px-[1.2rem] md:py-[0.6rem] rounded-[20px] font-semibold text-white transition-all",
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
  );
};

export default PageLayout;
