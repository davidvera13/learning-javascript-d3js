// interpolate means to insert in between
// this module deals with creating in between slabs of values
// so it could be between 2 numbers, colors, strings, arrays or even deeply nested objects
// This module provides a variety of interpolation methods for blending between two values.

// the basic method is d3.interpolate(a,b)
/*
    The returned function is called an interpolator. Given a starting value a and an ending value b, it takes a parameter t in the domain [0, 1] and returns the corresponding interpolated value between a and b. An interpolator typically returns a value equivalent to a at t = 0 and a value equivalent to b at t = 1.
    this basic or generic interpolator detects not only nested objects and arrays, but also color strings and numbers embedded in strings!
*/

// d3.interpolate(a,b)
// a,b = 2 arbitrary values
// b = null, undefined or boolean, or when a cannot be coerced into the type of b, then use b
let interpolate;


interpolate = d3.interpolate(1, 10);
console.log("d3.interpolate(1, 10)", interpolate);
console.log("interpolate(0)", interpolate(0));
console.log("interpolate(0.25)", interpolate(0.25));
console.log("interpolate(0.5)", interpolate(0.5));
console.log("interpolate(0.75)", interpolate(0.75));
console.log("interpolate(1)", interpolate(1));

// return null for any value
interpolate = d3.interpolate(1, null);
console.log("d3.interpolate(1, null)", interpolate);
console.log("interpolate(0)", interpolate(0));
console.log("interpolate(0.25)", interpolate(0.25));
console.log("interpolate(0.5)", interpolate(0.5));
console.log("interpolate(0.75)", interpolate(0.75));
console.log("interpolate(1)", interpolate(1));

// return undefined for any value
interpolate = d3.interpolate(1, undefined);
console.log("d3.interpolate(1, undefined)", interpolate);
console.log("interpolate(0)", interpolate(0));
console.log("interpolate(0.25)", interpolate(0.25));
console.log("interpolate(0.5)", interpolate(0.5));
console.log("interpolate(0.75)", interpolate(0.75));
console.log("interpolate(1)", interpolate(1));

// return true for any value
interpolate = d3.interpolate(1, true);
console.log("d3.interpolate(1, null)", interpolate);
console.log("interpolate(0)", interpolate(0));
console.log("interpolate(0.25)", interpolate(0.25));
console.log("interpolate(0.5)", interpolate(0.5));
console.log("interpolate(0.75)", interpolate(0.75));
console.log("interpolate(1)", interpolate(1));


// d3.interpolate(a,b)
// If b is number, a is coerced to number then
// equivalent to
// d3.interpolateNumber(a,b)
// Returns an interpolator between the two numbers a and b.

interpolate = d3.interpolate('1', 10);
console.log("d3.interpolate('1', 10)", interpolate);
console.log("interpolate(0)", interpolate(0));
console.log("interpolate(0.25)", interpolate(0.25));
console.log("interpolate(0.5)", interpolate(0.5));
console.log("interpolate(0.75)", interpolate(0.75));
console.log("interpolate(1)", interpolate(1));


let interpolateNumber = d3.interpolateNumber(1, 10);
console.log('d3.interpolateNumber(1, 10)', interpolateNumber)
console.log("interpolateNumber(0)", interpolateNumber(0));
console.log("interpolateNumber(0.25)", interpolateNumber(0.25));
console.log("interpolateNumber(0.5)", interpolateNumber(0.5));
console.log("interpolateNumber(0.75)", interpolateNumber(0.75));
console.log("interpolateNumber(1)", interpolateNumber(1));


// d3.interpolate(a,b)
// If b is string, a is coerced to string then
// equivalent to
// d3.interpolateString(a,b)
// Returns an interpolator between the two strings a and b. The string interpolator finds numbers embedded in a and b, where each number is of the form understood by JavaScript.

interpolate = d3.interpolate(1, '10');
let interpolateString;

interpolateString = d3.interpolateString('1', '10');
console.log('d3.interpolateNumber(1, 10)', interpolateString)
console.log("interpolateString(0)", interpolateString(0));
console.log("interpolateString(0.25)", interpolateString(0.25));
console.log("interpolateString(0.5)", interpolateString(0.5));
console.log("interpolateString(0.75)", interpolateString(0.75));
console.log("interpolateString(1)", interpolateString(1));

interpolateString = d3.interpolateString('I am A', 'You are E');
console.log("d3.interpolateString('I am A', 'You are E')", interpolateString)
console.log("interpolateString(0)", interpolateString(0));
console.log("interpolateString(0.25)", interpolateString(0.25));
console.log("interpolateString(0.5)", interpolateString(0.5));
console.log("interpolateString(0.75)", interpolateString(0.75));
console.log("interpolateString(1)", interpolateString(1));


interpolateString = d3.interpolateString('I am A1', 'You are E5');
console.log("d3.interpolateString('I am A1', 'You are E5')", interpolateString)
console.log("interpolateString(0)", interpolateString(0));
console.log("interpolateString(0.25)", interpolateString(0.25));
console.log("interpolateString(0.5)", interpolateString(0.5));
console.log("interpolateString(0.75)", interpolateString(0.75));
console.log("interpolateString(1)", interpolateString(1));

// d3.interpolate(a,b)
// If b is a date, then
// equivalent to
// d3.interpolateDate(a,b)
// Returns an interpolator between the two dates a and b.

interpolate = d3.interpolate('567255', new Date(2020, 0, 31));
let interpolateDate = d3.interpolateDate(new Date(2010, 5, 31), new Date(2020, 0, 31));
console.log("d3.interpolate('567255', new Date(2020, 0, 31))", interpolate)
console.log("interpolate(0)", interpolate(0));
console.log("interpolate(0.25)", interpolate(0.25));
console.log("interpolate(0.5)", interpolate(0.5));
console.log("interpolate(0.75)", interpolate(0.75));
console.log("interpolate(1)", interpolate(1));

console.log("d3.interpolateDate(new Date(2010, 5, 31), new Date(2020, 0, 31))", interpolateDate)
console.log("interpolateDate(0)", interpolateDate(0));
console.log("interpolateDate(0.25)", interpolateDate(0.25));
console.log("interpolateDate(0.5)", interpolateDate(0.5));
console.log("interpolateDate(0.75)", interpolateDate(0.75));
console.log("interpolateDate(1)", interpolateDate(1));


// d3.interpolate(a,b)
// If b is generic array, then
// equivalent to
// d3.interpolateArray(a,b)
// Returns an interpolator between the two arrays of numbers a and b.

interpolate = d3.interpolate('567255', [10, 20, 30]);
let interpolateArray = d3.interpolateArray([56, 72, 55], [10, 20, 30]);

console.log("d3.interpolate('567255', [10, 20, 30]", interpolate)
console.log("interpolate(0)", interpolate(0));
console.log("interpolate(0.25)", interpolate(0.25));
console.log("interpolate(0.5)", interpolate(0.5));
console.log("interpolate(0.75)", interpolate(0.75));
console.log("interpolate(1)", interpolate(1));

console.log(" d3.interpolateArray([56, 72, 55], [10, 20, 30])", interpolateDate)
console.log("interpolateArray(0)", interpolateArray(0));
console.log("interpolateArray(0.25)", interpolateArray(0.25));
console.log("interpolateArray(0.5)", interpolateArray(0.5));
console.log("interpolateArray(0.75)", interpolateArray(0.75));
console.log("interpolateArray(1)", interpolateArray(1));

// d3.interpolate(a,b)
// if a and b are 2 objects
// Returns an interpolator between the two objects a and b. Internally, an object template is created that has the same properties as b. For each property in b, if there exists a corresponding property in a, a generic interpolator is created for the two elements using interpolate. If there is no such property, the static value from b is used in the template.
interpolate = d3.interpolate({ value: 10 }, { value: 20 });
let interpolateObject = d3.interpolateObject({ value: 10 }, { value: 20 })


console.log("d3.interpolate({ value: 10 }, { value: 20 })", interpolate)
console.log("interpolate(0)", interpolate(0));
console.log("interpolate(0.25)", interpolate(0.25));
console.log("interpolate(0.5)", interpolate(0.5));
console.log("interpolate(0.75)", interpolate(0.75));
console.log("interpolate(1)", interpolate(1));

console.log("d3.interpolateObject({ value: 10 }, { value: 20 })", interpolateObject)
console.log("interpolateObject(0)", interpolateObject(0));
console.log("interpolateObject(0.25)", interpolateObject(0.25));
console.log("interpolateObject(0.5)", interpolateObject(0.5));
console.log("interpolateObject(0.75)", interpolateObject(0.75));
console.log("interpolateObject(1)", interpolateObject(1));

// d3.interpolate(a,b)
// If b is a color, or a string coercible to color then
// equivalent to
// d3.interpolateRgb(a,b)
// Returns an RGB color space interpolator between the two colors a and b. The colors a and b need not be in RGB; they will be converted to RGB. Output is RGB string

interpolate = d3.interpolate('#255', 'Blue');
let interpolateRgb = d3.interpolateRgb('Red', 'Blue');

console.log("d3.interpolate('#255', 'Blue')", interpolate)
console.log("interpolate(0)", interpolate(0));
console.log("interpolate(0.25)", interpolate(0.25));
console.log("interpolate(0.5)", interpolate(0.5));
console.log("interpolate(0.75)", interpolate(0.75));
console.log("interpolate(1)", interpolate(1));

console.log("d3.interpolateRgb('Red', 'Blue')", interpolateRgb)
console.log("interpolateRgb(0)", interpolateRgb(0));
console.log("interpolateRgb(0.25)", interpolateRgb(0.25));
console.log("interpolateRgb(0.5)", interpolateRgb(0.5));
console.log("interpolateRgb(0.75)", interpolateRgb(0.75));
console.log("interpolateRgb(1)", interpolateRgb(1));


// d3.interpolateHsl(a,b)
// Returns an HSL color space interpolator between the two colors a and b. The colors a and b need not be in HSL;
// they will be converted to HSL


interpolate = d3.interpolate('#255', 'Blue');
let interpolateHsl = d3.interpolateHsl('Red', 'Blue');

console.log("d3.interpolate('#255', 'Blue')", interpolate)
console.log("interpolate(0)", interpolate(0));
console.log("interpolate(0.25)", interpolate(0.25));
console.log("interpolate(0.5)", interpolate(0.5));
console.log("interpolate(0.75)", interpolate(0.75));
console.log("interpolate(1)", interpolate(1));

console.log("d3.interpolateHsl('Red', 'Blue')", interpolateHsl)
console.log("interpolateHsl(0)", interpolateHsl(0));
console.log("interpolateHsl(0.25)", interpolateHsl(0.25));
console.log("interpolateHsl(0.5)", interpolateHsl(0.5));
console.log("interpolateHsl(0.75)", interpolateHsl(0.75));
console.log("interpolateHsl(1)", interpolateHsl(1));

// d3.interpolateLab(a, b)
// Returns an Lab color space interpolator between the two colors a and b. The colors a and b need not be in Lab;
// they will be converted to Lab
interpolate = d3.interpolate('#255', 'Blue');
let interpolateLab = d3.interpolateLab('Red', 'Blue');

console.log("d3.interpolate('#255', 'Blue')", interpolate)
console.log("interpolate(0)", interpolate(0));
console.log("interpolate(0.25)", interpolate(0.25));
console.log("interpolate(0.5)", interpolate(0.5));
console.log("interpolate(0.75)", interpolate(0.75));
console.log("interpolate(1)", interpolate(1));

console.log("d3.interpolateHsl('Red', 'Blue')", interpolateLab)
console.log("interpolateLab(0)", interpolateLab(0));
console.log("interpolateLab(0.25)", interpolateLab(0.25));
console.log("interpolateLab(0.5)", interpolateLab(0.5));
console.log("interpolateLab(0.75)", interpolateLab(0.75));
console.log("interpolateLab(1)", interpolateLab(1));

// d3.interpolateRound(a,b)
// Returns an interpolator between the two numbers a and b; the interpolator is similar to interpolateNumber, except it will round the resulting value to the nearest integer.
interpolate = d3.interpolate('1', 10);
let interpolateRound = d3.interpolateRound(1, 10);

console.log("d3.interpolate('1', '10')", interpolate)
console.log("interpolate(0)", interpolate(0));
console.log("interpolate(0.25)", interpolate(0.25));
console.log("interpolate(0.5)", interpolate(0.5));
console.log("interpolate(0.75)", interpolate(0.75));
console.log("interpolate(1)", interpolate(1));

console.log("d3.interpolateRound('Red', 'Blue')", interpolateRound)
console.log("interpolateRound(0)", interpolateRound(0));
console.log("interpolateRound(0.25)", interpolateRound(0.25));
console.log("interpolateRound(0.5)", interpolateRound(0.5));
console.log("interpolateRound(0.75)", interpolateRound(0.75));
console.log("interpolateRound(1)", interpolateRound(1));