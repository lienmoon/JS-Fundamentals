//objects
var customer = {
    firstName:'John',
    lastName:'Smith',
    cars:["Volvo","Toyota"]
}
customer.firstName="Mike" //Dot notation
customer['lastName'] = "Silver" //bracket notation
console.log(customer.firstName)
console.log(customer['lastName'])
//Interpolation
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
var car = ["Volvo", "Toyota", "Tesla"]
car[1] = "BMW"
console.log(car[0])
console.log(car[1])
console.log(customer.cars[0])