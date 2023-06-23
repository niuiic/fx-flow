import { Include } from '../../types/include.js'
import { isNull } from './isNull.js'
import { isUndefined } from './isUndefined.js'

/**
 * Check whether `args` is null or undefined.
 *
 * @example
 * ```ts
 * isArray([1, 2, 3]); // false
 * isArray(null); // true
 * isArray(undefined); // true
 * ```
 *
 * {@link #Repo/tests/functions/strict/isNil.spec.ts | More examples}
 */
function isNil<A>(args: A): args is Include<A, boolean> {
  return isNull(args) || isUndefined(args)
}

export { isNil }