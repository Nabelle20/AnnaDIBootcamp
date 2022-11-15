
//Exercise 1 
let Ffood;
let Fmeal;

Ffood = "KFC";
Fmeal= "Lunch";
console.log("I eat "+ Ffood+ " at "+Fmeal); 

//Exercise 2 
//part 1 
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length; 

let myWatchedSeriesSentence  = myWatchedSeries.join();

console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);
 
//part 2 

myWatchedSeries.splice(2, 1, 'Friends');
console.log(myWatchedSeries);

myWatchedSeries.push("Manifest");
console.log(myWatchedSeries);

myWatchedSeries.unshift("Dynasty");
console.log(myWatchedSeries);

 myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

let moneyHeist = myWatchedSeries;

console.log(myWatchedSeries[1][2]);


//Exercise 3 

let celcius = 3; 

let fahrenheit = (celcius/5) * 9 + 32;

console.log(`${celcius}°c  is ${fahrenheit}°f`);

//Excersie 4 

let c;
let a = 34;
let b = 21;
console.log(a+b) // first expression 
// Prediction: Output:55, because a & b are variables.  
    // Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction:  Output 23, because a new value is assigned to a 
    // Actual: 23

    console.log(c) 

    // c is an undefined variable. 

console.log(3 + 4 + '5');
// outcome : 75 , 3 and 4 are integers and 5 is a string


//Exercise 5 

console.log(typeof(15))
// Prediction: number 
// Actual: number

console.log(typeof(5.5))
// Prediction: number 
// Actual: number

console.log(typeof(NaN))
// Prediction: number 
// Actual: number 

console.log(typeof("hello"))
// Prediction: string
// Actual:string

console.log(typeof(true))
// Prediction: boolean 
// Actual:boolean  

console.log(typeof(1 != 2))
// Prediction: boolean
// Actual: boolean

console.log("hamburger" + "s")
// Prediction:hamburgers
// Actual:hamburgers

console.log("hamburgers" - "s")
// Prediction: Naan
// Actual: Naan 

console.log("1" + "3")
// Prediction: 13
// Actual: 13

console.log("1" - "3")
// Prediction: -2
// Actual: -2

console.log("johnny" + 5)
// Prediction: johnny5
// Actual:johnny5

console.log("johnny" - 5)
// Prediction: Naan 
// Actual:Naan 

console.log(99 * "hello")
// Prediction: Naan 
// Actual:Naan 

console.log(1 != 1)
// Prediction: False
// Actual: False 

console.log(1 == "1")
// Prediction: True 
// Actual:True 

console.log(1 === "1")
// Prediction: false
// Actual: false 

//Exercise 6 

5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction: 1
// Actual:1 

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual:  JavaScript

" " + " "
// Prediction: " "
// Actual: " "

" " + 0
// Prediction: 0
// Actual:0

true + true 
// Prediction: 2
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaaN
// Actual: NaaN


