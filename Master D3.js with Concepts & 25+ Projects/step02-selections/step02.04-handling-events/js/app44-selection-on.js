// selection.on(typeName, listener, options)
// create event
let svg = d3.select('svg')
    .on('click', (evt, data) => {
        console.log('evt', evt);
        console.log('evt.target', evt.target);
        console.log('data', data);
        console.log('this', this); // window
        d3.select(evt.target).style('fill', 'green')
    })

// returns listener
console.log('checking event click', svg.on('click'));
// console.log('checking event over', svg.on('mouseover'));

// remove click event
svg.on('click', null);
console.log('checking event click after removal', svg.on('click'));


svg
    .on('click mouseover', function (evt, data) {
        // console.log('evt', evt);
        // console.log('evt.target', evt.target);
        console.log('this', this); // current html element
        // d3.select(this).style('fill', 'green');
        if(evt.type === 'click')
            d3.select(this).style('fill', 'blue');
        if(evt.type === 'mouseover')
            d3.select(this).style('fill', 'red');
    })

svg = d3.select('svg')
    .on('mouseup', (evt, data) => {
    console.log('onmouseup');
})

// overwrite
svg = d3.select('svg')
    .on('click', function(evt, data) {
        console.log('click');
        d3.select(this).style('fill', 'pink');
    })

// remove all event listeners
svg.on('.', null)

let rectangles = d3.select('svg')
    .selectAll('rect')
    // registering multiple callback on single event
    .on('click.1 click.2', (evt, data) => {
        console.log("Rectangle selection\n*****************")
        console.log('evt', evt);
        console.log('evt.target', evt.target);
        console.log('data', data);
        console.log('this', this); // windo

        if(evt.target.__on[0].name === '1') {
            console.log("First call selected");
            d3.select(evt.target).style('fill', 'orange');
        }
        if(evt.target.__on[1].name === '2') {
            setTimeout(() => {
                console.log("second call selected");
                d3.select(evt.target).style('fill', 'blue');
            }, 2000)
        }
    });

// we can remove for both event listener
// d3.select('svg')
//     .selectAll('rect')
//     .on('.1 .2', null);