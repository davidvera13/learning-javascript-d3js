// selection.datum(value)
let allCircles = d3.selectAll('circle');
let radius = 25;
allCircles = allCircles.datum(radius);
// data is passed to all circles
console.log(allCircles);

// reset data
allCircles = allCircles.datum(null);
console.log(allCircles);

// using function
allCircles = allCircles.datum(function (d,i,n) {
    console.log('d = ', d);
    console.log('i = ', i);
    console.log('n = ', n);
    return (radius+1) * 2;
});
console.log('using function', allCircles);

// using lambda
allCircles = allCircles.datum(function (d,i,n) {
    console.log('d = ', d);
    console.log('i = ', i);
    console.log('n = ', n);
    return (radius+1) * Math.PI;
});
console.log('using lambda', allCircles);
allCircles.attr('r', d => d);