"use client"
import React,{useState} from 'react'
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'  
import {motion} from 'framer-motion'


const navLinks = [
    {"title" : "About" , "path":"#About"},
    {"title" : "Portfolio", "path": "#Portfolio"} 
]


const Navbar = () => {
  const [nav,setNav] = useState(false)

  const toggleNav = () =>{
    setNav(!nav)
  }

   const closeNav = () =>{
    setNav(false)
  }

  return (
    <div className='text-white/70 pt-6' >
      <div className='hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]'>
        <ul>

        </ul>
      </div>
    </div>
  )
}

export default Navbar