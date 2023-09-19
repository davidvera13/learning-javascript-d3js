// d3.scaleTime()
let timeScale = d3.scaleTime();
console.log('timeScale', timeScale);
console.log('timeScale.domain()', timeScale.domain());
console.log('timeScale.range()', timeScale.range());
console.log('timeScale(2000, 0)', timeScale(2000, 0));          // returns -10956.958310185186
console.log('timeScale(2000, 0)', timeScale(2000, 0, 31));      // returns -10956.958310185186
console.log('timeScale(2000, 0)', timeScale(new Date(2000, 0, 31)));


// create a new date
let now = new Date();
console.log('now', now);

// format date: months are 0 indexed base
let formattedDate = new Date(2023, 5, 12, 30, 36, 20, 450);
console.log('formattedDate', formattedDate)

console.log('define timeScale domain ')
timeScale.domain([new Date(2000, 0, 1), new Date(2000, 0, 31)])
timeScale.range([1, 31])
console.log('timeScale.domain()', timeScale.domain());
console.log('timeScale.range()', timeScale.range());
console.log('timeScale(new Date(2000, 0, 1))', timeScale(new Date(2000, 0, 1)));
console.log('timeScale(new Date(2000, 0, 31))', timeScale(new Date(2000, 0, 1)));
console.log('timeScale(new Date(2000, 2, 30))', timeScale(new Date(2000, 0, 1)));


console.log('define timeScale invert ');
console.log('timeScale.invert(1)', timeScale.invert(1));
console.log('timeScale.invert(26)', timeScale.invert(26));

console.log('define timeScale rangeRound > timeScale.rangeRound([1, 10]) ');
timeScale.rangeRound([1, 10])
console.log('timeScale(new Date(2000, 0, 21))', timeScale(new Date(2000, 0, 21)));
console.log('timeScale(new Date(2000, 0, 31))', timeScale(new Date(2000, 0, 31)));
console.log('timeScale(new Date(2000, 0, 31)) > extrapolation', timeScale(new Date(2000, 5, 30)));

console.log('define timeScale clamp (no extrapolation)');
timeScale.clamp(true);
console.log('timeScale(new Date(2000, 0, 21))', timeScale(new Date(2000, 0, 21)));
console.log('timeScale(new Date(2000, 0, 31))', timeScale(new Date(2000, 0, 31)));
console.log('timeScale(new Date(2000, 0, 31))', timeScale(new Date(2000, 5, 30)));

console.log('define timeScale interpolate');
let color =  d3.scaleTime()
    .domain([new Date(2000, 0, 1), new Date(2000, 0, 31)])
    .range(['yellow', 'green'])
    .interpolate(d3.interpolateHcl);
console.log('color', color);
console.log('color(new Date(2000, 0, 21))', color(new Date(2000, 0, 21)));
console.log('color(new Date(2000, 4, 25))', color(new Date(2000, 0, 3)));
console.log('color(new Date(2000, 9, 17))', color(new Date(2000, 0, 14)));

console.log('ticks(count(optional)');
timeScale.ticks();
console.log('timeScale.ticks()', timeScale.ticks());
console.log('timeScale.ticks()', timeScale.ticks(5));


console.log('ticks(interval)');
// timeScale.ticks(d3.timeDay.every(1));
console.log('timeScale.ticks(d3.timeDay.every(1))', timeScale.ticks(d3.timeDay.every(1)));
console.log('timeScale.ticks(d3.timeWeek.every(1))', timeScale.ticks(d3.timeWeek.every(1)));
console.log('timeScale.ticks(d3.timeFriday.every(1))', timeScale.ticks(d3.timeFriday.every(1)));

console.log('tickFormat(count, specifier(optional))');
let xTicks = timeScale.ticks(7);
let xTickFormat = timeScale.tickFormat(7, '%Y')     // %B for month, %d fpr day, %a
xTicks.map(xTickFormat);
console.log(xTicks.map(xTickFormat));

xTickFormat = timeScale.tickFormat(7, '%b %d')     // %B for month, %d fpr day, %a
xTicks.map(xTickFormat);
console.log(xTicks.map(xTickFormat));


console.log('tickFormat(interval, specifier(optional))');
xTickFormat = timeScale.tickFormat(d3.timeDay.every(1), '%b %d')     // %B for month, %d fpr day, %a
xTicks.map(xTickFormat);
console.log(xTicks.map(xTickFormat));

console.log('nice.count(optional)');
console.log(timeScale.nice(11).ticks());

// copy
console.log('copy');
let copy = timeScale.copy();
console.log('timeScale(new Date(2000, 0, 21))', timeScale(new Date(2000, 0, 21)));
console.log('timeScale(new Date(2000, 0, 31))', timeScale(new Date(2000, 0, 31)));
console.log('timeScale(new Date(2000, 0, 31))', timeScale(new Date(2000, 5, 30)));

console.log('copy(new Date(2000, 0, 21))', copy(new Date(2000, 0, 21)));
console.log('copy(new Date(2000, 0, 31))', copy(new Date(2000, 0, 31)));
console.log('copy(new Date(2000, 0, 31))', copy(new Date(2000, 5, 30)));

console.log('equals', copy === timeScale);



