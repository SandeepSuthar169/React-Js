const coffeee = {
    name: "softCoffee",
    price: 100,
    isHot: true
}

// declearinig object type ---------------------------------------------------
 

let coffee: {
    name: string
    price: number
    isHot: boolean
}

coffee = {
    name: "Ristretto",
    price: 104,
    isHot: false
}

// aliast object ---------------------------------------------------

type COCO = {
    name: string;
    price: number;
    ingreadent: string[]
}   

const cocis: COCO = {
    name: "Ristretto",
    price: 132,
    ingreadent: ["suger", "milk", "water", "coffee pouder"]
}

// look a like duck typing ---------------------------------------------------  imp

type Cup = { size: string}
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", marerial: "stone"}

smallCup = bigCup

// ---------------------------------------------------  imp

type Brew = {brewTime: number}
const coffee6 = {brewTime: 5, breans: "UK"}

const CoffeeBrew: Brew = coffee6


// ---------------------------------------------------  VV IMP

// type registers = {
//     name: string
//     password: string
// }

// const u1: registers = {             // error showing 
//     name: "sandeep suthar", 
// }

// ---------------------------------------------------   VV IMP

type profile = {name: string, bio: string, age: number}
type address = {name: string, pinCode: number, states: string}

type U1Order = {
    id: string
    role: string
    profiles: profile[]
    addresses: address 
}

// ---------------------------------------------------  VVVVVV IMP

type Coffee10 = {
    name: string
    price: number
    isHot: boolean
}

const updateCoffee = (up: Partial<Coffee10>) => {     //all properties in T optional
    console.log(`updateing coffee with ${up}`);

}

updateCoffee({price: 12})
updateCoffee({price: 12, name: "Hot Coffee"})
updateCoffee({})                                    // problem is empty 



// ---------------------------------------------------  VVVVVV IMP


type BotelOrder = {
    name: string,
    quantity: number
}

const placeOrder = (or : Required<BotelOrder>) => {  // Make all properties in T required
    console.log(or);
    
}

placeOrder({name: "mitesh botel", quantity: 2})

// ---------------------------------------------------  V IMP
