import { Menu, Sun, X } from 'lucide-react';
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
    {label: "Home", to:"/"},
    {label: "Explore Stays", to:"/explore"},
    {label: "About Us", to:"/about"},
    {label: "Contact", to:"/contact"},
];

export default function Header() {
    const [open, setOpen]= useState(false);
    const linkClass  = ({isActive})=>
        `text-sm font-medium transition-colors hover:text-teal-700 ${isActive? "text-teal-700": "text-slate-700"
        }`;

  return (
   <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-[#FAF6EE]/90 backdrop-blur">
    <div className='mx-auto flex h-16 max-w-7xl items-center justify-between  px-4 sm:px-6 lg:px-8'>
        <Link
        to="/"
        className="flex items-center gap-2"
        onClick={()=> setOpen(false)}
        >
            <span className='flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 text-amber-400'>
                <Sun size={20}/>
            </span>
            <span className='font-[Playfair_Display] text-xl font-bold text-slate-800'>Lanka
                <span className='text-teal-700'>Stayz</span>
            </span>
        </Link>

        <nav className='hidden items-center gap-8 md:flex'>
            {navLinks.map((link)=>(
                <NavLink key={link.to} to={link.to} end className={linkClass}>
                    {link.label}
                </NavLink>
            ))}
        </nav>

        <Link
        to="/explore"
        className="hidden rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white
        shadow-sm transition hover:bg-amber-600 md:inline-block"
        >
            Book Now
        </Link>

        <button
        type='button'
        onClick={()=> setOpen((prev)=> !prev)}
        className='rounded-lg p-2 text-slate-800 hover:bg-slate-200/60 md:hidden'
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        >
            {open? <X size={24}/> : <Menu size={24}/>}

        </button>
    </div>

    {open &&(
        <div className='border-t border-slate-200 bg-[#FAF6EE] md:hidden'>
            <nav className='mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4' aria-label='Mobile'>
                {navLinks.map((link)=>(
                    <NavLink
                    key={link.to}
                    to={link.to}
                    end
                    onClick={()=> setOpen(false)}
                    className={({isActive})=>
                        `rounded-lg px-3 py-3 text-base font-medium 
                    ${isActive? 
                        "bg-teal-700/10 text-teal-700": "text-slate-700 hover:bg-slate-200/60"}`
                    }
                >
                    {link.label}
                </NavLink>
            ))}
            <Link
            to="/explore"
            onClick={()=> setOpen(false)}
            className="mt-2 rounded-full bg-amber-500 px-5 py-3 text-center font-semibold text-white hover:bg-amber-600"
            >
                Book Now
            </Link>
            </nav>
        </div>
    )}
   </header>
  )
}
