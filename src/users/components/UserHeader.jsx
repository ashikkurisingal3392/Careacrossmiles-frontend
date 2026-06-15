import React, { useEffect } from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { MdOutlineSettings } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { Link } from 'react-router-dom';

function UserHeader() {

  // let userData = {}
  // userData = JSON.parse(sessionStorage.getItem("existingUser"))

  // console.log(userData);
  const [userData, setUserData] = React.useState(null);
 
  useEffect(() => {
    const storedUser = sessionStorage.getItem("existingUser");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  if (!userData) return null;

  let currentDate = new Date()
  console.log(currentDate);

  const handleSignout = () => {

    sessionStorage.clear()
  }




  return (
    <div>

      <Navbar fluid rounded style={{ backgroundColor: '#fff0d4' }}>
        <NavbarBrand  >
          <div>
            <span className="self-center whitespace-nowrap text-xl font-bold text-black">Good Morning, {userData.username.toUpperCase()} &#128075;</span>
            <h6 className='text-sm text-gray-700 font-semibold mb-2 md:mb-0 '>{currentDate.toLocaleDateString('en-GB', {
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
          <Button className='text-lg hidden sm:flex' style={{ backgroundColor: '#e5c185' }}><MdOutlineSettings /></Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse className='md:hidden'>

          <Link to={'/dashboard'} ><Button color='white' className='text-lg  text-white! hover:bg-gray-400! hover:text-white! mb-2 w-full' style={{ backgroundColor: '#e5c185' }} >Dashboard</Button> </Link>
          <Link to={'/caretask'} ><Button color='white' className='text-lg  text-white! hover:bg-gray-400! hover:text-white! mb-2 w-full' style={{ backgroundColor: '#e5c185' }} >Care Tasks</Button> </Link>

          <Link to={'/appointment'} ><Button color='white' className='text-lg  text-white! hover:bg-gray-400! hover:text-white! mb-2 w-full' style={{ backgroundColor: '#e5c185' }} >Appointments</Button> </Link>

          <Link to={'/medicines'} ><Button color='white' className='text-lg  text-white! hover:bg-gray-400! hover:text-white! mb-2 w-full' style={{ backgroundColor: '#e5c185' }} >Medicine</Button> </Link>
          <Link to={'/login'} ><Button onClick={handleSignout} color='white' className='text-lg  text-white! hover:bg-gray-400! hover:text-white! mb-2 w-full' style={{ backgroundColor: '#e5c185' }} >Sign out</Button> </Link>

        </NavbarCollapse>
      </Navbar>



    </div>
  )
}

export default UserHeader
