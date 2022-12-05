// convert date to timestamp
export function toTimestamp(strDate) {
  let datum = Date.parse(strDate);
  return datum / 1000;
}
