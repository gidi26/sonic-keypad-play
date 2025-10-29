import { useState } from "react";
import { PianoKeyboard, TimbreType } from "@/components/PianoKeyboard";
import { cn } from "@/lib/utils";

const Index = () => {
  const [selectedTimbre, setSelectedTimbre] = useState<TimbreType>('acoustic');
  // 15 Piano notes with their frequencies
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-2 py-4">
          <div className="flex items-center justify-center gap-8">
            <div className="h-px w-24 bg-border" />
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                mov 1
              </h1>
              <p className="text-3xl md:text-4xl font-bold text-primary mt-2">
                CLUSTER
              </p>
            </div>
            <div className="h-px w-24 bg-border" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-2 py-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground">
              Clique em cada teclado para ouvir uma nota musical diferente
            </p>
            
            {/* Timbre Selection Buttons */}
            <div className="flex justify-center gap-4 mt-[30px]">
              <button
                onClick={() => setSelectedTimbre('acoustic')}
                className={cn(
                  "px-6 py-3 rounded-[20px] font-semibold text-white transition-all",
                  selectedTimbre === 'acoustic' ? "bg-red-600" : "bg-black"
                )}
              >
                Acústico
              </button>
              <button
                onClick={() => setSelectedTimbre('digital')}
                className={cn(
                  "px-6 py-3 rounded-[20px] font-semibold text-white transition-all",
                  selectedTimbre === 'digital' ? "bg-red-600" : "bg-black"
                )}
              >
                Digital
              </button>
              <button
                onClick={() => setSelectedTimbre('electric')}
                className={cn(
                  "px-6 py-3 rounded-[20px] font-semibold text-white transition-all",
                  selectedTimbre === 'electric' ? "bg-red-600" : "bg-black"
                )}
              >
                Elétrico
              </button>
            </div>
          </div>

          {/* 15 Keyboards in alternating layout */}
          <div className="space-y-8">
            {keyboards.map((keyboard, index) => (
              <div
                key={keyboard.note}
                className={cn(
                  "rounded-3xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in",
                  index % 2 === 0 ? "bg-[#c6c3c3]" : "bg-card"
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

export default Index;
