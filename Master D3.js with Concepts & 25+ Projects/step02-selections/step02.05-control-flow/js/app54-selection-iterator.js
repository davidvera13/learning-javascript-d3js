d3.select('svg')
    .attr('width', 300)
    .attr('height', 300)

d3.select('svg')
    .selectAll('circle')
    .data([20, 20, 20])
    .join('circle')
    .attr('cx', (d, i) => d + i * 40)
    .attr('cy', 50)
    .attr('r', d => d);

let circles = d3.select('svg')
    .selectAll('circle')

console.log(circles);

console.log('circles iteration');
// selections are iterables
for(circle of circles)
    console.log(circle)

console.log('circles array');
circles = [...circles];
console.log(circles);
