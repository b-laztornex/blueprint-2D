import React from "react";
import { Annotation } from "../lib/types";

interface FlagProps {
  annotation: Annotation;
  updateAnnotationType: (label: string) => void;
  color: string;
}

const applyOpacity = (color: string): string => {
  if (!color.startsWith("#")) {
    color = "#" + color;
  }
  return color + "CC";
};

const Flag: React.FC<FlagProps> = ({
  annotation,
  updateAnnotationType,
  color,
}) => {
  const tooltipWidth = 80;
  const tooltipHeight = 40;
  const arrowSize = 10;

  return (
    <div
      className="absolute"
      onClick={(e) => {
        e.stopPropagation();
        updateAnnotationType(annotation.label);
      }}
      style={{
        left: annotation.x,
        top: annotation.y - (tooltipHeight + arrowSize * 2),
        width: tooltipWidth,
        height: tooltipHeight,
        pointerEvents: "none",
      }}
    >
      <div
        className="relative p-4"
        style={{
          backgroundColor: applyOpacity(color),
          pointerEvents: "auto",
        }}
        title={annotation.label}
      >
        <span className="text-white font-bold text-xs">{annotation.label}</span>

        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: -arrowSize,
            width: arrowSize,
            height: arrowSize,
            backgroundColor: applyOpacity(color),
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default Flag;
