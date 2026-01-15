import React, { useState } from 'react'

function Button({text, color, size, onClick, disable}){
  return(
    <button
    onClick={onClick}
    disabled={disable}
    className={`
      px-6 py-2 rounded-lg font-medium transition-all duration-300
      ${size === 'small' ? 'text-sm px-3 py-1': ''}
      ${size === 'large' ? 'text-lg px-8 py-3': ''}
      ${color === 'primary' ? 'bg-blue-600 hover:bg-blue-700 text-white ': ''}
      ${color === 'secoundary' ? 'bg-gray-600 hover:bg-gray-700 text-white ': ''}
      ${color === 'danger' ? 'bg-red-600 hover:bg-red-700 text-white ': ''}
      ${color === 'successfully' ? 'bg-green-600 hover:bg-green-700 text-white ': ''}
      ${disable ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      {text}
    </button>
  )
} 

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <section className='p-8 bg-white rounded-xl shadow-2xl'>
      <h2 className='text-3xl font-bold mb-4 text-gray-800'>Basic Props</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias placeat eius, sed pariatur numquam dicta.</p>
      <div className="space-y-5">
        <h3>DIfferent color {clickCount}</h3>
        <div className='flex flex-wrap gap-3'>
          <Button
            text='Primary button'
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text='Secoundary button'
            color="secoundary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text='Danger button'
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text='Successfully button'
            color="successfully"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
      <div className="space-y-5">
        <h3>DIfferent size {clickCount}</h3>
        <div className='flex flex-wrap gap-3'>
          <Button
            text='small'
            color="primary"
            size='small'
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text='Secoundary button'
            color="secoundary"
            disable={true}
            onClick={() => setClickCount(clickCount + 1)}
          />
         <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
          <p className='text-lg font-medium text-gray-700'>
            Click Count: {" "}
            <span className='text-blue-600 font-bold'>{clickCount}</span>
          </p>
         </div>
        </div>
      </div>
    </section>
  )
}

export default BasicProps