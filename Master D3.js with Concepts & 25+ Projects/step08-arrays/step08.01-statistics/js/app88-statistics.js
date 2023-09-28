// Statistics

let data1 = [75, 50, 100, 25, 150];
let data2 = [
    { name: 'Jill', score: 40 },
    { name: 'Jane', score: 20 },
    { name: 'Jack', score: 50 },
];

// mean
console.log(data1)
let x;
let y;

// d3.min(iterable,accesorFn(optional))
/*
    Returns the minimum value in the given iterable using natural order. If the iterable contains no comparable values,
    returns undefined. An optional accessor function may be specified.
    This method ignores undefined, null and NaN values; this is useful for ignoring missing data.
*/

x = d3.min(data1);
console.log("data1 min value: " + x);

y = d3.min(
    data2,
        d => d.score);
console.log("data2 min score value: " + y);


// d3.max(iterable,accesorFn(optional))
/*
    Returns the minimum value in the given iterable using natural order. If the iterable contains no comparable values,
    returns undefined. An optional accessor function may be specified.
    This method ignores undefined, null and NaN values; this is useful for ignoring missing data.
*/

x = d3.max(data1);
console.log("data1 max value: " + x);

y = d3.max(
    data2,
    d => d.score);
console.log("data2 max score value: " + y);


// d3.minIndex(iterable,accesorFn(optional))
/*
    Returns the index of the minimum value in the given iterable using natural order. If the iterable contains no
    comparable values, returns -1. An optional accessor function may be specified.
    This method ignores undefined, null and NaN values; this is useful for ignoring missing data
*/
x = d3.minIndex(data1);
console.log("data1 min value index: " + x);
y = d3.minIndex(data2, d => d.score);
console.log("data2 min score value index: " + y);


// d3.minIndex(iterable,accesorFn(optional))
/*
    Returns the index of the maximum value in the given iterable using natural order. If the iterable contains no
    comparable values, returns -1. An optional accessor function may be specified.
    This method ignores undefined, null and NaN values; this is useful for ignoring missing data
*/
x = d3.maxIndex(data1);
console.log("data1 max value index: " + x);
y = d3.maxIndex(data2, d => d.score);
console.log("data2 max score value index: " + y);

// d3.extent(iterable,accesorFn(optional))
/*
    Returns the minimum and maximum values as an array from the given iterable using natural order. If the iterable
    contains no comparable values, returns [undefined, undefined]. An optional accessor function may be specified.
*/
x = d3.extent(data1);
console.log("data1 min & max values: ", x);
y = d3.extent(data2, d => d.score);
console.log(y);
console.log("data2 min & max values: ", y);


// d3.sum(iterable,accesorFn(optional))
/*
    Returns the sum of the given iterable of numbers. If the iterable contains no numbers, returns 0. An optional
    accessor function may be specified.
    This method ignores undefined and NaN values; this is useful for ignoring missing data.
*/
x = d3.sum(data1);
console.log("data1 values sum: " + x);
y = d3.sum(data2, d => d.score);
console.log("data2 values sum: " + y);

// d3.mean(iterable,accesorFn(optional))
/*
    Returns the mean of the given iterable of numbers. If the iterable contains no numbers, returns undefined. An
    optional accessor function may be specified.
    This method ignores undefined and NaN values; this is useful for ignoring missing data.
*/
x = d3.mean(data1);
console.log("data1 mean of values: " + x);
y = d3.mean(data2, d => d.score);
console.log("data2 mean of values: " + y);

// d3.median(iterable,accesorFn(optional))
/*
    Returns the median of the given iterable of numbers. If the iterable contains no numbers, returns undefined.
    An optional accessor function may be specified.
    This method ignores undefined and NaN values; this is useful for ignoring missing data.
*/
x = d3.median(data1);
console.log("data1 median value : " + x);
y = d3.median(data2, d => d.score);
console.log("data2 median value : " + y);

// d3.cumsum(iterable,accesorFn(optional))
/*
    Returns the cumulative sum of the given iterable of numbers, a an array. If the iterable contains no numbers,
    returns 0. An optional accessor function may be specified.
    This method ignores undefined and NaN values; this is useful for ignoring missing data.
*/
x = d3.cumsum(data1);
console.log("data1 cum sum : " + x);
y = d3.cumsum(data2, d => d.score);
console.log("data2 cum sum : " + y);

// d3.quantile(iterable,p,accesorFn(optional))
/*
    Returns the p-quantile of the given iterable of numbers, where p is a number in the range
    [0, 1]. If the iterable contains no numbers, returns undefined. An optional accessor
    function may be specified.
    note: p quantile is a statistic value that divide a data set in intervals with same probability
*/
x = d3.quantile(data1, 0.2);
console.log("data1 quantile with p=0.2:  " + x);
x = d3.quantile(data1, 0.45);
console.log("data1 quantile with p=0.45:  " + x);
x = d3.quantile(data1, 0.95);
console.log("data1 quantile with p=0.95:  " + x);

y = d3.quantile(data2, 0.3, d => d.score);
console.log("data2 quantile with p=0.3:  " + y);
y = d3.quantile(data2, 0.68, d => d.score);
console.log("data2 quantile with p=0.68:  " + y);
y = d3.quantile(data2, 0.85, d => d.score);
console.log("data2 quantile with p=0.85:  " + y);

// d3.variance(iterable,accesorFn(optional))
/*
    Returns the population variance of the given iterable of numbers. If the iterable contains < than 2 numbers,
    returns undefined. An optional accessor function may be specified.
    This method ignores undefined and NaN values; this is useful for ignoring missing data.
*/
x = d3.variance(data1);
console.log("data1 variance : ", x);
y = d3.variance(data2, d => d.score);
console.log("data2 variance : ", y);

// d3.deviation(iterable,accesorFn(optional))
/*
    Returns the standard deviation of the given iterable of numbers. If the iterable contains < than 2 numbers, returns
    undefined. An optional accessor function may be specified.
    This method ignores undefined and NaN values; this is useful for ignoring missing data.
*/
x = d3.deviation(data1);
console.log("data1 deviation : ", x);
y = d3.deviation(data2, d => d.score);
console.log("data2 deviation : ", y);

// d3.fsum([values],accesorFn(optional))
/*
    Returns a full precision summation of the given values.
*/
x = d3.fsum(data1);
console.log("full precision summation data1", x);
y = d3.fsum(data2, d => d.score);
console.log("full precision summation data2" , y);