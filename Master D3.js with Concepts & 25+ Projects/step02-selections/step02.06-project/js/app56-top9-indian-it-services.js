const list = d3.select('#list').selectAll('h3');

// showing company information in top of the table

list.on('click', evt => {
    indian9IT.forEach(company => {
        // check if selected
        if(evt.target.className === company.code) {
            // code: 'tcs' for example
            d3.select('#company')
                .html(`Company :<span>${company.name}</span>`);
            d3.select('#revenue').node().innerHTML =
                `Revenue (INR Mn): <span>${company.revenue.toLocaleString()}</span>`;
            d3.select('#marketcap').node().innerHTML =
                `Market Cap (INR Mn): <span>${company.marketCap.toLocaleString()}</span>`;
            d3.select('#employees').node().innerHTML =
                `Employees: <span>${company.employees.toLocaleString()}</span>`;
            d3.select('#salesgrowth').node().innerHTML =
                `Sales growth (3 years): <span>${company.salesGrowth} % </span>`;

            d3.select('#fb h2').node().innerHTML =
                'Facebook : ';
            d3.select('#fb p').node().innerHTML = company.fb;

            d3.select('#tw h2').node().innerHTML =
                'Twitter : ';
            d3.select('#tw p').node().innerHTML = company.tw;

            d3.select('#li h2').node().innerHTML =
                'Linkedin : ';
            d3.select('#li p').node().innerHTML = company.li;
        }
    });
});

// handling charts dimension
d3.select('#charts').selectAll('div .chartarea')
    .append('svg')
    .attr('width', 500)
    .attr('height', 400)
    .attr('viewBox', '0 -450 500 450');

const SVG_WIDTH = d3.select('svg').attr('width');
const SVG_HEIGHT = d3.select('svg').attr('width');

// Track the checkboxes
const listCheck = d3.select('#list')
    .selectAll('input');

let checkedValues = [];
listCheck.on('click', () => {
    listCheck.each((d, i, n) => {
        checkedValues[i] = d3.select(n[i]).property('checked');
    });
    let checkedCompanies = [];
    for(let i = 0; i < checkedValues.length; i++) {
        if (checkedValues[i]) {
            checkedCompanies.push(indian9IT[i]);
        }
    }
    console.log('checkedValues', checkedValues);
    console.log('checkedCompanies', checkedCompanies);

    updateRevenueChart(checkedCompanies);
    updateMarketCapChart(checkedCompanies);
    updateEmployeeChart(checkedCompanies);
    updateGrowthChart(checkedCompanies);
})


// set title
const setTitle = (selection , title) => {
    d3.select(selection).select('.charttitle')
        .text(title);
};

// reset title
const resetTitle = (selection) => {
    d3.select(selection).select('.charttitle')
        .html(null);
};


// revenue
const updateRevenueChart = (companies) => {
    if(companies.length === 0) {
        resetTitle('#revenuechart');
        resetChart('#revenuechart');
        resetChartText('#revenuechart')
    } else {
        setTitle('#revenuechart', 'Revenue (INR Mn)');
        setBarChart('#revenuechart', companies, 8, 'revenue');
        setVerticalBarText('#revenuechart', companies, 'revenue');
    }
}

// market cap
const updateMarketCapChart = (companies) => {
    if(companies.length === 0) {
        resetTitle('#marketcapchart');
        resetChart('#marketcapchart');
        resetChartText('#marketcapchart')
    } else {
        setTitle('#marketcapchart', 'Market Cap (INR Mn)');
        setBarChart('#marketcapchart', companies, 42, 'revenue');
        setVerticalBarText('#marketcapchart', companies, 'revenue');
    }
}

// employees
const updateEmployeeChart = (companies) => {
    if(companies.length === 0) {
        resetTitle('#employeechart');
        resetChart('#employeechart');
        resetChartText('#employeechart')
    } else {
        setTitle('#employeechart', 'Employees');
        setBarChart('#employeechart', companies, 3, 'revenue');
        setVerticalBarText('#employeechart', companies, 'revenue');
    }
}

// growth rate
const updateGrowthChart = (companies) => {
    if (companies.length === 0) {
        resetTitle('#growthchart');
        resetChart('#growthchart');
        resetChartText('#growthchart');
    } else {
        setTitle('#growthchart', 'Sales Growth Rate for 3 years (%)');
        setBarChart('#growthchart', companies, 0.0002, 'salesGrowth');
        setVerticalBarText('#growthchart', companies, 'salesGrowth');
    }
}

// reset chart
const resetChart = (selection) => {
    d3.select(selection)
        .select('svg')
        .selectAll('rect')
        .remove();
};


// reset chart text
const resetChartText = (selection) => {
    d3.select(selection)
        .select('svg')
        .selectAll('text')
        .remove();
};

// set vertical bars
const setBarChart = (selection, companies, factor, param) => {
    d3.select(selection)
        .select('svg')
        .selectAll('rect')
        .data(companies)
        .join('rect')
        .each((d, i, n) => {
            // if we have 3 companies selected, we build 3 cols
            const elt = d3.select(n[i]);
            elt
                .attr('x', (SVG_WIDTH / (2 * companies.length + 1)) * (2 * i + 1))
                .attr('y', -d[param] / (SVG_HEIGHT * factor))
                .attr('width', SVG_WIDTH / (2 * companies.length + 1))
                .attr('height', (d[param] / (SVG_HEIGHT * factor)))
                .style('fill', d.color)
                .attr('rx', '5')
                .attr('ry', '5')
        })
};

// set vertical bar text
const setVerticalBarText = (selection, companies, param) => {
    d3.select(selection)
        .select('svg')
        .selectAll('text')
        .data(companies)
        .join('text')
        .each((d, i, n) => {
            const elem = d3.select(n[i]);
            elem.attr('x', (SVG_WIDTH / (2 * companies.length + 1)) * (2 * i + 1) - 10)
                .attr('y', '0')
                .text(d => d.code.toUpperCase() + ' | ' + d[param].toLocaleString())
                .style('fill', 'darkslategray')
                .style('text-anchor', 'end')
                .style('font-size', '12')
                .style('font-weight', '500')
                .style('writing-mode', 'tb')
        });
}
