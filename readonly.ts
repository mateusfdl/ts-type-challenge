import type { Equal, Expect } from "@type-challenges/utils";

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

export type ReadonlyCases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
