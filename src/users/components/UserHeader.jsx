import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { MdOutlineSettings } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";

function UserHeader() {

  let userData = {}
  userData = JSON.parse(sessionStorage.getItem("existingUser"))

  console.log(userData);

  let currentDate = new Date()
  console.log(currentDate);




  return (
    <div>

      <Navbar fluid rounded style={{ backgroundColor: '#fff0d4' }}>
        <NavbarBrand  >
          <div>
            <span className="self-center whitespace-nowrap text-xl font-bold text-black">Good Morning, {userData.username.toUpperCase()} &#128075;</span>
            <h6 className='text-sm text-gray-700 font-semibold '>{currentDate.toLocaleDateString('en-GB', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
              year: 'numeric',
               hour: '2-digit',
                minute: '2-digit'
            })}</h6>

          </div>

        </NavbarBrand>
        <div className="flex md:order-2 gap-3 items-center ">
          <h5 className='border rounded-2xl p-2 text-sm ' style={{ backgroundColor: '#d6eadf', borderColor: '#4c956c' }}>Kerala family online</h5>
          <Button className='text-lg' style={{ backgroundColor: '#e5c185' }}><MdNotificationsActive /></Button>
          <Button className='text-lg' style={{ backgroundColor: '#e5c185' }}><MdOutlineSettings /></Button>
          <NavbarToggle />
        </div>
        {/* <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse> */}
      </Navbar>



    </div>
  )
}

export default UserHeader
