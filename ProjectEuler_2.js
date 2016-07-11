/*Approach the fibonacci numbers as an array of numbers.
Defined the first two numbers in the sequence directly*/
var fibo = [];
fibo[0] = 1;
fibo[1] = 2;

/*defined variable i to include the next number in the sequence
until the last number of the sequence is the first number
to exceed the limit (the second to last number is the last
number in the sequence to be less than the defined limit*/
var i = fibo.length;
var limit = 4000000;

/*used do-while function to add fibonacci numbers
until the first number to exceed the defined limit*/
do {
    fibo[i] = fibo[i-1] + fibo[i-2];
    i++;
} while (fibo[i-1] < limit);

/*defined total to be the sum of the numbers in the for loop*/
var total = 0;

/*for loop examines all the entities in the fibonacci number array
if the number in the array is even, it is added to the total*/
for(var n=0; n<i; n++) {
    if (fibo[n] % 2 === 0) {
        total += fibo[n]};
    }