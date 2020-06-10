var filteredData
var filteredManufacturers
var filteredAttributes
var attributeSelected
var manufacturerSelected
var originalData
var uniqueManufacturers
var uniqueAttributes
var uniqueSizeA
var uniqueSizeB
var uniqueSizeC

/*** function to split a tyre size into smaller component sizes  
 * Size: "235/65R18" becomes and array ['235','65','18']
 * 
 * */
function splitSize(sizeString){

var str = sizeString;
var res = str.split("/");
if(res[1]){
    var res2 = res[1].split("R")}
else {
    res2 = sizeString
}
if (res[0]) { 
sizeA = res[0]
}
else{
sizeA = "NA"}
//console.log(sizeA)
if (res2[0]){
sizeB = res2[0]
}
else {
    sizeB = "NA"
}
//console.log(sizeB)
if(res2[1]){
sizeC = res2[1]}
else {
    sizeC = "NA"
}
//console.log(sizeC)

result = [sizeA, sizeB, sizeC]
return result

}


/***
 * Attribute: "SL"
Department Name: "AUTO TIRES"
Item Description: "SUPERMAX TM-1"
Item Name: "R20B-15"
Item Number: "1017"
Manufacturer: "SUPERMAX"
Regular Price: "60.768"
Size: "235/65R18"
 * 
 * 
 */

//console.log(splitSize("205/55ZR16"))

function render(renderData){

    var tbody = d3.select("tbody");

    tbody.selectAll("tr").remove()

    //console.log(renderData)

    renderData.forEach((tyre) => {
        var row = tbody.append("tr");
        Object.entries(tyre).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
         uniqueManufacturers = d3.map(renderData, function(d){return d['Manufacturer'];}).keys()
         uniqueAttributes = d3.map(renderData, function(d){return d['Attribute'];}).keys()
         uniqueSizeA = d3.map(renderData, function(d){return d['sizeA'];}).keys()
         console.log(uniqueSizeA)
         uniqueSizeB = d3.map(renderData, function(d){return d['sizeB'];}).keys()
         console.log(uniqueSizeB)
         uniqueSizeC = d3.map(renderData, function(d){return d['sizeC'];}).keys()
         console.log(uniqueSizeC)

    
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

       d3.select("#selectSizeA")
        .html("")
       d3.select("#selectSizeA")
       .selectAll('myOptions')
       .data(uniqueSizeA)
       .enter()
       .append('option')
       .text(function (d) { return d; }) // text showed in the menu
       .attr("value", function (d) { return d; }) // corresponding value returned by the button
   
       d3.select("#selectSizeB")
       .html("")
       d3.select("#selectSizeB")
       .selectAll('myOptions')
       .data(uniqueSizeB)
       .enter()
       .append('option')
       .text(function (d) { return d; }) // text showed in the menu
       .attr("value", function (d) { return d; }) // corresponding value returned by the button

       d3.select("#selectSizeC")
       .html("")
       d3.select("#selectSizeC")
       .selectAll('myOptions')
       .data(uniqueSizeC)
       .enter()
       .append('option')
       .text(function (d) { return d; }) // text showed in the menu
       .attr("value", function (d) { return d; }) // corresponding value returned by the button



}

function cleanData(element) {
    return element['Item Name'].charAt(0) == "R" || element['Item Name'].charAt(0) ==  "S" ;
  }

d3.csv("floydjune.csv").then(function(data) {

     //console.log(data[0]['Item Number'])

    var data = data.filter(cleanData);

    data.forEach((element) => {
       // console.log(element)
       // console.log(element.Size)
         let splitSizeArray = splitSize(element.Size)
         
         element.sizeA = splitSizeArray[0]
         element.sizeB = splitSizeArray[1]
         element.sizeC = splitSizeArray[2]

    });

   // console.log(data)

    //append splitstring values to each data element
    // obj.key3 = "value3";

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

    d3.select("#selectSizeA").on("change", function (d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        console.log(selectedOption)
        updateSizeA(selectedOption)
        })
    d3.select("#selectSizeB").on("change", function (d) {
            // recover the option that has been chosen
            var selectedOption = d3.select(this).property("value")
            // run the updateChart function with this selected option
            console.log(selectedOption)
            updateSizeB(selectedOption)
            })
     d3.select("#selectSizeC").on("change", function (d) {
                // recover the option that has been chosen
                var selectedOption = d3.select(this).property("value")
                // run the updateChart function with this selected option
                console.log(selectedOption)
                updateSizeC(selectedOption)
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

function updateSizeA(selected) {

    var tbody = d3.select("tbody");
    var dataFilter = filteredData.filter(ob => ob['sizeA'] === selected)
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

function updateSizeB(selected) {
    
    console.log(selected)
    var tbody = d3.select("tbody");
    console.log(filteredData)
    var dataFilter = filteredData.filter(ob => ob['sizeB'] === selected)
    tbody.selectAll("tr").remove()

    console.log(dataFilter)

    dataFilter.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
    
    //console.log(dataFilter)
    render(dataFilter)

}

function updateSizeC(selected) {

    var tbody = d3.select("tbody");
    var dataFilter = filteredData.filter(ob => ob['sizeC'] === selected)
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





