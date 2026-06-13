import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from "flowbite-react";
import { MdOutlineManageSearch } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';

function CareHeader({ medicine, appointment }) {

  const handleSignout=()=>{

    sessionStorage.clear()
  }

  return (
    <div>


      <Navbar fluid rounded style={{ backgroundColor: '#fff0d4' }}>
        <NavbarBrand  >
          <div>
            <span className="self-center whitespace-nowrap text-xl font-semibold text-black">{medicine ? "Medicines" : appointment ? "Appointments" : "Care Tasks "}</span>
            <h6 className='text-sm text-gray-700 mb-2 md:mb-0'>{medicine ? "Track prescriptions, stock and reminders" : "Assign care tasks for Antony Family"}</h6>

          </div>

        </NavbarBrand>
        <div className="flex md:order-2 gap-3 items-center ">
          <TextInput color='black' style={{ backgroundColor: 'white', borderColor: '#e5c185' }}></TextInput>
          <Button className='text-xs w-24 hover:bg-linear-to-r/srgb from-yellow-600 to-green-700 focus:ring-0' style={{ backgroundColor: '#e5c185' }}><MdOutlineManageSearch className='mx-1 text-lg' />Search</Button>
          <Button className='text-sm hidden sm:flex hover:bg-linear-to-r/srgb from-green-900 to-green-900    focus:ring-0' style={{ backgroundColor: '#2c6e49' }}><FiPlus className='text-sm mx-1 text-white' />
            {medicine ? "Add Medicine" : "Add Task"}</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse className='md:hidden'>
          <Link to={'/dashboard'} ><Button color='white' className='text-lg  text-white! hover:bg-gray-400! hover:text-white! mb-2 w-full' style={{ backgroundColor: '#e5c185' }} >Dashboard</Button> </Link>
          <Link to={'/caretask'} ><Button color='white' className='text-lg  text-white! hover:bg-gray-400! hover:text-white! mb-2 w-full' style={{ backgroundColor: '#e5c185' }} >Crae Tasks</Button> </Link>

          <Link to={'/appointment'} ><Button color='white' className='text-lg  text-white! hover:bg-gray-400! hover:text-white! mb-2 w-full' style={{ backgroundColor: '#e5c185' }} >Appointments</Button> </Link>

          <Link to={'/medicines'} ><Button color='white' className='text-lg  text-white! hover:bg-gray-400! hover:text-white! mb-2 w-full' style={{ backgroundColor: '#e5c185' }} >Medicine</Button> </Link>
           <Link to={'/login'} ><Button onClick={handleSignout} color='white' className='text-lg  text-white! hover:bg-gray-400! hover:text-white! mb-2 w-full' style={{ backgroundColor: '#e5c185' }} >Sign out</Button> </Link>
        </NavbarCollapse>

      </Navbar>

    </div>
  )
}

export default CareHeader
