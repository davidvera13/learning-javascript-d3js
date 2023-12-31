// Iterations include methods that help us work with any iterable including Arrays,Map, Set and Generators

// d3.every(iterable,test)
// Returns true if the given test function returns true for every value in the given iterable.
// This method returns as soon as test returns a non-truthy value or all values are iterated over.
let everyOutput = d3.every([1, 2, 3], d => d > 0);
console.log("d3.every([1, 2, 3], d => d > 0)", everyOutput);
everyOutput = d3.every([1, 2, 3], d => d > 3);
console.log("d3.every([1, 2, 3], d => d > 3)", everyOutput);
everyOutput = d3.every(new Set([1, 2, 3]), d => d > 0);
console.log("d3.every(new Set([1, 2, 3]), d => d > 0)", everyOutput);
everyOutput = d3.every(new Set([1, 2, 3]), d => d > 3);
console.log("d3.every(new Set([1, 2, 3]), d => d > 3)", everyOutput);

let data = [
    {
        name: 'Jack',
        score: 40
    },
    {
        name: 'Jill',
        score: 60
    },
    {
        name: 'Jack',
        score: 20
    }
];


everyOutput = d3.every(data, d => d.score >= 20);
console.log("d3.every(data, d => d.score >= 20)", everyOutput);
everyOutput = d3.every(data, d => d.score > 60);
console.log("d3.every(data, d => d.score > 60)", everyOutput);
console.log("***********************************************");


// d3.some(iterable,test)
// Returns true if the given test function returns true for any value in the given iterable.
// This method returns as soon as test returns a truthy value or all values are iterated over.
let someOutput = d3.some([1, 2, 3], d => d > 1);
console.log("d3.some([1, 2, 3], d => d > 1)", someOutput);
someOutput = d3.some([1, 2, 3], d => d > 3);
console.log("d3.some([1, 2, 3], d => d > 3)", someOutput);
someOutput = d3.some(new Set([1, 2, 3]), d => d > 1);
console.log("d3.some(new Set([1, 2, 3]), d => d > 1)", someOutput);
someOutput = d3.some(new Set([1, 2, 3]), d => d > 3);
console.log("d3.some(new Set([1, 2, 3]), d => d > 3)", someOutput);

someOutput = d3.some(data, d => d.score >= 20);
console.log("d3.some(data, d => d.score >= 20)", someOutput);
someOutput = d3.some(data, d => d.score > 60);
console.log("d3.some(data, d => d.score > 60)", someOutput);
console.log("***********************************************");


// d3.filter(iterable,test)
// Returns a new array containing the values from iterable, in order, for which the given
// test function returns true.
let filterOutput = d3.filter([1, 2, 3], d => d > 1);
console.log(filterOutput);
filterOutput = d3.filter([1, 2, 3], d => d > 3);
console.log(filterOutput);
filterOutput = d3.filter(new Set([1, 2, 3]), d => d > 1);
console.log(filterOutput);
filterOutput = d3.filter(new Set([1, 2, 3]), d => d > 3);
console.log(filterOutput);

filterOutput = d3.filter(data, d => d.score >= 20);
console.log("d3.filter(data, d => d.score >= 20)", filterOutput);
filterOutput = d3.filter(data, d => d.score >= 40);
console.log("d3.filter(data, d => d.score >= 40)", filterOutput);

console.log("***********************************************");

// d3.map(iterable,map)
// Returns a new array containing the mapped values from iterable, in order, as defined by given
// mapper function.
let mapOutput = d3.map([1, 2, 3], d => d > 1);
console.log("d3.map([1, 2, 3], d => d > 1)", mapOutput);
mapOutput = d3.map([1, 2, 3], d => d > 3);
console.log("d3.map([1, 2, 3], d => d > 3)", mapOutput);
mapOutput = d3.map(new Set([1, 2, 3]), d => d > 1);
console.log("d3.map(new Set([1, 2, 3]), d => d > 1)", mapOutput);
mapOutput = d3.map(new Set([1, 2, 3]), d => d > 3);
console.log("d3.map(new Set([1, 2, 3]), d => d > 3)", mapOutput);
console.log("***********************************************");

// d3.reduce(iterable,reducer,initialValue(optional))
// Returns the reduced value defined by given reducer function, which is repeatedly invoked for each value in iterable, being passed the current reduced value and the next value.
let reduceOutput = d3.reduce([1, 2, 3], (x, y) => x + y, 5);
console.log("d3.reduce([1, 2, 3], (x, y) => x + y, 5)", reduceOutput);
reduceOutput = d3.reduce([1, 2, 3], (x, y) => x - y);
console.log("d3.reduce([1, 2, 3], (x, y) => x - y)", reduceOutput);
reduceOutput = d3.reduce(new Set([1, 2, 3]), (x, y) => x + y, 5);
console.log("d3.reduce(new Set([1, 2, 3]), (x, y) => x + y, 5)", reduceOutput);
reduceOutput = d3.reduce(new Set([1, 2, 3]), (x, y) => x - y);
console.log("d3.reduce(new Set([1, 2, 3]), (x, y) => x - y)", reduceOutput);
console.log("***********************************************");

// d3.reverse(iterable)
// Returns an array containing the values in the given iterable in reverse order. Does not mutate the given iterable.
let reverseOutput = d3.reverse([1, 2, 3]);
console.log("d3.reverse([1, 2, 3])", reverseOutput);
reverseOutput = d3.reverse(new Set([1, 2, 3]));
console.log("d3.reverse(new Set([1, 2, 3]))", reverseOutput);
console.log("***********************************************");

// d3.sort(iterable,accessor)
// d3.sort(iterable,comparator)
// Returns an array containing the values in the given iterable in the sorted order defined by the given comparator or accessor function. Defalut order is ascending
let sortOutput = d3.sort([3, 2, 1]);
console.log("d3.sort([3, 2, 1])", sortOutput);
sortOutput = d3.sort([3, 2, 1], d => d / 3);
console.log("d3.sort([3, 2, 1], d => d / 3)", sortOutput);
sortOutput = d3.sort([1, 2, 3], (x, y) => y - x);
console.log("d3.sort([1, 2, 3], (x, y) => y - x)", sortOutput);
sortOutput = d3.sort(new Set([3, 2, 1]));
console.log("d3.sort(new Set([3, 2, 1]))", sortOutput);
sortOutput = d3.sort(new Set([3, 2, 1]), d => d / 3);
console.log("d3.sort(new Set([3, 2, 1]), d => d / 3)", sortOutput);
sortOutput = d3.sort(new Set([1, 2, 3]), (x, y) => y - x);
console.log("d3.sort(new Set([1, 2, 3]), (x, y) => y - x)", sortOutput);