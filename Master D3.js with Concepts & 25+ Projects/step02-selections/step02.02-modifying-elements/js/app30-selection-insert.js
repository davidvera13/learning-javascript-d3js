let svg1 = d3.select("#svg1");
let txt1 = svg1.insert('text')
    .text('Inserted text using text method')
    .attr('x', 13)
    .attr('y', 40)
    .attr('fill', 'pink')
console.log(txt1);

let txt2 = svg1.insert('text', 'text')
    .text('Inserted text using text method using before')
    .attr('x', 13)
    .attr('y', 20)
    .attr('fill', 'blue')
console.log(txt2);

let txt3 = svg1.insert('text')
    .text('Inserted text using text method as last child')
    .attr('x', 13)
    .attr('y', 60)
    .attr('fill', 'blue')
console.log(txt2);


// insert dynamically
let svg2 = d3.select("#svg2");

for(let i = 0; i < 3; i++) {
    svg2.insert(
        () => document.createElementNS('http://www.w3.org/2000/svg', 'text'),
        function() {
            console.log(this.firstElementChild);
            return this.firstElementChild;
        })
        .text(`index : ${i}`)
        .attr('x', `${i * 20 + 20}`)
        .attr('y', `${i * 20 + 20}`)
}
