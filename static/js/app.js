const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";



d3.json(url).then(function(data) {
    console.log(data);
    let sampleID = Object.values(data.names);
    console.log(sampleID);
    let dselect = d3.select("select");
    //for loop iterate through sampleID and create new option value
    for (i = 0; i < (sampleID.length - 1); i++)
        dselect.append("option").attr("value", sampleID[i]).text(sampleID[i]);
    init(data);
  });



// Default Layout
function  init(data) {
  id = '940'
  setupBar(data, id)
};
/*
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

*/

function setupBar(data, id){
  let data_id = Object.values(data.samples);
  //let getOrgData = [];
  let sample_values = [];
  let otu_ids_temp = [];
  let otu_labels = [];
  let otu_ids = []; 
  
  for (i = 0; i < (data_id.length - 1); i++) {
    if (data_id[i].id == id){
      let sample_ten = data_id[i];
      console.log(sample_ten);
      for (i = 0; i < 10; i++) {
        sample_values.push(sample_ten.sample_values[i]);
        otu_ids_temp.push(sample_ten.otu_ids[i]);
        otu_labels.push(sample_ten.otu_labels[i]);
      }

      /*let samp_val = sample_ten.sample_values;
      let samp_ids = sample_ten.otu_ids;
      let samp_lbl = sample_ten.otu_labels;
      for (i = 0; i < (samp_val.length - 1); i++) {
        let newObj = {"sample_values":samp_val[i],"otu_ids":samp_ids[i],"otu_labels":samp_lbl[i]};
        getOrgData.push(newObj);
      }
      getOrgData.sort(function(firstNum, secondNum){
        return secondNum.sample_values - firstNum.sample_values;});*/
      //sample_ten = sample_ten.slice(0,11); 
      /*for (i = 0; i < (getOrgData.length - 1); i++) {
        let indexD = getOrgData[i];
        sample_values.push(indexD.sample_values);
        otu_ids.push(indexD.otu_ids);
        otu_labels.push(indexD.otu_labels);
      }*/
      

      for (i = 0; i < (otu_ids_temp.length); i++) {
        let holdID = otu_ids_temp[i];
        let newID = ("OTU " + String(holdID));
        otu_ids.push(newID);
      }

    }
  }
  
  sample_values.reverse();
  otu_ids.reverse();
  otu_labels.reverse();

  let trace1 = {
    x: sample_values,
    y: otu_ids,
    text: otu_labels,
    name: id,
    type: "bar",
    orientation: "h"
    };
    
  let traceData = [trace1];

  let layout = {
    height: 600,
    width: 800
    };      
   
  Plotly.newPlot("bar", traceData, layout);
}

//function setupBubble(){} */




