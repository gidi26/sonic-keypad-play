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
  const [noteRotation, setNoteRotation] = useState(0);

  const size = 580;
  const center = size / 2;
  const noteRadius = 280;
  const degreesOuterR = 240;
  const functionsOuterR = 200;
  const functions2OuterR = 160;
  const innermostR = 120;
  const innermost2R = 80;
  const centerRadius = 45;

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
            const startAngle = index * segmentAngle;
            const endAngle = (index + 1) * segmentAngle;
            const textPos = getTextPosition(index, 12, (noteRadius + degreesOuterR) / 2);

            return (
              <g key={`note-${index}`}>
                <path
                  d={createArcPath(startAngle, endAngle, degreesOuterR, noteRadius)}
                  fill="hsl(var(--primary))"
                  stroke="hsl(var(--background))"
                  strokeWidth="2"
                  className="cursor-grab active:cursor-grabbing"
                />
                <text
                  x={textPos.x}
                  y={textPos.y}
                  fill="hsl(var(--primary-foreground))"
                  fontSize="14"
                  fontWeight="bold"
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
          {/* Degrees ring */}
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
                  fill={isSelected ? 'hsl(var(--foreground))' : isSharp ? 'hsl(var(--muted-foreground) / 0.3)' : 'hsl(var(--muted))'}
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200 hover:brightness-110"
                  onClick={() => setSelectedOuter(selectedOuter === index ? null : index)}
                />
                <text
                  x={textPos.x}
                  y={textPos.y}
                  fill={isSelected ? 'hsl(var(--background))' : 'hsl(var(--foreground))'}
                  fontSize="12"
                  fontWeight="bold"
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

          {/* Functions ring (outer) - shows non-Sub5 functions */}
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
                  fill={isSub5 ? 'transparent' : isSelected ? '#2b6d4c' : 'hsl(var(--accent))'}
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                  className={isSub5 ? '' : 'cursor-pointer transition-all duration-200 hover:brightness-110'}
                  onClick={() => !isSub5 && setSelectedInner(selectedInner === index ? null : index)}
                />
                {!isSub5 && (
                  <text
                    x={textPos.x}
                    y={textPos.y}
                    fill={isSelected ? 'white' : 'hsl(var(--accent-foreground))'}
                    fontSize="13"
                    fontWeight="600"
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

          {/* Functions ring (inner) - shows only Sub5 */}
          {innerSegments.map((segment, index) => {
            const startAngle = index * segmentAngle;
            const endAngle = (index + 1) * segmentAngle;
            const isSelected = selectedInner === index;
            const isSub5 = segment.label.includes('Sub5');
            const textPos = getTextPosition(index, 12, (functions2OuterR + innermostR) / 2);

            return (
              <g key={`innermost-${index}`}>
                <path
                  d={createArcPath(startAngle, endAngle, innermostR, functions2OuterR)}
                  fill={!isSub5 ? 'transparent' : isSelected ? '#2b6d4c' : 'hsl(var(--accent))'}
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                  className={!isSub5 ? '' : 'cursor-pointer transition-all duration-200 hover:brightness-110'}
                  onClick={() => isSub5 && setSelectedInner(selectedInner === index ? null : index)}
                />
                {isSub5 && (
                  <text
                    x={textPos.x}
                    y={textPos.y}
                    fill={isSelected ? 'white' : 'hsl(var(--accent-foreground))'}
                    fontSize="13"
                    fontWeight="600"
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

          {/* Duplicated Sub5 functions ring */}
          {innerSegments.map((segment, index) => {
            const startAngle = index * segmentAngle;
            const endAngle = (index + 1) * segmentAngle;
            const isSelected = selectedInner === index;
            const isSub5 = segment.label.includes('Sub5');
            const textPos = getTextPosition(index, 12, (innermostR + innermost2R) / 2);

            return (
              <g key={`duplicated-sub5-${index}`}>
                <path
                  d={createArcPath(startAngle, endAngle, innermost2R, innermostR)}
                  fill={!isSub5 ? 'transparent' : isSelected ? '#2b6d4c' : 'hsl(var(--accent))'}
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                  className={!isSub5 ? '' : 'cursor-pointer transition-all duration-200 hover:brightness-110'}
                  onClick={() => isSub5 && setSelectedInner(selectedInner === index ? null : index)}
                />
                {isSub5 && (
                  <text
                    x={textPos.x}
                    y={textPos.y}
                    fill={isSelected ? 'white' : 'hsl(var(--accent-foreground))'}
                    fontSize="13"
                    fontWeight="600"
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

        {/* Center circle */}
        <circle
          cx={center}
          cy={center}
          r={centerRadius}
          fill="hsl(var(--background))"
          stroke="hsl(var(--border))"
          strokeWidth="3"
          className="drop-shadow-lg"
        />
        <text
          x={center}
          y={center}
          fill="hsl(var(--foreground))"
          fontSize="18"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {centerLabel}
        </text>
      </svg>

      {/* Rotation controls */}
      <div className="flex items-center gap-4 mt-6">
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
