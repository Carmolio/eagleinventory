
function cleanData(element) {
    return element['Item Name'].charAt(0) == "R" || element['Item Name'].charAt(0) ==  "S" ;
  }



d3.csv("eagleinventory.csv").then(function(data) {
   // for (var i = 0; i < data.length; i++) {
    //  console.log(data[i]);
    console.log(data[0]['Item Number'])
        
   // }



// from data.js
var data = data.filter(cleanData);
var tbody = d3.select("tbody");
// YOUR CODE HERE!
var currentTable = data

data.forEach((tyre) => {
    var row = tbody.append("tr");
    Object.entries(tyre).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});



///dateValue = "1/9/2020"
//let res = data.filter(ob => ob.datetime === dateValue)
//res.forEach(element => console.log(element));

let uniqueManufacturers = d3.map(data, function(d){return d['Manufacturer'];}).keys()

//console.log(uniqueItems)
//uniqueDates.forEach(element => console.log(element));

let uniqueAttributes = d3.map(data, function(d){return d['Attribute'];}).keys()
//uniqueCities.forEach(element => console.log(element));

let uniqueDepartments = d3.map(data, function(d){return d['Department Name'];}).keys()
//uniqueCities.forEach(element => console.log(element));

let uniqueSizes = d3.map(data, function(d){return d['Size'];}).keys()
//uniqueCities.forEach(element => console.log(element));

/***
let uniqueItems = d3.map(data, function(d){return d['Item Description'];}).keys()
//uniqueCities.forEach(element => console.log(element));
***/

d3.select("#selectManufacturer")
    .selectAll('myOptions')
    .data(uniqueManufacturers)
    .enter()
    .append('option')
    .text(function (d) { return d; }) // text showed in the menu
    .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#selectAttribute")
    .selectAll('myOptions')
    .data(uniqueAttributes)
    .enter()
    .append('option')
    .text(function (d) { return d; }) // text showed in the menu
    .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#selectDepartment")
    .selectAll('myOptions')
    .data(uniqueDepartments)
    .enter()
    .append('option')
    .text(function (d) { return d; }) // text showed in the menu
    .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#selectSize")
    .selectAll('myOptions')
    .data(uniqueSizes)
    .enter()
    .append('option')
    .text(function (d) { return d; }) // text showed in the menu
    .attr("value", function (d) { return d; }) // corresponding value returned by the button

    /***
d3.select("#selectItems")
    .selectAll('myOptions')
    .data(uniqueItems)
    .enter()
    .append('option')
    .text(function (d) { return d; }) // text showed in the menu
    .attr("value", function (d) { return d; }) // corresponding value returned by the button

***/
// A function that update the chart
function updateManufacturer(selected) {

    // Create new data with the selection?
    // var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
  //  console.log(selected)
    var dataFilter = currentTable.filter(ob => ob['Manufacturer'] === selected)
    tbody.selectAll("tr").remove()
    //tbody.selectAll("table").remove()


    dataFilter.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
    dataFilter.forEach(element => console.log(element));
    currentTable = dataFilter


}

function updateAttribute(selected) {

    // Create new data with the selection?
    // var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
  //  console.log(selected)
    var dataFilter = currentTable.filter(ob => ob['Attribute'] === selected)
    tbody.selectAll("tr").remove()
    //tbody.selectAll("table").remove()

    dataFilter.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
    dataFilter.forEach(element => console.log(element));
    currentTable = dataFilter

}

function updateDepartment(selected) {

    // Create new data with the selection?
    // var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
   // console.log(selected)
    var dataFilter = currentTable.filter(ob => ob['Department Name'] === selected)
    tbody.selectAll("tr").remove()
    //tbody.selectAll("table").remove()

    dataFilter.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
    dataFilter.forEach(element => console.log(element));
    currentTable = dataFilter

}


function updateSize(selected) {

    // Create new data with the selection?
    // var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
  //  console.log(selected)
    var dataFilter = currentTable.filter(ob => ob['Size'] === selected)
    tbody.selectAll("tr").remove()
    //tbody.selectAll("table").remove()

    dataFilter.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
    dataFilter.forEach(element => console.log(element));
    currentTable = dataFilter

}

/*** 
function updateItem(selected) {

    // Create new data with the selection?
    // var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
  //  console.log(selected)
    var dataFilter = currentTable.filter(ob => ob.shape === selected)
    tbody.selectAll("tr").remove()
    //tbody.selectAll("table").remove()

    dataFilter.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
    dataFilter.forEach(element => console.log(element));
    currentTable = dataFilter

}

***/


// When the button is changed, run the updateChart function
    d3.select("#selectManufacturer").on("change", function (d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
     //   console.log(selectedOption)
        updateManufacturer(selectedOption)
    })

    d3.select("#selectAttribute").on("change", function (d) {
    // recover the option that has been chosen
    var selectedOption = d3.select(this).property("value")
    // run the updateChart function with this selected option
   // console.log(selectedOption)
    updateAttribute(selectedOption)
})

    d3.select("#selectDepartment").on("change", function (d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
      //  console.log(selectedOption)
        updateDepartment(selectedOption)
    })

    d3.select("#selectSize").on("change", function (d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
       // console.log(selectedOption)
        updateSize(selectedOption)
    })

    /*** 
    d3.select("#selectItem").on("change", function (d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
       // console.log(selectedOption)
        updateItem(selectedOption)
    })

    ***/


var button = d3.select("#reset");

button.on("click", function() {

    var elements = document.getElementsByTagName('select');
    for (var i = 0; i < elements.length; i++)
    {
        elements[i].selectedIndex = 0;
    }
   // console.log("Hi, a button was clicked!");
   // console.log(d3.event.target);
    tbody.selectAll("tr").remove()
    data.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    currentTable = data
});


});