let allCircles = d3.selectAll('circle');
console.log("allCircles");
console.log(allCircles);

// filter operation
let circleOddSelection = allCircles.filter(':nth-child(odd)');
console.log("circleOddSelection");
console.log(circleOddSelection);

let circleEvenSelection = allCircles.filter(':nth-child(even)');
console.log("circleEvenSelection");
console.log(circleEvenSelection);

let circleOddClassNameSelection = allCircles.filter('.odd');
console.log("circleOddClassNameSelection");
console.log(circleOddClassNameSelection);

let circleEvenClassNameSelection = allCircles.filter('.even');
console.log("circleEvenClassNameSelection");
console.log(circleEvenClassNameSelection);

// using function
console.log("Using function");
allCircles.filter((d, i, n) => {
    console.log("d", d);
    console.log("i", i);
    console.log("n", n);
    console.log("n[i]", n[i]);
    console.log("this", this);
});

// let do change content ...
allCircles.filter(function (d, i, n) {
    console.log(this);
    this.style.fill = 'dodgerblue';
});

console.log("***************")
allCircles.filter( (d, i, n) => {
    n[i].style.fill = 'red';
});

allCircles.filter( (d, i, n) => {
    i%2 === 0 ? n[i].style.fill = 'orange': n[i].style.fill = 'pink';
});


allCircles.filter( (d, i, n) => {
    i%2 === 0 ? n[i].style.fill = 'pink': n[i].style.fill = 'orange';
    if (n[i].cx.baseVal.value > 90)
        n[i].cy.baseVal.value = 120;
});