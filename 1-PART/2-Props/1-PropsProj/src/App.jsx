import React from 'react'

import BasicProps from "./components/BasicProps"
import ChildrenProps from "./components/ChildrenProps"
import ComplexProps from "./components/ComplexProps"
import RefProps from "./components/RefProps"
import ThemeToggler from "./components/ThemeToggler"

const Navigation = () => {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "ref Props", icon: "🔗" },
    { id: "children", label: "children Props", icon: "👶" },
    { id: "complex", label: "complex Props", icon: "🧩" },
    { id: "theme", label: "theme Props", icon: "🎨" },
  ];

  return (
    <nav className={`sticky top-0 z-50 shadow-md`}>
      <div>
        <div 
          className='gap-3 justify-center  items-center container mx-auto py-4'
        >
          {sections.map((section) => (
            <button
              className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white mr-2 mt-2`}
              key={section.id}
            >
              <span
                className='mr-2 '
              >{section.icon}</span> {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}


const AppContent = () => {
  return (
    <div className={`min-h-screen bg-gray-950 text-white`}>
      <Navigation />
      <div>
        <div
          className='scroll-mt-200'
        >
          <BasicProps />
        </div>
        
        <div
          className='scroll-mt-200'
        >
          <ChildrenProps />
        </div>

        <div
          className='scroll-mt-200'
        >
          <ComplexProps />
        </div>

        <div
          className='scroll-mt-200'
        >
          <RefProps />
        </div>

        <div
          className='scroll-mt-200'
        >
          <ThemeToggler />

        </div>
     </div>
   </div>
  )
}


const App = () => {
  return (
    <div>
      <div><AppContent /></div>
    </div>
  )
}

export default App