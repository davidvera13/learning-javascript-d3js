// d3.scaleDiverging()
let scaleDiv = d3.scaleDiverging();
console.log(scaleDiv);

console.log('scaleDiv.range()', scaleDiv.range());
console.log('scaleDiv.rangeRound()', scaleDiv.rangeRound());

console.log('scaleDiv.domain()', scaleDiv.domain());
console.log('scaleDiv.interpolator()', scaleDiv.interpolator());



console.log(scaleDiv);

// d3.scaleDivergingLog()
// d3.scaleDivergingPow()


scaleDiv.domain([10, 20, 30])
    .interpolator();
console.log('using interpolator');
console.log('scaleDiv(10)', scaleDiv(10))
console.log('scaleDiv(20)', scaleDiv(20))
console.log('scaleDiv(30)', scaleDiv(30))


scaleDiv.domain([10, 20, 30])
    .interpolator(d3.interpolateSpectral);
console.log('using interpolator interpolateSpectral');
console.log('scaleDiv(10)', scaleDiv(10))
console.log('scaleDiv(20)', scaleDiv(20))
console.log('scaleDiv(30)', scaleDiv(30))