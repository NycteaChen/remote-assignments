/*Assignment 1: Function and Array
Complete the function below to find the max number of the passing array of numbers.
Reminder: you cannot use built-in Math.max() or sort() to complete this assignment.
 */


function max(numbers){
    let maxN = 0; 
    for ( i=0; i<numbers.length; i++){
        if ( numbers[i] > maxN){
            maxN = numbers[i]; 
        }
    } console.log(maxN);
}


max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7

