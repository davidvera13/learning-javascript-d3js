// selection.exit()

let allCircles = d3.selectAll('circle');
console.log('selection: ', allCircles);

let dataRadius = [15, 15, 15];

// assign data to selection
allCircles = allCircles.data(dataRadius);
// note
// > in enter we have empty * 3
// > in exist we have empty * 3 and circle
// > the last circle has no data assigned
console.log('after data assignment: ', allCircles);

let exit = allCircles.exit();
console.log(exit);
// we will remove the last circle because no data is binded
exit.remove();

d3.selectAll('circle')
.attr('r', d => d)