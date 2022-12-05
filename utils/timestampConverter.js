import moment from "moment";

export function timestampConverter(dateStr, formatter) {
  return moment(dateStr, formatter).format("X");
}
