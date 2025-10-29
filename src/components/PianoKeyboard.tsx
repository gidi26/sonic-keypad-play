import { useState } from "react";
import keyboardImage from "@/assets/keyboard.png";
import { cn } from "@/lib/utils";

interface PianoKeyboardProps {
  note: string;
  frequency: number;
  label?: string;
  description?: string;
  reversed?: boolean;
}

type TimbreType = 'acoustic' | 'digital' | 'electric';

export const PianoKeyboard = ({ note, frequency, label, description, reversed = false }: PianoKeyboardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTimbre, setSelectedTimbre] = useState<TimbreType>('acoustic');

  const getOscillatorType = (timbre: TimbreType): OscillatorType => {
    switch (timbre) {
      case 'acoustic':
        return 'sine'; // Suave, natural
      case 'digital':
        return 'square'; // Sintético, brilhante
      case 'electric':
        return 'sawtooth'; // Rico em harmônicos
    }
  };

  const playSound = () => {
    setIsPlaying(true);
    
    // Create audio context and oscillator
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Set frequency and type based on selected timbre
    oscillator.frequency.value = frequency;
    oscillator.type = getOscillatorType(selectedTimbre);
    
    // Envelope for more natural sound
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1.5);
    
    setTimeout(() => {
      setIsPlaying(false);
      audioContext.close();
    }, 1500);
  };

  return (
    <div className={cn(
      "flex items-center gap-6 md:gap-12",
      reversed ? "flex-row-reverse" : "flex-row"
    )}>
      {/* Keyboard */}
      <div className="w-[70%]">
        <button
          onClick={playSound}
          className={cn(
            "relative overflow-hidden transition-all duration-300 w-full",
            "hover:scale-105 active:scale-95",
            "focus:outline-none focus:ring-4 focus:ring-primary/50",
            isPlaying && "scale-95 animate-pulse"
          )}
        >
          <img
            src={keyboardImage}
            alt={`Piano keyboard - ${note}`}
            className="w-full h-auto"
          />
          {isPlaying && (
            <div className="absolute inset-0 bg-primary/20 animate-pulse" />
          )}
        </button>
      </div>
      
      {/* Text */}
      <div className="w-[30%] space-y-3 text-left">
        {label && (
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-primary">
            {label}
          </h3>
        )}
        {description && (
          <p className="text-[0.55rem] md:text-sm lg:text-base text-muted-foreground">
            {description}
          </p>
        )}
        
        {/* Timbre Selection Buttons */}
        <div className="flex gap-2 justify-start mt-3">
          <button
            onClick={() => setSelectedTimbre('acoustic')}
            className={cn(
              "px-3 py-1.5 rounded-[10px] text-xs md:text-sm font-semibold transition-all",
              "border-2",
              selectedTimbre === 'acoustic'
                ? "bg-red-600 text-white border-red-700 scale-105"
                : "bg-red-500 text-white border-red-600 hover:bg-red-600"
            )}
          >
            Acústico
          </button>
          <button
            onClick={() => setSelectedTimbre('digital')}
            className={cn(
              "px-3 py-1.5 rounded-[10px] text-xs md:text-sm font-semibold transition-all",
              "border-2",
              selectedTimbre === 'digital'
                ? "bg-red-600 text-white border-red-700 scale-105"
                : "bg-red-500 text-white border-red-600 hover:bg-red-600"
            )}
          >
            Digital
          </button>
          <button
            onClick={() => setSelectedTimbre('electric')}
            className={cn(
              "px-3 py-1.5 rounded-[10px] text-xs md:text-sm font-semibold transition-all",
              "border-2",
              selectedTimbre === 'electric'
                ? "bg-red-600 text-white border-red-700 scale-105"
                : "bg-red-500 text-white border-red-600 hover:bg-red-600"
            )}
          >
            Elétrico
          </button>
        </div>
      </div>
    </div>
  );
};
