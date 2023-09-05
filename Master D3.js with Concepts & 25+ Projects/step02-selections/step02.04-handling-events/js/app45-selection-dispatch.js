// selection.dispatch(eventTYpe, paramaters)

let circle1 = d3.select('svg circle');
circle1.on('radius', (event, data) => {
    console.log("event", event);
    console.log("data", data);
    d3.select(event.target).attr('r', event.detail)
})
console.log("*****************")
circle1.dispatch('radius', {
    detail: '40',          // set the value
    cancelable: true,
    bubbles: true           // if true, event is dispatched to ancestors in reverse tree order
})
console.log(circle1.on('radius'))


let circles = d3.select('svg:nth-of-type(2)')
    .selectAll('circle')
    .on('color', (evt, data) => {
        d3.select(evt.target).style('fill', evt.detail)
    });

circles.dispatch('color', (d, i, n) => {
    console.log('d', d)
    console.log('i', i)
    console.log('n', n)
    return {
        detail: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    }
})