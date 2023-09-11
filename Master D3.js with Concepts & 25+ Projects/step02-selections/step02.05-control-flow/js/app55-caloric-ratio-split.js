const svgWidth = d3.select('#chart').node().clientWidth;
const svgHeight = d3.select('#chart').node().clientHeight;
console.log('width', svgWidth);
console.log('height', svgHeight);

let svg = d3.select('#chart');
svg.attr('viewBox',
    `0 ${-svgHeight} ${svgWidth} ${svgHeight}`)

// creating context with assigned data
let gs = svg.selectAll('g')
    .data(dryFruitData)
    .join('g');
console.log('gs', gs);



gs.each((d,i,n) => {
    console.log('gs.each d > ', d);
    console.log('gs.each i > ', i);
    console.log('gs.each n > ', n);
    const gElement = d3.select(n[i]);
    function stack(gElem, split) {
        let height = 0;
        console.log('stack el > ', gElem);
        console.log('stack split > ', split);

        gElem.selectAll('rect')
            .data(split)
            .join('rect')
            .attr('width', svgWidth / 21)   // 10 bars & 11 empty spaces
            .attr('height', d => d * 5)     // total sum of data element is 100 and we have 500px space to fill
            .attr('x', svgWidth / 21 + (i * (2 * svgWidth / 21)))
            .attr('y', (d, i) => {
                height = height + split[i];
                // console.log(-height);
                return (-height * 5);
            })
            .attr('rx', 10)
            .attr('ry', 10)
            .style('fill', (d, i) =>
                i === 0 ? 'burlywood' : i === 1 ? 'sandybrown' : 'navajowhite'
            );

        gElem.append('text')
            .data([dryFruitData[i]])
            .join('text')
            .attr('x', svgWidth / 21 + (i * (2 * svgWidth / 21)) - 15)
            .attr('y', '-250')
            .style('writing-mode', 'tb')
            .style('text-anchor', 'middle')
            // .attr('glyph-orientation-vertical', '45')
            .text(d => `${d.name} (${d.carbs}, ${d.fats}, ${d.protein})`)
            .style('fill', 'lightgoldenrodyellow')
            .style('font-weight', '500');
    }


    gElement.call(stack, [d.carbs, d.fats, d.protein])
})

