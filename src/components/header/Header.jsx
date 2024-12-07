import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { LINKS } from '../../static'
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate()
  return (
     <div className='bg-blue-950 sticky top-0 left-0 z-10 py-1'>
      <header id='header' className='container flex flex-wrap items-center justify-between'>
      <h2 onClick={() => navigate("/")} className='select-none cursor-pointer text-[35px] font-dancing font-bold text-white flex items-center gap-3'>Products shop <AiOutlineShopping/></h2>
        <nav className={`flex gap-4 py-4`}>
          {
            LINKS?.map((link)=> (
              <NavLink key={link.id} className='flex items-center gap-4 text-[18px] text-white' to={link.path}>
                <span>{link.name}</span>
              </NavLink>
            ))
          }
        </nav>
      </header>
     </div>
  )
}

export default Header