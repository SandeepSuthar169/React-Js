import { useState } from "react"


function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}>

        <div
        
         className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center gap-3 shadow-orange-50 py-3 px-3 rounded-3xl border-2 bg-slate-200 text-white">
            
            <button
            onClick={() => setColor('red')} 
            className="outline-none px-4 py-1 rounded-lg text-white shadow-red-100" style={{backgroundColor: 'red' }}>Red</button>

            <button 
             onClick={() => setColor('orange')} 
            className="outline-none px-4 py-1 rounded-lg text-orange-200 shadow-orange-200" style={{backgroundColor: 'orange' }}>Red</button>

            
            <button 
             onClick={() => setColor('green')} 
            className="outline-none px-4 py-1 rounded-lg text-green-200 shadow-red-100" style={{backgroundColor: 'green' }}>green</button>
            
            <button
             onClick={() => setColor('blue')} 
            className="outline-none px-4 py-1 rounded-lg text-blue-200 shadow-red-100" style={{backgroundColor: 'blue' }}>blue</button>
            
            <button 
             onClick={() => setColor('pink')} 
            className="outline-none px-4 py-1 rounded-lg text-pink-100 shadow-red-100" style={{backgroundColor: 'pink' }}>pink</button>
            
            <button 
             onClick={() => setColor('skyblue')} 
            className="outline-none px-4 py-1 rounded-lg text-sky-100 shadow-red-100" style={{backgroundColor: 'skyblue' }}>skyblue</button>
            
            <button 
             onClick={() => setColor('gray')} 
            className="outline-none px-4 py-1 rounded-lg text-gray-200 shadow-red-100" style={{backgroundColor: 'gray' }}>gray</button>

            <button 
             onClick={() => setColor('black')} 
            className="outline-none px-4 py-1 rounded-lg text-gray-200 shadow-red-100" style={{backgroundColor: 'black' }}>black</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
