/**
 * Helper method for array filtering to maintain type safety
 * rather than using .filter(Boolean)
 *
 * @param value unknown value
 * @returns boolean
 */
export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}
