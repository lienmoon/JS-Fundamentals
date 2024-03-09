//concatination and interpolation
var price = 80
var itemName = "Table"
var messageToPrint = "The price for your" +itemName+"is "+price+"dollars"
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars`
console.log(messageToPrint)
console.log(messageToPrint2)