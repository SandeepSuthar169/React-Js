import React from 'react'

const Button = ({text, color, size, onClick}) => {
  return (
    <div>
        <button
            onClick={onClick}
            className={`
                    ${size === "samll" ? "text-sm px-4 py-1" : ""}
                    ${size === "large" ? "text-lg px-6 py-3" : ""}
                    ${color === "green" ? "bg-green-500 px-4 py-2 text-gray-600" : ""}
                    ${color === "red" ? "bg-red-500 px-4 py-2 text-gray-600" : ""}
                `}
        >{text}</button>
    </div>
  )
}

export default Button