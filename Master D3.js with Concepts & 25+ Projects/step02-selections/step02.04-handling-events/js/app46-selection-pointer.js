// d3.pointer(event.target)
let svg = d3.select('svg');
svg.on('click', (e) => {
    console.log('on svg', d3.pointer(e));
})


let circle = d3.select('circle');
circle.on('click', (e) => {
    console.log('on circle > relative to body', d3.pointer(e));
    console.log('on circle > relative to svg', d3.pointer(e, 'svg'));
})