// Use D3 library to read the samples.json
d3.json("samples.json").then((data) => {
    console.log(data);
});
// Create horizontal bar with a dropdown menu to display the top 10 OTUs found in that individual.

// Use sample_values as the values for the bar chart

// Use otu_ids as the labels for the bar chart

// Use otu_labels as the hovertext for the chart