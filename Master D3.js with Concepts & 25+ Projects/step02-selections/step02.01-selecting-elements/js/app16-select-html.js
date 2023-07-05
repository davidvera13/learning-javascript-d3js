// this is a selection from html page
/**
 * select html element
 */
let h1Elt = d3.select("h1")
console.log("h1Elt")
console.log(h1Elt)

console.log("h1Elt._groups");
console.log(h1Elt._groups);
console.log("h1Elt._groups[0]");
console.log(h1Elt._groups[0]);
console.log("h1Elt._groups[0][0]");
console.log(h1Elt._groups[0][0]);

console.log("h1Elt._parents");
console.log(h1Elt._parents);
console.log("h1Elt._parents[0]");
console.log(h1Elt._parents[0]);

/**
 * Selecting svg elements
 */

let firstSvg = d3.select("svg");
console.log("firstSvg")
console.log(firstSvg)

console.log("firstSvg._groups")
console.log(firstSvg._groups)

console.log("firstSvg._groups[0]")
console.log(firstSvg._groups[0])


let secondSvgById = d3.select("svg#rectangles");
console.log("secondSvgById")
console.log(secondSvgById)

console.log("secondSvgById._groups")
console.log(secondSvgById._groups)

console.log("secondSvgById._groups[0]")
console.log(secondSvgById._groups[0])


let firstSvgJustById = d3.select("#circle");
console.log("firstSvgJustById")
console.log(firstSvgJustById)

console.log("firstSvgJustById._groups")
console.log(firstSvgJustById._groups)

console.log("firstSvgJustById._groups[0]")
console.log(firstSvgJustById._groups[0])


let secondSvgNth = d3.select("svg:nth-of-type(2)");
console.log("secondSvgNth")
console.log(secondSvgNth)

console.log("secondSvgNth._groups")
console.log(secondSvgNth._groups)

console.log("secondSvgNth._groups[0]")
console.log(secondSvgNth._groups[0])


let firstCircle = d3.select("circle");
console.log("firstCircle")
console.log(firstCircle)

console.log("firstCircle._groups")
console.log(firstCircle._groups)

console.log("firstCircle._groups[0]")
console.log(firstCircle._groups[0])


let secondCircle = d3.select("circle:nth-of-type(2");
console.log("secondCircle")
console.log(secondCircle)

console.log("secondCircle._groups")
console.log(secondCircle._groups)

console.log("secondCircle._groups[0]")
console.log(secondCircle._groups[0])



let firstRect = d3.select("rect");
console.log("firstRect")
console.log(firstRect)

console.log("firstRect._groups")
console.log(firstRect._groups)

console.log("firstRect._groups[0]")
console.log(firstRect._groups[0])


let secondRect = d3.select("rect:nth-of-type(2");
console.log("secondRect")
console.log(secondRect)

console.log("secondRect._groups")
console.log(secondRect._groups)

console.log("secondRect._groups[0]")
console.log(secondRect._groups[0])

/**
 * sub select
 */
let subSelect = secondSvgById.select("rect");
console.log("subSelect")
console.log(subSelect)

console.log("subSelect._groups")
console.log(subSelect._groups)

console.log("subSelect._groups[0]")
console.log(subSelect._groups[0])

/**
 * using function in a select
 */

secondSvgById.select(function (d, i, n) {
    console.log("d", d);        // current data bounded to element
    console.log("i", i);        // index of the current element
    console.log("n", n);        // bode / group of the element
    console.log("n[i]", n[i]);  // current element

})