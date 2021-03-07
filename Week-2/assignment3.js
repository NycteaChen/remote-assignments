/*Assignment 3: Function, Array, and Object
Complete the function below to calculate the average price of all the products.
 */

function avg(data){
    // your code here
    let sum = 0;
    for ( i = 0; i < data.size; i++) {
        sum += data.products[i].price;
    }
    return sum/data.size;
}

const avgObj = {
    size:3,
    products:[
        {
        name:"Product 1",
        price:100
        },
        {
        name:"Product 2",
        price:700
        },
        {
        name:"Product 3",
        price:250
        }
    ],
}; 
// show the average price of all products
console.log(avg(avgObj));

