// d3.scaleRadial()
let radialScale = d3.scaleRadial();
console.log("returns square root of the radialScale value passed")
console.log('radialScale', radialScale);
console.log('radialScale(2)', radialScale(2));
console.log('radialScale(2)', radialScale(3));
console.log('radialScale(2)', radialScale(4));
console.log('radialScale(2)', radialScale(9));

console.log('radialScale.domain()', radialScale.domain());
console.log('radialScale.range()', radialScale.range());
