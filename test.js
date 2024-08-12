// Parse the date string to a Date object
const parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S");

// Load the data
d3.csv('data.csv').then(function(data) {
    // Parse dates and create a numerical representation for crossfilter
    data.forEach(d => {
        d.date = parseDate(d.time);
        d.dateNum = d.date.getTime();
    });

    // Initialize Crossfilter
    const cf = crossfilter(data);

    // Create dimensions
    const dateDim = cf.dimension(d => d.date);
    const moduleDim = cf.dimension(d => d.selected_module);
    const functionDim = cf.dimension(d => d.function);

    // Create groups
    const dateGroup = dateDim.group(d3.timeDay);
    const moduleGroup = moduleDim.group().reduceCount();
    const functionGroup = functionDim.group().reduceCount();

    // Set up the charts
    const timeChart = dc.barChart("#time-chart");
    const moduleChart = dc.barChart("#module-chart");
    const functionChart = dc.rowChart("#function-chart");

    // Time chart
    timeChart
        .width(900)
        .height(200)
        .margins({top: 10, right: 10, bottom: 20, left: 40})
        .dimension(dateDim)
        .group(dateGroup)
        .x(d3.scaleTime().domain(d3.extent(data, d => d.date)))
        .round(d3.timeDay.round)
        .xUnits(d3.timeDays)
        .elasticY(true)
        .renderHorizontalGridLines(true)
        .brushOn(true);

    // Module chart (horizontal bar chart)
    moduleChart
        .width(900)
        .height(300)
        .margins({top: 20, right: 20, bottom: 100, left: 40})
        .dimension(moduleDim)
        .group(moduleGroup)
        .x(d3.scaleBand())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .ordering(d => -d.value)
        .renderHorizontalGridLines(true)
        .on('renderlet', function(chart) {
            chart.selectAll('g.x text')
                .attr('transform', 'translate(-10,10) rotate(270)');
        });

    // Function chart
    functionChart
        .width(400)
        .height(300)
        .margins({top: 20, left: 10, right: 10, bottom: 20})
        .dimension(functionDim)
        .group(functionGroup)
        .elasticX(true)
        .ordering(d => -d.value)
        .title(d => `${d.key}: ${d.value}`);

    // Add reset button
    d3.select('#reset-button')
        .on('click', function() {
            dc.filterAll();
            dc.renderAll();
        });

    // Render the charts
    dc.renderAll();
});
