import { useState, useEffect } from 'react'


export function App() {
 const [messaage, setMessage] = useState("Loading...")

 useEffect( () => {
  fetch(`/api`)
    .then((res) => res.json() )
    .then((data) => setMessage(data.messaage))
    .catch(() => setMessage("failed to load"))

 }, [])
  return (
    <>
     <h1>hiii</h1>
     <h1>{messaage}</h1>
    </>
  )
}

