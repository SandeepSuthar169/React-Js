import { useCallback, useState} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(5);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passowrd, setPassword] = useState();

  const passwrdGenerator = useCallback(() => {
    let pass = ''
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
     <h1 className='text-xl text-white'> Password Generator</h1>
    </>
  )
}

export default App
