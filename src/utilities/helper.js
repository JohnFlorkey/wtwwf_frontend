import "dayjs";
import dayjs from "dayjs";

export function displayRuntime(totalMinutes) {
  const hours = parseInt(totalMinutes / 60);
  const minutes = totalMinutes - hours * 60;
  return `${hours}h ${minutes}m`;
}

export function displayDate(date) {
  return dayjs(date).format("MMMM D, YYYY");
}
