// selection.html(value)

let h1Elt = d3.select('h1').html();
// we show the element content
console.log(h1Elt);

h1Elt = d3.select('h1').html("Selection HTML: working on current page");

let divElt = d3.select('div').html("<h3>We pass full HTML code in select</h3>");
console.log(divElt)

let removeContent = d3.select('#toclean').html();
console.log(removeContent);

removeContent = d3.select('#toclean').html(null);
console.log(removeContent);

d3.select('#toclean').html(null);

d3.select('#toclean').html(() => {
    let content = '';
    for (let i = 0; i < 5; i++) {
        content += `<p>paragraph #${i+1}</p>`
    }
    return content;
});