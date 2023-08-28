// selector.classed(name, value)
// return false if not exist, return the selection else
let line1 = d3.select('line');
console.log("line1");
console.log(line1);
let hasGrayClass = line1.classed('gray')
console.log("hasGrayClass", hasGrayClass);

let lines = d3.selectAll('line').classed('gray', true);
console.log("lines", lines);


lines = d3.selectAll('line').classed('gray');
console.log("lines", lines);


lines = d3.selectAll('line').classed('gray', false);
console.log("lines", lines);

// well... class attribute remains, if want to remove it
lines.attr('class', null);

// adding multiple classes
lines = d3.selectAll('line')
    .classed('stroke-width stroke-opacity', true);

// using function
lines.classed('dashed-array', (d, i, n) => {
    return !!(i % 2);

})