// d3.scaleQuantize() we need discret range instead of continous
// d3.scaleQuantize()
let quantizeScale = d3.scaleQuantize();
console.log('quantizeScale', quantizeScale);
console.log('quantizeScale.domain()', quantizeScale.domain());
console.log('quantizeScale.range()', quantizeScale.range());
console.log('default range & scale');
console.log('quantizeScale(0)', quantizeScale(0));
console.log('quantizeScale(0.3)', quantizeScale(0.3));
console.log('quantizeScale(0.5)', quantizeScale(0.5))
console.log('quantizeScale(0.8)', quantizeScale(0.8))
console.log('quantizeScale(1)', quantizeScale(1))

// changing domain
console.log('changing domain');
quantizeScale.domain([0, 10])
console.log('quantizeScale(0)', quantizeScale(0));
console.log('quantizeScale(3)', quantizeScale(3));
console.log('quantizeScale(5)', quantizeScale(5))
console.log('quantizeScale(8)', quantizeScale(8))
console.log('quantizeScale(10)', quantizeScale(10))


// changing range
console.log('changing range & domain');
quantizeScale.domain([0, 5])
quantizeScale.range([0, 10, 20, 30])
console.log('quantizeScale(0)', quantizeScale(0));
console.log('quantizeScale(1.5)', quantizeScale(1.5));
console.log('quantizeScale(2)', quantizeScale(2))
console.log('quantizeScale(2.5)', quantizeScale(2.5))
console.log('quantizeScale(3)', quantizeScale(3))
console.log('quantizeScale(4.5)', quantizeScale(4.5))

console.log('invertExtent');

console.log('quantizeScale', quantizeScale);
console.log('quantizeScale.domain()', quantizeScale.domain());
console.log('quantizeScale.range()', quantizeScale.range());

console.log('quantizeScale.invertExtent(0)', quantizeScale.invertExtent(0));
console.log('quantizeScale.invertExtent(10)', quantizeScale.invertExtent(10));
console.log('quantizeScale.invertExtent(20)', quantizeScale.invertExtent(20))


console.log('threshholds');
console.log(quantizeScale.thresholds())