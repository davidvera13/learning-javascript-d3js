// selection.attr(attrName, value)
let svg1 = d3.select('svg');
console.log("svg1");
console.log(svg1);

let svg1Width = svg1.attr('width');
let svg1Height = svg1.attr('height')
let svg1Class = svg1.attr('class');
// we can get information from selection
console.log("svg1Width : " + svg1Width);
console.log("svg1Height : " + svg1Height);
// will return null because no class is set ...
console.log("svg1Class before : " + svg1Class);

svg1.attr('class', 'svg1');
console.log("svg1Class after  : " + svg1.attr('class'));

// on children
svg1.selectChildren('circle').attr('class', 'circle');
// we overwrite values ...we do not append values
// svg1.selectChildren('circle').attr('class', 'circle2');


let svg2 = d3.select('svg:nth-of-type(2)');
console.log("svg2");
console.log(svg2);

let svg2Circles = svg2.selectAll('circle');
console.log("svg2Circles");
console.log(svg2Circles);

svg2Circles.attr('style', 'fill:peachpuff');


let svg3 = d3.select('svg:nth-of-type(3)');
console.log("svg3");
console.log(svg3);

let svg3Circles = svg3.selectAll('circle');
console.log("svg3Circles");
console.log(svg3Circles);

console.log('***********************')
svg3Circles.attr('style', (d, i, n) => {
    console.log("d", d);
    console.log("i", i);
    console.log("n", n);
    return `fill:rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
});