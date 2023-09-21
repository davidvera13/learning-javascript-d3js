let thresholdScale = d3.scaleThreshold();
console.log('thresholdScale', thresholdScale);
console.log('thresholdScale.domain()', thresholdScale.domain());
console.log('thresholdScale.range()', thresholdScale.range());

console.log('thresholdScale(0)', thresholdScale(0));
console.log('thresholdScale(0.25)', thresholdScale(0.25));
console.log('thresholdScale(0.49)', thresholdScale(0.49));
console.log('thresholdScale(0.5)', thresholdScale(0.50));
console.log('thresholdScale(0.51)', thresholdScale(0.51));
console.log('thresholdScale(0.75)', thresholdScale(0.75));
console.log('thresholdScale(1)', thresholdScale(1));

// changing domain
console.log("*******************");
console.log('changing domain');
thresholdScale.domain([0, 1]);
console.log('thresholdScale.domain()', thresholdScale.domain());
console.log('thresholdScale.range()', thresholdScale.range());

console.log('thresholdScale(-5)', thresholdScale(-5));
console.log('thresholdScale(0)', thresholdScale(0));
console.log('thresholdScale(0.25)', thresholdScale(0.25));
console.log('thresholdScale(0.49)', thresholdScale(0.49));
console.log('thresholdScale(0.5)', thresholdScale(0.50));
console.log('thresholdScale(0.51)', thresholdScale(0.51));
console.log('thresholdScale(0.75)', thresholdScale(0.75));
console.log('thresholdScale(1)', thresholdScale(1));


console.log("*******************");
console.log('changing range (removing min value');
thresholdScale.range([0.5]);
console.log('thresholdScale.domain()', thresholdScale.domain());
console.log('thresholdScale.range()', thresholdScale.range());
console.log('thresholdScale(-5)', thresholdScale(-5));
console.log('thresholdScale(0)', thresholdScale(0));
console.log('thresholdScale(0.25)', thresholdScale(0.25));
console.log('thresholdScale(0.49)', thresholdScale(0.49));
console.log('thresholdScale(0.5)', thresholdScale(0.50));
console.log('thresholdScale(0.51)', thresholdScale(0.51));
console.log('thresholdScale(0.75)', thresholdScale(0.75));
console.log('thresholdScale(1)', thresholdScale(1));


console.log("*******************");
console.log('changing range and domain');
thresholdScale.range([0, 1, 2]);
thresholdScale.domain([0.5]);
console.log('thresholdScale.domain()', thresholdScale.domain());
console.log('thresholdScale.range()', thresholdScale.range());
console.log('thresholdScale(-5)', thresholdScale(-5));
console.log('thresholdScale(0)', thresholdScale(0));
console.log('thresholdScale(0.25)', thresholdScale(0.25));
console.log('thresholdScale(0.49)', thresholdScale(0.49));
console.log('thresholdScale(0.5)', thresholdScale(0.50));
console.log('thresholdScale(0.51)', thresholdScale(0.51));
console.log('thresholdScale(0.75)', thresholdScale(0.75));
console.log('thresholdScale(1)', thresholdScale(1));


console.log("*******************");
console.log('changing range and domain');
thresholdScale.range([1, 5, 10]);
thresholdScale.domain([3, 7]);
console.log('thresholdScale(0)', thresholdScale(0));
console.log('thresholdScale(0)', thresholdScale(3));
console.log('thresholdScale(0)', thresholdScale(5));
console.log('thresholdScale(0)', thresholdScale(8));

console.log(thresholdScale.invertExtent(5));
let thresholdScaleCopy = thresholdScale.copy();
console.log('thresholdScale === thresholdScaleCopy()', thresholdScale === thresholdScaleCopy )