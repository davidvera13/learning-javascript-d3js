// selection.raise(): reinsert selection elements into the DOM as the last child of their respective parents
let lower3 = d3.select('rect:nth-of-type(3)').lower() // select first element
console.log(lower3);
let lower2 = d3.select('rect:nth-of-type(2)').lower() // select first element
console.log(lower2);
