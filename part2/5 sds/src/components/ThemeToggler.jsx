import { createContext, useContext, useState } from 'react'
// import useTheme from './'
// create theme context
const ThemeContext = createContext()

// Theme Provider component
export function ThemeProvider({childer}){
  const [theme, setTheme] = useState('light')

  const toggleTheme =() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))

  }
  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  }

  return <ThemeProvider.Provider value={value}>{childer}</ThemeProvider.Provider>
}

fu


// Costom Hooks to use theme
export function useTheme(){
  const context = useContext(ThemeContext)

  if(!context){
    throw new Error("useTheme must bt used within ThemeProvider")
  }
  return context
}

function ThemeToggler() {

  const {theme, toggleTheme, isDark} = useTheme()

  return (
    <button 
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-2xl transition-colors duration-300
        ${isDark ? '🌑' : '🌞' }`}>
      
      
      <div
      className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 flex items-center justify-center ${isDark ? "🌚": "🌞"}`}
      ></div>
      
      </button>
      
  )
}

export default ThemeToggler