// Search

let data1 = [75, 50, 100, 25, 150];
let data2 = [
    {
        name: 'Jill',
        score: 40
    },
    {
        name: 'Jane',
        score: 20
    },
    {
        name: 'Jack',
        score: 50
    },
];

let a;
let b;
let c;
let d;
// d3.least(iterable,accesorFn(optional))
// d3.least(iterable,comparator(optional))
/*
    Returns the least element of the specified iterable according to the specified comparator or
    accessor. If the given iterable contains no comparable elements then returns undefined.
    By default, ascending order
*/
console.log("least")
a = d3.least(data1);
console.log("d3.least(data1)", a);

b = d3
    .least(data2, obj => obj.score);
console.log("d3.least(data2, obj => obj.score)", b);

c = d3.least(data2, (a, b) => a.score - b.score);
console.log("d3.least(data2, (a, b) => a.score - b.score)", c);

// be careful here: we retrieve the greatest score, not the least > descending order !
d = d3.least(data2, (a, b) => b.score - a.score);
console.log("d3.least(data2, (a, b) => b.score - a.score)", d); // counter intuitive
console.log("***************************");


// d3.leastIndex(iterable,accesorFn(optional))
// d3.leastIndex(iterable,comparator(optional))
/*
    Returns the index of the least element of the specified iterable according to the specified comparator or accessor.
    If the given iterable contains no comparable elements then returns undefined. By default, ascending order
*/
console.log("leastIndex")
a = d3.leastIndex(data1);
console.log("d3.leastIndex(data1)", a);

b = d3
    .leastIndex(data2, obj => obj.score);
console.log("d3.leastIndex(data2, obj => obj.score)", b);

c = d3.leastIndex(data2, (a, b) => a.score - b.score);
console.log("d3.leastIndex(data2, (a, b) => a.score - b.score)", c);

// be careful here: we retrieve the greatest score, not the least > descending order !
d = d3.leastIndex(data2, (a, b) => b.score - a.score);
console.log("d3.leastIndex(data2, (a, b) => b.score - a.score)", d); // counter intuitive
console.log("***************************");



// d3.greatest(iterable,accesorFn(optional))
// d3.greatest(iterable,comparator(optional))
/*
    Returns the greatest element of the specified iterable according to the specified comparator or accessor. If the
    given iterable contains no comparable elements then returns undefined. By default, ascending order
*/
console.log("greatest")
a = d3.greatest(data1);
console.log("d3.greatest(data1)", a);

b = d3
    .greatest(data2, obj => obj.score);
console.log("d3.greatest(data2, obj => obj.score)", b);

c = d3.greatest(data2, (a, b) => a.score - b.score);
console.log("d3.greatest(data2, (a, b) => a.score - b.score)", c);

// be careful here: we retrieve the greatest score, not the least > descending order !
d = d3.greatest(data2, (a, b) => b.score - a.score);
console.log("d3.greatest(data2, (a, b) => b.score - a.score)", d); // counter intuitive
console.log("***************************");


// d3.greatestIndex(iterable,accesorFn(optional))
// d3.greatestIndex(iterable,comparator(optional))
/*
    Returns the index of the least element of the specified iterable according to the specified comparator or accessor.
    If the given iterable contains no comparable elements then returns undefined. By default, ascending order
*/

console.log("greatestIndex")
a = d3.greatestIndex(data1);
console.log("d3.greatestIndex(data1)", a);

b = d3
    .greatestIndex(data2, obj => obj.score);
console.log("d3.greatestIndex(data2, obj => obj.score)", b);

c = d3.greatestIndex(data2, (a, b) => a.score - b.score);
console.log("d3.greatestIndex(data2, (a, b) => a.score - b.score)", c);

// be careful here: we retrieve the greatest score, not the least > descending order !
d = d3.greatestIndex(data2, (a, b) => b.score - a.score);
console.log("d3.greatestIndex(data2, (a, b) => b.score - a.score)", d); // counter intuitive
console.log("***************************");

// sorted data for bisect methods
let data3 = [25, 50, 75, 100, 150];

// d3.bisectLeft(array,x,lo(optional),hi(optional))
/*
    Returns the insertion point for x in array from the left so as to maintain the sorted order. The arguments lo(index)
     and hi(index) may be used to specify a subset of the array which should be considered; by default the entire
     array is used. If x is already present in array, the insertion point will be before (to the left of) any
     existing entries.
 */
let sortedData = [25, 50, 75, 100, 150];

console.log("bisectLeft")
a = d3.bisectLeft(sortedData, 120);
console.log("d3.bisectLeft(sortedData, 120)", a);

a = d3.bisectLeft(sortedData, 60);
console.log("d3.bisectLeft(sortedData, 60)", a);

a = d3.bisectLeft(sortedData, 60, 0, 3);
console.log("d3.bisectLeft(sortedData, 60, 0, 3)", a);
console.log("***************************");


// d3.bisectRight(array,x,lo(optional),hi(optional))
/*
    Similar to bisectLeft, but returns an insertion point which comes after (to the right of) any existing entries of x
     in array. The arguments lo(index) and hi(index) may be used to specify a subset of the array which should be
     considered; by default the entire array is used.
 */

console.log("bisectLeft")
a = d3.bisectRight(sortedData, 100);
console.log("d3.bisectRight(sortedData, 100)", a);


a = d3.bisectRight(sortedData, 60, 0, 3);
console.log("d3.bisectRight(sortedData, 60, 0, 3)", a);
console.log("***************************");


// d3.bisectCenter(array,x,lo(optional),hi(optional))
/*
    Returns the index of the value closest to x in the given array of numbers. The arguments lo(index) and hi(index)
    may be used to specify a subset of the array which should be considered; by default the entire array is used.
 */
console.log("bisectCenter");
a = d3.bisectCenter(data3, 140)
console.log("d3.bisectCenter(sortedData, 100)", a);
a = d3.bisectCenter(data3, 85, 0, 3)
console.log("d3.bisectCenter(sortedData, 85, 0, 3)", a);
console.log("***************************");

// d3.bisector(accessor)
// d3.bisector(comparator)
/*
       <<Returns a new bisector using the specified accessor or comparator function. This method can be used to bisect arrays of objects instead of being limited to simple arrays of primitives.
 */

// sorted array of objects for bisector method
let sorted = [
    {
        name: 'Jane',
        score: 20
    },
    {
        name: 'Jill',
        score: 40
    },
    {
        name: 'Jack',
        score: 50
    },
];

// bisector.left
console.log("bisector.left");
let data2Bisector1 = d3.bisector(d => d.score).left; // starting from left, as we also have a sorted array of objects
let bisectorIndex1 = data2Bisector1(sorted, 30);
console.log("bisectorIndex1", bisectorIndex1);

let data2Bisector2 = d3.bisector((a, x) => a.score - x).left; // starting from left, as we also have a sorted array of objects
let bisectorIndex2 = data2Bisector2(sorted, 30);
console.log("bisectorIndex1.left", bisectorIndex1);
console.log("***************************");

// // bisector.right
console.log("bisector.right");
data2Bisector1 = d3.bisector(d => d.score).right; // starting from left, as we also have a sorted array of objects
bisectorIndex1 = data2Bisector1(sorted, 50);
console.log("bisectorIndex1.right", bisectorIndex1);

data2Bisector2 = d3.bisector((a, x) => a.score - x).right; // starting from left, as we also have a sorted array of objects
bisectorIndex2 = data2Bisector2(sorted, 50);
console.log("bisectorIndex2.right", bisectorIndex2);
console.log("***************************");

// bisector.center
console.log("bisector.center");
data2Bisector1 = d3.bisector(d => d.score).center; // starting from left, as we also have a sorted array of objects
bisectorIndex1 = data2Bisector1(sorted, 50);
console.log("bisectorIndex1.center", bisectorIndex1);

data2Bisector2 = d3.bisector((a, x) => a.score - x).center; // starting from left, as we also have a sorted array of objects
bisectorIndex2 = data2Bisector2(sorted, 50);
console.log("bisectorIndex2.center", bisectorIndex1);
console.log("***************************");


// d3.ascending()
// comparator function
/*
    Returns - 1 if a is less than b, or 1 if a is greater than b, or 0. This is the comparator function for natural
    order, and can be used in conjunction with the built-in array.sort method to arrange elements in ascending order.
 */
console.log("ascending & descending")
a = d3.ascending(23, 42);
console.log("d3.ascending(23, 42)", a);
a = d3.ascending(73, 42);
console.log("d3.ascending(73, 42)", a);
a = d3.ascending(42, 42);
console.log("d3.ascending(42, 42)", a);

// d3.descending()
// comparator function
/*
    Returns - 1 if a is greater than b, or 1 if a is lesser than b, or 0. This is the comparator function for reverse
    natural order, and can be used in conjunction with the built-in array.sort method to arrange elements in descending
    order.
 */
a = d3.descending(23, 42);
console.log("d3.descending(23, 42)", a);
a = d3.descending(73, 42);
console.log("d3.descending(73, 42)", a);
a = d3.descending(42, 42);
console.log("d3.descending(42, 42)", a);
