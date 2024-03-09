//Condition statement

var hour = 5 

if(hour >=6 && hour < 12){
    console.log('Good morning')
}else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon')
}else{
    console.log('Good Evening')
}

//loops
// for(statement1 ; statement2 ; statement3){

// }
// for i loop
for(let i=0; i<5 ; i++){
    console.log("Jello" + i)
}

//for of loop
var cars = ["Volve", "BMW", "Tesla"]
for (let car of cars){
    console.log(car)
    if(car == 'Tesla'){
        console.log('Electric car')
    }
    if(car == "BMW"){
        break
    }
}

//ES6 syntax for each loop
cars.forEach(car => {

})