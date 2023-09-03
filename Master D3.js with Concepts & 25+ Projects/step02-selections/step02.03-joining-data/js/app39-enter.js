// selection.enter()
let svg = d3.select('svg');
svg.append('circle')
    .attr('cx', 150)
    .attr('cy', 50)
    .attr('r', 50);

svg.append('circle')
    .attr('cx', 150)
    .attr('cy', 150)
    .attr('r', 50);

let data = [10, 20];
let allCircles = d3
    .selectAll('circle')
    .data(data)
    .attr('r', d => d);

// enter selectio nis empty
console.log(allCircles);


data = [10, 20, 35];
allCircles = d3
    .selectAll('circle')
    .data(data)
    .attr('r', d => d);

// enter selection contains one element with value 1715
console.log(allCircles);
// check data in enter
let enter = allCircles.enter()
console.log('enter', enter);

// will use last value of data which is in enter
let svgAppend = svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', 150)
    .attr('cy', 250)
    .attr('r', d => d);
console.log('svgAppend', svgAppend)