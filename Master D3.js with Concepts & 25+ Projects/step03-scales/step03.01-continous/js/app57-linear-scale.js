// d3.scaleLinear()

// how to set scaling behavior: we pass domain and range ...
// Here are the default settings
let xScale = d3.scaleLinear([0, 1], [0, 1]);
// xScale is a function : for every number as input we retrieve a number as output
// console.log(xScale);
// we have input between 0 tà 100 and output in range of 0 to 25
xScale = d3.scaleLinear([0, 100], [0, 25]);
// output is calculated : 25 * 25 / 100
console.log('25', xScale(25));
console.log('-12.5', xScale(-12.5));

// we can use helper methods: .domain
xScale = d3.scaleLinear()
    .domain([100, 200]);

console.log('Changing domain with default scale');
console.log('100', xScale(100));
console.log('25', xScale(25));
console.log('-12.5', xScale(-12.5));

// we can use helper methods: .range
xScale = d3.scaleLinear()
    .domain([20, 80])
    .range([30, 50]);

console.log('Changing domain and range with helpers')
console.log('51', xScale(51));

const svgWidth = d3.select('svg')
    .attr('width');

d3
    .select('svg')
    .selectAll('rect')
    .data([75])
    .join('rect')
    .attr('width', (d) => xScale(d))
    .attr('height', 20)
    .attr('x', 0)
    .attr('y', 0);

xScale = d3.scaleLinear()
    .domain([20, 80, 140])
    .range([0, 150, svgWidth]);


d3
    .select('svg')
    .selectAll('rect')
    .data([105])
    .join('rect')
    .attr('width', (d) => xScale(d))
    .attr('height', 20)
    .attr('x', 0)
    .attr('y', 0);


let color = d3.scaleLinear()
    .domain([20, 80, 140])
    .range(['red', 'green', 'blue']);


d3
    .select('svg')
    .selectAll('rect')
    .data([94])
    .join('rect')
    .attr('width', (d) => xScale(d))
    .attr('height', 30)
    .attr('x', 0)
    .attr('y', 0)
    .style('fill', d => color(d));


// we can use helper methods .invert()
xScale = xScale.invert(140);
console.log(xScale);

// .rangeRound()
let x1Scale = d3.scaleLinear()
    .domain([10, 100])
    .rangeRound([40, 50]);

console.log('rangeRound 10', x1Scale(10));
console.log('rangeRound 10.75', x1Scale(10.75));
console.log('rangeRound 42.25', x1Scale(42.25));
console.log('rangeRound 43.75', x1Scale(42.75));


// .clamp()
xScale = d3.scaleLinear()
    .domain([20, 40, 60])
    .range([0, 150, svgWidth]);

// interpolation
console.log('out of domain 10', xScale(10));
console.log('out of domain 70', xScale(70));


xScale = d3.scaleLinear()
    .domain([20, 40, 60])
    .range([0, 150, svgWidth])
    .clamp(true);

console.log('out of domain 10 clamp', xScale(10));
console.log('out of domain 70 clamp', xScale(70));

// .unknown()
console.log('undefined', xScale(undefined));
console.log('null', xScale(null));
console.log('abc123', xScale('abc123'));
console.log('NaN', xScale(NaN));

xScale.unknown("Oops, try again");
console.log('unknown undefined', xScale(undefined));
console.log('unknown null', xScale(null));
console.log('unknown abc123', xScale('abc123'));
console.log('unknown NaN', xScale(NaN));

// .interpolate() -> interpolate factory
color = d3.scaleLinear()
    .domain([20, 80, 140])
    .range(['red', 'green', 'blue'])
    .interpolate(d3.interpolateHcl);


d3.select('svg')
    .selectAll('rect')
    .data([40])
    .join('rect')
    .attr('width', d => xScale(d))
    .attr('height', 20)
    .attr('x', 0)
    .attr('y', 10)
    .style('fill', d => color(d));

// .ticks() : small markings on axis
console.log('10 ticks in domain [20, 40, 60]', xScale.ticks());

xScale = d3.scaleLinear()
    .domain([20, 120])
    .range([0, svgWidth])
    .clamp(true);


console.log('10 ticks in domain [20, 120]', xScale.ticks());
console.log('20 ticks in domain [20, 120]', xScale.ticks(20));

// .tickFormat(count, specifier(optional))
let xTicks = xScale.ticks(6);
let xTickFormat = xScale.tickFormat(6, '+');
xTicks.map(xTickFormat);

console.log('xTicks', xTicks)
console.log('xTickFormat', xTickFormat)
console.log(xTicks.map(xTickFormat));

// d3.tickFormat(start, stop, count, specifier)
let d3tick = d3.tickFormat(-1, 1, 5, '-');
console.log(d3tick(-0.5));
console.log(d3tick(0.75));

d3tick = d3.tickFormat(-10, 10, 5, '-');
console.log(d3tick(-6.5));
console.log(d3tick(7.5));

// mix
xTickFormat = xScale.tickFormat(6, '+');
d3tick = d3.tickFormat(-10, 10, 6, '-');
xTicks.map(d3tick);
console.log(xTicks.map(d3tick));

// .nice(optionalCount)
let x2Scale = d3.scaleLinear()
    .domain([1, 256, 7.345])
    .range([20, 40]);

console.log('before nice', x2Scale.ticks());
x2Scale.nice();
console.log('after nice()', x2Scale.ticks());
x2Scale.nice(8);
console.log('after nice(8)', x2Scale.ticks());

let x3Scale = x2Scale.copy();
console.log('x2Scale', x2Scale(40))
console.log('x3scale', x3Scale(40))
console.log('x3scale === x2scale', x3Scale === x2Scale)
