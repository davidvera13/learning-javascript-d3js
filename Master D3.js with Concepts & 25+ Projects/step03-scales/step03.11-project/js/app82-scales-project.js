// data
const ugEnroll = {
    1970: {
        female: 3118,
        male: 4249
    },
    1975: {
        female: 4422,
        male: 5257
    },
    1980: {
        female: 5474,
        male: 5000
    },
    1985: {
        female: 5634,
        male: 4962
    },
    1990: {
        female: 6579,
        male: 5379
    }
};

const SVG_WIDTH = d3.select('#chart svg').node().clientWidth;
const SVG_HEIGHT = d3.select('#chart svg').node().clientHeight;

const years = Object.keys(ugEnroll);
const female = [];
Object.values(ugEnroll).forEach(d => female.push(d.female));
const male = [];
Object.values(ugEnroll).forEach(d => male.push(d.male));


console.log('years', years);
console.log('male', male);
console.log('female', female);
console.log('ugEnroll', ugEnroll);

// color scale using ordinal scale
const scaleColor = d3.scaleOrdinal()
    .domain(['female', 'male'])
    .range(['#F48FB1', '#90CAF9']);

// set y scale: linear scale based on max value to show on graph
const scaleY = d3.scaleLinear()
    .domain([0, Math.max(...female, ...male)])
    .range([0, SVG_HEIGHT - 60]);

// set x scale: linear scale based on years length size
const scaleX = d3.scaleLinear()
    .domain([0, years.length - 1])
    .range([SVG_WIDTH / years.length, SVG_WIDTH])

console.log("scaleColor('male')", scaleColor('male'));
console.log("scaleColor('female')", scaleColor('female'))
console.log("SVG_WIDTH", SVG_WIDTH);
console.log("SVG_HEIGHT", SVG_HEIGHT);
console.log('scaleX(0)', scaleX(0));
console.log('scaleX(1)', scaleX(1));
console.log('scaleX(2)', scaleX(2));
console.log('scaleX(3)', scaleX(3));
console.log('scaleX(4)', scaleX(4));


// years
const yearsG = d3.select('#chart svg')
    .append('g')
    .attr('id', 'years')
    .style('fill', 'gray')
    .style('font-weight', '600')
    .style('font-size', '14');

yearsG.selectAll('text')
    .data(years)
    .join('text')
    .text(d => d)
    .attr('x', (d, i) => scaleX(i) - scaleX(0) / 2)
    .attr('y', SVG_HEIGHT - 8)
    .style('text-anchor', 'middle');


// female bars/text
const femaleG = d3.select('#chart svg')
    .append('g')
    .attr('id', 'female');

femaleG.selectAll('rect')
    .data(female)
    .join('rect')
    .attr('width', '50')
    .attr('height', d => scaleY(d))
    .attr('x', (d, i) => scaleX(i) - scaleX(0) / 2 - 50)
    .attr('y', d => SVG_HEIGHT - scaleY(d) - 25)
    .attr('rx', '5')
    .attr('ry', '5')
    .style('fill', () => scaleColor('female'));

femaleG.selectAll('text')
    .data(female)
    .join('text')
    .text(d => d)
    .attr('x', (d, i) => scaleX(i) - scaleX(0) / 2 - 25)
    .attr('y', d => SVG_HEIGHT - scaleY(d) - 30)
    .style('fill', () => scaleColor('female'))
    .style('font-size', '12')
    .style('font-weight', '500')
    .style('text-anchor', 'middle');



// male bars/text
const maleG = d3.select('#chart svg')
    .append('g')
    .attr('id', 'male');

maleG.selectAll('rect')
    .data(male)
    .join('rect')
    .attr('width', '50')
    .attr('height', d => d / 15)
    // x position must be different...
    .attr('x', (d, i) => scaleX(i) - scaleX(0) / 2 + 2)
    .attr('y', d => SVG_HEIGHT - scaleY(d) - 25)
    .attr('rx', '5')
    .attr('ry', '5')
    .style('fill', () => scaleColor('male'));

maleG.selectAll('text')
    .data(male)
    .join('text')
    .text(d => d)
    // x position must be different...
    .attr('x', (d, i) => scaleX(i) - scaleX(0) / 2 + 27)
    .attr('y', d => SVG_HEIGHT - scaleY(d) - 30)
    .style('fill', () => scaleColor('male'))
    .style('font-size', '12')
    .style('font-weight', '500')
    .style('text-anchor', 'middle');


// legend: changing text color
document.getElementById('legend').querySelector('p').style.color =
    scaleColor(document.getElementById('legend')
        .querySelector('p').innerText);
document.getElementById('legend').querySelector('p:nth-of-type(2)').style.color =
    scaleColor(document.getElementById('legend')
        .querySelector('p:nth-of-type(2)').innerText);



