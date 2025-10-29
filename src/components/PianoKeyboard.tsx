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

export const PianoKeyboard = ({ note, frequency, label, description, reversed = false }: PianoKeyboardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    setIsPlaying(true);
    
    // Create audio context and oscillator
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Set frequency and type
    oscillator.frequency.value = frequency;
    oscillator.type = "sine";
    
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
      <div className="flex-1">
        <button
          onClick={playSound}
          className={cn(
            "relative overflow-hidden rounded-2xl transition-all duration-300 w-full",
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
      <div className="flex-1 space-y-2 text-left mt-5">
        {label && (
          <h3 className="text-3xl md:text-4xl font-bold text-primary">
            {label}
          </h3>
        )}
        {description && (
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            {description}
          </p>
        )}
        {/* Red rectangle aligned right */}
        <div className="flex justify-end">
          <div className="bg-primary px-6 py-3 rounded-[10px] inline-block">
            <p className="text-primary-foreground text-sm">
              texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
