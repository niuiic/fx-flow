import type { Tail } from './basic'
import type { FixedPromise } from './promise'

/** T = \[...Rest, Last\], any one of Rest is async ? FixedPromise<Last> : Last */
export type PipeReturnValue<T extends unknown[]> = T extends [infer First, infer Second, ...infer Rest]
  ? First extends Promise<unknown> | AsyncIterable<unknown>
    ? FixedPromise<Tail<T>>
    : PipeReturnValue<[Second, ...Rest]>
  : T[0]
