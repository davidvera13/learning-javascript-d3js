// merge is based on index
// merge pattern: merged = sel1.merge(sel2)

// both selection have same number of circles
let allSvg1 = d3.selectAll('#svg1 circle');
let allSvg2 = d3.selectAll('#svg2 circle');

console.log("allSvg1");
console.log(allSvg1);
console.log("allSvg2");
console.log(allSvg2);

let oddsCircles = allSvg1.select(function (d, i, n) {
    console.log("d", d);
    console.log("i", i);
    console.log("n", n);
    console.log("n[i]", n[i]);
    console.log("this", this);
    if(i%2 === 0) {
        this.style.fill = 'indianred';
        return this;
    }
    return null;
});

// it returns an array with 5 elements but 2 are empty
console.log("oddsCircles");
console.log(oddsCircles);


let evensCircles = allSvg1.select(function (d, i, n) {
    console.log("d", d);
    console.log("i", i);
    console.log("n", n);
    console.log("n[i]", n[i]);
    console.log("this", this);
    if(i%2 !== 0) {
        this.style.fill = 'pink';
        return this;
    }
    return null;
});

// it returns an array with 5 elements but 3 are empty
console.log("evensCircles");
console.log(evensCircles);

let merged = evensCircles.merge(oddsCircles)
// we retrieve 5 elements and empty elements  are replaced by values from second selection
console.log("merged");
console.log(merged);

let mergedSvg = allSvg1.merge(allSvg2);
// we get all elements from alSvg1 only
console.log("mergedSvg");
console.log(mergedSvg);





let oddsSvg2Circles = allSvg2.select(function (d, i, n) {
    console.log("d", d);
    console.log("i", i);
    console.log("n", n);
    console.log("n[i]", n[i]);
    console.log("this", this);
    if(i%2 === 0) {
        this.style.fill = 'green';
        return this;
    }
    return null;
});

// it returns an array with 5 elements but 2 are empty
console.log("oddsSvg2Circles");
console.log(oddsSvg2Circles);


let evensSvg2Circles = allSvg2.select(function (d, i, n) {
    console.log("d", d);
    console.log("i", i);
    console.log("n", n);
    console.log("n[i]", n[i]);
    console.log("this", this);
    if(i%2 !== 0) {
        this.style.fill = 'blue';
        return this;
    }
    return null;
});

// it returns an array with 5 elements but 3 are empty
console.log("evensSvg2Circles");
console.log(evensSvg2Circles);

let mergedSvg2 = oddsSvg2Circles.merge(evensSvg2Circles)
// we retrieve 5 elements and empty elements  are replaced by values from second selection
console.log("mergedSvg2");
console.log(mergedSvg2);

// mixing merges
let mixMerged = oddsSvg2Circles.merge(evensCircles)
// we retrieve 5 elements from 2 different svg
console.log("mixMerged");
console.log(mixMerged);

// mixing merges
let otherMixMerged = evensSvg2Circles.merge(oddsCircles)
// we retrieve 5 elements from 2 different svg
console.log("otherMixMerged");
console.log(otherMixMerged);