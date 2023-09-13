document.querySelector('button')
    .addEventListener('click', () => {
        let cost = Number(document.querySelector('#cost').value);
        let rate = Number(document.querySelector('#rate').value);

        const SVG_WIDTH = d3.select('#chart svg').node().clientWidth;
        const SVG_HEIGHT = d3.select('#chart svg').node().clientHeight;

        console.log('cost', cost);
        console.log('rate', rate);
        console.log('SVG_WIDTH', SVG_WIDTH);
        console.log('SVG_HEIGHT', SVG_HEIGHT);

        const POWER_SCALE = d3.scalePow()
            .exponent(1 - rate / 100) // convert to percentage
            .domain([cost, 0])
            .range([SVG_WIDTH, 0]);

        const POWER_COLOR_SCALE = d3.scalePow()
            .exponent(1 - rate / 100) // convert to percentage
            .domain([cost, 0])
            .range(['green', 'pink']);

        let yearlyValue = [];
        while(cost > 1000) {
            cost = Math.pow(cost, 1 - (rate / 100));
            yearlyValue.push(Math.round(cost));
        }

        d3.select('svg')
            .selectAll('rect')
            .data(yearlyValue)
            .join('rect')
            .attr('width', d => POWER_SCALE(d))
            .attr('height', SVG_HEIGHT / yearlyValue.length - 5)
            .attr('x', 0)
            .attr('y', (d,i) => i * SVG_HEIGHT / yearlyValue.length + 2)
            .style('fill', d => POWER_COLOR_SCALE(d));

        d3.select('svg')
            .selectAll('text')
            .data(yearlyValue)
            .join('text')
            .text((d, i) => `At the end of year ${i + 1}, $${d}`)
            .attr('x', d => POWER_SCALE(d) + 10)
            .attr('y', (d, i) => i * SVG_HEIGHT / yearlyValue.length + SVG_HEIGHT / yearlyValue.length / 2)
            .style('fill', d => POWER_COLOR_SCALE(d))
            .style('font-size', '12')
            .style('font-weight', '500');
    })