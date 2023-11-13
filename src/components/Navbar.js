import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaDribbble, FaTwitter, FaBars } from "react-icons/fa"
import Modal from './Modal'
const Navbar = () => {
  const[isModelopen,setisModelopen]=useState(false)
  const navItems=[
    {path:"/",link:"Home"},
    {path:"/about",link:"About"},
    {path:"/services",link:"Services"},
    {path:"/blogs",link:"Blogs"},
    {path:"/contact",link:"Contact"},
  ]
  const[ShowMenu,setShowMenu]=useState(false);
  return (
    <header className=' bg-black '>
      <nav className='p-4 flex items-center justify-between  max-w-7xl mx-auto'>
        <Link to="/"className='text-white text-xl text-bold' >Sasi <span className='text-orange-500'>MS</span></Link>
        <ul className='md:flex gap-12 text-lg hidden'>
          {navItems.map(({path,link})=> <Link active="text-orange-500" to={path}><li  className='text-white hover:text-orange-500'>{link}</li></Link> )}
        </ul>

        <div className='text-white lg:flex items-center hidden gap-4'>
          <Link to="/"  ><FaFacebook size={20}/></Link>
          <Link to="/" className='hover:text-orange-500'><FaDribbble size={20}/></Link>
          <Link to="/" className='hover:text-orange-500'><FaTwitter size={20}/></Link>
          <button onClick={()=>setisModelopen(true)} className='bg-orange-500 px-6 py-2 font-medium rounded-md text-center hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Login</button>
        </div>

        <Modal isopen={isModelopen} onclose={()=>{setisModelopen(false)}}/>
        
        <div className='md:hidden flex'>
          <FaBars size={25} className='text-white cursor-pointer'onClick={()=>setShowMenu(!ShowMenu)}/>
            <div className="absolute top-16 right-2 z-5 flex-col min-w-[10rem] text-center rounded-xl py-2 bg-slate-500" style={{display: ShowMenu? 'flex':'none'}}> 
            <ul>
          {navItems.map(({path,link})=> <Link to={path} active="text-orange-500" className='hover:text-orange-500' onClick={()=>setShowMenu(false)}><li className='text-white m-1 p-1'>{link}</li></Link> )}
            </ul>
            </div>  
        </div>
      </nav>
    </header>
  )
}

export default Navbar