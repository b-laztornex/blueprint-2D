export type AnnotationType =
  | "Damage"
  | "Incomplete"
  | "Observation"
  | "Resolved"
  | "Unconfirmed";

export interface Annotation {
  x: number;
  y: number;
  label: string;
  type: AnnotationType;
}
