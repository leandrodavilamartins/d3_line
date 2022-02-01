
const width = 900;
const height = 700; 

const svg = d3.select('#canvas').append('svg')
.attr('width', width)
.attr('height', height)

d3.csv('./dados.csv').then( incomingData => {
    const data = []
    incomingData.forEach( d => {
        let date = moment(d.date);
        return data.push({date:`${date}`, price:parseFloat(`${d.price}`)})
    })

console.log(data)
const maxy = data.map(d => d.price)

const maxDate = d3.max(data, d => d.date);
const minDate = d3.min(data, d => d.date);
const maxPrice = d3.max(maxy);


const yScale = d3.scaleLinear().domain([0,maxPrice])
const xScale = d3.scaleTime().domain([minDate,maxDate])

const yAxis = d3.axisLeft(yScale);
const xAxis = d3.axisBottom(xScale);

yScale.range([height,0]);
xScale.range([0,width]);

const chartGroup = svg.append('g')
.attr('transform', 'translate(50,50)')

const line = d3.line()
.x(d => xScale(d.date))
.y(d => yScale(parseFloat(d.price)))

chartGroup.append('path').attr('d', line(data));
chartGroup.append('g').call(xAxis);
chartGroup.append('g').call(yAxis);

})
