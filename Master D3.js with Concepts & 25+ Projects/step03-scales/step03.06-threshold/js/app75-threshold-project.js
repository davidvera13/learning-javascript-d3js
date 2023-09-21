const airQualityScale =
    //d3.scaleQuantile()
    d3.scaleThreshold()
        // 6 values = 7 thresholds
        .domain([10, 12, 35.4, 55.4, 150.4, 250.4])
        // range of 7 colors
        .range([
            'dodgerblue',
            'mediumseagreen',
            'yellow',
            'orange',
            'tomato',
            'violet',
            'lightgrey'
        ]);


console.log('airQualityScale.domain()', airQualityScale.domain())
console.log('airQualityScale.range()', airQualityScale.range())

const legend = new Map();
// WHO = world health organization
legend.set("dodgerblue", "WHO Target");
legend.set("mediumseagreen", "Good");
legend.set("yellow", "Moderate");
legend.set("orange", "Unhealthy For Sensitive Groups");
legend.set("tomato", "Unhealthy");
legend.set("violet", "Very Unhealthy");
legend.set("lightgrey", "Hazardous");

console.log(legend.get('dodgerblue'));
console.log(legend.get(airQualityScale(45)));


document.querySelector('button')
    .addEventListener('click', (e) => {
        console.log(e);
        const value = Number(document.querySelector('input').value);
        if (value >= 0 && value != null) {
            d3.select('#output svg')
                .selectAll('rect')
                .attr('width', '320')
                .attr('height', '50')
                .attr('rx', '5')
                .attr('ry', '5')
                .attr('x', '10')
                .attr('y', '30')
                .attr('fill', () => airQualityScale(value));

            console.log(legend.get(airQualityScale(value)))

            document.querySelector('#output p').innerText = legend.get(airQualityScale(value));
            document.querySelector('#output p').style.color = airQualityScale(value);
        }
        else {
            d3.select('#output svg')
                .selectAll('rect')
                .attr('fill', '#ffffff00');
            document.querySelector('#output p').innerText = '';
        }
    })