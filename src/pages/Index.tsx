import { PianoKeyboard } from "@/components/PianoKeyboard";

const Index = () => {
  // Piano notes with their frequencies (C major scale and some variations)
  const keyboards = [
    { note: "C4", frequency: 261.63, label: "C4", description: "Middle C - The foundation" },
    { note: "D4", frequency: 293.66, label: "D4", description: "Second note - Rising" },
    { note: "E4", frequency: 329.63, label: "E4", description: "Third note - Harmony" },
    { note: "F4", frequency: 349.23, label: "F4", description: "Fourth note - Transition" },
    { note: "G4", frequency: 392.00, label: "G4", description: "Fifth note - Dominant" },
    { note: "A4", frequency: 440.00, label: "A4 ⭐", description: "Concert pitch - Reference tone" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-8">
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
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground">
              Clique em cada teclado para ouvir uma nota musical diferente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {keyboards.map((keyboard, index) => (
              <div
                key={keyboard.note}
                className="bg-card rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <PianoKeyboard
                  note={keyboard.note}
                  frequency={keyboard.frequency}
                  label={keyboard.label}
                  description={keyboard.description}
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
              Interactive Sound Experience
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
