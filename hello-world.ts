import type { Equal, Expect, NotAny } from "@type-challenges/utils";
type HelloWorld = string;

export type HelloWorldCases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
];
