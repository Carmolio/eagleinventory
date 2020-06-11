
var myData = localStorage['checkoutObject'];
var numItems = localStorage['numPurchases']
var cartAmount = localStorage['checkoutCart']
localStorage.removeItem( 'checkoutObject' ); // Clear the localStorage
localStorage.removeItem( 'checkoutCart' ); // Clear the localStorage
localStorage.removeItem( 'numPurchases' ); // Clear the localStorage
console.log(myData)

/*
65.37,159.99,166.39,1940,1941,1942,R50B-43,R40A-35,R40A-36,205/55R16,255/40R18,225/45RF18
*/
console.log(myData[0])
console.log(myData[1])
var prices = [];
var items = [];
var descriptions = [];
var sizes = [];

var counter = 0;
for ( let i = 0; i < numItems; i++ ){
    prices.push(myData[counter]);
    counter ++;
}
for ( let i = 0; i < numItems; i++ ){
    items.push(myData[counter]);
    counter ++;

}
for ( let i = 0; i < numItems; i++ ){
    descriptions.push(myData[counter]);
    counter ++;

}
for ( let i = 0; i < numItems; i++ ){
    sizes.push(myData[counter])
    counter ++
}

counter = 0





alert('checkout. Total cost: $' + cartAmount + 'you purchased :' + numItems + ' items. For these prices: ' + prices + ' items: ' + descriptions + ' sizes : ' + sizes);