import type { FixedPromise, MaybePromise } from '@/types'
import { isPromise } from '@/utils'

/**
 * Invokes an interceptor and return the original value.
 *
 * @example
 * ```typescript
 * const res = tap(console.log, { a: 'a' })
 * // log {a: 'a'}
 * // res = {a: 'a'}
 * const res2 = tap((v) => {v.a = 'b'}, { a: 'a' })
 * // res2 = {a: 'b'}
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/tap.spec.ts | More examples}
 */
function tap<A, R>(fn: (args: Awaited<A>) => R, args: A): A extends Promise<unknown> ? FixedPromise<A> : A

function tap<A, R>(fn: (args: Awaited<A>) => R): (args: A) => A extends Promise<unknown> ? FixedPromise<A> : A

function tap<A, R>(fn: (args: Awaited<A>) => R, args?: A): MaybePromise<A> | ((args: A) => MaybePromise<A>) {
  if (args === undefined) {
    return (args: A) => tap(fn, args)
  }

  const res = isPromise(args) ? args.then(fn as any) : fn(args as any)

  return isPromise(res) ? (res.then(() => args) as FixedPromise<A>) : args
}

export { tap }
