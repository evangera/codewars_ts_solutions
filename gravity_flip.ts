function flip(dir: string, arr: number[]): number[] {
  if (dir === `R`) return arr.sort((a, b) => a - b);
  else return arr.sort((a, b) => b - a);
}
console.log(flip('R', [3, 2, 1, 2]))
console.log(flip('L', [1, 4, 5, 3, 5]))
