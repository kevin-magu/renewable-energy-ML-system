// Sample dataset for the first line graph
const yourFirstDataset = [
    { year: 1975, value: 400.29 },
    { year: 1976, value: 405.53 },
    { year: 1977, value: 404.96 },
    { year: 1978, value: 404.06 },
    { year: 1979, value: 409.64 },
    { year: 1980, value: 412.2 },
    { year: 1981, value: 417.06 },
    { year: 1982, value: 414.75 },
    { year: 1983, value: 422.04 },
    { year: 1984, value: 432.13 },
    { year: 1985, value: 441.93 },
    { year: 1986, value: 444.59 },
    { year: 1987, value: 461.17 },
    { year: 1988, value: 457.78 },
    { year: 1989, value: 460.27 },
    { year: 1990, value: 474 },
    { year: 1991, value: 492.48 },
    { year: 1992, value: 499.99 },
    { year: 1993, value: 481.41 },
    { year: 1994, value: 473.11 },
    { year: 1995, value: 467.54 },
    { year: 1996, value: 471.02 },
    { year: 1997, value: 476.66 },
    { year: 1998, value: 477 },
    { year: 1999, value: 480.88 },
    { year: 2000, value: 476.13 },
    { year: 2001, value: 486.61 },
    { year: 2002, value: 484.49 },
    { year: 2003, value: 474.4 },
    { year: 2004, value: 477.55 },
    { year: 2005, value: 474.8 },
    { year: 2006, value: 479.44 },
    { year: 2007, value: 484.22 },
    { year: 2008, value: 478.97 },
    { year: 2009, value: 478.22 },
    { year: 2010, value: 468.52 },
    { year: 2011, value: 462.97 },
    { year: 2012, value: 453.04 },
    { year: 2013, value: 447.91 },
    { year: 2014, value: 447.58 },
    { year: 2015, value: 449.15 },
    { year: 2016, value: 449.76 },
    { year: 2017, value: 449.52 },
    { year: 2018, value: 444.44 },
    { year: 2019, value: 451.16 }
    // Add more data points here
];

// Sample dataset for the second line graph
// Sample dataset for the second line graph with gradually increasing values
const yourSecondDataset = [];
let value = 30;

for (let year = 1975; year <= 2019; year++) {
    yourSecondDataset.push({ year, value });
    value += Math.random() * 10; // Increment the value with a random amount
}


// Set up dimensions for the graphs
const width = 1300;
const height = 300;
const margin = { top: 20, right: 30, bottom: 40, left: 50 };

// Create an SVG element for the first graph
const svg1 = d3.select('#chart-container1')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

// Create an SVG element for the second graph
const svg2 = d3.select('#chart-container2')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

// Create scales, axes, and line generator for the line graphs
const xScale = d3.scaleBand()
    .domain(yourFirstDataset.map(d => d.year))
    .range([margin.left, width - margin.right])
    .padding(0.1);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(yourFirstDataset, d => d.value)])
    .nice()
    .range([height - margin.bottom, margin.top]);

const line = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.value));

// Create the line chart for the first graph
svg1.append('g')
    .selectAll('path')
    .data([yourFirstDataset])
    .join('path')
    .attr('d', d => line(d))
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 2);

// Add axes to the first graph
svg1.append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale));

svg1.append('g')
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(yScale));

// Create scales, axes, and line generator for the second line graph
const xScale2 = d3.scaleBand()
    .domain(yourSecondDataset.map(d => d.year))
    .range([margin.left, width - margin.right])
    .padding(0.1);

const yScale2 = d3.scaleLinear()
    .domain([0, d3.max(yourSecondDataset, d => d.value)])
    .nice()
    .range([height - margin.bottom, margin.top]);

const line2 = d3.line()
    .x(d => xScale2(d.year))
    .y(d => yScale2(d.value));

// Create the line chart for the second graph
svg2.append('g')
    .selectAll('path')
    .data([yourSecondDataset])
    .join('path')
    .attr('d', d => line2(d))
    .attr('fill', 'none')
    .attr('stroke', 'darkred')
    .attr('stroke-width', 2);

// Add axes to the second graph
svg2.append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale2));

svg2.append('g')
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(yScale2));

// Add text on axis for the first graph
// Add text on axis for the first graph
// Add text on axis for the first graph
svg1.append('text')
    .attr('x', width / 2)
    .attr('y', height - margin.bottom + 35)
    .text('Year')
    .attr('text-anchor', 'middle')
    .style('fill', 'black')
    .style('font-weight', 'bold');

svg1.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', 15 - margin.left)
    .text('Number of Patients')
    .attr('text-anchor', 'middle')
    .style('fill', 'black')
    .style('font-weight', 'bold');



// Add text on axis for the second graph (similar to the first graph)
svg2.append('text')
    .attr('x', width / 2)
    .attr('y', height - margin.bottom + 35)
    .text('Year')
    .attr('text-anchor', 'middle')
    .style('fill', 'black')
    .style('font-weight', 'bold');

svg2.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', 30 - margin.left)
    .text('Number of Patients')
    .attr('text-anchor', 'middle')
    .style('fill', 'black')
    .style('font-weight', 'bold');

svg2.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', width / 2)
    .attr('x', height - margin.bottom + 35)
    .text('Year')
    .attr('text-anchor', 'middle')
    .style('fill', 'black')
    .style('font-weight', 'bold');
