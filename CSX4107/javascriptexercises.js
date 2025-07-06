L = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];
//Find the sum of the numbers in the list and print to the screen...

//Normal way

let sum = 0;
for (let i = 0; i < L.length; i++) {
    sum += L[i];
}
console.log("Sum using normal way: " + sum);

//Using reduce method
const sumUsingReduce = L.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum using reduce method: " + sumUsingReduce);