// variant of bandScale
// used for scatter plot
// d3.scalePoint()
let pointScale = d3.scalePoint();
console.log('pointScale', pointScale);
console.log('pointScale.domain()', pointScale.domain());
console.log('pointScale.range()', pointScale.range());
console.log('pointScale(-1)', pointScale(-1));
console.log('pointScale(0)', pointScale(0));
console.log('pointScale(1)', pointScale(1));
console.log('pointScale(2)', pointScale(2));
console.log('pointScale(3)', pointScale(3));

console.log('Set the domain...')
pointScale.domain([0, 1]);
console.log('pointScale(-1)', pointScale(-1));
console.log('pointScale(0)', pointScale(0));
console.log('pointScale(1)', pointScale(1));
console.log('pointScale(2)', pointScale(2));
console.log('pointScale(3)', pointScale(3));

console.log("bandwidth ? ", pointScale.bandwidth());
console.log("step ? ", pointScale.step());


/*

<--------------------range----------------->
<-op->                                <-op->
      |                              |
      0                              2
      <--------------step------------>

op = outer padding
step = distance between starts of adjacent bands
bandwidth = 0

*/
console.log(pointScale.padding() + pointScale.step() + pointScale.padding());

pointScale.range([0, 2]);

console.log('pointScale(-1)', pointScale(-1));
console.log('pointScale(0)', pointScale(0));
console.log('pointScale(1)', pointScale(1));
console.log('pointScale(2)', pointScale(2));
console.log('pointScale(3)', pointScale(3));

console.log("bandwidth ? ", pointScale.bandwidth());
console.log("step ? ", pointScale.step());

console.log('updating padding');
pointScale.padding(0.1);
console.log("padding ? ", pointScale.padding());

console.log('pointScale(-1)', pointScale(-1));
console.log('pointScale(0)', pointScale(0));
console.log('pointScale(1)', pointScale(1));
console.log('pointScale(2)', pointScale(2));
console.log('pointScale(3)', pointScale(3));

console.log("bandwidth ? ", pointScale.bandwidth());
console.log("step ? ", pointScale.step());

console.log('pointScale.padding() + pointScale.step() + pointScale.padding()',
    pointScale.padding() + pointScale.step() + pointScale.padding());

console.log('pointScale.align()', pointScale.align());