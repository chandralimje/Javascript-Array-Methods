console.log("------------------ Splice method------------------")

let fruit = ["Apple", "Banana", "Mango"]
fruit.splice(1, 0, "orange")
console.log(fruit)

let number2 = ["257","568","9874","2147"]
number2.splice(2, 2, 3741)
console.log(number2)

// console.log("-------------------------------------------------------------------")
console.log("")

console.log("------------------ Slice method------------------")

let birds = ["Eagle", "Duck", "Kingfisher", "Cockatoo"]
let birdsCopy = birds.slice(0,2)
console.log(birdsCopy)

let fruit5 = ["apple","banana","mango","orange"]
let fruit5Copy = fruit5.slice(1,3)
console.log(fruit5Copy)

// console.log("-------------------------------------------------------------------")
console.log("")

console.log("------------------ Concat method------------------")

let colours = ["Green", "Purple", "Red"]
let moreColours = ["Brown", "Pink", "Yellow"]
let allColours = colours.concat(moreColours)
console.log(allColours)

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

// console.log("-------------------------------------------------------------------")
console.log("")

console.log("------------------ Fill method------------------")

const Flowers = ["Lotus", "Jasmine", "Sunflower"]
Flowers.fill("Daisy")
console.log(Flowers)

const car = ["Tata","Mahindra","BMW"]
car.fill("Audi")
console.log(car)

// console.log("-------------------------------------------------------------------")
console.log("")

console.log("------------------ toString method------------------")

const Tree = ["Sal", "Peepal", "Tamarind", "Neem"]
Tree.toString()
console.log(Tree)

// console.log("-------------------------------------------------------------------")
console.log("")

console.log("------------------ Join method------------------")

let TV = ["Samsung", "Sony", "VU", "Realme", "LG"]
TV.join(" ")
console.log(TV)

// console.log("-------------------------------------------------------------------")
console.log("")

console.log("------------------ Sort method------------------")

let Animal = ["Leopard","Cheetah","Polar bear","Elephant"]
Animal.sort()
console.log(Animal)

// console.log("-------------------------------------------------------------------")
console.log("")

console.log("------------------ Reverse method------------------")

const name = ["babu","Vaibhav","Arjun","Dinesh"]
const ascendingName = name.sort()
const descendingName = ascendingName.reverse()
console.log(descendingName)

const akade = ["657","578","258","917","167"]
const ascendingAkade = akade.sort()
const descendingAkade = ascendingAkade.reverse()
console.log(descendingAkade)

const akade2 = ["657","578","258","917","167"]
const descendingAkade2 = akade2.reverse()
const ascendingAkade2 = descendingAkade2.sort()
console.log(ascendingAkade2)

// console.log("-------------------------------------------------------------------")
console.log("")

console.log("------------------ includes method------------------")

let fruit2 = ["papaya","Mango"]
let isMangoAvailable = fruit2.includes("Mango")
console.log(isMangoAvailable)

const ZX = ["6578","5689","2374"]
const available = ZX.includes("5555")
console.log(available)

// console.log("-------------------------------------------------------------------")
console.log("")

console.log("------------------ indexOf method------------------")

let bike = ["Honda","Hero","Suzuki","BMW"]
let isBikeAvailable = bike.indexOf("Hero")
console.log(isBikeAvailable)

// console.log("-------------------------------------------------------------------")
console.log("")


// ------------------------------- Static Array Methods-----------------------------

console.log("------------------ Array.from method------------------")

const letter = Array.from("banana")
console.log(letter)

const Animal1 = Array.from("Tiger")
console.log(Animal1)

// console.log("-------------------------------------------------------------------")
console.log("")

console.log("------------------ Array.of method------------------")

const b = Array.of("potato","onion",5)
console.log(b)

// console.log("-------------------------------------------------------------------")
console.log("")

console.log("------------------ Array.isArray method------------------")

const jk = Array.isArray(["facebook","youtube"])
console.log(jk)

const d = Array.isArray("facebook","youtube")
console.log(d)

console.log("")
console.log("---------------------------- Map method -------------------------")

let names = ["Prakash", "Shivam", "Mohit", "Pankaj", "Asha"]
let result = names.map((names, index) => {
    console.log(index)
    console.log(names)
})
// console.log(result)

console.log("-------------------------------------------------------------------")

let Vegetable = ["Capsicum : Rs. 40kg", "Cauliflower : Rs. 50kg", "Brinjal : Rs. 30kg", "Pumpkin : Rs. 45kg", "Mushroom : Rs. 60kg"]
let view = Vegetable.map((Vegetable, index) => {
    console.log(index)
    console.log(Vegetable)
})

console.log("-------------------------------------------------------------------")
console.log("")

console.log("------------------------- Fillter method---------------------------")

const laptops = [
    {
        brand: "Lenovo",
        price: 35000,
    },
    {
        brand: "Apple",
        price: 90000,
    },
    {
        brand: "Apple",
        price: 90000,
    },
    {
        brand: "Apple",
        price: 90000,
    },
    {
        brand: "HP",
        price: 50000,
    },
    {
        brand: "Dell",
        price: 45000,
    },
    {
        brand: "Asus",
        price: 67000,
    },
    {
        brand: "Acer",
        price: 32000,
    },
    
]
console.log(laptops)
const DellLaptop = laptops.filter((laptop) => {
    console.log(laptop.brand)
    if(laptop.brand == "Apple" || laptop.brand == "Asus"){
        return true
    }
})
console.log(DellLaptop)

console.log("-------------------------------------------------------------------")
console.log("")

console.log("------------------------- Reduce method---------------------------")

let data = [56, 87, 54, 71, 32, 11, 23, 99]
const dataManage = data.reduce((total, data) => {
    // console.log(total + data)
    result = total + data
    return result

})
console.log(dataManage)

console.log("------------------------- ForEach method---------------------------")

let coldDrinks = ["Pepsi", "CocaCola", "Sprite", "Furti", "Fanta"]
let dot = coldDrinks.map((coldDrinks, index) => {
    // console.log(index)
    console.log(coldDrinks)
})

console.log("-------------------------------------------------------------------")

const number = [15, 65, 78, 32, 88, 69, 47,55]
const upnum = number.forEach((num)=>{
    console.log(num)
})
