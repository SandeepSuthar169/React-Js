interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}


const fetchDataTodo = async () => {
    try {
        const responses = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        if(!responses.ok) throw new Error(`http error ${responses.status}`);

        const data: Todo | unknown = await responses.json()
         
    } catch (error: any) {
      
            
    }
}