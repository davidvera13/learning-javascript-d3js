// selection.data(data.key)
//let circleSvg1 = d3.selectAll('#svg1 circle');
let circleSvg1 = d3.select('#svg1').selectAll('circle');
console.log(circleSvg1);

const svg1CircleRadius = [10, 20, 50];
const svg2CircleRadius = [10, 50, 20];
const svg3CircleRadius = [40, 13, 20];


circleSvg1Data = circleSvg1.data(svg1CircleRadius);
console.log(circleSvg1Data);

// print data from array ?
console.log(circleSvg1Data.data());
console.log(circleSvg1Data.data()[0]);
console.log(circleSvg1Data._groups[0][0].__data__)
console.log(circleSvg1Data['_groups'][0][0]['__data__'])

// select one circle at the time
console.log("********************");

circleSvg1Data.select((d,i,n) => {
    console.log("d", d);
    console.log("i", i);
    console.log("n", n);
    console.log("this", this); // will be different with n[i] => refer to Window
    console.log("n[i]", n[i]);
})
console.log("********************");
circleSvg1Data.select(function (d,i,n) {
    console.log("d", d);
    console.log("i", i);
    console.log("n", n);
    console.log("this", this); // same as n[i] => refer to Window
    console.log("n[i]", n[i]);
})

// Set data to radius
circleSvg1Data.attr('r', d => d);


let circleSvg2 = d3.selectAll('#svg2 circle');
let circleSvg2Data = circleSvg2.data(svg2CircleRadius);
circleSvg2Data.attr('r', function (d) {
   return d;
});


// one line approach + adding color
const colors = ['red', 'green', 'blue']
// d3.selectAll('#svg3 circle')
//     .data(svg3CircleRadius)
//     .attr('r', d => d)
//     .data(colors)
//     .attr('fill', css => css);

console.log(d3.selectAll('#svg3 circle')
    // data binding
    .data(svg3CircleRadius)
    .attr('r', d => d)
    // data binding
    .data(colors)
    .attr('fill', css => css))


// in data method
circleSvg2Data = circleSvg2.data((d, i, n) => {
    console.log("d", d);
    console.log("i", i);
    console.log("n", n);

    return [20,40,60];
});
console.log(circleSvg2Data.data());


// select group
console.log('Selecting all svg with all circles');
let allCircles = d3.selectAll('svg')
            .selectAll('circle');

console.log(allCircles);
allCircles = allCircles.data(svg1CircleRadius)
allCircles.attr('r', d => d)
console.log("binding", allCircles)