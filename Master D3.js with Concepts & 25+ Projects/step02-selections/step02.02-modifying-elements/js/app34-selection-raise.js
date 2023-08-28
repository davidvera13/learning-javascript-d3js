// selection.raise(): reinsert selected elements into the DOM as the last child of their respective parents
let raise1 = d3.select('rect:nth-of-type(1)').raise() // select first element
console.log(raise1);
let raise2 = d3.select('rect:nth-of-type(2)').raise() // select first element
console.log(raise2);
// d3.select('rect:nth-of-type(3)').raise() // select first element