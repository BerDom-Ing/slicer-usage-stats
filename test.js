
// Load the data
d3.json('data.json').then(function(data) {
    // Initialize Crossfilter
    const cf = crossfilter(data);

    // Create dimensions for modules and functions
    const moduleDim = cf.dimension(d => d.selected_module);
    const functionDim = cf.dimension(d => d.function);

    // Group data
    const moduleGroup = moduleDim.group().reduceCount();
    const functionGroup = functionDim.group().reduceCount();

    // Adjusted createBarChart function for horizontal bars and click interaction
    function createBarChart(svgSelector, dimension, group, isModuleChart = false, margin = {top: 20, right: 20, bottom: 30, left: 150}) {
        // Clear any existing SVG
        d3.select(svgSelector).html("");

        // Calculate dynamic height based on the number of data points, ensuring a minimum height
        const dataBar = group.all().sort((a, b) => b.value - a.value);
        const barHeight = 20; // Height per bar
        const heightPerBar = barHeight + 10; // Height per bar including padding
        let dynamicHeight = dataBar.length * heightPerBar;
        const minHeight = 100; // Minimum height to ensure the bar doesn't go below the axis
        dynamicHeight = Math.max(dynamicHeight, minHeight);

    // Set up SVG container with dynamic height
    const width = 480 - margin.left - margin.right,
        height = dynamicHeight - margin.top - margin.bottom;
    
        const svg = d3.select(svgSelector).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
    
        // Get sorted data
        const data = group.all().sort((a, b) => b.value - a.value);
    
        // Create scales
        const y = d3.scaleBand()
            .range([0, height])
            .padding(0.1)
            .domain(data.map(d => d.key));
    
        const x = d3.scaleLinear()
            .range([0, width])
            .domain([0, d3.max(data, d => d.value)]);
    
        // Draw bars with transition and click interaction
        svg.selectAll(".bar")
            .data(data)
          .enter().append("rect")
            .attr("class", "bar")
            .attr("y", d => y(d.key))
            .attr("height", y.bandwidth())
            .attr("x", 0)
            .attr("width", 0)
            .on("click", function(event, d) {
                if (isModuleChart) {
                    filterFunctionChart(d.key);
                }
            })
            .transition()
            .duration(1000)
            .attr("width", d => x(d.value));
    
        // Add labels
        svg.selectAll(".label")
            .data(data)
          .enter().append("text")
            .attr("class", "label")
            .attr("y", d => y(d.key) + y.bandwidth() / 2)
            .attr("x", d => x(d.value) + 5)
            .attr("dy", ".35em")
            .text(d => d.value);
    
        // Add axes
        svg.append("g")
            .call(d3.axisLeft(y));
    
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x));
    }
    
    // Revised filterFunctionChart function
    let lastFilteredModule = null;

    function filterFunctionChart(selectedModule) {
        console.log("Selected module:", selectedModule);
    
        if (selectedModule === lastFilteredModule) {
            console.log("Clearing filter for module:", selectedModule);
            moduleDim.filterAll();
            lastFilteredModule = null;
        } else {
            console.log("Applying filter for module:", selectedModule);
            moduleDim.filter(selectedModule);
            lastFilteredModule = selectedModule;
        }
    
        // Log the current filter state
        console.log("Current module filter:", moduleDim.currentFilter());
    
        // Get all data after filtering
        const filteredData = moduleDim.top(Infinity);
        console.log("Filtered data:", filteredData);
    
        // Recalculate the function group based on the filtered data
        const filteredFunctionGroup = d3.rollup(filteredData, 
            v => v.length, 
            d => d.function
        );
    
        console.log("Filtered function group:", filteredFunctionGroup);
    
        // Redraw the function chart
        createBarChart("#functionChart", functionDim, {
            all: () => Array.from(filteredFunctionGroup, ([key, value]) => ({key, value}))
        });
    }
    const commonMargin = {top: 20, right: 20, bottom: 30, left: 150};
    
    // Create bar charts with the modified function, passing the common margin
    createBarChart("#moduleChart", moduleDim, moduleGroup, true, commonMargin);
    createBarChart("#functionChart", functionDim, functionGroup, false, commonMargin);

    // Adjust the resizeCharts function accordingly
    function resizeCharts() {
        // Recalculate the width based on the current window size or parent container size
        const newWidth = document.querySelector(svgSelector).clientWidth - commonMargin.left - commonMargin.right;
        const newHeight = dynamicHeight - commonMargin.top - commonMargin.bottom; // Consider recalculating dynamicHeight if it depends on external factors
    
        // Recreate the bar charts with new dimensions
        createBarChart("#moduleChart", moduleDim, moduleGroup, true, {...commonMargin, width: newWidth, height: newHeight});
        createBarChart("#functionChart", functionDim, functionGroup, false, {...commonMargin, width: newWidth, height: newHeight});
    }

    window.addEventListener('resize', resizeCharts);
});
