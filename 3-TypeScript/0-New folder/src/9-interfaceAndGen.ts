interface Coffee {             // 1
    readonly id: number        // 2
    flavor: string
    price: number
    milk?: boolean           // 3
}


const valinaCoffee: Coffee = {
    id: 53,
    flavor: "black",
    price: 20
}

// ------------------------------------------------------


// Interface is a way to define the shape of an object .


interface DiscountCalculator {
    (price: number): number
}

const apply100: DiscountCalculator = (p) =>  p * 312


// -------------------- basic ----------------------------------

interface User {
    id: number;
    name: string;
    email?: string;
}

const user: User = { 
    id: 1,
    name: "Josh",
    email: "josh@suhar.com"
}

// ------------------------------------------------------
interface UserResponse {
    id: number;
    username: string;
    email: string;
  }
  
  async function getUser(): Promise<UserResponse> {
    const response = await fetch("/api/user");
    const data = await response.json();
  
    return data as UserResponse;
  }

  