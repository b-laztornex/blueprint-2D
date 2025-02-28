import React from "react";
import { AnnotationType } from "../lib/types";

interface FilterButtonsProps {
  activeFilters: Record<AnnotationType, boolean>;
  toggleFilter: (type: AnnotationType) => void;
  toggleAllFilters: () => void;
  types: Record<AnnotationType, string>;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  activeFilters,
  toggleFilter,
  toggleAllFilters,
  types,
}) => {
  const allOn = Object.values(activeFilters).every((v) => v);
  const toggleAllText = allOn ? "Turn All Off" : "Turn All On";

  return (
    <div className="flex space-x-2 mb-4">
      {Object.keys(activeFilters).map((type) => {
        const t = type as AnnotationType;
        return (
          <button
            key={t}
            onClick={() => toggleFilter(t)}
            className={`px-3 py-1 rounded text-white font-semibold ${
              activeFilters[t] ? "" : "opacity-50"
            }`}
            style={{ backgroundColor: types[t] }}
          >
            {t}
          </button>
        );
      })}
      <button
        onClick={toggleAllFilters}
        className="px-3 py-1 rounded bg-gray-600 text-white font-semibold"
      >
        {toggleAllText}
      </button>
    </div>
  );
};

export default FilterButtons;
