import { useState } from "react"

const App = () => {

    const initialColor = 'rgb(128, 128, 128)'
    const [color, setColor] = useState(initialColor)

    const  randomColorGenerate = () => {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)

        return `rgb(${r}, ${g}, ${b})`
    }

    const handleClick = () => {
        setColor(randomColorGenerate())
    }
``
    return (
    <div>
        <div style={{backgroundColor: color}}>
            <button
                onClick={handleClick}
            >Click</button>
        </div>
    </div>
  )
}

export default App