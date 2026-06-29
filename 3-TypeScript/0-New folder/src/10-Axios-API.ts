import axios, { type AxiosResponse} from "axios";


interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

const fetchDataTodo = async () => {
    try {
        const responses: AxiosResponse<Todo> = await axios.get(
            'https://jsonplaceholder.typicode.com/todos/1'
        )

        console.log('Todo', responses.data);
        console.log('Todo', responses.request);
        console.log('Todo', responses.status);
        
    } catch (error: any) {
        if(axios.isAxiosError(error)){
            console.log("axios error", error.message);
            console.log("axios error", error?.status);
            
        }
    }
}