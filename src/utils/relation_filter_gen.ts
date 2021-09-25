/**
 * @description Used to generated the paths for deeply, self referencing, items.
 * It follows the directus path requirements for get relationships.
 *
 * @param base The relationship field (The item containing the primary key)
 * @param ext The relationship item sub fields to select
 * @param depth How many relationships deep
 */
export const RelationFilterGenerator = (
  base: string,
  ext: string,
  depth: number
): Array<string> => {
  let values: Array<string> = []

  for (let i = 0; i < depth; i++) {
    values.push(`${`${base}.`.repeat(i + 1)}${ext}`)
  }

  return values
}
