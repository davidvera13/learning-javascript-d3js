let firstCircle = d3.select('svg').selectChild();
console.log('firstCircle');
console.log(firstCircle);

let secondCircle = d3.select('svg').selectChild(':nth-child(2)');
console.log('secondCircle');
console.log(secondCircle);

let firstRect = d3.select('svg:nth-of-type(2)').selectChild();
console.log('firstRect');
console.log(firstRect);

let secondRect = d3.select('svg:nth-of-type(2)').selectChild(':nth-child(2)');
console.log('secondRect');
console.log(secondRect);

// with selectAll: select first of each
let firstChild = d3.selectAll('svg').selectChild();
console.log('firstChild');
console.log(firstChild);

let secondChild = d3.selectAll('svg').selectChild(':nth-child(2)');
console.log('secondChild');
console.log(secondChild);

// with function: works like iteration, we can get each child individually
d3.select('svg').selectChild(function (c, i, cn) {
    console.log("c", c);
    console.log("i", i);
    console.log("cn", cn);
});

console.log("*****************")
d3.selectAll('svg').selectChild(function (c, i, cn) {
    console.log("c", c);
    console.log("i", i);
    console.log("cn", cn);
});