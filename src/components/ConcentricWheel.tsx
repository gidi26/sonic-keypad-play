import React, { useState } from 'react';

interface WheelSegment {
  label: string;
  color?: string;
}

interface ConcentricWheelProps {
  outerSegments: WheelSegment[];
  innerSegments: WheelSegment[];
  centerLabel?: string;
}

const ConcentricWheel: React.FC<ConcentricWheelProps> = ({
  outerSegments,
  innerSegments,
  centerLabel = "HF"
}) => {
  const [selectedOuter, setSelectedOuter] = useState<number | null>(null);
  const [selectedInner, setSelectedInner] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);

  const size = 400;
  const center = size / 2;
  const outerRadius = 190;
  const middleRadius = 140;
  const innerRadius = 90;
  const centerRadius = 50;

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

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-2xl"
        style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.3s ease-out' }}
      >
        {/* Outer ring segments */}
        {outerSegments.map((segment, index) => {
          const startAngle = index * segmentAngle;
          const endAngle = (index + 1) * segmentAngle;
          const isSelected = selectedOuter === index;
          const textPos = getTextPosition(index, 12, (outerRadius + middleRadius) / 2);

          return (
            <g key={`outer-${index}`}>
              <path
                d={createArcPath(startAngle, endAngle, middleRadius, outerRadius)}
                fill={isSelected ? 'hsl(var(--primary))' : 'hsl(var(--muted))'}
                stroke="hsl(var(--border))"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-200 hover:brightness-110"
                onClick={() => setSelectedOuter(selectedOuter === index ? null : index)}
              />
              <text
                x={textPos.x}
                y={textPos.y}
                fill={isSelected ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))'}
                fontSize="11"
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

        {/* Inner ring segments */}
        {innerSegments.map((segment, index) => {
          const startAngle = index * segmentAngle;
          const endAngle = (index + 1) * segmentAngle;
          const isSelected = selectedInner === index;
          const textPos = getTextPosition(index, 12, (middleRadius + innerRadius) / 2);

          return (
            <g key={`inner-${index}`}>
              <path
                d={createArcPath(startAngle, endAngle, innerRadius, middleRadius)}
                fill={isSelected ? 'hsl(330, 80%, 50%)' : 'hsl(var(--accent))'}
                stroke="hsl(var(--border))"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-200 hover:brightness-110"
                onClick={() => setSelectedInner(selectedInner === index ? null : index)}
              />
              <text
                x={textPos.x}
                y={textPos.y}
                fill={isSelected ? 'white' : 'hsl(var(--accent-foreground))'}
                fontSize="10"
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

        {/* Outer decorative ring */}
        <circle
          cx={center}
          cy={center}
          r={outerRadius + 5}
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="3"
          strokeDasharray="8 4"
          opacity="0.5"
        />
      </svg>

      {/* Selection info */}
      <div className="mt-6 text-center space-y-2">
        {selectedOuter !== null && (
          <p className="text-sm font-medium">
            Camada externa: <span className="text-primary">{outerSegments[selectedOuter].label}</span>
          </p>
        )}
        {selectedInner !== null && (
          <p className="text-sm font-medium">
            Camada interna: <span className="text-pink-500">{innerSegments[selectedInner].label}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ConcentricWheel;
