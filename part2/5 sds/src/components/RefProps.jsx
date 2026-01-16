import React from 'react'
import { useRef, forwardRef } from 'react'

const CustomInput = forwardRef(({label, placeholder, className}, ref) => {
  return(
    <div className='mb-4'>
      <label className='block text-gray-700 font-medium mb-2'>{label}</label>
      <input 
        ref={ref}
        type='text'
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg foucs:outline-none focus:ring-2 focus:ring-blue-500 ${className} `}  
      />
    </div>
  )
})

CustomInput.displayName = 'CustomInput'

function RefProps() {

  const inputRef = useRef(null)
  const secondRef = useRef(null)

  const focusInput = () => {
    inputRef.current?.focus();
  }

  const focusSecoundInput = () => {
    secondRef.current?.focus();
  }

  const getInputValue = () => {
    if(inputRef.current){
      alert(`Input value: ${inputRef.current.value}`)
    }
  }

  

  const clearInput = () => {
    if(inputRef.current){
      inputRef.current.value = ''
      inputRef.current.focus()
      secondRef.current.value = ''
      secondRef.current?.focus();
    }
  }
  



  return (
      <section className='p-8 bg-white rounded-xl shadow-lg'>
        <h2>RefProps</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, adipisci quam amet quasi tempora nesciunt?</p>
        
        <div>
          <div>
            <h3>Try it out</h3>
            <CustomInput 
              ref={inputRef}
              label="First Input with ref"
              placeholder="Type something"
            />
            <CustomInput 
              ref={secondRef}
              label="Secound Input with ref"
              placeholder="Type something else..."
            />
            <div className='flex flex-wrap gap-3 mt-4'>
              <button 
                className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-600 transition'
                onClick={focusInput}>
                  Focus Input
              </button>
              <button 
                className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-600 transition'
                onClick={focusSecoundInput}>
                  Focus Secound Input
              </button>
              <button 
                className='px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-600 transition'
                onClick={getInputValue}>
                  Geting input value 
              </button>
              <button 
                className='px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-600 transition'
                onClick={clearInput}>
                  Clear Input Value 
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  
}

export default RefProps