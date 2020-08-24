import * as d3 from 'd3'
import { object } from 'fast-check';

function plotForOperation(datas, operation, width, height, svg) {
  const parseTime = d3.timeParse('%Y-%m-%d');

  datas.forEach((data) => {
    data.date = parseTime(data.date);
    if (data[operation]) {
      data.valid = data[operation].valid;
      data.inValid = data[operation].inValid;
      data.total = data[operation].valid + data[operation].inValid;
    }
  });

  const data = datas;
  const columns = ['date', 'inValid', 'valid', 'total'];

  const slices = columns.slice(1).map((id) => ({
    id,
    values: data.map((d) => ({
      date: d.date,
      measurement: +d[id],
    })),
  }));

  const xScale = d3.scaleTime().range([0, width]);
  const yScale = d3.scaleLinear().rangeRound([height, 0]);
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  xScale.domain(d3.extent(data, (d) => d.date));
  yScale.domain([0, 250]);
  // yScale.domain([(0), d3.max(slices, function(c) {
  //     return d3.max(c.values, function(d) {
  //         return d.measurement + 4; });
  //         })
  //     ]);
  function getColor(d) {
    let colorCode = 1;
    if (d.id === 'valid') colorCode += 0;
    else if (d.id === 'inValid') colorCode += 1;
    else if (d.id === 'total') colorCode += 2;

    if (operation === 'muliplication') return (colorCode * 3);
    return (colorCode * 2);
  }

  const yaxis = d3.axisLeft()
    .ticks((slices[0].values).length)
    .scale(yScale);

  const xaxis = d3
    .axisBottom()
    .ticks(d3.timeDay.every(1))
    .tickFormat(d3.timeFormat('%Y-%m-%d'))
    .scale(xScale);

  svg.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0, ${height})`)
    .call(xaxis)
    .selectAll('text')
    .attr('y', 0)
    .attr('x', 9)
    .attr('dy', '.35em')
    .attr('transform', 'rotate(90)')
    .style('text-anchor', 'start');

  svg.append('g')
    .attr('class', 'axis')
    .call(yaxis)
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('dy', '.75em')
    .attr('y', 6)
    .style('text-anchor', 'end')
    .text('Frequency');

  const line = d3.line()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.measurement));

  const lines = svg.selectAll('lines')
    .data(slices)
    .enter()
    .append('g');

  lines.append('path')
    .attr('class', 'line')
    .style('stroke', (d) => color(getColor(d)) )
    .attr('d', (d) => line(d.values));

  lines.append('text')
    .attr('class', 'serie_label')
    .datum((d) => ({
      id: d.id,
      value: d.values[d.values.length - 1],
    }))
    .attr('transform', (d) => `translate(${xScale(d.value.date) - 150},${yScale(d.value.measurement) + 5})`)
    .attr('x', 5)
    .text((d) => operation + '_' + d.id);
}



/*
* studentName comes from   document.getElementById('yourName').value
*/
export default function plotGraph({ width, height }, svg, appreciation) {
  const keys = appreciation.map(data => Object.keys(data)).flat().filter(key => key !== 'date');
  const operations = Array.from(new Set(keys));
  operations.forEach(operation =>  {
    const datas = JSON.parse(JSON.stringify(appreciation)).filter((data) => !!data[operation]);
    const clonedData = [...datas];
    clonedData.forEach((data) => {
      Object.keys(data)
        .filter(key => key !=='date' && key !== operation)
        .forEach(key => delete data[key])
    });
    plotForOperation(clonedData, operation, width, height, svg);
  });
  
}