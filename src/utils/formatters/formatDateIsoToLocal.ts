export default function formatDateIsoToLocal(dateStr: string) {
  return new Date(dateStr).toLocaleString();
}
