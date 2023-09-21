// d3.scaleQuantile() we need discret range instead of continous
// d3.scaleQuantile()
let quantileScale = d3.scaleQuantile();
console.log('quantileScale', quantileScale);
// empty by default
console.log('quantileScale.domain()', quantileScale.domain());
console.log('quantileScale.range()', quantileScale.range());

// discrete set of values
quantileScale.domain([0, 100]);
console.log('quantileScale.domain()', quantileScale.domain());
quantileScale.range([1,2,3]);
console.log('quantileScale.range()', quantileScale.range());

// get the thresholds
console.log('quantileScale.quantiles()', quantileScale.quantiles());

// check quantile scale
// below
console.log('below min domain value');
console.log('quantileScale(-20)', quantileScale(-20));
// first threshold
console.log('between 0 and 33');
console.log('quantileScale(10)', quantileScale(10));
console.log('quantileScale(25)', quantileScale(25));
console.log('quantileScale(33)', quantileScale(33));
// second threshold
console.log('between 34 and 66');
console.log('quantileScale(34)', quantileScale(34));
console.log('quantileScale(50)', quantileScale(50));
console.log('quantileScale(66)', quantileScale(66));
// last threshold
console.log('between 67 and 100');
console.log('quantileScale(67)', quantileScale(67));
console.log('quantileScale(75)', quantileScale(75));
console.log('quantileScale(90)', quantileScale(90));
// over range
console.log('greater than max domain value');
console.log('quantileScale(120)', quantileScale(120));


// we can pass string as range
quantileScale.domain([0, 25, 50, 75, 100]);
console.log('quantileScale.domain()', quantileScale.domain());
quantileScale.range(['fail', 'just passed', 'can do better', 'you rule']);
console.log('quantileScale.range()', quantileScale.range());

console.log('below min domain value');
console.log('quantileScale(-20)', quantileScale(-20));
// first threshold
console.log('between 0 and 24');
console.log('quantileScale(10)', quantileScale(10));
console.log('quantileScale(24)', quantileScale(24));


// second threshold
console.log('between 26 and 49');
console.log('quantileScale(25)', quantileScale(25));
console.log('quantileScale(49)', quantileScale(49));

// thirs threshold
console.log('between 50 and 74');
console.log('quantileScale(51)', quantileScale(50));
console.log('quantileScale(74)', quantileScale(74));

// last threshold
console.log('between 75 and 100');
console.log('quantileScale(75)', quantileScale(75));
console.log('quantileScale(90)', quantileScale(90));

// over range
console.log('greater than max domain value');
console.log('quantileScale(120)', quantileScale(120));


// invert
console.log('just passed', quantileScale.invertExtent('just passed'));


let quantileScaleCopy = quantileScale.copy();
console.log('copy and original are the same object ? ', quantileScaleCopy === quantileScale);