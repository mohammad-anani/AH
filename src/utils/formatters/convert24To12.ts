export function convert24To12(time24: string): string {
  const [hourStr, minuteStr] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12; // Convert 0 → 12, 13 → 1, etc.

  return `${hour}:${minute.toString().padStart(2, "0")} ${ampm}`;
}
