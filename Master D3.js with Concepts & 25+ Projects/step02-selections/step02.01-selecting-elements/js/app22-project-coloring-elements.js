document.querySelector(".buttons").addEventListener('click', (event) => {
    const buttonPressed = event.target.value;
    if(buttonPressed !== undefined) {
        console.log(event);
        console.log(buttonPressed);
        selectingElement(buttonPressed);
    }
});

let selectingElement = (buttonPressed) => {
    document.querySelector('div#output').firstElementChild.innerText = `Button Pressed : ${buttonPressed}`
    const [red, green, blue] = rgbCodes();          // array destructuring
    console.log(red);
    console.log(green);
    console.log(blue);

    let elements, circles, squares, rectangles;
    if(buttonPressed === 'select') {
        circles = d3.select('.circle');
        squares = d3.select('.square');
        rectangles = d3.select('.rectangle');
    } else {
        circles = d3.selectAll('.circle');
        squares = d3.selectAll('.square');
        rectangles = d3.selectAll('.rectangle');
    }

    console.log('circles', circles);
    console.log('squares', squares);
    console.log('rectangles', rectangles);

    // grouping selections
    elements = [ circles, squares, rectangles ];
    console.log(elements);

    // loop
    elements.forEach(elt => {
        elt.filter((d, i, n) => {
            if (buttonPressed === 'filter-odd') {
                if (i % 2 === 0) {
                    n[i].style.fill = `rgba(${red},${green},${blue},${(i + 1) * 0.25})`;
                }
            }
            else if (buttonPressed === 'filter-even') {
                if (i % 2 !== 0) {
                    n[i].style.fill = `rgba(${red},${green},${blue},${(i + 1) * 0.25})`;
                }
            }
            else {
                n[i].style.fill = `rgba(${red},${green},${blue},${(i + 1) * 0.25})`;
            }
        })
    })
}

let rgbCodes = () =>  [Math.random() * 255, Math.random() * 255, Math.random() * 255];

