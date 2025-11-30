import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  return (
    <>
      <h1 className='bg-green-500  p-6 rounded-xl text-red-500 '>Tailwind Test</h1>
      
      <Card />
      <Card src="https://www.tutorialkart.com/cdn/title_logo_100px.png" />
    </>
  )
}

export default App
 