var filteredData
var filteredManufacturers
var filteredAttributes
var attributeSelected
var manufacturerSelected
var originalData
var uniqueManufacturers
var uniqueAttributes

function splitSize(sizeString){

    

}



function render(renderData){

    var tbody = d3.select("tbody");

    tbody.selectAll("tr").remove()

    console.log(renderData)

    renderData.forEach((tyre) => {
        var row = tbody.append("tr");
        Object.entries(tyre).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
         uniqueManufacturers = d3.map(renderData, function(d){return d['Manufacturer'];}).keys()
         uniqueAttributes = d3.map(renderData, function(d){return d['Attribute'];}).keys()
    
        d3.select("#selectManufacturer")
         .html("")
        d3.select("#selectManufacturer")
        .selectAll('myOptions')
        .data(uniqueManufacturers)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the menu
        .attr("value", function (d) { return d; }) // corresponding value returned by the button
    
        d3.select("#selectAttribute")
        .html("")
        d3.select("#selectAttribute")
        .selectAll('myOptions')
        .data(uniqueAttributes)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the menu
        .attr("value", function (d) { return d; }) // corresponding value returned by the button



}

function cleanData(element) {
    return element['Item Name'].charAt(0) == "R" || element['Item Name'].charAt(0) ==  "S" ;
  }

d3.csv("eagleinventory.csv").then(function(data) {

     //console.log(data[0]['Item Number'])



     
     

    var data = data.filter(cleanData);
    originalData = data
    var tbody = d3.select("tbody");
// YOUR CODE HERE!
    filteredData = data
    render(filteredData)

    // When the button is changed, run the updateChart function
    d3.select("#selectManufacturer").on("change", function (d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
    console.log(selectedOption)
        updateManufacturer(selectedOption)
    })

    d3.select("#selectAttribute").on("change", function (d) {
    // recover the option that has been chosen
    var selectedOption = d3.select(this).property("value")
    // run the updateChart function with this selected option
    console.log(selectedOption)
    updateAttribute(selectedOption)
    })

    var button = d3.select("#reset");

button.on("click", function() {

    filteredData = originalData
    render(originalData)


    var elements = document.getElementsByTagName('select');
    for (var i = 0; i < elements.length; i++)
    {
        elements[i].selectedIndex = 0;
    }
   // console.log("Hi, a button was clicked!");
   // console.log(d3.event.target);
    tbody.selectAll("tr").remove()
    originalData.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
});




});


function updateManufacturer(selected) {


    var tbody = d3.select("tbody");


    var dataFilter = filteredData.filter(ob => ob['Manufacturer'] === selected)
    tbody.selectAll("tr").remove()



    filteredData.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
    
    filteredData = dataFilter
    render(filteredData)


}

function updateAttribute(selected) {
    var tbody = d3.select("tbody");

    

    // Create new data with the selection?
    // var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
  //  console.log(selected)
    var dataFilter = filteredData.filter(ob => ob['Attribute'] === selected)
    tbody.selectAll("tr").remove()
    //tbody.selectAll("table").remove()

    dataFilter.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
   // dataFilter.forEach(element => console.log(element));
    filteredData = dataFilter
    render(filteredData)

}





