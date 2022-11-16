let sentence = "The movie is not that bad, I like it"
let not=  sentence.search("not"); 
let bad = sentence.search("bad"); 

if (not === -1){
console.log(sentence)
}
else if(not < bad){
    console.log(bad)
    console.log (not)

    let firstPart = sentence.slice(0,not); 
    let secPart = sentence.slice(bad+3); 
    console.log(firstPart + "good" + secPart)
}
else{
    console.log(sentence)
}
