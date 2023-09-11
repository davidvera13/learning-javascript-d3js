// return fist element
// selection.node()
// return all elements
// selection.nodes()

console.log('select', d3.select('svg'));
console.log('node', d3.select('svg').node());
console.log('nodes', d3.select('svg').selectAll('rect').nodes());