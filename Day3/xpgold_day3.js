
// exercise 1 

/** let language= prompt("Which language do you speak?"); 
language.toLowerCase(); 

switch(language){

    case 'french' : 
    alert('Bonjour'); 

    break; 

    case 'English': 
    alert('Hello');

    break; 

    case 'Hebrew' : 
    alert('Shalom');

    break; 
    default: 

    alert('01110011 01101111 01110010 01110010 01111001');
}
*/
//exercise 2 
/**let grade = prompt("Please enter your grade");
//If the grade is bigger than 90, console.log “A”

if (grade > 90) {

    alert("Grade : A")
}

//If the grade is between 80 and 90 (included), console.log “B”

else if (grade > 80 && grade <= 90){

    alert("Grade : B");

}
//If the grade is between 70(included) and 80 (included), console.log “C”

else if(grade <= 80 && grade >= 70){

    alert("Grade : C");
}

else if (grade < 70){
 alert ("Grade : D")
}
*/

//exercise 3 

let string = prompt("Enter a verb:"); 

if(string.length >= 3 && !string.endsWith("ing")){

    let concatenate = string.concat("ing"); 

    alert(`${concatenate}`); 

}
else if (string.length>= 3 && string.endsWith("ing")){
   
    let concatenate2 = string.concat("ly"); 
    alert(`${concatenate2}`);
}
else if( string.length < 3){

    alert(`${string}`);
}









