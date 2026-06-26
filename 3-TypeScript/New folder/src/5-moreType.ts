// ----------------------- voin, any, unknown, never --------------------------   imp

import { getLeadingCommentRanges } from "typescript";


type Book = {
    name: string
} 


let bookString = '{"name": "whow moved my cheese"}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);



// -------------------- any, unknown -----------------------------  // IMP

// const inputElemet = document.getELementById("username") as HTMLInputElement

let value: any

value = "coffee"
value = [1, 2, 3]
value = 2.3
value.toUpperCase()


let newValue: unknown

newValue = "coffee"
newValue = [1, 2, 3]
newValue = 2.3
// newValue.toUpperCase()  // error

if(typeof newValue === "string"){
    newValue.toUpperCase()
}


// -------------------------------------------------  // IMP

try {
    // 
    // 
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
}


// -------------------------------------------------  // IMP


const data:unknown = "coffee and me";
const strData: string = data as string


// -------------------------------------------------  


type Role = "admin" | "user" | "superAdmin"

const redirectBaseOnRole = (role: Role): void => {  // void
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return
    }

    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return
    }
    role;  // superAdmin   // this is almost less use in production
}


// ------------------- never ------------------------------   this is infinite Loop 

const neverReturn = (): never => {
    while(true){

    }
}