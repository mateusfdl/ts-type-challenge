import { FirstOfArrayCases } from "./first-of-array";
import { HelloWorldCases } from "./hello-world";
import { LengthOfTupleCases } from "./length-of-tuple";
import { MyPickCases } from "./my-pick";
import { ReadonlyCases } from "./readonly";
import { TupleToObjectCases } from "./tuple-object";

export type Cases = [
  ...HelloWorldCases,
  ...MyPickCases,
  ...ReadonlyCases,
  ...TupleToObjectCases,
  ...FirstOfArrayCases,
  ...LengthOfTupleCases,
];
