import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function Header() {
  return (
    <div>
          <Navbar fluid rounded style={{backgroundColor:'#f1ddbf'}}>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="https://png.pngtree.com/png-vector/20250802/ourlarge/pngtree-hand-drawn-green-coconut-tree-icon-elements-png-image_16966361.webp" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black">Care Across Miles</span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <Button color="green" className='hover:border-2! ' outline style={{borderColor:'#e5c185'}} href='/login'>Sign In</Button>
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
      </NavbarCollapse>
    </Navbar>

      
    </div>
  )
}

export default Header
