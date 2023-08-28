// selection.clone(deep)
let svg = d3.select("svg");
let clone = svg.clone();
console.log(clone)

let deepClone = svg.clone(true);
console.log(deepClone);