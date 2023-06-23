import { Include } from '../../types/include.js'

/**
 * Check whether `args` is boolean.
 *
 * @example
 * ```ts
 * isArray([1, 2, 3]); // false
 * isArray(false); // true
 * ```
 *
 * {@link #Repo/tests/functions/strict/isBoolean.spec.ts | More examples}
 */
function isBoolean<A>(args: A): args is Include<A, boolean> {
  return typeof args === 'boolean'
}

export { isBoolean }