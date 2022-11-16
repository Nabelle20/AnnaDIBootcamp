//exercise 1
let x = 5;
let y = 3;
if (x > y) {
console.log("x is the biggest number")
    }
 else{
        console.log(`x is not the biggest number`)
    }

//exercise 2 
let newDog = "Chihuahua";
let len = newDog.length; 
console.log(len); 
console.log(newDog.toLowerCase());
console.log(newDog.toUpperCase());

if(newDog==="Chihuahua"){
    console.log(`I love Chihuahuas, it’s my favorite dog breed`);

}
else {
    console.log(`I dont care, I prefer cats`)
}

// exercise 3 

let number = prompt("Please enter a number");

if(number % 2 == 0) {
alert(`${number} is an even number`)

}
else{
alert(`${number} is an odd number`)
}



//exercise 4 
const users = ["Lea123", "Princess45","cat&doglovers", "helooo@000", "Anna", "belle"];

if(users.length === 0){

    console.log(`no one is online`); 
}
else if(users.length === 1){
    console.log( users[0] + "is online"); 
}

else if (users.length === 2 ){
    console.log(users[0] + ", " + users[1] + " ares online");
}

else if (users.length > 2){

    let remaingUsers = users.length-2; 

    console.log(`${users[0]}, ${users[1]} and ${remaingUsers} more are online`); 

}
