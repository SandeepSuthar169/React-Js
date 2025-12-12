import { useState, useEffect } from 'react'
import { ChaiMenu } from './AllChai'

export function App() {
 const [messaage, setMessage] = useState("Loading...")

 useEffect( () => {
  fetch(`/api`)
    .then((res) => res.json() )
    .then((data) => setMessage(data.messaage))
    .catch(() => setMessage("failed to load"))

 }, [])

  // setMessage(prev => prev + 5)


  return (
    <>
     <h1>hiii</h1>
     <h1>{messaage}</h1>
     <ChaiMenu />
    </>
  )
}

