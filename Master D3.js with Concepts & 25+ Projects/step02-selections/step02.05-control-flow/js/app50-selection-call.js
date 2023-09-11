// selection.call(fn, args)
d3.select('svg')
    .attr('width', 300)
    .attr('height', 300);

let data  = [15, 25, 35];

const updateCircles = (d, i, n) => {
    console.log('updateCircles d', d);
    console.log('updateCircles i', i);
    console.log('updateCircles n', n);

    // select circle
    const circle = d3.select(n[i]);
    console.log('updateCircles circle', circle)
    circle
        .attr('cx', i < 1 ?
            5 + d :
            (5 + +n[i - 1].getAttribute('cx') + +n[i - 1].getAttribute('r') + d))
        .attr('cy', '150')
        .attr('r', d)
        .style('fill', `rgba(${d / 2}, ${d / 3}, ${d * 7},0.7)`)
    console.log('updateCircles circle', circle)

}
const display = (selection, data) => {
    console.log('display selection', selection);
    console.log('display data', data);
    selection.selectAll('circle')
        .data(data)
        .join('circle')
        .each(updateCircles)
}



const circles = d3.select('svg')
    .call(display, data);