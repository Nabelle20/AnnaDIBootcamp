for (let i = 0; i < 2; i++) {
    console.log("the current number is " + i)
}


//Statement 1: marks the start of a for loops
//Statement 2: defines the condition for executing the code block. Must return a boolean value.
//Statement 3: is executed (every time) after the code block has been executed.
//When the condition becomes false, the loop terminates, marking the end of its life cycle

//Create a structured HTML file linked to a JS file
//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
//Sample Output: //"0 is even" //"1 is odd" //"2 is even"

let i ; 

for(i=0; i <=15; i++){

    if(i%2 === 0){
        console.log(i + "is even")
    }

    else {
        console.log(i + "is odd")
    }

}
for(i=0; i <=15; i++){
    let type = i%2 === 0? 'even':'odd'
    console.log(`${i} is ${type}`)
}

for (let i = 0; i <= 15; i++) {
    console.log(`${i} is ${i % 2 === 0 ? 'even' : 'odd'}`)
}

let names= ["john", "sarah", 23, "Rudolf",34]
for (let name of names ){
    if(typeof(name) !== 'string'){
        continue;
    }

    let firstLetter = name.charAt(0)
    if(firstLetter !==firstLetter.toUpperCase()){
        name=firstLetter. toUpperCase()+ name.slice(1);
    }

    console.log

}