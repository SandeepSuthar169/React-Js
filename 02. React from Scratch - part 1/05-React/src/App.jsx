import { useState, useEffect, useReducer } from "react";


export function App(){
    const [message, setMesaage] = useState("Loaging...")   //const [variable, function] 
    
    useEffect(() => {
        fetch(`/api`)
            .then((res) => res.json())
            .then((data) => setMesaage(data.message))
            .catch(() => setMesaage("Failed to load"));

    }, [])

    return (
        <div>
            <h1>hwllo world </h1>    
            <p>serving code with me </p>
            <h2>{message}</h2>    
        </div>
    );
}  