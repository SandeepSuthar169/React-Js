import { createSolutionBuilderHost } from "typescript";

const register = (name: string, password: string): string => {
    return `name: ${name} and last name ${password}`
}

// console.log(register("sandeep", "sutar"));
// ------------------------------------------------------------------

const name = 'sandeep'

const random = Math.floor(Math.random() * 100)

let names: string = "suthar"

let randoms: number = Math.floor(Math.random() * 100)

let value: boolean = false


// ------------------------------------------------------------------

let sub: number | string = 10
let sub1: number | string = "10B"

let role: "user" | "admin" = "user"

role = 'admin'

// ------------------------------------------------------------------

const nums = [12, 23, 5, 0, 43, 95]

let result: number | undefined

for(let i= 0; i < nums.length; i++ ){
    if(nums[i] === 12){
        result = 1
        break
    }
}

console.log(result);


// ------------------------------------------------------------------


const func = (value: string | number) => {
    if(typeof value === "number"){
        return `${value}`
    }
    return `${value}`
}


const numc = (coofe: "small" | "middum" | "large" | string | boolean ) => {
    if(coofe === "small"){
        return `small ${coofe}`
    } 
    if(coofe === "string"){
        return `string ${coofe}`
    }
    if(coofe === "boolen"){
        return `string ${coofe}`
    }
}


// ------------------------------------------------------------------
