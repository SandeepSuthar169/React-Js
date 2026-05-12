import React, { useState } from 'react'

const Button = ({text, color, size, onClick, disabled}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
          px-6 py-2 rounded-lg font-medium transition-all duration-300
          ${size === "small" ? "text-sm px-4 py-1" : ""}
          ${size === "large" ? "text-sm px-4 py-1" : ""}
          ${color === "primary" ? "bg-blue-800 hover:bg-blue-500 text-white" : ""}
          ${color === "secoundary" ? "bg-orange-600 hover:bg-orange-500 text-white" : ""}
          ${color === "danger" ? "bg-red-800 hover:bg-red-500 text-white" : ""}
          ${color === "success" ? "bg-green-800 hover:bg-green-500 text-white" : ""}
          ${disabled  ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
    >
      {text}
    </button>
  )
}



const BasicProps = () => {

  const [clickCount, setClickCount] = useState(0)

  return (
    <section className="p-4 bg-white rounded-xl shadow-2xl">
      <div>
        <h2 className="text-gray-950 p-3 ">
          {clickCount}
        </h2>
      </div>
      <div className="flex flex-wrap gap-3.5">
        <Button 
          text="primary button"
          color="primary"
          onClick={() => setClickCount(clickCount + 2)}
        />

        <Button 
          text='secoundary button'
          color="secoundary"
          onClick={() => setClickCount(clickCount => clickCount * 2)}
        />

        <Button 
          text='danger button'
          color="danger"
          onClick={() => setClickCount(clickCount => clickCount / 2)}
        />

        <Button 
          text='success button'
          color="success"
          onClick={() => setClickCount(clickCount => clickCount ** 2)}
        />

        <Button 
          text='disabled button'
          disabled={true}
          color="danger"
          onClick={() => setClickCount(clickCount => clickCount + 1)}
        />

        <Button 
          text='small button'
          size="small"
          color="primary"
          onClick={() => setClickCount(clickCount => clickCount + 1)}
        />
   
        <Button 
          text='large button'
          size="large"
          color="success"
          onClick={() => setClickCount(clickCount => clickCount + 1)}
        />
      </div>
    </section>
  )
}

export default BasicProps