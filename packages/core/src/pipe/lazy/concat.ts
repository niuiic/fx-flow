import type { UniversalIterable } from '@/types'
import type { ConcatReturnValue } from '@/types/concat'
import { IterableTypeException, isAsyncIterable, isIterable } from '@/utils'

function* sync<A>(iterable1: Iterable<A>, iterable2: Iterable<A>): IterableIterator<A> {
  yield* iterable1
  yield* iterable2
}

function toAsyncIterable<A>(iterable: UniversalIterable<A>): AsyncIterable<A> {
  if (isAsyncIterable(iterable)) {
    return iterable
  }

  const iterator = iterable[Symbol.iterator]() as unknown as AsyncIterator<A>
  return {
    [Symbol.asyncIterator]() {
      return iterator
    }
  }
}

function async<A>(iterable1: AsyncIterable<A>, iterable2: AsyncIterable<A>): AsyncIterableIterator<A> {
  let leftDone = false
  const leftIterator = iterable1[Symbol.asyncIterator]()
  const rightIterator = iterable2[Symbol.asyncIterator]()

  return {
    [Symbol.asyncIterator]() {
      return this
    },
    async next(concurrent: any) {
      const iterator = leftDone ? rightIterator : leftIterator
      const { done, value } = await iterator.next(concurrent)
      if (done) {
        if (iterator === leftIterator) {
          leftDone = true
        }
        return rightIterator.next(concurrent)
      } else {
        return { done, value }
      }
    }
  }
}

/**
 * Return the result of concatenating the given iterable.
 *
 * @example
 * ```typescript
 * const iter = concat([1, 2], [3, 4]);
 * iter.next() // {done:false, value: 1}
 * iter.next() // {done:false, value: 2}
 * iter.next() // {done:false, value: 3}
 * iter.next() // {done:false, value: 4}
 * iter.next() // {done:true, value: undefined}
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/concat.spec.ts | More examples}
 */
function concat<A extends UniversalIterable, B extends UniversalIterable>(
  iterable1: A,
  iterable2: B
): ConcatReturnValue<A, B>

function concat<A extends UniversalIterable, B extends UniversalIterable>(
  iterable1: A
): (iterable2: B) => ConcatReturnValue<A, B>

function concat<A extends UniversalIterable, B extends UniversalIterable>(
  iterable1: A,
  iterable2?: B
): ((iterable2: B) => ConcatReturnValue<A, B>) | ConcatReturnValue<A, B> {
  if (iterable2 === undefined) {
    return (iterable2) => concat(iterable1, iterable2)
  }

  if (isAsyncIterable(iterable1) || isAsyncIterable(iterable2)) {
    return async(toAsyncIterable(iterable1), toAsyncIterable(iterable2)) as ConcatReturnValue<A, B>
  }

  if (isIterable(iterable1) && isIterable(iterable2)) {
    return sync(iterable1, iterable2) as ConcatReturnValue<A, B>
  }

  throw new IterableTypeException()
}

export { concat }
