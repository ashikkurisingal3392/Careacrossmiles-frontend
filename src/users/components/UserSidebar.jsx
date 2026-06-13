import React, { useEffect, useEffectEvent } from 'react'
import { Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, HR } from "flowbite-react";
import { FcHome } from "react-icons/fc";
import { FaMapPin } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { PiUserSquareFill } from "react-icons/pi";
import { GiMedicines } from "react-icons/gi";
import { FaHospital } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoNotifications } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { Link, Links } from 'react-router-dom';

function UserSidebar() {
    const [token, setToken] = React.useState('')
    const [userDetails, setUserDetails] = React.useState({})

    console.log(token);
    

    useEffect(() => {

        const storedToken=sessionStorage.getItem("token")

        const storedUser=sessionStorage.getItem("existingUser")

        if(storedToken) setToken(storedToken)
        
         if(storedUser) {
            setUserDetails(JSON.parse(storedUser))

         }
         else{

            setUserDetails({})

         }

    //     setToken(sessionStorage.getItem("token"))

    //    setUserDetails(JSON.parse(sessionStorage.getItem("existingUser")))
    }, [])
    

    return (
        <div className='h-full '>

            <section style={{ backgroundColor: '#2c6e49' }} className='h-full flex flex-col '>
                {/* top section */}
                <div className='flex flex-col justify-start p-3  '>
                    <div className='flex items-center text-white'>
                        <img style={{ width: 50, height: 50 }} src="https://png.pngtree.com/png-vector/20250802/ourlarge/pngtree-hand-drawn-green-coconut-tree-icon-elements-png-image_16966361.webp" alt="" />
                        <h1 className='text-xl font-bold'>CARE ACROSS MILES</h1>
                    </div>
                    <h6 className='text-xs mx-13 text-gray-800'>KERALA . UK FAMILY CARE</h6>
                </div>
                <div className="h-px bg-yellow-600 my-4"></div>

                {/* active family section*/}
                <div className='flex flex-col  items-center  '>
                    <h2 className='text-sm mb-3 w-3/4 text-gray-800'>ACTIVE FAMILY</h2>

                    <div className='flex  justify-start items-center gap-3 border border-yellow-400 rounded-lg w-60 p-2 bg-linear-to-r/srgb from-yellow-600 to-green-700'>
                        <FcHome className='text-5xl border rounded-4xl p-2 border-yellow-400 bg-amber-100' />
                        <div className='flex flex-col justify-center items-center '>
                            <h1 className='text-md font-bold text-white'>{userDetails.family || "Active"} Family</h1>

                            <div className='flex items-center w-full'><FaMapPin className='text-red-700 text-md mx-1' /><h6 className='text-xs  text-gray-900 w-full '>Ernakulam, Kerala</h6></div>
                        </div>
                    </div>
                </div>


                <div className="h-px bg-yellow-600 my-4"></div>

                {/* overview section */}

                <div className='flex flex-col items-start mx-3 gap-3'>
                    <h2 className='text-xs mb-0 text-gray-800'>OVER VIEW</h2>
                    <Link to={'/dashboard'} className='w-full'>
                    <Button  className='flex gap-3 items-center justify-start h-12 p-2 hover:bg-linear-to-r/srgb from-yellow-600 to-green-700 w-full rounded-2xl ' style={{ backgroundColor: '#2c6e49' }}>
                        <FcHome className='text-3xl border rounded-4xl p-1 border-yellow-400 bg-amber-100' />
                        <h3 className='text-md font-bold text-yellow-200'>Dashboard</h3>
                    </Button>
                    </Link>
                    
                    <Button className='flex gap-3 items-center justify-start h-12 p-2 hover:bg-linear-to-r/srgb from-yellow-600 to-green-700 w-full rounded-2xl ' style={{ backgroundColor: '#2c6e49' }}>
                        <ImUsers className='text-3xl border rounded-4xl p-1 border-yellow-400 bg-amber-100 text-gray-600' />
                        <h3 className='text-md font-bold text-yellow-200'>Family Members</h3>
                    </Button>
                    <Button className='flex gap-3 justify-start p-2 items-center h-12 hover:bg-linear-to-r/srgb from-yellow-600 to-green-700 w-full rounded-2xl ' style={{ backgroundColor: '#2c6e49' }}>
                        <PiUserSquareFill className='text-3xl border rounded-4xl p-1 border-yellow-400 bg-amber-100 text-gray-600' />
                        <h3 className='text-md font-bold text-yellow-200'>My Profile</h3>
                    </Button>

                </div>

                {/* care/appointment/medicines */}

                <div className='flex flex-col items-start mx-3 gap-3 mt-5'>
                    <h2 className='text-xs mb-0 text-gray-800'>CARE</h2>
                    <Link to={'/caretask'} className='w-full'>
                    
                    <Button  className='flex gap-3 items-center justify-start h-12 p-2 hover:bg-linear-to-r/srgb from-yellow-600 to-green-700 w-full rounded-2xl ' style={{ backgroundColor: '#2c6e49' }}>
                        <TiTick className='text-3xl border rounded-4xl p-1 border-yellow-400 bg-orange-200 text-green-500' />
                        <h3 className='text-md font-bold text-yellow-200'>Care Tasks</h3>
                    </Button>
                    </Link>
                    <Link to={'/appointment'} className='w-full'>
                   
                    <Button className='flex gap-3 items-center justify-start h-12 p-2 hover:bg-linear-to-r/srgb from-yellow-600 to-green-700 w-full rounded-2xl ' style={{ backgroundColor: '#2c6e49' }}>
                        <FaHospital className='text-3xl border rounded-4xl p-1 border-yellow-400 bg-amber-100 text-red-600' />
                        <h3 className='text-md font-bold text-yellow-200'>Appointments</h3>
                    </Button>
                     </Link>
                     <Link to={'/medicines'} className='w-full'>
                    <Button  className='flex gap-3 justify-start p-2 items-center h-12  w-full rounded-2xl hover:bg-linear-to-r/srgb from-yellow-600 to-green-700' style={{ backgroundColor: '#2c6e49' }}>
                        <GiMedicines className='text-3xl border rounded-4xl p-1 border-yellow-400 bg-amber-100 text-yellow-600' />
                        <h3 className='text-md font-bold text-yellow-200'>Medicines</h3>
                    </Button>
                    </Link>

                </div>

                {/* connect */}
                <div className='flex flex-col items-start mx-3 gap-3 mt-5'>
                    <h2 className='text-xs mb-0 text-gray-800'>CONNECT</h2>
                    <Button className='flex gap-3 items-center justify-start h-12 p-2 hover:bg-linear-to-r/srgb from-yellow-600 to-green-700 w-full rounded-2xl ' style={{ backgroundColor: '#2c6e49' }}>
                        <LuMessageSquareText className='text-3xl border rounded-4xl p-1 border-yellow-400 bg-orange-200 text-gray-900' />
                        <h3 className='text-md font-bold text-yellow-200'>Messages</h3>
                    </Button>
                    <Button className='flex gap-3 items-center justify-start h-12 p-2 hover:bg-linear-to-r/srgb from-yellow-600 to-green-700 w-full rounded-2xl ' style={{ backgroundColor: '#2c6e49' }}>
                        <IoNotifications className='text-3xl border rounded-4xl p-1 border-yellow-400 bg-amber-100 text-yellow-600' />
                        <h3 className='text-md font-bold text-yellow-200'>Notifications</h3>
                    </Button>
                </div>

                <div className="h-px bg-yellow-600 my-4"></div>

                <div className='mt-auto my-3'>
                    {/* user icon details */}

                    <div className='flex gap-2 justify-start mx-3 items-center hover:bg-linear-to-r/srgb from-yellow-600 to-green-700 p-3 rounded-2xl'>
                        {token ? <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img={userDetails.profile} rounded />
                            }

                           className='bg-black! '
                        //    style={{ backgroundColor: '#ffffea' }}
                            
                        >

                            <DropdownHeader className='hover:bg-green-950!'>
                                <span className="block text-sm">{userDetails.username}</span>
                                <span className="block truncate text-sm font-medium">{userDetails.email}</span>
                            </DropdownHeader>
                            <DropdownItem className='hover:bg-green-950!'>Profile</DropdownItem>
                            {/* <DropdownItem>Settings</DropdownItem> */}
                            <DropdownDivider />
                           <Link to={'/login'}><DropdownItem className='hover:bg-green-950!'>Sign out</DropdownItem></Link> 
                        </Dropdown>
                            :
                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={
                                    <Avatar alt="User settings" img="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" rounded />
                                }  >

                                <Link to={'/login'}>
                                    <DropdownItem>Login</DropdownItem>
                                </Link>
                                <Link to={'register'}>
                                    <DropdownItem>Register</DropdownItem>
                                </Link>

                            </Dropdown>

                        }


                        <div className='flex flex-col'>
                            <h3 className='text-white text-md'>{userDetails?.username?userDetails.username:"User"}</h3>
                            <h6 className='text-dark-600 text-sm'>London,UK . Admin</h6>

                        </div>

                    </div>


                </div>

            </section >

        </div >
    )
}

export default UserSidebar
