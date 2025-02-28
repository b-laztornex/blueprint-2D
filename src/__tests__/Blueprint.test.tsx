import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Blueprint from "../components/Blueprint";
import { Annotation } from "../lib/types";
import { vi } from "vitest";

const sampleAnnotations: Annotation[] = [
  { x: 100, y: 150, label: "#1", type: "Damage" },
  { x: 200, y: 250, label: "#2", type: "Incomplete" },
];

const dummyAddAnnotation = vi.fn();
const dummyUpdateAnnotationType = vi.fn();

const activeFilters = {
  Damage: true,
  Incomplete: true,
  Observation: true,
  Resolved: true,
  Unconfirmed: true,
};

const types = {
  Damage: "#EE6352",
  Incomplete: "#FAC05E",
  Observation: "#3FA7D6",
  Resolved: "#59CD90",
  Unconfirmed: "#474954",
};

describe("Blueprint Component", () => {
  test("renders flags at the correct positions", () => {
    render(
      <Blueprint
        annotations={sampleAnnotations}
        addAnnotation={dummyAddAnnotation}
        updateAnnotationType={dummyUpdateAnnotationType}
        activeFilters={activeFilters}
        types={types}
      />
    );

    sampleAnnotations.forEach((annotation) => {
      const flag = screen.getByText(annotation.label);
      expect(flag).toBeInTheDocument();

      const flagContainer = flag.parentElement?.parentElement;
      expect(flagContainer).toBeTruthy();

      const expectedTop = `${annotation.y - 60}px`;
      const expectedLeft = `${annotation.x}px`;

      expect(flagContainer?.style.top).toBe(expectedTop);
      expect(flagContainer?.style.left).toBe(expectedLeft);
    });
  });
});
