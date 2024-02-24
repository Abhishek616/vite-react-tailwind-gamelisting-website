import React, { useEffect, useState } from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
  })
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`${theme} ${theme=='dark'?'bg-[#352F44]':'bg-[#F3F2F6]'} min-h-[100vh]`}>
        <Header/>
        <Home/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App