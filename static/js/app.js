const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";



d3.json(url).then(function(data) {
    console.log(data);
    let sampleID = Object.values(data.names);
    console.log(sampleID);
    let dselect = d3.select("select");
    //for loop iterate through sampleID and create new option value
    for (i = 0; i < (sampleID.length - 1); i++)
        dselect.append("option").attr("value", sampleID[i]).text(sampleID[i]);
  });

// Loop to update index.html with dropdown selections, iterating through data
// this loop may need to go into the then selection above
/*
// Default Layout
function  init() {


};

// On change of dropdown select call getData Function
d3.selectAll("#selDataset").on("change", getData);

// pull data from dataset based on drop down selection
function getData() {
    let dropdownMenu = d3.select("#selDataset");
    let dataset = dropdownMenu.property("value");
    let sampleData = [];

    //Logic to assign relevent data to "data" array
  
// call function for bar chart; bubble chart; and demographic data
  updatePlotly(data);
}

function updatePlotly(newdata) {
    //  Update bar chart
    
    
    // Update bubble chart


    // update demographic data

}

function setupBar(){
    /*let trace1 = {
        x: ,//sample_values
        y: ,//otu_ids
        text: ,//otu_labels
        name: "",//need name
        type: "bar",
        orientation: "h"
      };
    
    let traceData = [trace1];

    let layout = {
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      };      
   
    Plotly.newPlot("plot", traceData, layout); * /
}

//function setupBubble(){}

// Execute default result  
init();
*/  