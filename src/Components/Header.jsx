import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
  const [toggle, setToggle] = useState(true)
  const {theme, setTheme} = useContext(ThemeContext)

  useEffect(() => {
    console.log("Theme", theme)
  }, [])

  return (
    <div className='flex items-center p-3'>
      <img src={logo} width={60} height={60} style={{backgroundColor: 'transparent'}}/>
      <div className='flex bg-slate-300 p-2 w-full mx-5 rounded-full items-center'>
        <HiMagnifyingGlass />
        <input type="text" className='bg-transparent outline-none px-2' placeholder='Search Games'/>
      </div>
      <div>
        {theme=='light'?<HiMoon className='text-[35px] bg-slate-300 text-black p-1 rounded-full cursor-pointer' onClick={() => {setTheme('dark');localStorage.setItem('theme', 'dark')}}/>:<HiSun className='text-[35px] bg-slate-300 text-black p-1 rounded-full cursor-pointer' onClick={() => {setTheme('light');localStorage.setItem('theme', 'light')}}/>}
      </div>
    </div>
  )
}

export default Header