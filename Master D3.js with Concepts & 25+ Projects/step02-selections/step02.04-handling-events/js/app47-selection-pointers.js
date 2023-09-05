// d3.pointers(event.target)
// return arrays of arrays

let svg = d3.select('svg');
svg.on('click', (e) => {
    console.log(d3.pointers(e));
})


let rect = d3.select('rect');
rect.on('click', (e) => {
    console.log(d3.pointers(e));
    console.log(d3.pointers(e, 'svg'));
})