import { useState } from "react";

export function myCounter(){

    const [count, setCount] = useState(0)

    const serveChai = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <h2>My counter</h2>
            <p>hiiiiiiiiiiiiiiii {count} iiiiiiiiiiiiiii</p>
           //// {/* <button onClick={() => setCount(prev => prev + 1)}>Server click...</button> */}
            <button onClick={serveChai}>Server click...</button>
        </div>
    )
}