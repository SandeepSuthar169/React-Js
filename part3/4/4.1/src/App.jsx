import React from 'react'
import BasicProps from './components/BasicProps';
import ChildrenProps from "./components/ChildrenProps"
import ComplexProps from "./components/ComplexProps"
import RefProps from "./components/RefProps"
import ThemeToggler from "./components/ThemeToggler"

const Navigation = () => {
  const isDark = true;

  const sections = [
    {id: "basic", lable: "basic Props", icon: "🍱"},
    {id: "ref", lable: "ref Props", icon: "🪞"},
    {id: "complex", lable: "complex Props", icon: "🍱🧩"},
    {id: "theme", lable: "theme Props", icon: "🎡"},
  ]
  
  return (
    <>
      <nav className={`sticky top-0 z-50 shadow-xl justify-center `}>
        <div>
          <div>{sections.map((section) => (
            <button 
              className={`px-4 rounded-lg font-medium justify-between bg-gray-800 hover:bg-blue-900 text-white mr-3`}
              key={section.id}>
              <span className={`mr-2`}>{section.icon}</span>
                {section.lable}
            </button>
          ))}</div>
        </div>
      </nav>
    </>
  )
}



const AppContent = () => {

  return (
    <div className={`bg-gray-950 `}>
      <Navigation />
      
      <div className="space-y-8 p-6">

        <div className="scroll-mt-20">
          <BasicProps />
        </div>

        <div  className="scroll-mt-20">
          <RefProps />
        </div>

        <div  className="scroll-mt-20">
          <ComplexProps />
        </div>

        <div  className="scroll-mt-20">
          <ChildrenProps />
        </div>

        <div  className="scroll-mt-20">
          <ThemeToggler />
        </div>

      </div>


    </div>
  )
}



const App = () => {
  return (
    <div className=" min-h-screen bg-gray-800 text-white">
      <AppContent />
    </div>
  )
}

export default App

