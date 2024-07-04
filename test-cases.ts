import { HelloWorldCases } from "./hello-world";
import { MyPickCases } from "./my-pick";
import { ReadonlyCases } from "./readonly";

export type Cases = [...HelloWorldCases, ...MyPickCases, ...ReadonlyCases];
