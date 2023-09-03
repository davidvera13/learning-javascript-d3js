// selection.data(data, keyFn)
let svg = d3.select('svg');
let data = [10, 15, 20]
let circles = svg.selectAll('circle')
    .data(
        data,
        (d) => d.toString())
    .join('circle')
    .attr('cx', (d,i) => d + i * 30)
    .attr('cy', '100')
    .attr('r', d => d);

console.log(circles);

data = [10, 20]
circles = svg.selectAll('circle')
    .data(
        data,
        (d) => d.toString())
    .join('circle');
    // .attr('cx', (d,i) => d + i * 30)
    // .attr('cy', '100')
    // .attr('r', d => d);
console.log(circles);
