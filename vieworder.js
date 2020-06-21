
var myData = localStorage['checkoutObject'];
var numItems = localStorage['numPurchases']
var cartAmount = localStorage['checkoutCart']

/**
 * checkoutData.push([purchasedPrices],[purchasedItems],[purchasedItemDescriptions],[purchasedItemSizes],[purchasedItemNames],[purchasedDepartments],[purchasedManufacturers],[purchasedSizeA],[purchasedSizeB],[purchasedSizeC])
 */

localStorage.removeItem( 'checkoutObject' ); // Clear the localStorage
localStorage.removeItem( 'checkoutCart' ); // Clear the localStorage
localStorage.removeItem( 'numPurchases' ); // Clear the localStorage
//console.log(myData)


/*
/etc/nginx/nginx.conf
*/

/*
65.37,159.99,166.39,1940,1941,1942,R50B-43,R40A-35,R40A-36,205/55R16,255/40R18,225/45RF18
*/

/**
 * checkoutData.push([purchasedPrices],[purchasedItems],[purchasedItemDescriptions],[purchasedItemSizes],[purchasedItemNames],[purchasedDepartments],[purchasedManufacturers],[purchasedSizeA],[purchasedSizeB],[purchasedSizeC])
 */

    /***
 * 
 * 0: "929" ( Items)
1: "R41B-42" location (ItemNAmes)
2: "ACCELERA M/T-01" description (ITemDEscriptions)
3: "C" load range (LoadRanges)
4: "235/75R15" size 
5: "57.78" price 
6: "AUTO TIRES" department 
7: "ACCELERA" manufacter 
8: "1" quantity 
9: "235" size a 
10: "75" size b
11: "15" size c
 */

myDataArray = String(myData).split(',')
//console.log(myDataArray)
// [purchasedDepartments],[purchasedManufacturers],[purchasedSizeA],[purchasedSizeB],[purchasedSizeC]) //
var prices = [];
var items = [];
var descriptions = [];
var sizes = [];
var names =[];
var departments = [];
var Manufacturers = []
var sizeAs = []
var sizeBs = []
var sizeCs = []
var LoadRanges =[]
var csvCheckoutString =""

var counter = 0;
for ( let i = 0; i < numItems; i++ ){
    prices.push(myDataArray[counter]);
    counter ++;
}
for ( let i = 0; i < numItems; i++ ){
    items.push(myDataArray[counter]);
    counter ++;

}
for ( let i = 0; i < numItems; i++ ){
    descriptions.push(myDataArray[counter]);
    counter ++;

}
for ( let i = 0; i < numItems; i++ ){
    sizes.push(myDataArray[counter])
    counter ++
}

for ( let i = 0; i < numItems; i++ ){
    names.push(myDataArray[counter])
    counter ++
}

// [purchasedDepartments],[purchasedManufacturers],[purchasedSizeA],[purchasedSizeB],[purchasedSizeC])

for ( let i = 0; i < numItems; i++ ){
    departments.push(myDataArray[counter]);
    counter ++;
}
for ( let i = 0; i < numItems; i++ ){
    Manufacturers.push(myDataArray[counter]);
    counter ++;

}
for ( let i = 0; i < numItems; i++ ){
    sizeAs.push(myDataArray[counter]);
    counter ++;

}
for ( let i = 0; i < numItems; i++ ){
    sizeBs.push(myDataArray[counter])
    counter ++
}

for ( let i = 0; i < numItems; i++ ){
    sizeCs.push(myDataArray[counter])
    counter ++
}

for ( let i = 0; i < numItems; i++ ){
    LoadRanges.push(myDataArray[counter])
    counter ++
}


counter = 0

/**

 *     renderData.forEach((tyre) => {

        var row = tbody.append("tr");
        row.append('input').attr('type','checkbox')
        Object.entries(tyre).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            cell.style.textAlign = "left"

        });
        
        checkedRows.push(0)
    });
 
 */


$(document).ready(function(){

    var tbody = d3.select("tbody");

    tbody.selectAll("tr").remove()

    for ( i = 0; i < numItems; i++){

        csvCheckoutString = csvCheckoutString + "TIRE DETAILS: ,"
     
        var row = tbody.append("tr");

        var cellOne = row.append("td");
        cellOne.text(items[i]);
        csvCheckoutString = csvCheckoutString + items[i] + ","
        cellOne.style.textAlign = "left"

        var cellTwo = row.append("td");
        cellTwo.text(names[i]);
        csvCheckoutString = csvCheckoutString + names[i] + ","
        cellTwo.style.textAlign = "left"

        var cellThree = row.append("td");
        cellThree.text(descriptions[i]);
        csvCheckoutString = csvCheckoutString + items[i] + ","
        cellThree.style.textAlign = "left"

        var cellFour = row.append("td");
        cellFour.text(LoadRanges[i]);
        csvCheckoutString = csvCheckoutString + LoadRanges[i] + ","
        cellFour.style.textAlign = "left"

        var cellFive = row.append("td");
        cellFive.text(sizes[i]);
        csvCheckoutString = csvCheckoutString + sizes[i] + ","
        cellFive.style.textAlign = "left"

        var cellSix = row.append("td");
        cellSix.text(prices[i]);
        csvCheckoutString = csvCheckoutString + "$" + prices[i] + ","
        cellSix.style.textAlign = "left"

        var cellSeven = row.append("td");
        cellSeven.text(departments[i]);
        csvCheckoutString = csvCheckoutString + departments[i] + ","
        cellSeven.style.textAlign = "left"

        var cellEight = row.append("td");
        cellEight.text(Manufacturers[i]);
        csvCheckoutString = csvCheckoutString + Manufacturers[i] + ","
        cellEight.style.textAlign = "left"

        var cellNine = row.append("td");
        cellNine.text(sizeAs[i]);
        cellNine.style.textAlign = "left"

        var cellTen = row.append("td");
        cellTen.text(sizeBs[i]);
        cellTen.style.textAlign = "left"

        var cellEleven = row.append("td");
        cellEleven.text(sizeCs[i]);
        cellEleven.style.textAlign = "left"


     // $("p").append('Item : ' + items[i] + ' | ' + '   Name : ' + names[i] +  ' | ' + ' Description: ' + descriptions[i] + ' | '  + '   Size : ' + sizes[i] +  ' | '  + ' Price $ ' + prices[i]   + "<br>" );

      
    }
    var cartAmountNum = parseFloat(cartAmount)
    var cartAmountString = cartAmountNum.toFixed(2)
    $("p").append(' Cost of goods : $' + cartAmountString   + "<br>")
    var taxNum = parseFloat(cartAmount*0.0985)
    var taxString = taxNum.toFixed(2)
    $("p").append('Tax rate: 9.85%: $' + taxString + "<br>")

    var totalNum = cartAmountNum + taxNum
    var totalString = totalNum.toFixed(2)

    
    
    //console.log(total)
    $("p").append(' Total of Order: $' + totalString  + "<br>")

    var button = d3.select("#checkout");

    button.on("click", function() {

      //  alert(csvCheckoutString)
      //  alert(totalString)

        localStorage.setItem( 'checkoutPrice', totalString );
        localStorage.setItem( 'checkoutNumPurchases', numItems );
        localStorage.setItem('checkoutString', csvCheckoutString)

        var url = './checkout.html';
        window.location = url;


    });

    var buttonTwo = d3.select("#checkoutNoTax");

    buttonTwo.on("click", function() {

       // alert(csvCheckoutString)
       // alert(cartAmountString)

        localStorage.setItem( 'checkoutPrice', cartAmountString );
        localStorage.setItem( 'checkoutNumPurchases', numItems );
        localStorage.setItem('checkoutString', csvCheckoutString)

        var url = './notaxcheckout.html';
        window.location = url;


    });



    });




    //checkoutData.push([purchasedPrices],[purchasedItems],[purchasedItemDescriptions],[purchasedItemSizes],[purchasedItemNames],[purchasedDepartments],[purchasedManufacturers],[purchasedSizeA],[purchasedSizeB],[purchasedSizeC], [purchasedLoadRanges])