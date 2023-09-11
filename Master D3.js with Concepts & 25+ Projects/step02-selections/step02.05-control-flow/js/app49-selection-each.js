// selection.each(fn)
d3.select('svg')
    .attr('width', 300)
    .attr('height', 300)

let rectangles = d3.select('svg')
    .selectAll('rect');

// empty nodes
console.log(rectangles);

rectangles = rectangles.data([10, 20, 30]);
// data in enter
console.log(rectangles);


const updateContent = (d, i, n) => {
    console.log('updateContent d >', d);
    console.log('updateContent i >', i);
    console.log('updateContent n >', n);
    // we can use the data - let select a rectangle
    const elt = d3.select(n[i])
    console.log('updateContent rectangle >', elt)
    elt
        .attr('x', 5 + (35*i))
        .attr('y', d)
        .attr('width', 30)
        .attr('height', d)
        // .style('fill', `rgb(${d * 5}, ${d * 6}, ${d * 7})`);
        .style('fill', `rgb(${d * 2}, ${d * 3}, ${d * 4})`);
}

rectangles = rectangles.data([9, 18, 27])
    .join("rect")
    // .enter()
    // .append('rect')
    .each(updateContent);

console.log(rectangles);


rectangles = rectangles.data([27, 54, 81, 108])
    .join("rect")
    // .enter()
    // .append('rect')
    .each(updateContent);

console.log(rectangles);
