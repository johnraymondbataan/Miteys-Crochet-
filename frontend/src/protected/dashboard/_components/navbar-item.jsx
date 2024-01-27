"use client";
import React from 'react'


export const NavbarItem = ({
    label, href
}) => {
    const onClick = () =>{
        window.location.href = href;
    }

    const pathname = window.location.pathname;

    const isActive = 
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  return (
    <button onClick={onClick}>
        <div className='capitalize hover:font-bold' >
            <p className={isActive ? 'font-bold' : ''}>

            {label}
            </p>
        </div>
    </button>
  )
}



