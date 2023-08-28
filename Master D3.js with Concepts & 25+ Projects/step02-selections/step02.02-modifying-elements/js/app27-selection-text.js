// selection.text(value)
// no value displayed because no value passed
let txt1 = d3.select('text').text();
console.log(txt1);

txt1 = d3.select('text').text("Waow");
console.log("Waow > " + d3.select('text').text());
console.log(txt1);

txt1 = d3.select('text').text(null);
console.log("null > " + d3.select('text').text());
console.log(txt1);

let allTxts = d3.selectAll('text').text('D3 is cool!')
console.log("D3 is cool! > " + d3.select('text').text());
console.log(allTxts);

allTxts.text((d, i, n) => `This is my line ${i+1} text :: node ${n[i]}`);