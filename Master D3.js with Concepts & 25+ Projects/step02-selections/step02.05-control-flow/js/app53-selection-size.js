// selection.size

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

// count elements
console.log('svg size() > ', d3.select('svg').size());
console.log('circle size() > ', d3.select('svg').selectAll('circle').size());
