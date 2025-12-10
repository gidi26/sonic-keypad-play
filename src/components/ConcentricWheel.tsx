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
  const outerRadius = 230;
  const middleRadius = 175;
  const innerRadius = 120;
  const centerRadius = 65;

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
            const textPos = getTextPosition(index, 12, (noteRadius + outerRadius) / 2);

            return (
              <g key={`note-${index}`}>
                <path
                  d={createArcPath(startAngle, endAngle, outerRadius, noteRadius)}
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
          {/* Degrees ring (outer fixed) */}
          {outerSegments.map((segment, index) => {
            const startAngle = index * segmentAngle;
            const endAngle = (index + 1) * segmentAngle;
            const isSelected = selectedOuter === index;
            const isSharp = segment.label.includes('#');
            const textPos = getTextPosition(index, 12, (outerRadius + middleRadius) / 2);

            return (
              <g key={`outer-${index}`}>
                <path
                  d={createArcPath(startAngle, endAngle, middleRadius, outerRadius)}
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
                  fontSize="13"
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

          {/* Functions ring (inner fixed) */}
          {innerSegments.map((segment, index) => {
            const startAngle = index * segmentAngle;
            const endAngle = (index + 1) * segmentAngle;
            const isSelected = selectedInner === index;
            const textPos = getTextPosition(index, 12, (middleRadius + innerRadius) / 2);

            return (
              <g key={`inner-${index}`}>
                <path
                  d={createArcPath(startAngle, endAngle, innerRadius, middleRadius)}
                  fill={isSelected ? '#56da97' : 'hsl(var(--accent))'}
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200 hover:brightness-110"
                  onClick={() => setSelectedInner(selectedInner === index ? null : index)}
                />
                <text
                  x={textPos.x}
                  y={textPos.y}
                  fill={isSelected ? 'white' : 'hsl(var(--accent-foreground))'}
                  fontSize="11"
                  fontWeight="600"
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
            Função: <span style={{ color: '#56da97' }}>{innerSegments[selectedInner].label}</span>
          </p>
        )}
      </div>

      {/* Functions legend */}
      <div className="mt-6 p-4 bg-card border border-border rounded-lg max-w-md">
        <h3 className="text-sm font-bold text-foreground mb-3 text-center">Legenda - Funções Harmônicas</h3>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: '#56da97' }}>T</span>
            <span className="text-muted-foreground">Tônica</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: '#56da97' }}>Sub5 I</span>
            <span className="text-muted-foreground">-</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: '#56da97' }}>ST</span>
            <span className="text-muted-foreground">Supertônica</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: '#56da97' }}>Sub5 II</span>
            <span className="text-muted-foreground">-</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: '#56da97' }}>MD</span>
            <span className="text-muted-foreground">Mediante</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: '#56da97' }}>SD</span>
            <span className="text-muted-foreground">Subdominante</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: '#56da97' }}>Sub5 IV</span>
            <span className="text-muted-foreground">-</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: '#56da97' }}>D</span>
            <span className="text-muted-foreground">Dominante</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: '#56da97' }}>Sub5 V</span>
            <span className="text-muted-foreground">-</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: '#56da97' }}>SPD</span>
            <span className="text-muted-foreground">Superdominante</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: '#56da97' }}>Sub5 VI</span>
            <span className="text-muted-foreground">-</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: '#56da97' }}>S</span>
            <span className="text-muted-foreground">Sensível</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcentricWheel;
