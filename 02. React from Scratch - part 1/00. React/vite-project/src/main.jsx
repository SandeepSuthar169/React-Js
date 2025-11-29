import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const anotherElement = (
//   <a href="http://google.com" target='_blank'>Hello Google</a>
// )

const reactElement = React.createElement(
  'a',
  {
    href: 'http://google.com',
    target: '_blank'
  },
  'Hello Google...'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />      //// this is a function
    <MyApp /> 
  </StrictMode>,
)


// createRoot(document.getElementById('root')).render(
//        // this is a function
//     MyApp() 
// )

// createRoot(document.getElementById('root')).render(
//   anotherElement
// )

// createRoot(document.getElementById('root')).render(
//   reactElement
// )
