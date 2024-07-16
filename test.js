const data = [
    {"function": "onGenerateFibulaPlanesTimerTimeout", "time": "2024-07-16T10:26:47.514818", "selected_module": "BoneReconstructionPlanner"},
    {"function": "onGenerateFibulaPlanesTimerTimeout", "time": "2024-07-16T10:26:54.991833", "selected_module": "BoneReconstructionPlanner"},
    {"function": "onGenerateFibulaPlanesTimerTimeout", "time": "2024-07-16T10:27:02.806923", "selected_module": "BoneReconstructionPlanner"},
    {"function": "onGenerateFibulaPlanesTimerTimeout", "time": "2024-07-16T10:27:08.106462", "selected_module": "BoneReconstructionPlanner"},
    {"function": "makeBooleanOperationsToFibulaSurgicalGuideBase", "time": "2024-07-16T10:27:15.871146", "selected_module": "BoneReconstructionPlanner"},
    {"function": "makeBooleanOperationsToFibulaSurgicalGuideBase", "time": "2024-07-16T10:27:21.575344", "selected_module": "BoneReconstructionPlanner"},
    {"function": "makeBooleanOperationsToFibulaSurgicalGuideBase", "time": "2024-07-16T10:27:28.211226", "selected_module": "BoneReconstructionPlanner"},
    {"function": "onGenerateFibulaPlanesTimerTimeout", "time": "2024-07-16T10:27:40.342651", "selected_module": "BoneReconstructionPlanner"},
    {"function": "makeBooleanOperationsToFibulaSurgicalGuideBase", "time": "2024-07-16T10:27:45.256983", "selected_module": "BoneReconstructionPlanner"},
    {"function": "onGenerateFibulaPlanesTimerTimeout", "time": "2024-07-16T10:28:54.947433", "selected_module": "BoneReconstructionPlanner"}
];

// Prepare the data
const functionCounts = data.reduce((acc, val) => {
    acc[val.function] = (acc[val.function] || 0) + 1;
    return acc;
}, {});

const processedData = Object.keys(functionCounts).map(key => ({
    function: key,
    count: functionCounts[key]
}));

// Set up SVG container
const margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

const svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Create scales
const x = d3.scaleBand()
    .range([0, width])
    .padding(0.1)
    .domain(processedData.map(d => d.function));

const y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(processedData, d => d.count)]);

// Draw bars
svg.selectAll(".bar")
    .data(processedData)
  .enter().append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.function))
    .attr("width", x.bandwidth())
    .attr("y", d => y(d.count))
    .attr("height", d => height - y(d.count));

// Add axes
svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

svg.append("g")
    .call(d3.axisLeft(y));