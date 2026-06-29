// any 

let sub: number | string = 1
let subs: number | string = "1M"

// ----------------------------------------------------   imp

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

apiRequestStatus = 'success'
// apiRequestStatus = 'done'            // error


// ----------------------------------------------------

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'

airlineSeat = 'aisle'

// ----------------------------------------------------   imp

const orders = ['12', '20', '32', "97"]

let currentOrder: string | undefined;

for(let order of orders){
    if (order === '20'){
        currentOrder = order
        break
    }
}

console.log(currentOrder);
