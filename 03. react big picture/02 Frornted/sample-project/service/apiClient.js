class ApiClient{
    constructor(){
        this.baseURL = 'http://localhost:5173/api.v1';
        this.defaultHeadars = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }
    async customFectch(endPoin, options = {}){
        try {
            const url = `${this.baseURL}${endPoin}`;
            const headers = {...this.defaultHeadars, ...options.headers}

            const config = {
                ...options,
                headers,
                Credential: 'include'
            }
            console.log(`Fetching ${url}`);

            const response =  await fetch(url, config)
            const data = await response.json()
            return data
            
        } catch (error) {
            console.error('API Error', error);
            // throw error()
        }
    }

}