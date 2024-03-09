//Declarative function
//want to re-use the code in order
function helloOne(){

    console.log("Hello ONE")
}

helloOne()

//anonymus function
var helloTWO = function(){
    console.log("Hello TWO")
}

helloTWO()

//ES6 function syntax or arrow function
var helloTree = () => {
    console.log("Hello ThREE")
}

helloTree()

//function with parameters
function printName(name, lastname){
    console.log(name + " " + lastname)
}

printName("LIEN","JH")

//funtion with retur
function multiplyByTwo(number){
    var result = number*2
    return result
}

var myresult = multiplyByTwo(6)
console.log(myresult)

//import function
import{printAge} from '../helpers/printHelper.js'

printAge(5)

//import everything
import * as helper from '../helpers/printHelper.js'

helper.printAge(10)