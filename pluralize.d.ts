// Demo type definition for the pluralize function
// From https://www.npmjs.com/package/pluralize

/**
 * Pluralize or singularize a word based on the passed in count.
 *
 * @param word
 * @param count
 * @param inclusive
 */
declare function pluralize(
  word: string,
  count?: number,
  inclusive?: boolean
): string;
