import { AnyFunction, Include } from '../../types/index.js'

/**
 * Check whether `args` is a function.
 *
 * @example
 * ```ts
 * isFunction(() => {}); // true
 * isFunction(2); // false
 * ```
 *
 * {@link #Repo/tests/functions/strict/isFunction.spec.ts | More examples}
 */
function isFunction<A>(args: A): args is Include<A, AnyFunction> {
  return typeof args === 'function'
}

export { isFunction }
