/**
 * Constants declaration
 */
const SVG_WIDTH = d3.select('svg').node().clientWidth;
const SVG_HEIGHT = d3.select('svg').node().clientHeight;
const DATA_LENGTH = top10PopDensity.length;
const POP_DEN_MIN = 0;

let densityList = [];
top10PopDensity.forEach(country =>
    densityList.push(country.density));

const POP_DEN_MAX = Math.max(...densityList);

// we want to fix the linear scale to fit the SVG width.
// 100 % of width will match to maximum density value
const POP_DEN_LIN_SCALE =
    d3.scaleLinear()
        .domain([POP_DEN_MIN, POP_DEN_MAX])
        .range([0, SVG_WIDTH]);

// we want to have linear colors palette between 'antiquewhite' to 'tomato'
const POP_DEN_COLOR_LIN_SCALE =
    d3.scaleLinear()
        .domain([POP_DEN_MIN, POP_DEN_MAX])
        .range(['antiquewhite', 'tomato']);

// we want to fix the linear scale to fit the SVG height.
// bars will be correcly displayed with same height and same space between elements
const Y_SCALE =
    d3.scaleLinear()
        .domain([0, DATA_LENGTH - 1])
        .range([0, SVG_HEIGHT - 50]);

/**
 * display values
 */
console.log('SVG_WIDTH', SVG_WIDTH);
console.log('SVG_HEIGHT', SVG_HEIGHT);
console.log('DATA_LENGTH', DATA_LENGTH);
console.log('densityList', densityList);
console.log('POP_DEN_MIN', POP_DEN_MIN);
console.log('POP_DEN_MAX', POP_DEN_MAX);


/**
 * Creating chart
 */

// this select creates rectangles with colors radiant
d3.select('svg')
    .selectAll('rect')
    .data(top10PopDensity)
    .join('rect')
    .attr('width', d => POP_DEN_LIN_SCALE(d.density))
    .attr('height', SVG_HEIGHT / DATA_LENGTH - 5)               // 5px gap between rectangles
    .attr('x', 0)
    .attr('y', (d, i) => 5 + Y_SCALE(i))
    .attr('rx', 5)
    .attr('ry', 5)
    .attr('fill', d => POP_DEN_COLOR_LIN_SCALE(d.density));


// this select creates text for description
d3.select('svg')
    .selectAll('text')
    .data(top10PopDensity)
    .join('text')
    .text((d) => `${d.country} -  ${d.density}`)
    .attr('x', 10)
    .attr('y', (d, i) => 32 + Y_SCALE(i))
    .style('fill', 'black')
    .style('text-anchor', 'start')
    .style('font-size', 12)
    .style('letter-spacing', 0.5)
    .style('font-weight', 600);


// handling input: revert calculation
document.querySelector('#scalesubmit')
    .addEventListener('click', (evt) => {
        const INPUT = document.querySelector('#scaleinput').value;
        if(INPUT >= 0 && INPUT <= 100)
            document.querySelector('#scaleoutput').innerText =
                POP_DEN_LIN_SCALE.invert(INPUT / 100 * SVG_WIDTH).toFixed(2);
    });