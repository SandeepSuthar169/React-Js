import { useEffect, useState } from "react";

export function ChaiMenu(){

    const [menu, setMenu] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {   // data fecting, webSockt, 
        fetch("/api/all-chai")
        .then(res => res.json())
        .then(data => setMenu(data))
        .catch(err => setError(err.message))
    }, []);

    return (
        <div>
            <h1>Avaliable Chai</h1>
            <ul>
                {menu.map(chai => (
                    <li key={chai.name}>{chai.name}</li>
                ))}
            </ul>
        </div>
    )

}