// Use D3 library to read the samples.json and console.log to confirm
// Use the data pulled from json to inform the drop down menu
d3.json("samples.json").then(data => {
    console.log(data);

    var subject = data.names;
    var dropDown = d3.select("#selDataset")

    subject.forEach(name => {
        dropDown.append("option").text(name).property("value", name)
    });

    samplesResult = data.samples.filter(subjectObject => subjectObject.id == "940")[0]
    console.log(samplesResult)

    var ids = samplesResult.otu_ids.slice(0,10)
    console.log("These are the otu_ids: " + ids)
    var values = samplesResult.sample_values.slice(0,10)
    console.log("These are the sample_values: " + values)
    var labels = samplesResult.otu_labels.slice(0,10)
    console.log("These are the otu_labels: " + labels)

    var data = [{
        type: 'bar',
        x: ids,
        y: values,
        orientation: 'h'
    }];

    

    Plotly.newPlot("bar", data);

});

// testing bar charts
/*
var data = [{
    type: 'bar',
    x: [20, 14, 23],
    y: ['giraffes', 'orangutans', 'monkeys'],
    orientation: 'h'
    }];
 Plotly.newPlot('bar', data);
 */