import { Annotation, AnnotationType } from "./types";

export const initialAnnotations: Annotation[] = [
  { x: 438, y: 473, label: "#45", type: "Damage" },
  { x: 354, y: 900, label: "#46", type: "Damage" },
  { x: 689, y: 711, label: "#47", type: "Damage" },
  { x: 795, y: 283, label: "#48", type: "Incomplete" },
  { x: 563, y: 100, label: "#50", type: "Observation" },
  { x: 908, y: 114, label: "#55", type: "Resolved" },
];

export const types: Record<AnnotationType, string> = {
  Damage: "#EE6352",
  Incomplete: "#FAC05E",
  Observation: "#3FA7D6",
  Resolved: "#59CD90",
  Unconfirmed: "#474954",
};

export const order: AnnotationType[] = [
  "Damage",
  "Incomplete",
  "Observation",
  "Resolved",
  "Unconfirmed",
];
