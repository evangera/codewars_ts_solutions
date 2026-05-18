/*
If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/

function sameCase(a : string, b : string): number {
  if (!/[a-z]/i.test(a) || !/[a-z]/i.test(b)) return -1
  if (/[a-z]/.test(a) && /[a-z]/.test(b) || /[A-Z]/.test(a) && /[A-Z]/.test(b)) return 1
  else return 0 
}
console.log(sameCase('C', 'B'));
console.log(sameCase('b', 'a'));
console.log(sameCase('d', 'd'));
console.log(sameCase('A', 's'));
console.log(sameCase('c', 'B'));
console.log(sameCase('b', 'Z'));
console.log(sameCase('\t', 'Z'));
console.log(sameCase('H', ':'));
