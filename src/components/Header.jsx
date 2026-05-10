import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
          <Navbar fluid rounded style={{backgroundColor:'#f1ddbf'}}>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="https://png.pngtree.com/png-vector/20250802/ourlarge/pngtree-hand-drawn-green-coconut-tree-icon-elements-png-image_16966361.webp" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black">Care Across Miles</span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
       <Link to={'/login'}>
       <Button color="green" className='hover:border-2! hidden md:flex ' outline style={{borderColor:'#e5c185'}} >Sign In</Button>
       </Link> 
        <Button  style={{backgroundColor:'#004343'}} className='hover:bg-green-700!'>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse >
        <NavbarLink className="text-black! hover:text-gray-500!" href="#home" active>
          Home
        </NavbarLink>
        <NavbarLink className="text-black! hover:text-gray-500!"   href="#how-works">How it works</NavbarLink>
        <NavbarLink className="text-black! hover:text-gray-500!"   href="#features">Features</NavbarLink>
        <NavbarLink className="text-black! hover:text-gray-500!"  href="#">Pricing</NavbarLink>
        <NavbarLink className="text-black! hover:text-gray-500!"  href="#">FAQ</NavbarLink>
         <Link to={'/login'}>
       <Button color="green" className='hover:border-2! mt-3 md:hidden' outline style={{borderColor:'#e5c185'}} >Sign In</Button>
       </Link>
      </NavbarCollapse>
    </Navbar>

      
    </div>
  )
}

export default Header
