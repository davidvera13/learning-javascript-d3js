// selection.join(enter, update, exit)
// create a selection
let svg = d3.select('svg');

const arrData1 = [10, 20, 30];

// select all circles in svg
// > data will be in 'enter':
//   > the data is not dispatched to cicles elements,
//   > we do not hava any circle at this stage
let circles;
console.log("adding data");
circles = svg.selectAll('circle')
    .data(arrData1);
console.log(circles)

// we assign data array to ciccle:
// > as wee have 3 values in array, we add 3 circles
// > the values are in a data element and not actually used
console.log("joining circle");
circles = svg.selectAll('circle')
    .data(arrData1)
    .join('circle');
console.log(circles)

// we assign properties to circles using attr
// > we also use data as radius of the cirlces
// >
console.log("assigning data to circle");
circles = svg.selectAll('circle')
    .data(arrData1)
    .join('circle')
    .attr('cx', (d, i, n) => 150)
    .attr('cy', (d, i, n) => d + i * 50)
    .attr('r', d => d);
console.log(circles)

// binding other data array to circles selection
// We have 3 circles and 4 element in array
// > 4 are in enter 'state'
// > 3 are in exit 'state' (used by circles)
console.log("adding other data");
const arrData2 = [5, 10, 15, 20];
circles = circles.data(arrData2);
console.log(circles)

// we can add  one more element
console.log("assigning data to circle");
circles = svg.selectAll('circle')
    .data(arrData2)
    .join('circle')
    .attr('cx', (d, i, n) => 150)
    .attr('cy', (d, i, n) => d + i * 50)
    .attr('r', d => d);
console.log(circles)


// if we replace 2 values out of 4,
// without passing attributes, the values will be updated and replaced for
const arrData3 = [30, 50];
circles = circles.data(arrData3)
    .join()
    .join('circle');
    //.attr('cx', (d, i, n) => 150)
    //.attr('cy', (d, i, n) => d + i * 50)
    // .attr('r', d => d);

console.log(circles)


circles = circles.data(arrData3)
    .join()
    .join('circle')
    .attr('cx', (d, i, n) => 150)
    .attr('cy', (d, i, n) => d + i * 50)
    .attr('r', d => d);

console.log(circles)

// passing string data: data is updated
// we pass data but nothing changes, values where assigned for cx, dy, radius, string is not compatible with number
circles = circles.data(['red', 'blue'])
    .join('circle');
console.log(circles)

// using join and getting enter, update & exit
// console.log("Using join and display values on console - without doing any operation with data")
// circles = circles.data(['red', 'blue'])
//     .join(
//         enter => console.log('enter', enter),
//         update => console.log('update', update),
//         exit => console.log('exit', exit),
//     );
// // return undedined because no operation were provided
// console.log(circles)


console.log("Using join and display values on console - with operation with data")
circles = circles.data(['red', 'blue'])
    .join(
        enter => {
            console.log('enter', enter)
        },
        update => {
            console.log('update', update);
            return update.style("fill", d => d);
        },
        exit => {
            console.log('exit', exit)
        },
    );
// return undedined because no operation were provided
console.log(circles);

let pData;
pData = [1, 2];
d3.select('#paragraph')
    .selectAll('p')
    .data(pData)
    .join(
        enter => enter.append('p').style('color', 'red'), // _enter selected from the update seln
        update => update.style('color', 'blue'), // the traditional update seln
        exit => exit.remove() // _exit selected from the update seln
        // .join() is doing the 'General Update Patter' behind the scenes
    )
    .text(d => d);
