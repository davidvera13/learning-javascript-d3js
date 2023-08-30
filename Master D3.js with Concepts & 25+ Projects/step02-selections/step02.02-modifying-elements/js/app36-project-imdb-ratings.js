// we'll display elements on 2 columns with a gap of 10 px
const divWidth = (document
    .getElementById('movieList').clientWidth / 2) - 10;

// we'll display 5 elements with a gap of 10 px between each
const divHeight = (document
    .getElementById('movieList').clientHeight - 40) / 5;

//set color pro
movieData.forEach(movie => {
    movie.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
})


// display movie names
// step 1: create all divs
movieData.forEach(movie => {
    d3.select('#movieList').append('div');
})

// step 2: add content to each list
d3.selectAll('#movieList div')
    .select((d,i,n) => {
        console.log("d", d);
        console.log("i", i);
        console.log("n", n);
        d3.select(n[i])
            .style('width', divWidth + 'px')
            .style('height', divHeight + 'px')
            .style('line-height', divHeight + 'px')
            .attr('class', 'movieSelect');
        n[i].innerText = movieData[i].name;
});


// step 3: display detail information on right side
document.querySelector('#movieList')
    .addEventListener('click', (event) => {
        const movie = event.target.innerText;
        console.log(movie);
        const movieObject = getMovieByName(movie);
        console.log(">>> " + movieObject.name);
        console.log(">>> ", movieObject);
        d3.select('#moviePost')
            .html(`
                <h2>${(movieObject.name).toUpperCase()}</h2>
                <p>Content Rating: <span>${movieObject.contentRating}</span></p>
                <p>Duration(minutes): <span>${movieObject.duration}</span></p>
                <p>Star Rating(out of 10): <span>${movieObject.starRating}</span></p> 
                <p>Total Votes: <span>${movieObject.votes}</span></p>
                <p>Gross Collection(USD Mn): <span>${movieObject.gross}</span></p>`
            );

    })

const getMovieByName = (movieName) =>
    movieData.filter(movie => movie.name === movieName)[0];


// step 4: show charts
// listening to checkbox
document.querySelector('#choiceSubmit').addEventListener('submit', (event) => {
  event.preventDefault();
  const  choiceMap = new Map();
  choiceMap.set('U', d3.select('#cbu').property('checked'));
  choiceMap.set('15', d3.select('#cb15').property('checked'));
  choiceMap.set('12A', d3.select('#cb12a').property('checked'));
  choiceMap.set('PG', d3.select('#cbpg').property('checked'));
  console.log(choiceMap);
  if(Array.from(choiceMap.values()).includes(true)) {
      document.getElementById('feedback').innerText = '';
      createSelection(choiceMap);
  }
  else {
      document.getElementById('feedback')
          .innerText = 'Select at least 1 filter criteria';
  }
});

const createSelection = (choiceMap) => {
    // creating a subset from map
    const selectedMovies = [];
    for (let [key, value] of choiceMap) {
        console.log("key: " + key + "\tvalue: " + value)
        if(value === true)
            movieData.forEach((movie) =>  {
                if(movie.contentRating === key)
                    selectedMovies.push(movie)
            })
    }
    // add index for the selected movies
    let index = 0;
    selectedMovies.forEach(function (movie) {
        movie.index = index;
        index++;
    });
    console.log(selectedMovies);
    updateContent(selectedMovies);
    updateLegend(selectedMovies);
    updateGross(selectedMovies);
    updateDuration(selectedMovies);
    updateVotes(selectedMovies);
}

const updateContent = (selectedMovies) => {
    console.log('Content');
    // initialize values for each content type
    let countU = 0;
    let count15 = 0;
    let count12A = 0;
    let countPG = 0;

    // console.log(selectedMovies);
    // reset the #cont div, because we are persisting with the click event
    d3.select('#cont').html(null);

    const uniqueSet = new Set();
    movieData.forEach(function (movie) {
        uniqueSet.add(movie.contentRating);
    });

    for (let i = 0; i < uniqueSet.size; i++) {
        d3.select('#cont').append('div');
    }
    selectedMovies.forEach(function (movie) {
        if (movie.contentRating === 'U') {
            countU += 1;
        }
        else if (movie.contentRating === '15') {
            count15 += 1;
        }
        else if (movie.contentRating === '12A') {
            count12A += 1;
        }
        else if (movie.contentRating === 'PG') {
            countPG += 1;
        }
    });
    // adding html on columns
    d3.select('#cont div:nth-child(1)')
        .html(`
      <h2>${countU}</h2>
      <p>"U" rating movie(s) selected</p>
    `);
    d3.select('#cont div:nth-child(2)')
        .html(`
      <h2>${count15}</h2>
      <p>"15" rating movie(s) selected</p>
    `);
    d3.select('#cont div:nth-child(3)')
        .html(`
      <h2>${count12A}</h2>
      <p>"12A" rating movie(s) selected</p>
    `);
    d3.select('#cont div:nth-child(4)')
        .html(`
      <h2>${countPG}</h2>
      <p>"PG" rating movie(s) selected</p>
    `);
};

// Legend creation
const updateGross = (selectedMovies) => {
    // reset
    d3.select('#gross').selectAll('text').remove();
    d3.select('#gross').selectAll('rect').remove();


    selectedMovies.forEach(movie => {
        d3.select("#gross")
            .append('rect')
            .attr('width', `${movie.gross / 2}`)
            .attr('height', '20')
            .attr('x', '0')
            .attr('y', `${movie.index * 25 + 25}`)
            .attr('fill', `${movie.color}`);

        d3.select('#gross')
            .append('text')
            .text(`${movie.gross}`)
            .attr('x', `${movie.gross / 2 + 5}`)
            .attr('y', `${movie.index * 25 + 40}`)
            .attr('fill', 'rgb(63,63,63)')
            .style('font-size', '14');
    });
    d3.select('#gross')
        .insert('text', 'rect')
        .text('Gross collections in USD Million: ')
        .attr('x', '0')
        .attr('y', '15')
        .style('font-size', '16')
        .style('font-weight', '600');

}

const updateLegend = (selectedMovies) => {
    d3.select('#legend').html(null); // reset
    selectedMovies.forEach(movie => {
        const holder = d3.select('#legend')
            .append('div');

        holder.append('div')
            .style('width', '15px')
            .style('height', '15px')
            .style('background-color', `${movie.color}`);
        holder.append('p')
            .text(`${movie.name}`);
    });
}
// Gross Collection Chart creation


// Duration Chart creation
const updateDuration = (selectedMovies) => {
    // reset
    d3.select('#dura').selectAll('text').remove();
    d3.select('#dura').selectAll('rect').remove();

    selectedMovies.forEach(function (movie) {
        // console.log(movie);
        d3.select('#dura')
            .append('rect')
            .attr('width', `${movie.duration}`)
            .attr('height', '20')
            .attr('x', '0')
            .attr('y', `${movie.index * 25 + 25}`)
            .style('fill', `${movie.color}`);
        d3.select('#dura')
            .append('text')
            .text(`${movie.duration}`)
            .attr('x', `${movie.duration + 5}`)
            .attr('y', `${movie.index * 25 + 40}`)
            .style('font-size', '14')
            .style('fill', 'rgb(63,63,63)');
    });
    d3.select('#dura')
        .insert('text', 'rect')
        .text('Duration in Minutes')
        .attr('x', '0')
        .attr('y', '15')
        .attr('fill', 'rgb(63,63,63)')
        .style('font-size', '16')
        .style('font-weight', '600')
        .style('fill', 'rgb(63,63,63)');
}

// Votes Chart creation
// using function and not lambda (no differences ...)
function updateVotes(selectedMovies) {
    console.log('votes');
    // reset
    d3.select('#votes').selectAll('text').remove();
    d3.select('#votes').selectAll('circle').remove();

    let cxValue = 0;
    let xValue = 0;
    selectedMovies.forEach(function (movie) {
        // console.log(movie);
        d3.select('#votes')
            .append('circle')
            .attr('r', `${movie.votes / 10000}`)
            .attr('cx', function () {
                cxValue = cxValue + (movie.votes / 10000) + 60;
                return cxValue;
            })
            .attr('cy', '150')
            .style('fill', `${movie.color}`);
        d3.select('#votes')
            .append('text')
            .text(`${movie.votes}`)
            .attr('text-anchor', 'middle')
            .attr('x', function () {
                xValue = xValue + (movie.votes / 10000) + 60;
                return xValue;
            })
            .attr('y', `${150 - movie.votes / 10000 - 10}`)
            .style('font-size', '14')
            .style('fill', 'rgb(63,63,63)');
    });
    d3.select('#votes')
        .insert('text', 'circle')
        .text('Number of Votes')
        .attr('x', '0')
        .attr('y', '15')
        .style('font-size', '16')
        .style('font-weight', '600')
        .style('fill', 'rgb(63,63,63)');

}