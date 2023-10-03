// d3.difference(iterable, ...others)
let difference;
difference = d3.difference([0, 1, 2], [1]);
// 0 & 2 are not in second array
console.log("d3.difference([0, 1, 2], [1])", difference);

difference = d3.difference([0, 1, 2], [1], [0]);
// 0 & 2 are not in second array
console.log("d3.difference([0, 1, 2], [1], [0])", difference);
console.log("***********************************************");

// take each value one time
let union;
union = d3.union([0, 3, 5], [0, 2, 4]);
console.log("d3.union([0, 3, 5], [0, 2, 4])", union);

union = d3.union([0, 1, 2], [1], [5, 6]);
console.log("d3.union([0, 1, 2], [1], [5, 6])", union);
console.log("***********************************************");

// d3.intersection(iterabless)
let intersection;
intersection = d3.intersection([0, 3, 5], [0, 2, 4]);
console.log("d3.intersection([0, 3, 5], [0, 2, 4])", intersection);

intersection = d3.intersection([0, 1, 2], [3, 5, 6]);
console.log("d3.intersection([0, 1, 2], [3, 5, 6])", intersection);
console.log("***********************************************");

// d3.superset(a,b)
let superSet = d3.superset([0, 1, 2, 3, 5], [1, 5]);
// first iterable contains all elements of seconds
// second iterable is a subset
console.log("d3.superset([0, 1, 2, 3, 5], [1, 5])", superSet)
console.log("***********************************************");

// d3.superset(a,b)
let subset;

subset= d3.subset([1, 5], [0, 1, 2, 3, 5]);
// first iterable contains all elements of seconds
// second iterable is a subset
console.log("d3.subset([1, 5], [0, 1, 2, 3, 5])", subset)

subset= d3.subset([1, 8], [0, 1, 2, 3, 5]);
// first iterable contains all elements of seconds
// second iterable is a subset
console.log("d3.subset([1, 8], [0, 1, 2, 3, 5])", subset)
console.log("***********************************************");


// d3.disjoint(a, b)
let disjoint;

disjoint = d3.disjoint([1, 5], [0, 1, 2, 3, 5]);
// first iterable contains all elements of seconds
// second iterable is a subset
console.log("d3.disjoint([1, 5], [0, 1, 2, 3, 5])", disjoint)

disjoint = d3.disjoint([4, 8], [0, 1, 2, 3, 5]);
// first iterable contains all elements of seconds
// second iterable is a subset
console.log("d3.disjoint([4, 8], [0, 1, 2, 3, 5])", disjoint)
console.log("***********************************************");

console.log("***********************************************");

