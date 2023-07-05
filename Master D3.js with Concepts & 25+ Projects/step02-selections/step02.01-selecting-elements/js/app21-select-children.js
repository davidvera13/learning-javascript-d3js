let firstSvgChildren = d3.select('svg').selectChildren();
console.log('firstSvgChildren');
console.log(firstSvgChildren);

let secondSvgChildren = d3.select('svg:nth-of-type(2)').selectChildren();
console.log('secondSvgChildren');
console.log(secondSvgChildren);

let svgChildren = d3.selectAll('svg').selectChildren();
console.log('svgChildren');
console.log(svgChildren);

console.log("select svg children")
d3.select('svg').selectChildren(function (c, i, cn) {
    console.log("c", c);
    console.log("i", i);
    console.log("cn", cn);
});

console.log("selectAll svg children")
d3.selectAll('svg').selectChildren(function (c, i, cn) {
    console.log("c", c);
    console.log("i", i);
    console.log("cn", cn);
});