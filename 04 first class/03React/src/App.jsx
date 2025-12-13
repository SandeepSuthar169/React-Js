import { useState, useEffect } from 'react'
import { ChaiMenu } from './AllChai'
import { useSpecialChai } from './hooks/useSpecialME'

export function App() {
 const [messaage, setMessage] = useState("Loading...")
 const {chai, loading, error,} = useSpecialChai()


 useEffect( () => {
  fetch(`/api`)
    .then((res) => res.json() )
    .then((data) => setMessage(data.messaage))
    .catch(() => setMessage("failed to load"))

 }, [])


    if(loading) return <h2>loading...</h2>
    if(error) return <h2>Error: </h2>
  // setMessage(prev => prev + 5)


  return (
    <>
     <h1>hiii</h1>
     <h1>{messaage}</h1>
     <ChaiMenu />
     <chai.name />
    </>
  )
}