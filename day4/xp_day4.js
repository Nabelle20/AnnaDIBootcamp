//Exercise 1 
//part1 

const people = ["Greg", "Mary", "Devon", "James"];

people.shift(); 
people.splice(2,1, "Jason")
people.push("Annabelle")
let index = people.indexOf("Mary");
let newPeople = people.slice(1,3);
console.log(people)
console.log(newPeople)
console.log(index)
let index2 = people.indexOf("Foo")
console.log(index2)// because Foo is not in the array 

let last = people.slice(3)
console.log(last)

//part2 
for (let i = 0; i < people.length; i ++)
{
  console.log(people[i])
}

for(let n of people) {
    console.log(n);
    if(n === "Jason") {
       break;
    }
 }


//Exercise 2 
const colors = ["Red", "Yellow", "Purple", "Green", " Pink"]
for(let c in colors){
    console.log(`My #${Number(c)+1} choice is ${colors[c]} `)
}


//Exercise 3 

/**let num  = prompt('Enter a number')
var number = parseInt(num);

while (num<10){
     num = Number(prompt(`Enter another number`))
 break;
}
*/

//Exercise 4 
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)
console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan[0])

if(building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]> building.numberOfRoomsAndRent.dan[1]){
  building.numberOfRoomsAndRent.dan[1] = 1200
  console.log(building)
}

//Exercise 5
family = {dad: "John", mum:"Cindy", daughter:"Anna"}

for (const key in family) {

    console.log(`key:`,key)
    console.log(`value:`,family[key])
  }
//Exercise 6 

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  let answer = " "
  for (const k in details){
    answer = answer + " "+ k + " "+ details[k]
  }
  console.log(answer)


  //Exercise 7 

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let n = ""
const sortName = names.sort()

for (const name of sortName){
    console.log(name)
    n = n + name[0]

}
console.log(n)