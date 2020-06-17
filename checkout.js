
var myData = localStorage['checkoutObject'];
var numItems = localStorage['numPurchases']
var cartAmount = localStorage['checkoutCart']

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
myDataArray = String(myData).split(',')
//console.log(myDataArray)
var prices = [];
var items = [];
var descriptions = [];
var sizes = [];
var names =[];

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

counter = 0


$(document).ready(function(){

    for ( i = 0; i < numItems; i++){
      $("p").append('Item : ' + items[i] + ' | ' + '   Name : ' + names[i] +  ' | ' + ' Description: ' + descriptions[i] + ' | '  + '   Size : ' + sizes[i] +  ' | '  + ' Price $ ' + prices[i]   + "<br>" );
      
    }
    $("p").append('Total cost: $' + cartAmount)
    });






//alert('checkout. Total cost: $' + cartAmount + ' You purchased ' + numItems + ' items. For these prices: ' + prices + ' items: ' + descriptions + ' sizes : ' + sizes);