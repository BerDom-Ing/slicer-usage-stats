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

    // Adjusted createBarChart function for horizontal bars
    function createBarChart(svgSelector, dimension, group, isModuleChart = false) {
        // Set up SVG container
        const margin = {top: 20, right: 20, bottom: 30, left: 100},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
    
        const svg = d3.select(svgSelector).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
    
        // Create scales - swapping roles for horizontal bar chart
        const y = d3.scaleBand()
            .range([height, 0])
            .padding(0.1)
            .domain(group.all().map(d => d.key));
    
        const x = d3.scaleLinear()
            .range([0, width])
            .domain([0, d3.max(group.all(), d => d.value)]);
    
        // Draw bars with transition
        svg.selectAll(".bar")
            .data(group.all())
          .enter().append("rect")
            .attr("class", "bar")
            .attr("y", d => y(d.key))
            .attr("height", y.bandwidth())
            .attr("x", 0)
            .attr("width", 0) // Start width at 0 for transition
            .transition() // Apply a transition
            .duration(1000) // Duration of transition in milliseconds
            .attr("width", d => x(d.value)); // Transition to final width
    
        // Add axes
        svg.append("g")
            .call(d3.axisLeft(y));
    
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x));
    }
    
    // Revised filterFunctionChart function with added debugging
    function filterFunctionChart(selectedModule) {
        console.log("Selected module:", selectedModule); // Check the selected module
    
        if (selectedModule === lastFilteredModule) {
            console.log("Clearing filter for module:", selectedModule);
            functionDim.filterAll();
            lastFilteredModule = null;
        } else {
            console.log("Applying filter for module:", selectedModule);
            functionDim.filter(d => d === selectedModule);
            lastFilteredModule = selectedModule;
        }
    
        console.log("Filtered data size:", functionDim.top(Infinity).length); // Check filtered data size
    
        // Redraw the function chart
        d3.select("#functionChart svg").remove();
        const functionGroupFiltered = functionDim.group().reduceCount();
        console.log("Grouped data after filter:", functionGroupFiltered.all()); // Check grouped data after filter
        createBarChart("#functionChart", functionDim, functionGroupFiltered);
    }
    // Example addition to filterFunctionChart to toggle filter off when the same module is clicked again
    let lastFilteredModule = null;

    function filterFunctionChart(selectedModule) {
        if (selectedModule === lastFilteredModule) {
            // Clear the filter if the same module is clicked again
            functionDim.filterAll();
            lastFilteredModule = null;
        } else {
            // Apply the new filter
            functionDim.filter(d => d === selectedModule);
            lastFilteredModule = selectedModule;
        }

        // Redraw the function chart
        d3.select("#functionChart svg").remove();
        const functionGroupFiltered = functionDim.group().reduceCount();
        createBarChart("#functionChart", functionDim, functionGroupFiltered);
    }
    
    // Create bar charts with the modified function
    createBarChart("#moduleChart", moduleDim, moduleGroup, true); // Pass true to enable click interaction for module chart
    createBarChart("#functionChart", functionDim, functionGroup);
    // Make charts responsive
    function resizeCharts() {
        // Redraw charts here based on new dimensions
    }

    window.addEventListener('resize', resizeCharts);
});