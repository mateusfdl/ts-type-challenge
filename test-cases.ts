import { HelloWorldCases } from "./hello-world";
import { MyPickCases } from "./my-pick";

export type Cases = [...HelloWorldCases, ...MyPickCases];
