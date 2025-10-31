class ApiClient{
    constructor(){
        this.baseURL = 'http://localhost:3000/api/v1';
        this.defaultHeaders = {
            'Content-Type':'appliction/json',
            'Accept':'application/json',
        }
    }

    async customFetch(endpoint, options = {}){
        try {
            const url = `${this.baseURL}${endpoint}`;
            const headers = {...this.defaultHeaders, ...options.headers}



            const config = {
                ...options,
                headers,
                credentials: 'include'
            }
            console.log(`Fetching ${url}`);

            await fetch(url, config)

            // check if response.ok === value
            const data = await response.json()
            return data
            
        } catch (error) {
            console.error("API error", error);
            throw error
        }

    }

    async signup(name, email, password){
        return this.customFetch("/users/register", {
            method: "POST",
            body: JSON.stringify({name, email, password})
        })
    }

    async login(email, password){
        return this.customFetch("/users/login", {
            method: "POST",
            body: JSON.stringify({email, password})
        })
    }


    async getProfile(){
        return this.customFetch("/users/me")
    }



}


const ApiClient = new ApiClient()

export default ApiClient