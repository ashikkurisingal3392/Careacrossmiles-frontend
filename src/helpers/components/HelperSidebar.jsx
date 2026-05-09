import React from 'react'
import { Button } from 'flowbite-react';
import { FcSurvey } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FaTrophy } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function HelperSidebar() {

  return (
    <div className='h-full'>



      <section style={{ backgroundColor: '#083b1f' }} className='h-full flex flex-col'>
        <div className='flex flex-col items-start mx-3 gap-3'>
          <h2 className='text-sm mb-0 text-gray-400 mt-5'>DASHBOARD
          </h2>
          <Link to={'/helperdashboard'}>
            <Button className='flex gap-3 items-center justify-start h-12 p-2 hover:bg-linear-to-r/srgb from-green-600 to-green-950  w-64 rounded-2xl ' style={{ backgroundColor: '#2c6e49' }}>
              <FcSurvey className='text-3xl border rounded-4xl p-1 border-yellow-400 bg-amber-100' />
              <h3 className='text-md font-bold text-green-300 hover:text-white!'>Available Tasks</h3>
            </Button>
          </Link>

          <Link to={'/helpertask'}>
            <Button className='flex gap-3 items-center justify-start h-12 p-2 hover:bg-linear-to-r/srgb from-green-600 to-green-950  w-64 rounded-2xl ' style={{ backgroundColor: '#2c6e49' }}>
              <FcOk className='text-3xl border rounded-4xl p-1 border-yellow-400 bg-amber-100' />
              <h3 className='text-md font-bold text-green-300 hover:text-white!'>My Tasks</h3>
            </Button>
          </Link>
          <Link to={'/helpercompleted'}>
            <Button className='flex gap-3 items-center justify-start h-12 p-2 hover:bg-linear-to-r/srgb from-green-600 to-green-950  w-64 rounded-2xl ' style={{ backgroundColor: '#2c6e49' }}>
              <FaTrophy className='text-3xl text-yellow-400 border rounded-4xl p-1 border-yellow-400 bg-amber-100' />
              <h3 className='text-md font-bold text-green-300 hover:text-white!'>Completed </h3>
            </Button>
          </Link>

        </div>
        <div className='flex flex-col items-start mx-3 gap-3'>
          <h2 className='text-sm mb-0 text-gray-400 mt-5'>FINANCE
          </h2>
          <Button className='flex gap-3 items-center justify-start h-12 p-2 hover:bg-linear-to-r/srgb from-green-600 to-green-950  w-64 rounded-2xl ' style={{ backgroundColor: '#2c6e49' }}>
            <RiMoneyRupeeCircleFill className='text-3xl text-gray-600 border rounded-4xl p-1 border-yellow-400 bg-amber-100' />
            <h3 className='text-md font-bold text-green-300 hover:text-white!'>My Earnings</h3>
          </Button>



        </div>
        <div className='flex flex-col items-start mx-3 gap-3'>
          <h2 className='text-sm mb-0 text-gray-400 mt-5'>ACCOUNT
          </h2>
          <Link to={'/helperprofile'}>
            <Button className='flex gap-3 items-center justify-start h-12 p-2 hover:bg-linear-to-r/srgb from-green-600 to-green-950 w-64 rounded-2xl ' style={{ backgroundColor: '#2c6e49' }}>
              <FaUser className='text-3xl text-green-950 border rounded-4xl p-1 border-yellow-400 bg-amber-100' />
              <h3 className='text-md font-bold text-green-300 hover:text-white!'>My Profile</h3>
            </Button>
          </Link>

          <Button className='flex gap-3 items-center justify-start h-12 p-2 hover:bg-linear-to-r/srgb from-green-600 to-green-950  w-64 rounded-2xl ' style={{ backgroundColor: '#2c6e49' }}>
            <FcSupport className='text-3xl border rounded-4xl p-1 border-yellow-400 bg-amber-100' />
            <h3 className='text-md font-bold text-green-300 hover:text-white!'>Settings</h3>
          </Button>


        </div>




      </section>

    </div>




  )
}

export default HelperSidebar
