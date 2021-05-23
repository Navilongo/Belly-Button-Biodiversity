// Use D3 library to read the samples.json and console.log to confirm
// Use the data pulled from json to inform the drop down menu
d3.json("samples.json").then(data => {
    console.log(data);

    var subject = data.names;
    var dropDown = d3.select("#selDataset")

    subject.forEach(name => {
        dropDown.append("option").text(name).property("value", name)
    })

    defaultSample = data.samples.filter(person => person.id === "940")[0]
    console.log(defaultSample);

    // Demographics Info
    dropDown.on("change", selectionID)

    function selectionID() {
        idSelected = d3.event.target.value;
        console.log(idSelected)

        updatePlotly(idSelected)

    };

    function updatePlotly(idSelected) {
        ethnicity = data.metadata.ethnicity
        console.log(ethnicity)
    }

    












    });

 

    /*

    samplesResult = data.samples.filter(subjectObject => subjectObject.id == "940")[0]
    console.log(samplesResult)

    var ids = samplesResult.otu_ids.slice(0,10).reverse()
    console.log("These are the otu_ids: " + ids)
    var values = samplesResult.sample_values.slice(0,10).reverse()
    console.log("These are the sample_values: " + values)
    var labels = samplesResult.otu_labels.slice(0,10).reverse()
    console.log("These are the otu_labels: " + labels)

    var data = [{
        type: 'bar',
        x: values,
        y: ids,
        orientation: 'h'
    }];

    

    Plotly.newPlot("bar", data);

});
    */
   
// testing bar charts
