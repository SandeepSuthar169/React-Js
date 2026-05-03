import React, { useState } from 'react'

// 1. Counter App
// Buttons: ➕ Increase, ➖ Decrease, 🔄 Reset
// Practice updating numbers

const Counters = () => {

  const [count, setCount] = useState(0)

  const IncreaseCount = () => {
    setCount((count) => count + 1)
  }
  const DecreaseCount = () => {
    setCount((count) => count - 1)
  }
  const ResetCount = () => {
    setCount((count) => 0)
  }


  return (
    <div>
      <h3>{count}</h3>
      <button
        onClick={IncreaseCount}
      >➕ Increase</button>
      <button
        onClick={DecreaseCount}
      >➖ Decrease</button>
      <button
        onClick={ResetCount}
      >🔄 Reset</button>
    </div>
  )
}

// 2. Toggle Text
// Button to show/hide text
// Learn boolean state (true/false)


const ToggleText = () => {

  const [text, setText] = useState(false)


  const handleToggleText = () => {
    setText(!text)
  }


  return (
    <div>
      <div>
        <h2>
          {text ? <p>Hii my name is sandeep</p> : <p></p>}
        </h2>
      </div>
      <button
        onClick={handleToggleText}
      >{text ? "SHOW" : "HIDE"}</button>
    </div>
  )
}

// 3. Input Mirror
// Input field + display text below
// Whatever user types → show instantly



const InputMirror = () => {

  const [text, setText] = useState("")

  const handleInputMirror = (e) => {
    setText(e.target.value)
  } 

  return (
    <div>
      <div>
        <h1>{text}</h1>
      </div>
      <div>
        <input 
          type="text"
          value={text}
          onChange={handleInputMirror}
        />
      </div>
    </div>
  )
}


// 4. Character Counter
// Input box
// Show number of characters typed

const CharacterCounter = () => {

  const [charecter, setCharecter] = useState("")
  const [toggle, setToggle] = useState(false)

  
  const handleToggle = () => {
    setToggle(!toggle)
  }
  
  const handleCharecterCount = (e) => {
    setCharecter(e.target.value)
  }

  return (
    <div>
      <div>
        <h2>{charecter.length}</h2>
        <div>
          {toggle ? <h2>{charecter}</h2> : ""}
        </div>
      </div>
      <div>
        <input 
          type="checkbox" 
          value={toggle}
          onClick={handleToggle}
        />
        <input 
          
          type="text"
          value={charecter}
          onChange={handleCharecterCount}  
          />
          
      </div>
    </div>
  )
}


// 5. Background Color Changer
// Button changes background color randomly
// Practice state with colors  rgb(77,113,99)


const BackgroundColorChange = () => {

  const defaultColor = `rgb(77,113,99)`
  const [colorChange, setColorChange] = useState(defaultColor)

  let randomColorGenerate = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    setColorChange(`rgb(${r},${g},${b})`)
  }

  return (
    <div style={{backgroundColor: colorChange}}>
      <button
      onClick={randomColorGenerate}
      >Random Color</button>

    </div>
  )
}

// 6. Simple Form (Name Display)
// Input: Name
// Show “Hello, [name]” below



const SimpleForm = () => {
  
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  return (
    <div>
      <div>
        <h1>Hii my name is {name}{" "}{lastName}</h1>
      </div>
      <input 
        type="text"
        value={name}
        onChange={handleName}
      />
      <input 
        type="text"
        value={lastName}
        onChange={handleLastName}
      />
    </div>
  )
}

// 7. Like Button 👍
// Button increases like count
// Optional: toggle liked/unliked


const LikeButton = () => {

  const [likeCount, setLikeCount] = useState(0)
  const [likeToggle, setLikeToggle] = useState(false)

  const handleLikeCount = () => {
    setLikeCount((likeCount) => likeCount + 1)
  }

  const handleLikeToggle = (e) => {
    setLikeToggle(!likeToggle)
  }

  return (
    <div>
      <div>
          <h2>👍{likeCount}</h2>
      </div>
      <div>
        <input 
          type="checkbox" 
          value={likeToggle}
          onChange={handleLikeToggle}  
        />

        <button
          onClick={handleLikeCount}
        >{likeToggle ? "LIKE" : "UNLIKE"}</button>
      </div>
    </div>
  )
}

// 8. Show/Hide Password
// Password input
// Button to toggle visibility


const PasswordSH = () => {

  const [password, setPassword] = useState("saey4uth3oif4t")
  const [passwordHide, setPasswordHide] = useState(false)

  const passwordGeneraget = () => {
    let result = ""
    let allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let allCharlength = allChar.length

    for(let i = 0;  i < 10; i++ ){
      result += allChar.charAt(Math.random() * allCharlength)
    }

    setPassword(result)
  }

  const passwordhs = () => {
    setPasswordHide(!passwordHide)
  }

  return (
    <div>
      <div>
      <h1>{passwordHide ? password : ""}</h1>      
      </div>
      <button
      onClick={passwordGeneraget}
      >PASSWORD</button>
      <button
        onClick={passwordhs}
      >{passwordHide ? <p>HIDE</p> : <p>UNHIDE</p>}</button>
    </div>
  )
}


// 9. Simple Calculator
// Two inputs + add button
// Show result below

const Claculator = () => {

  const [addA, setAddA] = useState(0)
  const [addB, setAddB] = useState(0)
  const [adding, setAdding] = useState(0)

  const handleCalsetAddA = (e) => {
    setAddA(e.target.value)
  }
  const handleCalsetAddB = (e) => {
    setAddB(e.target.value)
  }

  const handleAdd = () => {
    setAdding(Number(addA) + Number(addB))
  }

  return (
    <div>
      <div>
        <h1>{adding}</h1>
      </div>
      <div>
        <input 
          type="number" 
          value={addA}  
          onChange={handleCalsetAddA}
        />
        <input  
          type="number" 
          value={addB}  
          onChange={handleCalsetAddB}
        />
        <button
        onClick={handleAdd}
        >Add</button>
      </div>
    </div>
  )
}


// 10. Todo (Very Basic)
// Add text to list
// Display items (no delete needed yet)


const Todo = () => {

  const [input, setInput] = useState("")
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  const handleInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <div>
        <h3>{input}</h3>
      </div>
      <input 
        type="checkbox"
        value={toggle}
        onChange={handleToggle}

      />
      <input 
        type="text"
        value={input}
        onChange={handleInput}
      />
    </div>
  )
}



const App = () => {
  return (
    <div>
      <Counters />
      <ToggleText />
      <InputMirror />
      <CharacterCounter />
      <BackgroundColorChange />
      <SimpleForm />
      <LikeButton />
      <PasswordSH />
      <Claculator />
      <Todo />
    </div>
  )
}

export default App