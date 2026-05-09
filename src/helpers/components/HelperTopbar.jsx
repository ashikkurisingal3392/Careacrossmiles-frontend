import React, { useEffect } from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { MdNotificationsActive } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { serverURL } from '../../../service/serverURL';
import { Link, useNavigate } from 'react-router-dom';


function HelperTopbar({ helperDetails }) {

  // const [helperDetails, setHelperDetails] = React.useState({

  //   username: "",
  //   profile: "",
  //   helperDetails: {
  //     district: "",
  //   }

  // })
  const [preview, setPreview] = React.useState("")
  const navigate = useNavigate()

  // useEffect(() => {

  //   if (sessionStorage.getItem("existingUser")) {

  //     let helperData = JSON.parse(sessionStorage.getItem("existingUser"))

  //     if (helperData) {

  //       setHelperDetails({
  //         username: helperData.username,
  //         profile: helperData.profile,
  //         helperDetails: {
  //           district: helperData.helperDetails?.district,
  //         }
  //       })
  //     }
  //   }

  // }, [])

  const handleSigout = () => {
    sessionStorage.clear()
    navigate('/login')

  }

  console.log(preview);
  console.log(helperDetails);


  return (
    <div>

      <Navbar fluid rounded style={{ backgroundColor: '#083b1f' }} className='rounded-none border border-green-800 '>
        <NavbarBrand href="#" >
          <div className='flex flex-row items-center gap-3 justify-start p-3  '>
            <div className='flex items-center text-white'>
              <img style={{ width: 50, height: 50 }} src="https://png.pngtree.com/png-vector/20250802/ourlarge/pngtree-hand-drawn-green-coconut-tree-icon-elements-png-image_16966361.webp" alt="" />
              <h1 className='text-lg font-bold'>CARE ACROSS MILES</h1>
            </div>
            <div className='flex flex-col'>
              <div className="h-10 w-0.5 bg-gray-700 opacity-85">

              </div>

            </div>
            <div className='flex items-center bg-green-900 border border-green-700 rounded-2xl p-1 '>
              <GoDotFill className='  text-green-400' />
              <h2 className='text-sm text-green-400 font-bold mx-1'> HELPER PORTAL </h2>
            </div>
          </div>

        </NavbarBrand>
        <div className="flex  md:order-2 gap-5 items-center ">

          <Button className='text-lg bg-green-950! border-2 border-green-950' ><MdNotificationsActive className='text-yellow-400 text-2xl' /></Button>

          <div className='flex items-center gap-2'>
            <div>
              <img className='w-20 h-20 bg-linear-to-r/srgb from-yellow-600 to-green-700  rounded-full p-3' src={
                preview ? preview : helperDetails?.profile ? `${serverURL}/Uploads/${helperDetails.profile}` : "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              } alt="" />
              
            </div>
            <div className='flex flex-col'>
              <h4 className='text-md text-white'>{helperDetails?.username}</h4>
              <h6 className='text-sm text-gray-600'>{helperDetails?.helperDetails?.district}</h6>

            </div>


          </div>
          <Button onClick={handleSigout} color='green' className='text-lg bg-green-950! text-green-400! hover:bg-green-700! hover:text-white!' >Sign out</Button>
         
        </div>
         <NavbarToggle /> 
          
         
        <NavbarCollapse className='md:hidden'  >
          <Link to={'/helperdashboard'} ><Button  color='green' className='text-lg bg-green-950! text-green-400! hover:bg-green-700! hover:text-white! mb-2 w-full' >Available Tasks</Button> </Link>
           <Link to={'/helpertask'}> <Button  color='green' className='text-lg bg-green-950! text-green-400! hover:bg-green-700! hover:text-white! mb-2 w-full' >My Tasks</Button> </Link>
            <Link to={'/helpercompleted'}> <Button  color='green' className='text-lg bg-green-950! text-green-400! hover:bg-green-700! hover:text-white! mb-2 w-full' >Completed Tasks</Button> </Link>
             <Link to={'/helperprofile'}> <Button  color='green' className='text-lg bg-green-950! text-green-400! hover:bg-green-700! hover:text-white! w-full' >My Profile</Button> </Link>
            
           
           
           

          
           
        </NavbarCollapse>
      </Navbar>

    </div>
  )
}

export default HelperTopbar
