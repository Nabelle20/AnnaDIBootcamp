//exercise 1 part 1
function infoaboutme(){
    console.log("i'm 22")
}
infoaboutme()

//exercise 1 part 2 

infoaboutperson("Anna", 22, "yellow")
infoaboutperson("Belle", 25,"purple")

function infoaboutperson(personName, personAge, personFavoriteColor){
    console.log("your name is",personName)
    console.log("you are", personAge)
    console.log("your favorite color is",personFavoriteColor)
}

//exercise 2 

function calculatetip(){

    const billAmount = Number(prompt('How much is the bill?'))
    let tip 
    if(billAmount<50){
        tip = 0.2
    }
    else if(billAmount>50 && billAmount<200){
        tip = 0.15
    }
    else if (billAmount>200) {
        tip = 0.1
    }

    const totalbill = billAmount * (1+tip)

    console.log("the bill amount is :",billAmount, "and the total bill including the tip is:", totalbill)

}

calculatetip()

//exercise 3 

function isDivisible(divisor){
    let sum = 0
    for(let i = 0; i <500; i ++){
        if(i%divisor ===0){
            console.log(i)
            sum=sum + i 
        }
    }

    console.log("the sum of numbers divisible by 23 is:", sum)
}

isDivisible(20)

//exercise 4 
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

const shoppingList = ["banana", "orange", "apple"]

function myBill(){
    for(const item of shoppingList){
        const quantityInStock = stock[item]

        if(quantityInStock >0){
            const price = prices[item]
            console.log("the price of", item, "is", price, "and we have this many in stock:", stock[item])
            stock[item] = stock[item] -1 

            console.log("the new quantity of this item in stock is ", stock[item])
        }else{
            console.log("there is no", item, "in stock")
        }
    }
}

myBill()

//exercise 5 

function calculateSum(arr){
    let sum = 0
for (let i = 0; i < arr.length; i++){
let coinvalue

        const numberOfCoins = arr[i]

        if (i === 0){ coinvalue = 0.25}

        if (i === 1){ coinvalue = 0.19}

        if (i === 2){ coinvalue = 0.05}

        if (i === 3){ coinvalue = 0.01}

        console.log("we have", numberOfCoins, "and coinvalue is", coinvalue)
        sum = sum + numberOfCoins * coinvalue
    }
    console.log("you own", sum)
    return sum
}

calculateSum([25, 20, 5, 0]);

function calculateSum(arr){
    let sum = 0

    for (let i = 0; i < arr.length; i++){

        let coinvalue

        const numberOfCoins = arr[i]

        if (i === 0){ coinvalue = 0.25}

        if (i === 1){ coinvalue = 0.19}

        if (i === 2){ coinvalue = 0.05}

        if (i === 3){ coinvalue = 0.01}

        console.log("we have", numberOfCoins, "and coinvalue is", coinvalue)
        sum = sum + numberOfCoins * coinvalue
    }
    console.log("you own", sum)

}
    return sum