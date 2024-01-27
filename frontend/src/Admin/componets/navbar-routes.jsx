"use client";
import React from 'react'
import {NavbarItem} from './navbar-item'

const routes = [
    {
        label: "home",
        href:"/homepage",
    },
    {
        label: "dashboard",
        href:"/dashboard",
    },
    {
        label: "Feedback",
        href:"/feedback",
    },
   
]

export const NavbarRoutes = () => {
    
  return (
    <div className='flex gap-7'>
        {routes.map((route) => (
            <NavbarItem key={route.href} label={route.label} href={route.href} />
        ))}
    </div>
  )
}
