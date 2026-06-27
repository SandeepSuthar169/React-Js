const coffeeFlavours: string[] = ["milk", "water"]
const coffeeFlavours1: number[] = [5, 63]
const rating: Array<number> = [0.3, 9, 9.000]


// --------------------------------------------------

type  coffee = {
    name: string
    price: number
}

const nenu: coffee[] = [
    {name: "hot", price: 54},
    {name: "ice", price: 34},
]

// ------------------- read only array -------------------------------


let cities: readonly string[] = ['vadodara', 'surat', "pune"]
// cities.push("pune")

// -----------------------------------------------

const coffeeItems: [name: string, price: number] = ["soft Coffee", 30]

// --------------------------------------------------

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.MEDIUM
const size1 = CupSize.LARGE

// --------------------------------------------------   // v.v imp

enum CoffeeType {
    SOFT = "soft",
    HOT = "hot",
    COOL = "cool"
}

const makeFunciton = (type:CoffeeType) => {
    console.log(type);

}

makeFunciton(CoffeeType.COOL)

// --------------------------------------------------

