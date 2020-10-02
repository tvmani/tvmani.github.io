import { entries, uniq } from "lodash";

/**
 * Object can be flattened into 2-d array
 * @param {*} object 
 */
export default function transform(object) {
  let uniqueNestedKeys = uniq(
    Object.values(object)
      .map((o) => Object.keys(o))
      .flat()
  );

  let details = uniqueNestedKeys.map((key) =>
    [
      key,
      Object.values(object)
        .map((o) => o[key])
        .flat(),
    ].flat()
  );
  return [["date", ...Object.keys(object)], ...details];
}
