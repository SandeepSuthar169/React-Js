import { useState, useCallback, useEffect, useRef } from "react";


function App(){

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useref hook

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}[]?/_-"

    for(let i= 1; i< length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPassowrdToClick = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])



  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="max-w-md mx-auto  shadow-md rounded-lg px-4 my-28 text-orange-400 bg-gray-800">

      <h1 className="text-white text-center" >
      Password
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-10 bg-white">
        <input 
          type="text" 
          value={password} 
          className="outline-none w-full py-6 px-6  text-gray-800 font-medium placeholder-gray-400 focus:bg-gray-100"
          placeholder="Password" 
          readOnly

          ref={passwordRef}
        />

        <button 
        onClick={copyPassowrdToClick}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>

      <div className=" flex text-sm gap-2">
        <div className="flex items-center gap-x-1">
          <input type="range" 
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev => !prev))
            }}
          />
          <label htmlFor="numberInput">Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charterInput"
            onChange={() => {
              setCharAllowed((prev => !prev))
            }}
          />
          <label htmlFor="charterInput">Charcters</label>
        </div>


      </div>

    </div>
  )
}

export default App;