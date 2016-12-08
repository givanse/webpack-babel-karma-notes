export default function sum(numbers) {
  let s = 0;
  for (let n of numbers) {
    s += n;
  }
  return s;
}
