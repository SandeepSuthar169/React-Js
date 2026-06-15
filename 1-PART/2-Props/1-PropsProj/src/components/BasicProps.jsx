import React, { useState } from 'react'

const Button = ({text, color, size, onClick, disabled}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-2 rounded-lg font-medium transition-all duration-300
        ${size === "small" ? "text-sm px-2 py-1" : ""}
        ${size === "large" ? "text-lg px-8 py-3" : ""}
        ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
        ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""}
        ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
        ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
    >{text}</button>
  )
}


const BasicProps = () => {

  const [clickCount, setClickCount] = useState(0);
  return (
    <section className='p-8 bg-white rounded-xl shadow-2xl'>
      <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt reprehenderit nisi maiores, possimus asperiores consequuntur. Cupiditate quo odit dicta Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolor.</p>
      <div className='space-y-4 mt-4'>
        <h1 className='text-orange-950'>Different Colors {clickCount}</h1>

        <div className='flex flex-wrap gap-2'>
          <Button 
            text="Primary button"
            color="primary"
            size="large"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button 
            text="Decondary button"
            color="secondary"
            size="small"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button 
            text="Danger button"
            color="danger"
            size="large"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button 
            text="Success button"
            color="success"
            size="small"
            onClick={() => setClickCount(clickCount + 1)}
          />
    
          <Button 
            text="Primary button"
            color="primary"
            disabled={true}
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
    </section>
  )
}

export default BasicProps