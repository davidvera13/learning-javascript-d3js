// d3.scaleLog()
let logScale = d3.scaleLog();

console.log('default logScale.domain()', logScale.domain());
console.log('default logScale.range()', logScale.range());
console.log('default logScale(0)', logScale(0));                    // returns NaN
console.log('default logScale(1)', logScale(1));                    // returns 0

// change scale
logScale.base(20);
console.log('update with base 20 => logScale(1)', logScale(1));     // returns 0
console.log('update with base 20 => logScale(5)', logScale(5));     // returns 0.6989700043360187
console.log('update with base 20 => logScale(10)', logScale(10));   // returns 1
console.log('update with base 20 => logScale(20)', logScale(20));   // returns 1.301029995663981

logScale.domain([1, 5]);
console.log('update with domain [1, 5] => logScale(1)', logScale(1));     // returns 0
console.log('update with domain [1, 5] => logScale(5)', logScale(5));     // returns 1
console.log('update with domain [1, 5] => logScale(10)', logScale(10));   // returns 1.4306765580733933
console.log('update with domain [1, 5] => logScale(20)', logScale(20));   // returns 1.8613531161467862
