import type { IterableReturnValue } from '@/types'
import { IterableTypeException, isAsyncIterable, isIterable } from '@/utils'

function sync(iterable: Iterable<number>) {
  let max = NaN
  for (const v of iterable) {
    if (Number.isNaN(v)) {
      return v
    }
    if (v > max || Number.isNaN(max)) {
      max = v
    }
  }
  return max
}

async function async(iterable: AsyncIterable<number>) {
  let max = NaN
  for await (const v of iterable) {
    if (Number.isNaN(v)) {
      return v
    }
    if (v > max || Number.isNaN(max)) {
      max = v
    }
  }
  return max
}

/**
 * Return the largest item of the iterable/asyncIterable
 *
 * @example
 * ```typescript
 * console.log(max([1, 2, 3])) // 3
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/max.spec.ts | More examples}
 */
function max<A extends Iterable<number> | AsyncIterable<number>>(iterator: A): IterableReturnValue<A>

function max(iterable: Iterable<number> | AsyncIterable<number>) {
  if (isIterable(iterable)) {
    return sync(iterable)
  }
  if (isAsyncIterable(iterable)) {
    return async(iterable)
  }

  throw new IterableTypeException()
}

export { max }
