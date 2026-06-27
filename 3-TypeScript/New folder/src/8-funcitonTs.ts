const oneCoffee = (order: string) => {
    console.log(order);
    
}

// ------------------------------------------------------

const twoCoffee = (value: string): string => {
    return "kasfd"

}

// ------------------------------------------------------

const threeCOffee = (price: number): number | null => {
    if(!price) return null
    return price
}

// ------------------------------------------------------


const voidCoffee = () : void => {
    console.log("nothing to return any data tyype ");
    
}


// ------------------------------------------------------
// 
// const orderCoffee = (type?: string) => {
//     
// }

const orderCoffee = (type: string = 'black' ) => {
    
}

// ------------------------------------------------------  // imp


const createCoffee = (order: {
    type: string;
    suger: number;
    muik: boolean
    size: "small" | "large"
}): number[] | string => {
    return [5]
}


// ------------------------------------------------------
