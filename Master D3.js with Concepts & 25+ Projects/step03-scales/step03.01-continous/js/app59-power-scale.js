// d3.scalePow() by default, scalePow is equal to scaleLinear.
let powerScale = d3.scalePow();
let linearScale = d3.scaleLinear();

const display = (exp) => {
    if(exp != null) {
        powerScale.exponent(exp)
        console.log('Power scale with default exponent equal to ' + exp);
    }
    if(exp !== 1 || exp != null) {
        console.log('current exponant', powerScale.exponent());
    }
    console.log('powerScale(10)', powerScale(10))
    console.log('linearScale(10)', linearScale(10))
    console.log('powerScale(50)', powerScale(50))
    console.log('linearScale(50)', linearScale(50))
};

display(2)
display(3)
display(3.75)

console.log('Adding domain and range');
powerScale
    .domain([2, 4])
    .range([9, 10]);

linearScale
    .domain([2, 4])
    .range([9, 10]);

display(2)
display(3)
display(3.75)

// .invert()
console.log('invert()')
console.log('should return 50', powerScale.invert(14035.57817717074))

// clamp
console.log('powerScale().clamp()', powerScale.clamp(true));
console.log('powerScale(1)', powerScale(1))


// rangeRound()
console.log('rangeRound()')
console.log('powerScale.rangeRound([11, 12])', powerScale.rangeRound([3, 14]))
console.log('powerScale(3)', powerScale(3))

// .unknown
powerScale.unknown('No power set');
console.log(powerScale(undefined))
console.log(powerScale(null));
console.log(powerScale('string'));

// interpolate(interpolate_factory)
let color = d3.scalePow()
    .exponent(1.5)
    .domain([10, 20, 30])
    .range(['pink', 'green', 'yellow'])
    .interpolate(d3.interpolateHcl)

console.log(color(17))
console.log(color(22))
console.log(color(11))

let colorLinear = d3.scalePow()
    .domain([10, 20, 30])
    .range(['pink', 'green', 'yellow'])
    .interpolate(d3.interpolateHcl)

console.log(colorLinear(17))
console.log(colorLinear(22))
console.log(colorLinear(11))

// .ticks(countOptional)
powerScale.ticks()
// approx. 10 ticks between 2 to 4
console.log('ticks', powerScale.ticks())

powerScale
    .domain([2, 3.8])
    .range([9, 10]);
powerScale.ticks();
// 10 ticks between 2 to 3.8
console.log('ticks', powerScale.ticks());

// .tickFormat(count, specifier(optional))
powerScale
    .domain([2, 4])
    .range([9, 10]);

let xTicks = powerScale.ticks(5)
let xTickFormat = powerScale.tickFormat(5, "%");
xTicks.map(xTickFormat);
console.log('xTicks.map(xTickFormat)', xTicks.map(xTickFormat));

// .nice()
let powerScale1 = d3.scalePow()
    .domain([2.345, 4.163])
    .range([2, 5]);

console.log('powerScale1', powerScale1);
console.log('powerScale1.ticks()', powerScale1.ticks());
powerScale1.nice()
console.log('powerScale1.nice()', powerScale1.nice());
console.log('powerScale1.ticks()', powerScale1.ticks());

// .copy()
let powerScale2 = powerScale1.copy();
console.log('powerScale2', powerScale2);
console.log('powerScale2.ticks()', powerScale2.ticks());
powerScale1.nice()
console.log('powerScale2.nice()', powerScale2.nice());
console.log('powerScale2.ticks()', powerScale2.ticks());

let radius = [6, 8, 10];
let radPower = d3.scalePow()
    .exponent(2);
d3.select('svg')
    .attr('width', 300)
    .attr('height', 300)
    .selectAll('circle')
    .data(radius)
    .join('circle')
    .attr('cx', 150)
    .attr('cy', 150)
    .attr('r', d => radPower(d))
    .style('fill-opacity', '50%')

