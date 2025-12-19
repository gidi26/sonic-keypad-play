import React, { useState, useEffect } from 'react';
import { Moon, Sun, User } from 'lucide-react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarToggle } from '@/components/SidebarToggle';
import ConcentricWheel from '@/components/ConcentricWheel';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const HarmoniaFuncional2: React.FC = () => {
  const { language, setLanguage } = useLanguage();
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
    { label: 'IIm' },
    { label: '#II' },
    { label: 'IIIm' },
    { label: 'IV' },
    { label: '#IV' },
    { label: 'V7' },
    { label: '#V' },
    { label: 'VIm' },
    { label: 'bVII' },
    { label: 'VIIº' },
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
            <div className="container mx-auto px-2 py-4 pb-10 md:pb-4">
              <div className="flex items-center justify-center gap-8">
                {/* User Info */}
                <div className="absolute right-4 top-4 flex flex-col md:flex-row items-end md:items-center gap-2">
                  {/* Language Flags - hidden on mobile, shown on md+ */}
                  <div className="hidden md:flex items-center gap-1 mr-2">
                    <button
                      onClick={() => setLanguage('pt')}
                      className={cn(
                        "w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition-transform border-2",
                        language === 'pt' ? "border-primary" : "border-transparent hover:border-primary"
                      )}
                      aria-label="Português"
                    >
                      <svg viewBox="0 0 512 512" className="w-full h-full">
                        <rect fill="#009B3A" width="512" height="512"/>
                        <polygon fill="#FEDF00" points="256,64 480,256 256,448 32,256"/>
                        <circle fill="#002776" cx="256" cy="256" r="90"/>
                        <path fill="#FFF" d="M166,256c0-8,1-16,3-24 60,0 120,0 180,0 2,8 3,16 3,24 0,50-40,90-90,90s-90-40-93-90z" opacity="0.3"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => setLanguage('es')}
                      className={cn(
                        "w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition-transform border-2",
                        language === 'es' ? "border-primary" : "border-transparent hover:border-primary"
                      )}
                      aria-label="Español"
                    >
                      <svg viewBox="0 0 512 512" className="w-full h-full">
                        <rect fill="#AA151B" width="512" height="128"/>
                        <rect fill="#F1BF00" y="128" width="512" height="256"/>
                        <rect fill="#AA151B" y="384" width="512" height="128"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={cn(
                        "w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition-transform border-2",
                        language === 'en' ? "border-primary" : "border-transparent hover:border-primary"
                      )}
                      aria-label="English"
                    >
                      <svg viewBox="0 0 512 512" className="w-full h-full">
                        <rect fill="#BD3D44" width="512" height="512"/>
                        <rect fill="#FFF" y="39" width="512" height="40"/>
                        <rect fill="#FFF" y="118" width="512" height="40"/>
                        <rect fill="#FFF" y="197" width="512" height="40"/>
                        <rect fill="#FFF" y="276" width="512" height="40"/>
                        <rect fill="#FFF" y="355" width="512" height="40"/>
                        <rect fill="#FFF" y="434" width="512" height="40"/>
                        <rect fill="#192F5D" width="205" height="276"/>
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
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
                </div>
                
                {/* Language Flags - Mobile only, below header */}
                <div className="flex md:hidden items-center justify-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-2">
                  <button
                    onClick={() => setLanguage('pt')}
                    className={cn(
                      "w-6 h-6 rounded-full overflow-hidden hover:scale-110 transition-transform border-2",
                      language === 'pt' ? "border-primary" : "border-transparent hover:border-primary"
                    )}
                    aria-label="Português"
                  >
                    <svg viewBox="0 0 512 512" className="w-full h-full">
                      <rect fill="#009B3A" width="512" height="512"/>
                      <polygon fill="#FEDF00" points="256,64 480,256 256,448 32,256"/>
                      <circle fill="#002776" cx="256" cy="256" r="90"/>
                      <path fill="#FFF" d="M166,256c0-8,1-16,3-24 60,0 120,0 180,0 2,8 3,16 3,24 0,50-40,90-90,90s-90-40-93-90z" opacity="0.3"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => setLanguage('es')}
                    className={cn(
                      "w-6 h-6 rounded-full overflow-hidden hover:scale-110 transition-transform border-2",
                      language === 'es' ? "border-primary" : "border-transparent hover:border-primary"
                    )}
                    aria-label="Español"
                  >
                    <svg viewBox="0 0 512 512" className="w-full h-full">
                      <rect fill="#AA151B" width="512" height="128"/>
                      <rect fill="#F1BF00" y="128" width="512" height="256"/>
                      <rect fill="#AA151B" y="384" width="512" height="128"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={cn(
                      "w-6 h-6 rounded-full overflow-hidden hover:scale-110 transition-transform border-2",
                      language === 'en' ? "border-primary" : "border-transparent hover:border-primary"
                    )}
                    aria-label="English"
                  >
                    <svg viewBox="0 0 512 512" className="w-full h-full">
                      <rect fill="#BD3D44" width="512" height="512"/>
                      <rect fill="#FFF" y="39" width="512" height="40"/>
                      <rect fill="#FFF" y="118" width="512" height="40"/>
                      <rect fill="#FFF" y="197" width="512" height="40"/>
                      <rect fill="#FFF" y="276" width="512" height="40"/>
                      <rect fill="#FFF" y="355" width="512" height="40"/>
                      <rect fill="#FFF" y="434" width="512" height="40"/>
                      <rect fill="#192F5D" width="205" height="276"/>
                    </svg>
                  </button>
                </div>

                {/* Sidebar Toggle */}
                <SidebarToggle className="absolute left-4 top-1/2 -translate-y-1/2 scale-150" />

              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center justify-center p-4">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 text-center">
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
