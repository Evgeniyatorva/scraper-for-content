export function getArrayfromLength (number) {
  return Array.from(new Array(number).keys()).map(value => value + 1)
}