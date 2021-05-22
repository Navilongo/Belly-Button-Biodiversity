// Use D3 library to read the samples.json
d3.json("samples.json").then((data) => {
    console.log(data);
});
// 
var data = [{
    type: 'bar',
    x: [20, 14, 23],
    y: ['giraffes', 'orangutans', 'monkeys'],
    orientation: 'h'
    }];
 Plotly.newPlot('bar', data);
// Create horizontal bar with a dropdown menu to display the top 10 OTUs found in that individual.

// Use sample_values as the values for the bar chart

// Use otu_ids as the labels for the bar chart

// Use otu_labels as the hovertext for the chart