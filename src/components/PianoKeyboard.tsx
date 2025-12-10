import { useState, useRef, MutableRefObject } from "react";
import defaultKeyboardImage from "@/assets/keyboard.png";
import funcao0Image from "@/assets/funcao-0.png";
import funcao1Image from "@/assets/funcao-1.png";
import funcao2Image from "@/assets/funcao-2.png";
import funcao5Image from "@/assets/funcao-5.png";
import { cn } from "@/lib/utils";

export type TimbreType = 'acoustic' | 'digital' | 'electric';

// Map function numbers to their emoji images
const functionEmojiMap: Record<string, string> = {
  '0': funcao0Image,
  '1': funcao1Image,
  '2': funcao2Image,
  '5': funcao5Image,
};

// Helper to extract function number from label
const getFunctionNumber = (label?: string): string | null => {
  if (!label) return null;
  const match = label.match(/(?:Função|Function|Función)\s*(\d+)/i);
  return match ? match[1] : null;
};

interface PianoKeyboardProps {
  note: string;
  frequency: number;
  label?: string;
  description?: string;
  reversed?: boolean;
  timbre?: TimbreType;
  onPlay?: () => void;
  audioContextRef?: MutableRefObject<AudioContext | null>;
  audioUrl?: string;
  imageUrl?: string;
  onAudioCreated?: (audio: HTMLAudioElement) => void;
  containerIndex?: number;
  movementId?: number;
}

export const PianoKeyboard = ({ note, frequency, label, description, reversed = false, timbre = 'acoustic', onPlay, audioContextRef, audioUrl, imageUrl, onAudioCreated, containerIndex, movementId }: PianoKeyboardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const getOscillatorType = (timbre: TimbreType): OscillatorType => {
    switch (timbre) {
      case 'acoustic':
        return 'sine';
      case 'digital':
        return 'square';
      case 'electric':
        return 'sawtooth';
      default:
        return 'sine';
    }
  };

  const playSound = () => {
    // Notify parent to stop other audios with delay
    if (onPlay) {
      onPlay();
    }
    
    setIsPlaying(true);
    
    // If audioUrl is provided, use real audio file
    if (audioUrl) {
      // Stop any previously playing audio from this keyboard
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      
      // Register this audio with the parent
      if (onAudioCreated) {
        onAudioCreated(audio);
      }
      
      // Delay playback by 500ms to allow previous audio to fade
      setTimeout(() => {
        audio.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }, 500);
      
      audio.onended = () => {
        setIsPlaying(false);
      };
      
      // Set a timeout as backup
      setTimeout(() => {
        setIsPlaying(false);
      }, 5500);
    } else {
      // Fallback to synthesized audio - also with 500ms delay
      setTimeout(() => {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        // Store the current audio context
        if (audioContextRef) {
          audioContextRef.current = audioContext;
        }
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Set frequency and type
        oscillator.frequency.value = frequency;
        oscillator.type = getOscillatorType(timbre);
        
        // Envelope for more natural sound
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1.5);
        
        setTimeout(() => {
          setIsPlaying(false);
          audioContext.close();
          if (audioContextRef && audioContextRef.current === audioContext) {
            audioContextRef.current = null;
          }
        }, 1500);
      }, 500);
    }
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
            "hover:scale-105 active:scale-97",
            "focus:outline-none",
            isPlaying && "scale-97"
          )}
        >
          <img
            src={imageUrl && !imageError ? imageUrl : defaultKeyboardImage}
            alt={`Piano keyboard - ${note}`}
            className="w-full h-auto"
            onError={() => setImageError(true)}
          />
          
          
          {isPlaying && (
            <div className="absolute inset-0 bg-red-500/10 animate-pulse" />
          )}
        </button>
      </div>
      
      {/* Text */}
      <div className="w-[30%] space-y-2 text-left">
        {label && (
          <h3 className="text-base md:text-[1.4rem] lg:text-[1.7rem] font-bold text-primary flex items-center gap-2">
            {getFunctionNumber(label) && functionEmojiMap[getFunctionNumber(label)!] && (
              <img 
                src={functionEmojiMap[getFunctionNumber(label)!]} 
                alt={`Função ${getFunctionNumber(label)}`}
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 inline-block"
              />
            )}
            {label}
          </h3>
        )}
        {description && (
          <p className="text-xs md:text-base lg:text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
