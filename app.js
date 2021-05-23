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

    // Function to capture the ID selected by user
    function selectionID() {
        idSelected = d3.event.target.value;
        console.log(idSelected)

        // Calls to later function in which we gather information from id selected
        demoInfo(idSelected)

    };

    // Function to pull all metadata information from selected id
    function demoInfo(idSelected) {
        // Access metadata dictionary
        var metadata = data.metadata
        console.log(metadata);

        // Selected id information 
        var selectedPerson = metadata.filter(person=> person.id.toString() === idSelected)[0]
        console.log(selectedPerson)

        // HTML id in which to append filted information
        var demographicInfo = d3.select("#sample-metadata");

        // Reset Demographic Info chart
        demographicInfo.html("");

        Object.entries(selectedPerson).forEach(key => {
            demographicInfo.append("h6").text(key[0] + " : " + key[1])
        })

        


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
