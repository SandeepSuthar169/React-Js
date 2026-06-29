import type { BinaryOperatorToken, StructuredType } from "typescript"       // imp

const getApi = (kind: string | number) => {
    if(typeof kind === "string"){
        return `get order ${kind}`
    } 
    return `post order: ${kind}`
}


// -------------------------------------------------

const serverAPI = (msg?: string) => {
    if(msg){
        return `Server Start ${msg}`
    }
    return `server default run on 300`
    // return `server default run on 300 ${msg}` // error
}

// -------------------------------------------------  imp
 
const orderChoofe = (size: "small" | "medium" | "large" | number) => {
    if(size === "small"){
        return `small box paking`
    }
    if(size === "medium" || size === "large"){
        return `male extra choof`
    }

    return `chai order ${size}` 
}

// -------------------------------------------------    imp


class CoffeeBlack {
    serve(){
        return `Serving Blanck coffee`
    }
}

class CoffeeWhite {
    serve(){
        return  `Serving WHITE Coffee`
    }
}


const serve = (coffee: CoffeeBlack | CoffeeWhite) => {
    if(coffee instanceof CoffeeBlack){
        return coffee.serve()
    }
}

// -------------------------------------------------  

type CoffeeOrder = {
    type: string
    milk: number
}

const isCoffeeOrder = (obj: any): obj is CoffeeOrder => {
    return (
        typeof obj === "object" && 
        obj != null && 
        typeof obj.type === "string" &&
        typeof obj.milk === "number"
    )
}


const serveOrder = (item: CoffeeOrder | string) => {
    if(isCoffeeOrder(item)) {
        return `serving ${item.type} coffee with ${item.milk}` 
    }
    return `serving custom coffee: ${item}`
}

// -------------------------------------------------   imp

type BlackCofee = { type: "Black",spicleLevel: number }
type SoftCofee = { type: "Soft",amount: number }
type WhiteCofee = { type: "milkWhite",aroma: number }
type AmericanoCoffee = { type: "Americano",aroma: number }
type MacchiatoCoffee = { type: "milkWhite",aroma: number }

type coffee = BlackCofee | SoftCofee | WhiteCofee

const MakeCoffee = (order: coffee) =>  {
    switch (order.type) {
        case "Black":
            return `Black Coffee`
            break;
        case "Soft":
            return `Soft Coffee`
            break;
        case "milkWhite":
            return `milk White Coffee`
            break;
        }
}

// Double Espresso (Doppio)
// Short Macchiato
// Long Macchiato
// Ristretto
// Long Black (Americano
// -------------------------------------------------  
const EspressoDrinkRecipes = (order: AmericanoCoffee | MacchiatoCoffee ) => {
    if("spicleLevel" in order) {
        // 
    }
}


// -------------------------------------------------  
// const isStringArray = (arr: unknown): arr is String[] {
//     
// }





