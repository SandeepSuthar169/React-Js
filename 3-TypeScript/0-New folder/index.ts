const drinkWaterPerson = 'sandeep'

const drinkWaterPerson1: string = "sandeep"

// -----------------------------------------------------------

const classSection: 'section-1' | 'section-B' = 'section-1'

// classSection = 'section-B'  // error

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'

airlineSeat = 'aisle'


// -----------------------------------------------------------


let sub: string | number = 1
sub = '32'

// -----------------------------------------------------------

const postAPI = (post: string | object) => {
    
}

const postAPI1 = (post?: string) => {

}

const postAPI2 = (post: string | "one" | "moreByone") => {

}


// -----------------------------------------------------------

type CoffeeList = {
    type: string
    milk: number
    suger: boolean
}

const CoffeeOrderManBy = (item: CoffeeList | string) => {

    return `${item}`
}




const CoffeeOrderWomenBy = (obj: any): obj is CoffeeList => {
    return(
        typeof obj === "object"        
    )
}
// -----------------------------------------------------------


type CoffeeList1 = { type: "Balck", type1: "Double Espresso", type2: "Long Black" }
type CoffeeList2 = { type: "Balck", type1: "Double Espresso", type2: "Long Black" }
type CoffeeList3 = { type: "Balck", type1: "Double Espresso", type2: "Long Black" }



type coffee = CoffeeList1 | CoffeeList2 | CoffeeList3

const MakeCoffee = (order: coffee) => {

}


// -----------------------------------------------------------

let value: any
value = "coffee"
value = 32312
value = false
value.toUpperCase()

let newValue: unknown

newValue = "coffee1"
newValue = 5325532
newValue = true

if(typeof newValue === "string"){
    newValue.toLowerCase()
}


// -----------------------------------------------------------


type Book = {
    id: string
    name: string
    price: number
    role: 'customer' | 'admin'
    dashboardAccess: boolean
    loyaltyPoints: number
    permissions: string[]

}

let bookBuy = `
[
    {
      "id": "u_101",
      "name": "Alice Cooper",
      "role": "customer",
      "loyaltyPoints": 450
    },
    {
      "id": "u_102",
      "name": "Bob Admin",
      "role": "admin",
      "dashboardAccess": true,
      "permissions": ["delete_users", "view_metrics"]
    },
    {
      "id": "u_103",
      "name": "Charlie Brown",
      "role": "customer",
      "loyaltyPoints": 120
    }
  ]`

let bookObject = JSON.parse(bookBuy)  as Book

//            as, any, unknown, void, instanceof, never

// ----------------------------------------------------------- instanceof

try {
    
} catch (error) {
    if(error instanceof Error) {
        console.log(error.message);
    }

    console.error("error", error);
    
}

// -----------------------------------------------------------  unknown


const data: unknown = "My name is sandeep suthar"
const everyThinkingIsObj: string = data as string

// -----------------------------------------------------------

type Coffee1 = { type: "Balck", type1: "Double Espresso", type2: "Long Black" }
type Coffee2 = { type: "Balck", type1: "Double Espresso", type2: "Long Black" }
type Coffee3 = { type: "Balck", type1: "Double Espresso", type2: "Long Black" }

type  BigCoffee = Coffee1 & Coffee2 & Coffee3


const funs = (a: BigCoffee): void => {
    console.log(`a`, a);
}


// -----------------------------------------------------------
