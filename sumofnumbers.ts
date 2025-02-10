function sumFor(list: number[]): number {
  let sum = 0;
  for (let i = 0; i <= list.length; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumFor([1, 2, 3, 4]));

function sumWhile(list: number[]): number {
  let sum = 0;
  let i = 0;
  while (i <= list.length) {
    sum += i;
    i++;
  }
  return sum;
}
console.log(sumWhile([1, 2, 3, 4]));

function sumRecursion(list: number[]): number {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1));
}
console.log(sumRecursion([1, 2, 3, 4]));

function sumTheFuctionalWay(list: number[]): number {
  return list.reduce((a, b) => a + b, 0);
}
console.log(sumTheFuctionalWay([1, 2, 3, 4]));
