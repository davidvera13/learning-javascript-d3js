// Structure the data for years
let years = new Set();
fordData.forEach(d => {
    years.add(d.year);
});
years = Array.from(years);
// Yearly Data
let yearlyData = [];
years.forEach(year => {
    let yearSum = 0;
    fordData.forEach(d => {
        if (d.year === year) {
            yearSum += d.truck + d.suv + d.car;
        }
    })
    yearlyData.push(yearSum);
})

console.log('yearlyData', yearlyData);
// Listener on the 'generate' button
d3.select('#gen-info').on('click', () => {
// We can use here dispatch ... we replace 'click' event by 'generate' (custom event)
// d3.select('#gen-info').on('generate', () => {
    document.getElementById('gen-info').disabled = true;
    // Create yearly chart
    d3.select('#years p')
        .text('Number of vehicles');
    // Insert year bars
    const yearsSvg = d3.select('#years svg')
        .selectAll('rect');

    yearsSvg
        .data(yearlyData)
        .enter()
        .append('rect')
        // .join('rect')
        .attr('x', '0')
        .attr('y', (d, i) =>
            document.querySelector('#years').clientHeight / 4 * (i + 1))
        .attr('height', (d, i) =>
            document.querySelector('#years').clientHeight / 4 - 5)
        .attr('width', d => d / 10000)
        .attr('id', (d, i) => `${years[i]}`)
        .style('fill', (d, i) => {
            const color = new Map()
            color.set(0, 'steelblue');
            color.set(1, 'dodgerblue');
            return color.get(i);
        })
        .style('cursor', 'pointer');

    // Insert text for year bars
    yearsSvg.data(yearlyData)
        .enter()
        .append('text')
        // .join('text')
        .attr('x', d => d / 10000 + 10)
        .attr('y', (d, i) =>
            document.querySelector('#years')
                .clientHeight / 4 * (i + 1) +
            (document.querySelector('#years')
                .clientHeight / 4) / 2)
        .text((d, i) => `${years[i]} - ${d}`)
        .style('font-size', '12')
        .style('font-weight', '500')
        .style('fill', 'gray');

    // Status message for quarter bars
    d3.select('#quarters p')
        .text('Click on a year bar for more details');

    // Create quarterly chart
    d3.select('#years').selectAll('rect')
        .on('click', (e, d) => {
            console.log(e.currentTarget);
            console.log(d);
            // reset
            document.querySelector('#vehicles svg').innerHTML = '';
            d3.select('#vehicles p').text(null);

            // Update status message to chart title for quarters

            d3.select('#quarters p')
                .text(`${e.currentTarget.id} : Quarterly break up`);

            let quarterlyData = [];
            fordData.forEach(d => {
                if (Number(e.currentTarget.id) === d.year) {
                    quarterlyData.push(d);
                }
            });

            const quartersSvg = d3.select('#quarters svg')
                .selectAll('rect');

            quartersSvg
                .data(quarterlyData)
                .join('rect')
                .attr('x', 0)
                .attr('y', (d, i) =>
                    document.querySelector('#quarters svg')
                        .clientHeight / 6 * (i + 1))
                .attr('height', () =>
                    document.querySelector('#quarters svg')
                        .clientHeight / 6 - 5
                )
                .attr('width', d => (d.truck + d.suv + d.car) / 1500)
                .attr('id', d => `${d.quarter}`)
                .style('fill', (d, i) => {
                    const color = new Map()
                    color.set(0, '#38ACEC');
                    color.set(1, '#5CB3FF');
                    color.set(2, '#79BAEC');
                    color.set(3, '#38ACEC');
                    return color.get(i);
                })
                .style('cursor', 'pointer');

            d3.select('#quarters svg')
                .selectAll('text')
                .data(quarterlyData)
                .join('text')
                .attr('x', d => (d.truck + d.suv + d.car) / 1500 + 10)
                .attr('y', (d, i) =>
                    document.querySelector('#years svg').clientHeight / 6 * (i + 1) +
                    (document.querySelector('#years svg').clientHeight / 6) / 2
                )
                .text((d, i) => `${d.quarter} - ${(d.truck + d.suv + d.car)}`)
                .style('font-size', 12)
                .style('font-weight', 500)
                .style('fill', 'gray');


            d3.select('#vehicles p')
                .text('Hover on quarter bar for vehicle type');

            d3.select('#quarters svg')
                .selectAll('rect')
                .on('mouseenter', (e, d) => {
                    console.log('quarters svg d > ', d);
                    console.log('quarters svg d > ', e);
                    d3.select('#vehicles p')
                        .text(`${d.year} | ${d.quarter} : Vehicle Type break up`);

                    d3.select('#vehicles svg')
                        .selectAll('rect')
                        .data([d.truck, d.suv, d.car])
                        .join('rect')
                        .attr('width', d => d / 1000)
                        .attr('height', () =>
                            document.querySelector('#vehicles svg').clientHeight / 5 - 5
                        )
                        .attr('x', 0)
                        .attr('y', (d, i) =>
                            document.querySelector('#vehicles svg').clientHeight / 5 * (i + 1)
                        )
                        .style('fill', (d, i) => {
                            console.log("e >>>> ", e)
                            const color = new Map()
                            color.set(0, '#38ACEC');
                            color.set(1, '#5CB3FF');
                            color.set(2, '#79BAEC');
                            color.set(3, '#38ACEC');
                            return color.get(i);

                        });

                    let idx = 0;
                    d3.select('#vehicles svg')
                        .selectAll('text')
                        .data([["0", d.truck], ["1", d.suv], ["2", d.car]])
                        .join('text')
                        .attr('x', d => {
                            console.log(d);
                            return d[1] / 1000 + 10
                        })
                        .attr('y', (d, i) =>
                            document.querySelector('#vehicles svg').clientHeight / 5 * (i + 1) +
                            (document.querySelector('#vehicles svg').clientHeight / 5) / 2)
                        .text(d => {
                            if(Number(d[0]) === 0)
                                return 'Trucks ' + d[1];
                            if(Number(d[0]) === 1)
                                return 'SUV ' + d[1];
                            if(Number(d[0]) === 2)
                                return 'Cars ' + d[1];
                        })
                        .style('font-size', 12)
                        .style('font-weight', 500)
                        .style('fill', 'gray');
                });
        })
});

// dispatch
// d3.select('#gen-info').dispatch('generate');

