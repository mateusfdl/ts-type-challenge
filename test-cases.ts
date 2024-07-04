import { HelloWorldCases } from "./hello-world";
import { MyPickCases } from "./my-pick";
import { ReadonlyCases } from "./readonly";
import { TupleToObjectCases } from "./tuple-object";

export type Cases = [
  ...HelloWorldCases,
  ...MyPickCases,
  ...ReadonlyCases,
  ...TupleToObjectCases,
];
