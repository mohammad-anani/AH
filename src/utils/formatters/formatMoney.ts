export function formatMoney(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "$";
}

// 9000 becomes 9 000 $
