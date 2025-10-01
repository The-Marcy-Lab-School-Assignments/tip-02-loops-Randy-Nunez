// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
const printSquareNumbers = (n) => {
  let totalSum = 0;
  let square = 0;
  for (let i = 1; i <= n; i++) {
    square = i * i;
    console.log(square);
    totalSum += square;
  }
  return totalSum;

}
printSquareNumbers(5);
//will print: 1, 4, 9, 16, 25
// Final output is: 55
