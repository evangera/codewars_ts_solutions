function quarterOf(month: number): number {
  // return Math.ceil(month / 3);
  if (month <= 3) return 1
  else if (month <= 6) return 2 
  else if (month <= 9) return 3
  return 4
}
console.log(quarterOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12))
