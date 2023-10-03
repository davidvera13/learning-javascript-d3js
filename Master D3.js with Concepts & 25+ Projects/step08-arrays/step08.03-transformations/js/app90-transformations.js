// Methods for transforming arrays and for generating new arrays.
let data1 = [45, 35, 25];
let data2 = [
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

// Disclaimer: Some of these methods are redundant,
// and its hard to think of efficient or frequent use
// cases for these methods


// d3.group(iterable,...keys)
// create a new map using the elements of the array
let groupOutput;

groupOutput = d3.group(data1, d => d);
console.log("data1", data1);
console.log("d3.group(data1, d => d)", groupOutput);
// this method is more useful on array of objects
groupOutput = d3.group(data2, d => d);
console.log("data2", data2);
console.log("d3.group(data2, d => d)", groupOutput);
//  We are able to get the map from the iterable where the key is an element and the value as an
//  array.
console.log(groupOutput.get('Jack')); // without index but using the key
console.log(groupOutput.get('Jane')); // without index but using the key
// if more than one key is specified then it returns a nested Map
groupOutput = d3.group(data2, d => d.name, d => d.name);
console.log("d3.group(data2, d => d.name, d => d.name)", groupOutput);
console.log(groupOutput.get('Jack')); // without index but using the key
console.log(groupOutput.get('Jane')); // without index but using the key
console.log("***********************************************");

// d3.groups(iterables,...keys)
// Equivalent to group, but returns nested arrays instead of nested maps.
let groupsOutput = d3.groups(data2, d => d.name);
console.log("d3.groups(data2, d => d.name)", groupsOutput);
console.log("***********************************************");

// d3.index(iterable,...keys)
// Equivalent to group but returns a map with unique value as key instead of an array,
// throwing an error if the key is not unique
let indexOutput = d3.index(data2, d => d.score);
//let indexOutput = d3.index(data2, d => d.name);
console.log("d3.index(data2, d => d.score)", indexOutput);
console.log(indexOutput.get(40));
console.log(indexOutput.get(20));
// indexOutput = d3.index(data2, d => d.name);
// console.log(indexOutput); // error
console.log("***********************************************");

// d3.indexes(iterable,...keys)
// Equivalent to index, but returns nested arrays instead of nested maps.
let indexesOutput = d3.indexes(data2, d => d.score);
console.log("d3.indexes(data2, d => d.score)", indexesOutput);
console.log("***********************************************");

// d3.rollup(iterable,reduce,...keys)
// Groups the iterable and reduces the specified iterable into a Map with keys of the Map
// set to what we specify as keys in the method. The values will be what the reduce part is
// specified to be
let rollupOutput = d3.rollup(data2, v => v.length, d => d.name);
console.log("d3.rollup(data2, v => v.length, d => d.name)", rollupOutput);
rollupOutput = d3.rollup(data2, v => v.length, d => d.score);
console.log(rollupOutput);
console.log("***********************************************");

// d3.rollups(iterable,reduce,...keys)
// Equivalent to rollup, but returns nested arrays instead of nested maps.
let rollupsOutput = d3.rollups(data2, v => v.length, d => d.name);
console.log("d3.rollups(data2, v => v.length, d => d.name)", rollupsOutput);
rollupsOutput = d3.rollups(data2, v => v.length, d => d.score);
console.log(rollupsOutput);
console.log("***********************************************");

// d3.count(iterable,accessor(optional))
// Returns the number of valid number values(i.e., not null, NaN, or undefined)
// in the specified iterable; accepts an accessor.
let countOutput = d3.count(data2, d => d.score);
console.log("d3.count(data2, d => d.score)", countOutput);
countOutput = d3.count(data2, d => d.name);
console.log("d3.count(data2, d => d.name)", countOutput);
console.log("***********************************************");

// d3.cross(...iterables, reducer(optional))
// Returns the Catesian product of the specified iterables. For example, if two iterables a and b
// are specified, for each element i in the iterable a and each element j in the iterable b, in
// order, invokes the specified reducer function passing the element i and element j. If a reducer
// is not specified, it defaults to a function which creates a two-element array for each pair.
let crossOutput = d3.cross([1, 2], [3, 4]);
console.log("d3.cross([1, 2], [3, 4])", crossOutput);
crossOutput = d3.cross([1, 2], [3, 4], (a, b) => a + b);
console.log("d3.cross([1, 2], [3, 4], (a, b) => a + b)", crossOutput);
console.log("***********************************************");

// d3.merge(iterables)
// Merges the specified iterable of iterables into a single array. This method is similar to the
// built-in array concat method; the only difference is that it is more convenient when you have
// an array of arrays.
let mergeOutput = d3.merge([[2, 3], [4]]);
console.log("d3.merge([[2, 3], [4]])", mergeOutput);
console.log("***********************************************");

// d3.pairs(iterable,reducer(optional))
// For each adjacent pair of elements in the specified iterable, in order, invokes the specified
// reducer function passing the element i and element i - 1. If a reducer is not specified, it
// defaults to a function which creates a two-element array for each pair. If the specified
// iterable has fewer than two elements, returns the empty array.
let pairsOutput = d3.pairs([1, 2, 3, 4]);
console.log("d3.pairs([1, 2, 3, 4])", pairsOutput);
pairsOutput = d3.pairs([1, 2, 3, 4], (a, b) => a + b);
console.log("d3.pairs([1, 2, 3, 4], (a, b) => a + b)", pairsOutput);
console.log("***********************************************");

// d3.permute(source,keys)
// Returns a permutation of the specified source object (or array) using the specified
// iterable of keys. The returned array contains the corresponding property of the source
// object for each key in keys, in order.
// note: b has index 1, c has index 2 and a has index 0
let permuteOutput = d3.permute(['a', 'b', 'c'], [1, 2, 0]);
console.log("d3.permute(['a', 'b', 'c'], [1, 2, 0])", permuteOutput);
permuteOutput = d3.permute(['a', 'b', 'c'], [2, 0, 1]);
console.log("d3.permute(['a', 'b', 'c'], [2, 0, 1])", permuteOutput);
permuteOutput = d3.permute(data2, [1, 2, 0]);
console.log("d3.permute(data2, [1, 2, 0]", permuteOutput);
console.log("***********************************************");

// d3.shuffle(array,start(optional),stop(optional))
// Randomizes the order of the specified array in-place and returns the array. If start is
// specified, it is the starting index (inclusive) of the array to shuffle; if start is not
// specified, it defaults to zero. If stop is specified, it is the ending index (exclusive) of the
// array to shuffle; if stop is not specified, it defaults to array.length.
let shuffleOutput = d3.shuffle([2, 5, 8, 3]);
console.log("d3.shuffle([2, 5, 8, 3])", shuffleOutput); // refersh the page to see new combos
shuffleOutput = d3.shuffle([2, 5, 8, 3], 1, 3);
// not the first value is not shuffled ... the last value is not shuffled too
console.log("d3.shuffle([2, 5, 8, 3], 1, 3)", shuffleOutput);


// d3.ticks(start,stop,count)
// Returns an array of approximately count + 1, uniformly - spaced, nicely - rounded values
// between start and stop(inclusive).Each value is a power of ten multiplied by 1, 2 or 5
let ticksOutput = d3.ticks(1, 10, 4);
console.log("d3.ticks(1, 10, 4)", ticksOutput);
ticksOutput = d3.ticks(1, -9, 4);
console.log("d3.ticks(1, -9, 4)", ticksOutput);
console.log("***********************************************");

// d3.tickStep(start,stop,count)
// Returns the difference between adjacent tick values if the same arguments were passed to
// d3.ticks
let tickStepOutput = d3.tickStep(1, 10, 4);
console.log("d3.tickStep(1, 10, 4)", tickStepOutput);
console.log("***********************************************");

// d3.tickIncrement(start,stop,count)
// Like d3.tickStep, except requires that start is always less than or equal to stop, and if the tick step for the given start, stop and count would be less than one, returns the negative inverse tick step instead.
let tickIncrementOutput = d3.tickStep(-9.81, 1.023, 4);
console.log("d3.tickStep(-9.81, 1.023, 4)", tickIncrementOutput);
tickIncrementOutput = d3.tickStep(1.023, -9.81, 4);
console.log("d3.tickStep(1.023, -9.81, 4)", tickIncrementOutput);
tickIncrementOutput = d3.tickStep(1, 9, 4);
console.log("d3.tickStep(1, 9, 4)", tickIncrementOutput);
console.log("***********************************************");


// d3.nice(start,stop,count)
// Returns a new interval [niceStart, niceStop] covering the given interval [start, stop]
// and where niceStart and niceStop are guaranteed to align with the corresponding tick step.
// Start has to be less than or equal to stop
let niceOutput = d3.nice(1.023, -9.81, 4);
console.log("d3.nice(1.023, -9.81, 4)", niceOutput);
niceOutput = d3.nice(1.023, 9.81, 4);
console.log("d3.nice(1.023, 9.81, 4)", niceOutput);
console.log("***********************************************");


// d3.range(start(optional),stop,step(optional))
// Returns an array containing an arithmetic progression
// If step is omitted, it defaults to 1. If start is omitted, it defaults to 0.
let rangeOutput = d3.range(1, 8, 2);
console.log("d3.range(1, 8, 2)", rangeOutput);
console.log("***********************************************");

// d3.zip(...arrays)
// Returns an array of arrays. The returned array is truncated in length to the shortest
// array in arrays. If arrays contains only a single array, the returned array contains
// one-element arrays. With no arguments, the returned array is empty.
let zipOutput = d3.zip([1, 2, 3], [4, 5]);
console.log("d3.zip([1, 2, 3], [4, 5])", zipOutput);
console.log("***********************************************");

// d3.transpose(matrix)
// Uses the zip operator as a two-dimensional matrix transpose.
// Array have to be of equal length
let transposeOutput = d3.transpose([[1, 2, 5]]);
console.log(" d3.transpose([[1, 2, 5]])" ,transposeOutput);
transposeOutput = d3.transpose([[1, 2, 5], [3, 4, 6]]);
console.log("d3.transpose([[1, 2, 5], [3, 4, 6]])", transposeOutput);
console.log("***********************************************");


