let ordinalScale = d3.scaleOrdinal();
console.log('ordinalScale', ordinalScale);
console.log('ordinalScale.domain()', ordinalScale.domain());
console.log('ordinalScale.range()', ordinalScale.range());

// setting ordinal scale
// ordinaal scale domain is optional
ordinalScale.domain([1, 2])
console.log('updating domain')
console.log('ordinalScale.domain()', ordinalScale.domain());
console.log('ordinalScale.range()', ordinalScale.range());
// result is undefined: we need range...
console.log('ordinalScale(0)', ordinalScale(0));
console.log('ordinalScale(1)', ordinalScale(1));
console.log('ordinalScale(2)', ordinalScale(2));
console.log('ordinalScale(2)', ordinalScale(3));

console.log('updating range')
ordinalScale.range(['M', 'F']);
console.log('ordinalScale(-2)', ordinalScale(-2)); // M
console.log('ordinalScale(-1)', ordinalScale(-1)); // F
console.log('ordinalScale(0)', ordinalScale(0));   // M
console.log('ordinalScale(1)', ordinalScale(1));   // M
console.log('ordinalScale(2)', ordinalScale(2));   // F
console.log('ordinalScale(3)', ordinalScale(3));   // F
console.log('ordinalScale(4)', ordinalScale(4));   // M
console.log('ordinalScale.domain() > self increased', ordinalScale.domain());


ordinalScale.domain([1, 2, 3, 4]);
ordinalScale.range(["uno", "dos", "tres"]);
console.log('ordinalScale(-2)', ordinalScale(-2)); // dos
console.log('ordinalScale(-1)', ordinalScale(-1)); // tres
console.log('ordinalScale(0)', ordinalScale(0));   // uno
console.log('ordinalScale(1)', ordinalScale(1));   // uno
console.log('ordinalScale(2)', ordinalScale(2));   // dos
console.log('ordinalScale(3)', ordinalScale(3));   // tres
console.log('ordinalScale(4)', ordinalScale(4));   // uno

let ordinalScaleCopy = ordinalScale.copy();
console.log('ordinalScaleCopy === ordinalScale', ordinalScaleCopy === ordinalScale)