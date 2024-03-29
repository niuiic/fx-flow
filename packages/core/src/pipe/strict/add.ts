import type { FixedPromise, MaybePromise } from '@/types'
import { isPromise } from '@/utils'
import { isNumber } from './isNumber'
import { isString } from './isString'

/** A or B is async ? FixedPromise<T> : Awaited<T> */
type AddReturnValue<T, A extends T, B extends T> = [A] extends [FixedPromise<T>]
  ? FixedPromise<T>
  : [B] extends [FixedPromise<T>]
    ? FixedPromise<T>
    : Awaited<T>

function sync(a: number | string, b: number | string): string | number {
  if (isNumber(a) && isNumber(b)) {
    return a + b
  }

  if (isString(a) && isString(b)) {
    return a + b
  }

  throw new TypeError('"a" and "b" must be type of number or string')
}

async function async(a: Promise<number | string>, b: Promise<number | string>) {
  return sync(await a, await b)
}

/**
 * Retures the sum of `a` and `b`
 *
 * @example
 * ```typescript
 * console.log(add(1, 2)) // 3
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/add.spec.ts | More examples}
 */
function add<A extends MaybePromise<number>, B extends MaybePromise<number>>(
  a: A,
  b: B
): AddReturnValue<MaybePromise<number>, A, B>
function add<A extends MaybePromise<number>, B extends MaybePromise<number>>(
  a: A
): (b: B) => AddReturnValue<MaybePromise<number>, A, B>

function add<A extends MaybePromise<string>, B extends MaybePromise<string>>(
  a: A,
  b: B
): AddReturnValue<MaybePromise<string>, A, B>
function add<A extends MaybePromise<string>, B extends MaybePromise<string>>(
  a: A
): (b: B) => AddReturnValue<MaybePromise<string>, A, B>

function add<A extends MaybePromise<string | number>, B extends MaybePromise<string | number>>(
  a: A,
  b?: B
): MaybePromise<number | string> | ((b: B) => MaybePromise<number | string>) {
  if (b === undefined) {
    return (b2) => add(a as any, b2 as any)
  }

  if (isPromise(a) || isPromise(b)) {
    return async(Promise.resolve(a), Promise.resolve(b))
  }

  return sync(a, b)
}

export { add }
