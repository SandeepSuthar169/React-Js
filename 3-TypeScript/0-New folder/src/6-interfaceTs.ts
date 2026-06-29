import type { NumericLiteral } from "typescript"

type Coffee = {
    type: string
    milk: number
    strong: boolean
}

const makeCoffee = (order: Coffee) => {
    console.log(order);
}

const serveCoffee = (order: Coffee) => {
    console.log(order);
}


// -------------------------------------------------

type CoffeeRecipe = {
    water: number
    milk:  number
}


class LongMacchiato implements CoffeeRecipe {
    water = 100
    milk = 50
}


// ------------------------------------------------- imp

type CoffeeType = "milkCoffee" | "waterCoffee" | "darkCoffee"

const orderCoffee = (c: CoffeeType) => {
    console.log(c);
}

// ------------------------------------------------- imp 


type BaseCoffee = {coffeePouder: number}
type soft = {softy: boolean}

type darkMacchiato = BaseCoffee & soft

const cup: darkMacchiato = {
    coffeePouder: 10,
    softy: false
}


// ------------------------------------------------- VV IMP

type user = {
    username: string
    bio?: string
}

const u1: user = {username: "sandeep"}
const u2: user = {username: "sandeep", bio: "software enginer "}

type Config = {
    readonly appName: string
    version: number
}

const ats: Config = {
    appName: "apiBox",
    version: 1.1
}

// ats.appName = "My Potfolio"  // erro 