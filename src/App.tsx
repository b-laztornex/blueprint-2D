import { useState } from "react";
import "./App.css";
import { Annotation, AnnotationType } from "./lib/types";
import { initialAnnotations, order, types } from "./lib/data";
import Blueprint from "./components/Blueprint";
import FilterButtons from "./components/FilterButtons";

const App: React.FC = () => {
  const [annotations, setAnnotations] =
    useState<Annotation[]>(initialAnnotations);
  const [activeFilters, setActiveFilters] = useState<
    Record<AnnotationType, boolean>
  >({
    Damage: true,
    Incomplete: true,
    Observation: true,
    Resolved: true,
    Unconfirmed: true,
  });

  const addAnnotation = (x: number, y: number) => {
    const numbers = annotations.map((a) =>
      parseInt(a.label.replace("#", ""), 10)
    );

    const nextNumber = Math.max(...numbers) + 1;

    const newAnnotation: Annotation = {
      x,
      y,
      label: `#${nextNumber}`,
      type: "Unconfirmed",
    };
    setAnnotations([...annotations, newAnnotation]);
  };

  const updateAnnotationType = (label: string) => {
    setAnnotations(
      annotations.map((a) => {
        if (a.label === label) {
          const currentIndex = order.indexOf(a.type);
          const nextType = order[(currentIndex + 1) % order.length];
          return { ...a, type: nextType };
        }
        return a;
      })
    );
  };

  const toggleFilter = (type: AnnotationType) => {
    setActiveFilters({ ...activeFilters, [type]: !activeFilters[type] });
  };

  const toggleAllFilters = () => {
    const values = Object.values(activeFilters);
    const allOn = values.every((v) => v);
    const newValue = allOn ? false : true;
    setActiveFilters({
      Damage: newValue,
      Incomplete: newValue,
      Observation: newValue,
      Resolved: newValue,
      Unconfirmed: newValue,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <FilterButtons
        activeFilters={activeFilters}
        toggleFilter={toggleFilter}
        toggleAllFilters={toggleAllFilters}
        types={types}
      />
      <Blueprint
        annotations={annotations}
        addAnnotation={addAnnotation}
        updateAnnotationType={updateAnnotationType}
        activeFilters={activeFilters}
        types={types}
      />
    </div>
  );
};

export default App;
