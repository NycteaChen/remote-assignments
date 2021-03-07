/*Assignment 2: Object
In JavaScript, there are many different sets of syntax for creating objects. In the code below,
function parameters are encapsulated into an object, try using at least two ways to create a
proper object as a parameter of the calculate function.
 */

function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}

// JSON literal
const obj1 = {
    op: "+",
    n1: 3,
    n2: 4,
};

const obj2 = {
    op: "-",
    n1: 3,
    n2: 4,
};
const obj3 = {
    op: "*",
    n1: 3,
    n2: 4,
};

console.log(calculate(obj1)); // 7
console.log(calculate(obj2)); // -1
console.log(calculate(obj3)); // "Not supported"


// constructor & class
class Obj {
    constructor(operator, n1, n2){
        this.op = operator;
        this.n1 = n1;
        this.n2 = n2;
    }
};

const obj4 = new Obj("+", 5, 10);  
const obj5 = new Obj("/", 9, 3);
console.log(calculate(obj4)); // 15
console.log(calculate(obj5)); // "Not supported"

