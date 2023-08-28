// selection.sort(compare) : return a new selection
// using classic js functions
// let paragraphs =  d3.selectAll('p');
// paragraphs
//     .datum(function () { return this.innerText }) // bind data point to element
//
// // d3.selectAll('p')
// //     .datum(function () { return this.innerText }) // bind data point to element
//
// console.log(paragraphs);
//
// d3.selectAll('p')
//     .datum(function () { return this.innerText })
//     .sort((a,b) => b - a) // descending
//     .sort((a,b) => a - b) // ascending
//
// let sortCircles = d3.selectAll('circle')
//     .datum(function () {
//         return d3.select(this).attr("r")
//     })
//     .sort((a,b) => b - a)
//     .attr('cx', function(d,i) {
//         return 50 + (i*80)
//     });
//
// console.log(sortCircles);


// using arrow functions
let paragraphs =  d3.selectAll('p');
paragraphs
    .datum((d, i, n) =>  n[i].innerText ) // bind data point to element

console.log(paragraphs);

d3.selectAll('p')
    .datum((d, i, n) =>  n[i].innerText )
    .sort((a,b) => b - a) // descending
    .sort((a,b) => a - b) // ascending

let sortCircles = d3.selectAll('circle')
    .datum((d, i, n) => d3.select(n[i]).attr("r"))
    .sort((a,b) => a - b)
    .attr('cx', (d,i) => 50 + (i*80));

console.log(sortCircles);
