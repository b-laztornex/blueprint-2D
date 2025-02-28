import React, { useRef } from "react";
import { Annotation, AnnotationType } from "../lib/types";
import Flag from "./Flag";

interface BlueprintProps {
  annotations: Annotation[];
  addAnnotation: (x: number, y: number) => void;
  updateAnnotationType: (label: string) => void;
  activeFilters: Record<AnnotationType, boolean>;
  types: Record<AnnotationType, string>;
}

const Blueprint: React.FC<BlueprintProps> = ({
  annotations,
  addAnnotation,
  updateAnnotationType,
  activeFilters,
  types,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      addAnnotation(x, y);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto border-2 border-gray-400 mt-[100px]"
      style={{
        width: "1026px",
        height: "1132px",
        backgroundImage: "url('/construction_blueprint.png')",
        backgroundSize: "cover",
      }}
      onClick={handleClick}
    >
      {annotations.map(
        (annotation) =>
          activeFilters[annotation.type] && (
            <Flag
              key={annotation.label}
              annotation={annotation}
              updateAnnotationType={updateAnnotationType}
              color={types[annotation.type]}
            />
          )
      )}
    </div>
  );
};

export default Blueprint;
