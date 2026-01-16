import { createContext, useContext, useState } from 'react'

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


// Costom Hooks to use theme
export function useTheme(){
  const context = useContext(ThemeContext)

  if(!context){
    throw new Error("useTheme must bt used within ThemeProvider")
  }
  return context
}

function ThemeToggler() {
  return (
    <div>ThemeToggle</div>
  )
}

export default ThemeToggler