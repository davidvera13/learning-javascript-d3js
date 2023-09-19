// d3.scaleSequential()
let seqScale = d3.scaleSequential();
console.log('seqScale', seqScale);
console.log('seqScale.domain()', seqScale.domain());
console.log('seqScale.range()', seqScale.range());
console.log('seqScale(1)', seqScale(1));
console.log('seqScale(4)', seqScale(4));

console.log('seqScale.interpolator()', seqScale.interpolator());

// better using an interpolator
seqScale.domain([1,10]);
seqScale.range([11,20]);
console.log('seqScale.domain()', seqScale.domain());
console.log('seqScale.range()', seqScale.range());
// function changed
console.log('seqScale.interpolator()', seqScale.interpolator())
console.log('seqScale.domain()', seqScale.domain());
console.log('seqScale.range()', seqScale.range());
seqScale.interpolator(d3.interpolateRainbow)
console.log('seqScale(1)', seqScale(1));
console.log('seqScale(15)', seqScale(15));
console.log('seqScale(2)', seqScale(2));

seqScale.clamp(true)
console.log('Adding clamp')
console.log('seqScale(1)', seqScale(1));
console.log('seqScale(15)', seqScale(15));
console.log('seqScale(2)', seqScale(2));

// d3.scaleSequentialLog()
// d3.scaleSequentialPow()
// d3.scaleSequentialQuantile()