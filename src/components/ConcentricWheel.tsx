import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WheelSegment {
  label: string;
  color?: string;
}

interface ConcentricWheelProps {
  outerSegments: WheelSegment[];
  innerSegments: WheelSegment[];
  noteSegments: WheelSegment[];
  centerLabel?: string;
}

const ConcentricWheel: React.FC<ConcentricWheelProps> = ({
  outerSegments,
  innerSegments,
  noteSegments,
  centerLabel = "HF"
}) => {
  const [selectedOuter, setSelectedOuter] = useState<number | null>(null);
  const [selectedInner, setSelectedInner] = useState<number | null>(null);
  const [selectedSub5, setSelectedSub5] = useState<number | null>(null);
  const [selectedAR, setSelectedAR] = useState<number | null>(null);
  const [selectedAR2, setSelectedAR2] = useState<number | null>(null);
  const [noteRotation, setNoteRotation] = useState(0);
  const [activeLayer, setActiveLayer] = useState<'relativa' | 'antiRelativa' | 'sub5' | 'funcoes' | 'graus' | null>(null);

  const toggleLayer = (layer: 'relativa' | 'antiRelativa' | 'sub5' | 'funcoes' | 'graus') => {
    setActiveLayer(activeLayer === layer ? null : layer);
  };

  const getLayerOpacity = (layer: 'relativa' | 'antiRelativa' | 'sub5' | 'funcoes' | 'graus') => {
    if (activeLayer === null) return 1;
    // Graus layer always stays visible
    if (layer === 'graus') return 1;
    return activeLayer === layer ? 1 : 0.15;
  };

  const size = 650;
  const center = size / 2;
  const noteRadius = 315;
  const noteInnerRadius = 279; // Gap between tonality and degrees layer
  const degreesOuterR = 275;
  const functionsOuterR = 230;
  const functions2OuterR = 185;
  const innermostR = 140;
  const innermost2R = 95;
  const innermost3R = 55;
  const centerRadius = 30;

  const createArcPath = (
    startAngle: number,
    endAngle: number,
    innerR: number,
    outerR: number
  ) => {
    const startAngleRad = (startAngle - 90) * (Math.PI / 180);
    const endAngleRad = (endAngle - 90) * (Math.PI / 180);

    const x1 = center + outerR * Math.cos(startAngleRad);
    const y1 = center + outerR * Math.sin(startAngleRad);
    const x2 = center + outerR * Math.cos(endAngleRad);
    const y2 = center + outerR * Math.sin(endAngleRad);
    const x3 = center + innerR * Math.cos(endAngleRad);
    const y3 = center + innerR * Math.sin(endAngleRad);
    const x4 = center + innerR * Math.cos(startAngleRad);
    const y4 = center + innerR * Math.sin(startAngleRad);

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
  };

  const getTextPosition = (index: number, total: number, radius: number) => {
    const angle = (index * 360 / total) + (180 / total) - 90;
    const angleRad = angle * (Math.PI / 180);
    return {
      x: center + radius * Math.cos(angleRad),
      y: center + radius * Math.sin(angleRad),
      rotation: angle + 90
    };
  };

  const segmentAngle = 360 / 12;

  const rotateNotes = (direction: 'left' | 'right') => {
    setNoteRotation(prev => prev + (direction === 'left' ? 30 : -30));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-2xl"
      >
        {/* Notes ring (rotatable) */}
        <g style={{ transform: `rotate(${noteRotation - 15}deg)`, transformOrigin: 'center', transition: 'transform 0.3s ease-out' }}>
          {noteSegments.map((segment, index) => {
            const gapAngle = 1.5; // Gap between segments in degrees
            const startAngle = index * segmentAngle + gapAngle / 2;
            const endAngle = (index + 1) * segmentAngle - gapAngle / 2;
            const textPos = getTextPosition(index, 12, (noteRadius + noteInnerRadius) / 2);
            
            // Calculate if this note is in the tonic position (aligned with grade I at top)
            const normalizedRotation = (((-noteRotation) % 360) + 360) % 360;
            const tonicIndex = Math.round(normalizedRotation / 30) % 12;
            const isTonicPosition = index === tonicIndex;

            return (
              <g key={`note-${index}`}>
                <path
                  d={createArcPath(startAngle, endAngle, noteInnerRadius, noteRadius)}
                  fill={isTonicPosition ? '#ffffff' : '#230912'}
                  stroke="#771621"
                  strokeWidth={4}
                  strokeOpacity={0}
                  className="cursor-grab active:cursor-grabbing"
                />
                <text
                  x={textPos.x}
                  y={textPos.y}
                  fill={isTonicPosition ? '#230912' : 'hsl(var(--primary-foreground))'}
                  fontSize="14"
                  fontWeight="400"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${textPos.rotation}, ${textPos.x}, ${textPos.y})`}
                  className="pointer-events-none select-none"
                >
                  {segment.label}
                </text>
              </g>
            );
          })}
        </g>

        {/* Fixed inner layers */}
        <g style={{ transform: 'rotate(-15deg)', transformOrigin: 'center' }}>
          {/* Degrees ring - Camada 4 Graus */}
          <g style={{ opacity: getLayerOpacity('graus'), transition: 'opacity 0.3s ease' }}>
            {outerSegments.map((segment, index) => {
              const startAngle = index * segmentAngle;
              const endAngle = (index + 1) * segmentAngle;
              const isSelected = selectedOuter === index;
              const isSharp = segment.label.includes('#');
              const textPos = getTextPosition(index, 12, (degreesOuterR + functionsOuterR) / 2);

              return (
                <g key={`outer-${index}`}>
                  <path
                    d={createArcPath(startAngle, endAngle, functionsOuterR, degreesOuterR)}
                    fill={isSelected ? '#ca35b2' : isSharp ? '#4d3334' : '#6b4a4c'}
                    stroke="#210a12"
                    strokeWidth="4"
                    strokeOpacity={0.3}
                    className="cursor-pointer transition-all duration-200 hover:brightness-110"
                    onClick={() => setSelectedOuter(selectedOuter === index ? null : index)}
                  />
                  <text
                    x={textPos.x}
                    y={textPos.y}
                    fill={isSelected ? '#3a2627' : '#ffffff'}
                    fontSize="12"
                    fontWeight="400"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${textPos.rotation}, ${textPos.x}, ${textPos.y})`}
                    className="pointer-events-none select-none"
                  >
                    {segment.label}
                  </text>
                </g>
              );
            })}
          </g>

          {/* Functions ring (outer) - Camada 3 Funções */}
          <g style={{ opacity: getLayerOpacity('funcoes'), transition: 'opacity 0.3s ease' }}>
            {innerSegments.map((segment, index) => {
              const startAngle = index * segmentAngle;
              const endAngle = (index + 1) * segmentAngle;
              const isSelected = selectedInner === index;
              const isSub5 = segment.label.includes('Sub5');
              const textPos = getTextPosition(index, 12, (functionsOuterR + functions2OuterR) / 2);

              return (
                <g key={`inner-${index}`}>
                  <path
                    d={createArcPath(startAngle, endAngle, functions2OuterR, functionsOuterR)}
                    fill={isSub5 ? '#230912' : isSelected ? '#ca35b2' : '#3a2627'}
                    stroke="#210a12"
                    strokeWidth="4"
                    strokeOpacity={0.3}
                    className={isSub5 ? '' : 'cursor-pointer transition-all duration-200 hover:brightness-110'}
                    onClick={() => !isSub5 && setSelectedInner(selectedInner === index ? null : index)}
                  />
                  {!isSub5 && (
                    <text
                      x={textPos.x}
                      y={textPos.y}
                      fill={isSelected ? '#3a2627' : '#ffffff'}
                      fontSize="13"
                      fontWeight="400"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${textPos.rotation}, ${textPos.x}, ${textPos.y})`}
                      className="pointer-events-none select-none"
                    >
                      {segment.label}
                    </text>
                  )}
                </g>
              );
            })}
          </g>

          {/* Camada 2 - Sub5 */}
          <g style={{ opacity: getLayerOpacity('sub5'), transition: 'opacity 0.3s ease' }}>
            {innerSegments.map((segment, index) => {
              const startAngle = index * segmentAngle;
              const endAngle = (index + 1) * segmentAngle;
              const isSelected = selectedSub5 === index;
              const isSub5 = segment.label.includes('Sub5');
              const textPos = getTextPosition(index, 12, (functions2OuterR + innermostR) / 2);

              return (
                <g key={`innermost-${index}`}>
                  <path
                    d={createArcPath(startAngle, endAngle, innermostR, functions2OuterR)}
                    fill={!isSub5 ? '#230912' : isSelected ? '#ca35b2' : '#3a2627'}
                    stroke="#210a12"
                    strokeWidth="4"
                    strokeOpacity={0.3}
                    className={!isSub5 ? '' : 'cursor-pointer transition-all duration-200 hover:brightness-110'}
                    onClick={() => isSub5 && setSelectedSub5(selectedSub5 === index ? null : index)}
                  />
                  {isSub5 && (
                    <text
                      x={textPos.x}
                      y={textPos.y}
                      fill={isSelected ? '#3a2627' : '#ffffff'}
                      fontSize="13"
                      fontWeight="400"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${textPos.rotation}, ${textPos.x}, ${textPos.y})`}
                      className="pointer-events-none select-none"
                    >
                      {segment.label}
                    </text>
                  )}
                </g>
              );
            })}
          </g>

          {/* Camada 1 - AR (Anti relativa) */}
          <g style={{ opacity: getLayerOpacity('antiRelativa'), transition: 'opacity 0.3s ease' }}>
            {innerSegments.map((segment, index) => {
              const startAngle = index * segmentAngle;
              const endAngle = (index + 1) * segmentAngle;
              const isSelected = selectedAR === index;
              const isSub5 = segment.label.includes('Sub5');
              const textPos = getTextPosition(index, 12, (innermostR + innermost2R) / 2);
              
              // Map Sub5 labels to AR labels
              const arLabelMap: { [key: string]: string } = {
                'Sub5 I': 'AR II',
                'Sub5 II': 'AR III',
                'Sub5 IV': 'AR V',
                'Sub5 V': 'AR VI',
                'Sub5 VI': 'AR VII'
              };
              const displayLabel = arLabelMap[segment.label] || segment.label;

              return (
                <g key={`ar-${index}`}>
                  <path
                    d={createArcPath(startAngle, endAngle, innermost2R, innermostR)}
                    fill={!isSub5 ? '#230912' : isSelected ? '#ca35b2' : '#3a2627'}
                    stroke="#210a12"
                    strokeWidth="4"
                    strokeOpacity={0.3}
                    className={!isSub5 ? '' : 'cursor-pointer transition-all duration-200 hover:brightness-110'}
                    onClick={() => isSub5 && setSelectedAR(selectedAR === index ? null : index)}
                  />
                  {isSub5 && (
                    <text
                      x={textPos.x}
                      y={textPos.y}
                      fill={isSelected ? '#3a2627' : '#ffffff'}
                      fontSize="13"
                      fontWeight="400"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${textPos.rotation}, ${textPos.x}, ${textPos.y})`}
                      className="pointer-events-none select-none"
                    >
                      {displayLabel}
                    </text>
                  )}
                </g>
              );
            })}
          </g>

          {/* Camada 1 - Relativa */}
          <g style={{ opacity: getLayerOpacity('relativa'), transition: 'opacity 0.3s ease' }}>
            {Array.from({ length: 12 }).map((_, index) => {
              const startAngle = index * segmentAngle;
              const endAngle = (index + 1) * segmentAngle;
              const isSelected = selectedAR2 === index;
              const textPos = getTextPosition(index, 12, (innermost2R + innermost3R) / 2);
              
              // Elements 3, 4, 10 (indices 2, 3, 9) have content
              const relativaLabelMap: { [key: number]: string } = {
                2: 'R IV',
                3: 'R V',
                9: 'R I'
              };
              const hasContent = [2, 3, 9].includes(index);
              const displayLabel = relativaLabelMap[index] || '';

              return (
                <g key={`relativa-${index}`}>
                  <path
                    d={createArcPath(startAngle, endAngle, innermost3R, innermost2R)}
                    fill={hasContent ? (isSelected ? '#ca35b2' : '#3a2627') : '#230912'}
                    stroke="#210a12"
                    strokeWidth="4"
                    strokeOpacity={0.3}
                    className={hasContent ? 'cursor-pointer transition-all duration-200 hover:brightness-110' : ''}
                    onClick={() => hasContent && setSelectedAR2(selectedAR2 === index ? null : index)}
                  />
                  {hasContent && (
                    <text
                      x={textPos.x}
                      y={textPos.y}
                      fill={isSelected ? '#3a2627' : '#ffffff'}
                      fontSize="13"
                      fontWeight="400"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${textPos.rotation}, ${textPos.x}, ${textPos.y})`}
                      className="pointer-events-none select-none"
                    >
                      {displayLabel}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </g>

        {/* Center circle */}
        <circle
          cx={center}
          cy={center}
          r={centerRadius}
          fill="hsl(var(--background))"
          stroke="#210a12"
          strokeWidth="6"
          className="drop-shadow-lg"
        />
        <text
          x={center}
          y={center}
          fill="hsl(var(--foreground))"
          fontSize="18"
          fontWeight="400"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {centerLabel}
        </text>
      </svg>

      {/* Layer toggle buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
        <button
          onClick={() => setActiveLayer(null)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            activeLayer === null 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          Full
        </button>
        <button
          onClick={() => toggleLayer('relativa')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            activeLayer === 'relativa' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          Relativa
        </button>
        <button
          onClick={() => toggleLayer('antiRelativa')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            activeLayer === 'antiRelativa' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          Anti Relativa
        </button>
        <button
          onClick={() => toggleLayer('sub5')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            activeLayer === 'sub5' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          Sub5
        </button>
        <button
          onClick={() => toggleLayer('funcoes')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            activeLayer === 'funcoes' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          Funções
        </button>
        <button
          onClick={() => toggleLayer('graus')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            activeLayer === 'graus' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          Graus
        </button>
      </div>

      {/* Rotation controls */}
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={() => rotateNotes('left')}
          className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-95"
          aria-label="Girar para esquerda"
        >
          <ChevronLeft size={24} />
        </button>
        <span className="text-sm font-medium text-muted-foreground">Girar tonalidade</span>
        <button
          onClick={() => rotateNotes('right')}
          className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-95"
          aria-label="Girar para direita"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Selection info */}
      <div className="mt-4 text-center space-y-2">
        {selectedOuter !== null && (
          <p className="text-sm font-medium">
            Grau: <span className="text-primary">{outerSegments[selectedOuter].label}</span>
          </p>
        )}
        {selectedInner !== null && (
          <p className="text-sm font-medium">
            Função: <span style={{ color: '#8b1a1a' }}>{innerSegments[selectedInner].label}</span>
          </p>
        )}
      </div>

      {/* Functions legend */}
      <div className="mt-6 p-4 bg-card border border-border rounded-lg max-w-md">
        <h3 className="text-sm font-bold text-foreground mb-3 text-center">Legenda - Funções Harmônicas</h3>
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">I</span>
            <span className="text-muted-foreground">-</span>
            <span className="font-semibold" style={{ color: '#8b1a1a' }}>T</span>
            <span className="text-muted-foreground">Tônica</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">II</span>
            <span className="text-muted-foreground">-</span>
            <span className="font-semibold" style={{ color: '#8b1a1a' }}>ST</span>
            <span className="text-muted-foreground">Supertônica</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">III</span>
            <span className="text-muted-foreground">-</span>
            <span className="font-semibold" style={{ color: '#8b1a1a' }}>MD</span>
            <span className="text-muted-foreground">Mediante</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">IV</span>
            <span className="text-muted-foreground">-</span>
            <span className="font-semibold" style={{ color: '#8b1a1a' }}>SD</span>
            <span className="text-muted-foreground">Subdominante</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">V</span>
            <span className="text-muted-foreground">-</span>
            <span className="font-semibold" style={{ color: '#8b1a1a' }}>D</span>
            <span className="text-muted-foreground">Dominante</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">VI</span>
            <span className="text-muted-foreground">-</span>
            <span className="font-semibold" style={{ color: '#8b1a1a' }}>SPD</span>
            <span className="text-muted-foreground">Superdominante</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">VII</span>
            <span className="text-muted-foreground">-</span>
            <span className="font-semibold" style={{ color: '#8b1a1a' }}>S</span>
            <span className="text-muted-foreground">Sensível</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcentricWheel;
