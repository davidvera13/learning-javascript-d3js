let allH1 = d3.selectAll("h1");
console.log("allH1");
// nodeList in _groups
console.log(allH1);

const h1Elt = d3.select("h1");
console.log("h1Elt");
// array in _groups
console.log(h1Elt);

// select all circles
let allCircles = d3.selectAll('circle');
console.log("allCircles");
console.log(allCircles);

// select all rectangles
let allRects = d3.selectAll('rect');
console.log("allRects");
console.log(allRects);

// select all svg
let allSvg = d3.selectAll('svg');
console.log("allSvg");
console.log(allSvg);

// select all svg by class
let allSvgByClassName = d3.selectAll('.svgarea');
console.log("allSvgByClassName");
console.log(allSvgByClassName);

// all circles in allSvg
let allCirclesInSvg = allSvg.selectAll('circle');
console.log("allCirclesInSvg");
console.log(allCirclesInSvg);


let firstCircleInSvg = allSvg.select('circle');
console.log("firstCircleInSvg");
console.log(firstCircleInSvg);

// selection objects are iterable
console.log("iteration...")
for (let elt of allCircles)
    console.log(elt)

console.log("iteration...")
for (let elt of firstCircleInSvg)
    console.log(elt)

// console.log("if we want to have all keys available")
// for (let allCirclesKey in allCircles) {
//     console.log(allCirclesKey)
// }

console.log("Using function with lambda");
// data bound, index, object / group
allSvg.selectAll((d, i, n) => {
    console.log("d", d);
    console.log("i", i);
    console.log("n", n);
    console.log("n[i]", n[i]);
    console.log("this", this);
});

console.log("Using classic function");

allSvg.selectAll(function (d, i, n) {
    console.log("d", d);
    console.log("i", i);
    console.log("n", n);
    console.log("n[i]", n[i]);
    console.log("this", this);
});
