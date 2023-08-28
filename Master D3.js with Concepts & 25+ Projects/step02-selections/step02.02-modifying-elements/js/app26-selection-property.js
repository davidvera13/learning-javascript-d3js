// selection.property(name,value)
const labelsFor = [
    'firstName',
    'lastName',
    'gender',
    'male',
    'female',
    'notMentioned']

const labels = d3.selectAll('label');
labels.filter((d, i, n) => {

    console.log(n[i]);
    d3.select(n[i]).attr('for', labelsFor[i]);
})

// labels.filter(function(d, i) {
//     console.log(this);
//     const d3label = d3.select(this);
//     d3label.attr('for', labelsFor[i]);
// })

d3.select('#firstName')
    .property('type', 'text') // we can use attr()
    .property('placeholder', 'john');
console.log(d3.select('#firstName').property('placeholder'));


d3.select('#lastName')
    .property('type', 'text') // we can use attr()
    .property('placeholder', 'doe');
console.log(d3.select('#lastName').property('placeholder'));


d3.select('#submit')
    .property('type', 'submit') // we can use attr()
    .property('value', 'Submit !')
console.log(d3.select('#submit').property('value'));


const genderInputs = d3.selectAll('div input');
genderInputs.property('type', 'checkbox');
const genders = ['male', 'female', 'notMentioned'];
genderInputs.property('value', (d,i) => genders[i]);

const notMentioned = d3.select('#notMentioned');
notMentioned.property('checked', true)


// submit form and get submitted vaiues
document.querySelector('#formSubmit')
    .addEventListener('submit', (evt) => {
        evt.preventDefault();
        console.log("FORM SUBMITTED...")
        console.log('\t> ' + d3.select('#firstName').property('placeholder'));
        console.log('\t> ' + d3.select('#lastName').property('placeholder'));
        console.log('\t> ' + d3.select('#male').property('checked'));
        console.log('\t> ' + d3.select('#female').property('checked'));
        console.log('\t> ' + d3.select('#notMentioned').property('checked'));



    })