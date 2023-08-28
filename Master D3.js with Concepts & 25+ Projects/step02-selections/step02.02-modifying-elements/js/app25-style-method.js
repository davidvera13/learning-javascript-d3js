// selection.style(name, value)
let svg = d3.select('svg')
// show value or computed values if not set
console.log(svg.style('background-color'))

svg.attr('width', 300)
svg.attr('height', 300)
// setter
svg.style('background-color', 'lightgray');
// getter
console.log(svg.style('background-color'))

// removes the style property
svg.style('background-color', null);

// select children
let ellipses = svg.selectChildren('ellipse');
ellipses.select((d, i, n) => {
    let currentEllipse = d3.select(n[i]);
    // method chaining
    currentEllipse
        .attr('cx', `${i * 100 + 110}`)
        .attr('cy', `${i * 80 + 80}`)
        .attr('rx', `${i * 20 + 50}`)
        .attr('ry', `${i * 20 + 70}`);
    currentEllipse.style(
        'fill',
        `rgb(
            ${Math.random() * 255}, 
            ${Math.random() * 255}, 
            ${Math.random() * 255})`
    );
    // or ...
    currentEllipse.style(
        'fill', () => {
            return `rgb(
                ${Math.random() * 255}, 
                ${Math.random() * 255}, 
                ${Math.random() * 255})`
        });

})

