let SVG = d3.select('svg')
    .attr('width', '500')
    .attr('height', '500');

// for reference
SVG.style('background-color', 'pink');

const SVG_WIDTH = document.querySelector('svg').clientWidth;
const SVG_HEIGHT = document.querySelector('svg').clientHeight;

let DATA = [23, 36, 67, 55, 49];

// using scale to create axis
let dataScale = d3.scaleLinear()
    .domain([0, Math.max(...DATA)])
    .range([0, SVG_HEIGHT])

console.log('dataScale(0)', dataScale(0));
console.log('dataScale(33)', dataScale(33));
console.log('dataScale(67)', dataScale(67));


// creating left y-axis (up to down)
let yAxisLeft = d3.axisLeft(dataScale);
console.log('d3.axisLeft()', yAxisLeft);

// render the left y axis
let yAxisLeftGelt = SVG.append('g')
    .attr('id', 'yAxisLeftGelt');

// we create the bar on left and we move it 25px to the right in order to see ticks ans values
yAxisLeft(yAxisLeftGelt);
yAxisLeftGelt.attr('transform', 'translate(25, 0)')

// fixing scale
dataScale = d3.scaleLinear()
    .domain([0, Math.max(...DATA)])
    .range([25, SVG_HEIGHT - 25]);

// we must redefine the axe
yAxisLeft = d3.axisLeft(dataScale);
yAxisLeft(yAxisLeftGelt);

// create right y axis
let yAxisRight = d3.axisRight(dataScale);
// we need a placeholder to render the axis
let yAxisRightGelt = SVG.append('g')
    .attr('id', 'yAxisRightGelt');

yAxisRight(yAxisRightGelt);
// we are going to move it to the right
yAxisRightGelt.attr('transform', `translate(${SVG_WIDTH - 25},0)`);


// create x-axis on the top
let xAxisTop =
    d3.axisTop(dataScale);

//  to render top x-axis
let xAxisTopGelt = SVG.append('g')
        .attr('id', 'xAxisTopG');

xAxisTop(xAxisTopGelt);
xAxisTopGelt.attr('transform', 'translate(0,25)');



// create x-axis on the bottom
let xAxisBottom =
    d3.axisBottom(dataScale);

//  to render top x-axis
let xAxisBottomGelt =
    SVG.append('g')
        .attr('id', 'xAxisBottomGelt');

xAxisBottom(xAxisBottomGelt);
xAxisBottomGelt.attr('transform', `translate(0,${SVG_HEIGHT - 25})`);

// ************
// axis.ticks(arguments...) same as
// axis.tickArguments([]) where need to pass the args inside an array
// arguments will be passed to scale.ticks() and scale.tickFormat()
// This method has no effect if the scale does not implement scale.ticks, as with band and point scales

yAxisLeft.ticks(6);
yAxisLeft(yAxisLeftGelt);

xAxisBottom.ticks(4, '%');
xAxisBottom(xAxisBottomGelt);

yAxisLeft.tickArguments([4]);
yAxisLeft(yAxisLeftGelt);
xAxisBottom.tickArguments([6, '%']);
xAxisBottom(xAxisBottomGelt);

// axis.ticks(interval,specifier(optional)) // only on time scale
// axis.ticks(d3.timeMinute.every(15)); // every 15 minutes

// axis.tickValues - to set the tick values explicitly
console.log('yAxisLeft.tickValues()', yAxisLeft.tickValues());
yAxisLeft.tickValues(DATA);
yAxisLeft(yAxisLeftGelt);
console.log('yAxisLeft.tickValues()', yAxisLeft.tickValues())

// axis.tickFormat - to set the tick format explicitly
console.log('xAxisBottom.tickFormat()', xAxisBottom.tickFormat());
xAxisBottom.tickFormat(d3.format(",.0"));
xAxisBottom(xAxisBottomGelt);
console.log('xAxisBottom.tickFormat()', xAxisBottom.tickFormat());

// axis.tickPadding - gap between the number and the tick
console.log(yAxisLeft.tickPadding());
yAxisLeft.tickPadding(0);
yAxisLeft(yAxisLeftGelt);
yAxisLeft.tickPadding(1.5);
yAxisLeft(yAxisLeftGelt);


// axis.tickSizeInner - length of the inner tick line
console.log('yAxisLeft.tickSizeInner()', yAxisLeft.tickSizeInner());
yAxisLeft.tickSizeInner(3);
yAxisLeft(yAxisLeftGelt);
yAxisLeft.tickSizeInner(0);
yAxisLeft(yAxisLeftGelt);
yAxisLeft.tickSizeInner(-6);
yAxisLeft(yAxisLeftGelt);

// axis.tickSizeOuter - length of the outer tick line
console.log('yAxisLeft.tickSizeOuter()', yAxisLeft.tickSizeOuter());
yAxisLeft.tickSizeOuter(3);
yAxisLeft(yAxisLeftGelt);
yAxisLeft.tickSizeOuter(0);
yAxisLeft(yAxisLeftGelt);
yAxisLeft.tickSizeOuter(-3);
yAxisLeft(yAxisLeftGelt);

// axis.tickSize - sets both the inner tick and outer tick
console.log(yAxisLeft.tickSize()); // returns current inner tick size
yAxisLeft.tickSize(6);
yAxisLeft(yAxisLeftGelt);









