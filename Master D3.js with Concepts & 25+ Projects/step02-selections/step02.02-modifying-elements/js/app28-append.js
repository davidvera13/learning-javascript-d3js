// selection.append(type)
// no value displayed because no value passed
let firstDiv = d3.select('#title');
firstDiv.append('h2').text('Hello World');

let selection = d3.select('#title');
let subSelection = selection.append('h2');
console.log("subselection > " + subSelection)
subSelection.text("Wayne's World, party time, excellent");

const rectangles = [
    {
        x: 10,
        y: 10,
        width: 50,
        height: 30,
        fill: 'blue'
    },
    {
        x: 10,
        y: 50,
        width: 50,
        height: 30,
        fill: 'red'
    }
]

// creating svg element in div:
let svgRectangles = d3.select("#svg").append('svg');
console.log(svgRectangles);
svgRectangles
    .attr('width', '300')
    .attr('height', 300);

for (let i = 0; i < rectangles.length; i++) {
    svgRectangles.append('rect')
}

d3.selectAll('rect').select((d,i,n) =>
    d3.select(n[i])
        .attr('x', rectangles[i].x)
        .attr('y', rectangles[i].y)
        .attr('width', rectangles[i].width)
        .attr('height', rectangles[i].height)
        .attr('fill', rectangles[i].fill));

// alternative
let svgRectangles2 = d3.select("#svg2").append('svg');
for (let i = 0; i < rectangles.length; i++) {
    svgRectangles2.append(() => document.createElementNS(
        'http://www.w3.org/2000/svg',
        'rect'
    ))
}

d3.selectAll('#svg2 svg rect').select((d,i,n) =>
    d3.select(n[i])
        .attr('x', rectangles[i].x)
        .attr('y', rectangles[i].y)
        .attr('width', rectangles[i].width)
        .attr('height', rectangles[i].height)
        .attr('fill', rectangles[i].fill));
