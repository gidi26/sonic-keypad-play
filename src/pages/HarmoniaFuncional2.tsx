import React, { useState, useEffect } from 'react';
import { Moon, Sun, User } from 'lucide-react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import ConcentricWheel from '@/components/ConcentricWheel';
import { cn } from '@/lib/utils';

const HarmoniaFuncional2: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const noteSegments = [
    { label: 'C' },
    { label: 'C#' },
    { label: 'D' },
    { label: 'D#' },
    { label: 'E' },
    { label: 'F' },
    { label: 'F#' },
    { label: 'G' },
    { label: 'G#' },
    { label: 'A' },
    { label: 'A#' },
    { label: 'B' },
  ];

  const outerSegments = [
    { label: 'I' },
    { label: '#I' },
    { label: 'II' },
    { label: '#II' },
    { label: 'III' },
    { label: 'IV' },
    { label: '#IV' },
    { label: 'V' },
    { label: '#V' },
    { label: 'VI' },
    { label: '#VI' },
    { label: 'VII' },
  ];

  const innerSegments = [
    { label: 'T' },
    { label: 'Sub5 I' },
    { label: 'ST' },
    { label: 'Sub5 II' },
    { label: 'MD' },
    { label: 'SD' },
    { label: 'Sub5 IV' },
    { label: 'D' },
    { label: 'Sub5 V' },
    { label: 'SPD' },
    { label: 'Sub5 VI' },
    { label: 'S' },
  ];

  return (
    <SidebarProvider defaultOpen={false}>
      <div 
        className="min-h-screen flex w-full"
        style={{
          background: `radial-gradient(ellipse at center, #991928 0%, #271314 100%)`
        }}
      >
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b border-border bg-card relative">
            <div className="container mx-auto px-2 py-4">
              <div className="flex items-center justify-center gap-8">
                {/* User Info */}
                <div className="absolute right-4 top-4 flex items-center gap-2">
                  <button
                    onClick={() => setIsDark(!isDark)}
                    className="p-2 rounded-full bg-gray-500 text-white border-2 border-white hover:bg-gray-600 transition-all"
                    aria-label="Alternar tema"
                  >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <User className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Sidebar Toggle */}
                <SidebarTrigger className="absolute left-4 top-1/2 -translate-y-1/2 scale-150" />

                <div className="h-px w-24 bg-border" />
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl font-black tracking-tight font-poppins">
                    Harmonia Funcional 2
                  </h1>
                </div>
                <div className="h-px w-24 bg-border" />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center justify-center p-4">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 text-center">
              ORBIT
            </h2>
            
            <ConcentricWheel
              outerSegments={outerSegments}
              innerSegments={innerSegments}
              noteSegments={noteSegments}
              centerLabel="HF"
            />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default HarmoniaFuncional2;
