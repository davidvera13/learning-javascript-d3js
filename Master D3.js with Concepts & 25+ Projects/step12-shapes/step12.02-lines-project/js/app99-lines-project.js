const SVG1 = d3.select('#chart1 svg');
// padding for SVG1
const BUFFER = 35;

const ACTUAL_WIDTH = document.querySelector('svg').clientWidth - BUFFER;
const ACTUAL_HEIGHT = document.querySelector('svg').clientHeight - BUFFER;
console.log("ACTUAL_WIDTH", ACTUAL_WIDTH);
console.log("ACTUAL_HEIGHT", ACTUAL_HEIGHT);


d3.csv('data/IBM_March_2020.csv', d => {
    // we transform the data (each line) onto object.
    // d3.csv returns a Promise
    return {
        date: new Date(d.Date),
        close: Number(d.Close)
    }
}).then(data => {
    // return an array of object
    console.log(data);
    console.log("length:", data.length);
    console.log("columns:", data.columns);

    // get the max value for close
    let MAX_CLOSE = d3.max(data, (d, i) => d.close);
    console.log("MAX_CLOSE", MAX_CLOSE);

    const X_AXIS_SCALE = buildXAxis(data);
    const Y_AXIS_SCALE = buildYAxis(MAX_CLOSE);

    // defining and animating path
    buildPath(data, X_AXIS_SCALE, Y_AXIS_SCALE);
    buildAnimation();

    // adding points for x,y pairs
    buildCircles(data, X_AXIS_SCALE, Y_AXIS_SCALE);
    buildCirclesAnimation();

    // Adding values / legend near circles
    buildLegend(data, X_AXIS_SCALE, Y_AXIS_SCALE);
    buildLegendAnimation();
});

/**
 * We define the Y axis (vertical)
 * @param MAX_CLOSE max value from dataset
 */
const buildYAxis = (MAX_CLOSE) => {
    const Y_AXIS_SCALE = d3.scaleLinear()
        .domain([MAX_CLOSE, MAX_CLOSE / 2])
        .range([BUFFER, ACTUAL_HEIGHT])
        .nice();

    const Y_AXIS = d3.axisLeft(Y_AXIS_SCALE).ticks(10, d3.format('$'))
    const Y_AXIS_GROUP = SVG1.append('g')
        .attr('id', 'yAxis')
        .attr('transform', `translate(${BUFFER},0)`);
    Y_AXIS(Y_AXIS_GROUP);
    return Y_AXIS_SCALE;
}

/**
 * We define the X axis (horizontal)
 * @param data we have to define the domain (min x value and max x value)
 */
const buildXAxis = (data) => {
    const X_AXIS_SCALE = d3.scaleTime()
        .domain([data[0].date, data[data.length - 1].date])
        .range([BUFFER, ACTUAL_WIDTH])
        .nice();
    const X_AXIS = d3.axisBottom(X_AXIS_SCALE).ticks(15, '%d %b');
    const X_AXIS_GROUP = SVG1.append('g')
        .attr('id', 'xAxis')
        .attr('transform', `translate(0,${ACTUAL_HEIGHT})`);
    X_AXIS(X_AXIS_GROUP);
    return X_AXIS_SCALE;
}

/**
 * Defining path (drawing lines between x and y values of the data array
 * curve parameter gives some smooth to the line chart
 * @param data
 * @param X_AXIS_SCALE
 * @param Y_AXIS_SCALE
 */
const buildPath = (data, X_AXIS_SCALE, Y_AXIS_SCALE) => {
    SVG1.append('g')
        .attr('id', 'lineChart')
        .selectAll('path')
        .data([data])
        .join('path')
        // .attr('d', d3.line(d => console.log(d), d => console.log(d)));
        // .attr('d', d3.line(d => X_AXIS_SCALE(d.date), d => Y_AXIS_SCALE(d.close)))
        .attr('d', d3.line()
            .x(d => {
                console.log("x > d.date", d.date)
                return X_AXIS_SCALE(d.date)
            })
            .y(d => {
                console.log("y > d.close", d.close)
                return Y_AXIS_SCALE(d.close)
            })
            .curve(d3.curveMonotoneX)
        )
        .style('fill', 'none')
        .style('stroke-width', '1.5')
        .style('stroke', 'cornflowerblue');
}

/**
 * Adding drawing animation
 */
const buildAnimation = () => {
    const PATH_LENGTH = d3.select('#lineChart path').node().getTotalLength();
    console.log(PATH_LENGTH);
    // d3.select('#lineChart path')
    // .style('stroke-dasharray', '5')
    // .style('stroke-dasharray', '10')
    // .style('stroke-dasharray', '15 5')
    // .style('stroke-dasharray', '50')
    // .style('stroke-dasharray', '100')
    // .style('stroke-dasharray', '200')
    // .style('stroke-dasharray', '500')
    // .style('stroke-dashoffset', '0')
    // .style('stroke-dasharray', PATH_LENGTH)
    // // .style('stroke-dashoffset', '100')
    // .style('stroke-dashoffset', '400')
    // .transition()
    // .duration(3000)
    // .style('stroke-dashoffset', 0);

    d3.select('#lineChart path')
        .style('stroke-dasharray', PATH_LENGTH)
        .style('stroke-dashoffset', PATH_LENGTH)
        .transition()
        .duration(3000)
        .style('stroke-dashoffset', 0);
}

const buildCircles = (data, X_AXIS_SCALE, Y_AXIS_SCALE) => {
    SVG1.append('g')
        .attr('id', 'lineChartDots')
        .selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx', d => X_AXIS_SCALE(d.date))
        .attr('cy', d => Y_AXIS_SCALE(d.close))
        .style('fill', 'cornflowerblue');
}

const buildCirclesAnimation = () => {
    d3.select('#lineChartDots')
        .selectAll('circle')
        .each((d, i, n) => {
            d3.select(n[i])
                .transition()
                .delay(100 * (i + 1))
                .duration(1000)
                .attr('r', '5')
        });
}


/**
 * Configure where text will be displayed
 * @param data
 * @param X_AXIS_SCALE
 * @param Y_AXIS_SCALE
 */
const buildLegend = (data, X_AXIS_SCALE, Y_AXIS_SCALE) => {
    SVG1.append('g')
        .attr('id', 'lineChartText')
        .selectAll('text')
        .data(data)
        .join('text')
        .attr('x', d => X_AXIS_SCALE(d.date))
        .attr('y', d => Y_AXIS_SCALE(d.close) - 10)
        .style('fill', (d, i) => {
            if (i === 0) {
                return 'gray';
            }
            if (data[i].close - data[i - 1].close > 0) {
                return 'seagreen';
            }
            else {
                return 'tomato'
            }
        })
        .style('text-anchor', 'start')
        .style('font-size', '9')
        .style('font-weight', '600');
}

/**
 * Animate and show values near line chart with animation
 */
const buildLegendAnimation = () => {
    d3.select('#lineChartText')
        .selectAll('text')
        .each((d, i, n) => {
            d3.select(n[i])
                .transition()
                .delay(100 * (i + 1))
                .duration(1000)
                .text(d => d3.format('.2f')(d.close));
        })
        .raise()

}