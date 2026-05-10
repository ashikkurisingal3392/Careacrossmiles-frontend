import React, { useContext, useEffect } from 'react'
import UserHeader from '../components/UserHeader'
import UserSidebar from '../components/UserSidebar'
import { Button, TextInput } from 'flowbite-react'
import { GoArrowSwitch } from "react-icons/go";
import { BsHospital } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { IoMdAddCircle } from "react-icons/io";
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { IoIosAdd } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { IoLocation } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { getAllHelpersAPI, getTasksAPI } from '../../../service/allAPIs';
import { searchContext } from '../../context/SearchContextTask';




function Dashboard() {

  const [tasks, setTasks] = React.useState([])
  const [helpers, setHelpers] = React.useState([])
  const[dummyTasks,setDummyTasks]=React.useState([])

  const { searchKey,setSearchKey } = useContext(searchContext)

  useEffect(() => {

    getAllTasks()
    getAllHelpers()


  }, [])

  // console.log(tasks);
  // console.log(searchKey);


  const getAllTasks = async () => {

    try {
      const token = sessionStorage.getItem('token')
      // console.log("token :", token);

      const reqHeader = {
        Authorization: `Bearer ${token}`
      }

      const response = await getTasksAPI(reqHeader)

      console.log(response);

      setTasks(response.data.allTasks)
      setDummyTasks(response.data.allTasks)

    }
    catch (err) {

      console.log(err);

    }

  }

  //all helper details fetching
  const getAllHelpers = async () => {

    try {
      const token = sessionStorage.getItem('token')
      // console.log("token :", token);

      const reqHeader = {
        Authorization: `Bearer ${token}`
      }

      const response = await getAllHelpersAPI(reqHeader)
      console.log(response);
      setHelpers(response.data.allHelpers)

    }
    catch (err) {

      console.log(err);
      console.log(response.data.message);



    }
  }
  //search 
  const handleSearch=()=>{

    if(searchKey.trim()===""){

      setTasks(dummyTasks)
    }

    // console.log(searchKey);
     let data =dummyTasks.filter(item => (item.title).toLowerCase().trim().includes(searchKey.toLowerCase().trim()))
     setTasks(data)
    

  }

  // console.log(helpers);

  // console.log(searchKey);
  


  return (
    <div>


      <div className='flex min-h-screen '>
        {/* sidebar */}
        <div className='  hidden md:block w-72 '>
          <UserSidebar />

        </div>
        <div className='flex flex-col flex-1'>
          {/* header section */}
          <div className='w-full'>
            <UserHeader />
          </div>
          {/* dashboard content */}
          <div className=' flex-1 p-4' style={{ backgroundColor: '#ffffea' }}>

            {/* top section */}
            <div className='flex flex-col gap-3 md:flex-row  justify-between mx-auto items-center bg-linear-to-r/srgb from-green-800 to-green-700 p-4 rounded-3xl' >
              <div className='mx-3'>
                <h3 className='text-xs text-yellow-500 mb-2'>FAMILY CONNECTION STATUS</h3>
                <h4 className='text-md md:text-xl text-white  mb-2'>Your Family in <span className='text-yellow-500'>Ernakulam</span>  is doing well</h4>
                <h6 className='text-xs ' style={{ color: '#ced3d7' }}>Last activity 20 mins ago . 2 tasks pending . 3 appointment tommorow</h6>
              </div>
              <div className='flex items-center  gap-2'>
                <div className='flex flex-col items-center gap-1 rounded-2xl p-3 w-32' style={{ borderColor: '#F9C74F', backgroundColor: '#e5c185', opacity: '.9' }}>
                  <button className='text-3xl ' >🇬🇧</button>
                  <h6 className='text-xs'>London</h6>
                </div>
                <div>
                  <GoArrowSwitch className='text-xl text-yellow-300' />
                </div>

                <div className='flex flex-col items-center gap-1 rounded-2xl p-3 w-32' style={{ borderColor: '#F9C74F', backgroundColor: '#e5c185', opacity: '.9' }}>
                  <button className='text-3xl '>🇮🇳</button>
                  <h6 className='text-xs'>Ernakulam</h6>
                </div>

              </div>
            </div>

            {/* first- grid */}
            <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2 justify-evenly mt-5'>
              <div className='flex flex-col items-start p-4 border rounded-2xl bg-white gap-2 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                <div className='flex  items-center justify-between w-full'>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#a3b7ca', opacity: '.9' }}><BsHospital className='text-red-700' /></button>
                  <p className='text-xs  bg-red-200 text-red-700 p-1 rounded-xl'>3 Overdue</p>

                </div>

                <h1 className='text-2xl font-bold'>3</h1>
                <h6 className='text-xs text-gray-500'>Upcoming appointment</h6>


              </div>
              <div className='flex flex-col items-start border rounded-2xl p-4 bg-white gap-2 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                <div className='flex  items-center justify-between w-full '>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#74a892', opacity: '.9' }}><GiMedicines className='text-yellow-700' /></button>
                  <p className='text-xs  bg-green-300 text-gray-700 p-1 rounded-xl'>Active</p>

                </div>

                <h1 className='text-2xl font-bold'>3</h1>
                <h6 className='text-xs text-gray-500'>Medicine Order</h6>


              </div>
              <div className='flex flex-col items-start border rounded-2xl p-4 gap-2 bg-white transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                <div className='flex  items-center justify-between w-full'>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#f0daa5', opacity: '.9' }}><FaClipboardList className='text-gray-700' /></button>
                  <p className='text-xs  bg-red-200 text-red-700 p-1 rounded-xl'>3 Overdue</p>
                </div>

                <h1 className='text-2xl font-bold'>5</h1>
                <h6 className='text-xs text-gray-500'>Care tasks this week </h6>


              </div>

            </div>
            {/* second-grid */}
            <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2 justify-evenly mt-5'>
              <div className='flex flex-col items-center justify-center p-4 border rounded-2xl bg-white gap-2 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl hover:bg-linear-to-r/srgb from-yellow-200 to-green-700' style={{ borderColor: '#e5c185' }}>
                <Link to={'/appointment'}>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#a3b7ca', opacity: '.9' }}><BsHospital className='text-red-700 text-2xl' /></button>
                </Link>

                <h6 className='text-md text-gray-700 font-semibold'>Book Appointment</h6>
              </div>
              <div className='flex flex-col items-center justify-center border rounded-2xl p-4 bg-white gap-2 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl hover:bg-linear-to-r/srgb from-yellow-200 to-green-700' style={{ borderColor: '#e5c185' }}>
                <Link to={'/medicines'}>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#74a892', opacity: '.9' }}><GiMedicines className='text-yellow-700 text-2xl' /></button>
                </Link>

                <h6 className='text-md text-gray-700 font-semibold'>Order Medicine</h6>

              </div>
              <div className='flex flex-col items-center justify-center border rounded-2xl p-4 gap-2 bg-white transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl hover:bg-linear-to-r/srgb from-yellow-200 to-green-700' style={{ borderColor: '#e5c185' }}>
                <Link to={'/caretask'}>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#f0daa5', opacity: '.9' }}><IoMdAddCircle className='text-gray-700 text-2xl' /></button>
                </Link>



                <h6 className='text-md text-gray-700 font-semibold'>Add Task </h6>


              </div>
              {/* <div className='flex flex-col items-center justify-center border rounded-2xl p-4 gap-2 bg-white transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl hover:bg-linear-to-r/srgb from-yellow-200 to-green-700' style={{borderColor:'#e5c185'}}>
                
                <Link to={'/medicines'}>
                <button className='p-3 rounded-md' style={{ backgroundColor:'#f0daa5',opacity:'.9' }}><IoMdAddCircle className='text-gray-700 text-2xl' /></button>
                
                </Link> 
               
           <h6 className='text-md text-gray-700 font-semibold'>Order Medicine </h6>


            </div> */}

            </div>
            {/* care tasks & notifications */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2 mt-4'>

              {/* care task */}
              <div className='flex flex-col gap-3 border rounded-3xl p-4' style={{ borderColor: '#e5c185', backgroundColor: 'white' }} >
                <div className='flex justify-between'>
                  <div>
                    <h1 className='text-xl font-medium'>Care Task</h1>
                    <h6 className='text-xs'>Assigned to helpers</h6>
                  </div>
                  <div className='flex  items-center justify-center border rounded-3xl p-2  gap-2  text-green-700' style={{ borderColor: '#e5c185' }}>
                    {/* <IoIosAdd className='font-bold' /> */}
                    <TextInput onChange={(e)=>setSearchKey(e.target.value)}  className='w-full bg-white! border-green-700! text-gray-700!' style={{ backgroundColor: 'white', borderColor: 'green',color:'gray' }}></TextInput>
                    <Button onClick={handleSearch} outline color="green" className=''>Search</Button>
                    {/* <h6 className='text-xs font-bold'>Add Task</h6> */}

                  </div>
                </div>
                {
                  tasks.length > 0 ?

                    tasks.map((item, index) => (

                      <div key={index}>

                        <div className='flex justify-between items-center'>
                          <Checkbox color='green' style={{ borderColor: '#e5c185', backgroundColor: '#74a892' }} />
                          <div className=''>
                            <h3 className='text-md font-semibold'>{item.title}</h3>
                            <p className='text-xs text-gray-500'>{item.date.split('T')[0]}</p>
                          </div>
                          <p className='text-xs  rounded-2xl  p-2  text-center text-yellow-500 ' style={{ backgroundColor: '#e5c185' }}>{item.status}</p>

                        </div>

                        <div className="h-px bg-yellow-400 opacity-14 my-4"></div>
                      </div>
                    ))


                    : "no more taks found"

                }







              </div>
              {/* notifications */}
              <div className='flex flex-col gap-3 border rounded-3xl p-4' style={{ borderColor: '#e5c185', backgroundColor: 'white' }} >
                <div className='flex justify-between'>
                  <div>
                    <h1 className='text-xl font-medium'>Notifications</h1>
                    <h6 className='text-xs'>5 unread</h6>
                  </div>
                  <div className='flex  items-center justify-center border rounded-3xl p-2 w-24 h-8 text-green-700' style={{ borderColor: '#e5c185' }}>
                    <h6 className='text-xs font-bold'>Mark all read</h6>
                  </div>
                </div>

                <div className='flex justify-start gap-5 items-center '>
                  <BsHospital className='text-red-700 text-3xl p-1 rounded-lg' style={{ backgroundColor: '#a3b7ca', opacity: '.9' }} />
                  <div className=''>
                    <h3 className='text-sm font-semibold'>Appointment with dr.roy confirmed  for tomorrow</h3>
                    <p className='text-xs text-gray-500'>30 minutes ago </p>
                  </div>
                </div>
                <div className="h-px bg-yellow-400 opacity-14 my-4"></div>
                <div className='flex justify-start gap-5 items-center '>
                  <GiMedicines className='text-yellow-700 text-3xl p-1 rounded-lg' style={{ backgroundColor: '#74a892', opacity: '.9' }} />
                  <div className=''>
                    <h3 className='text-sm font-semibold'>Medicine purchased from pharmacy confirmed</h3>
                    <p className='text-xs text-gray-500'>1 hour ago</p>
                  </div>
                </div>
                <div className="h-px bg-yellow-400 opacity-14 my-4"></div>
                <div className='flex justify-start gap-5 items-center '>
                  <TiTick className='text-blue-600 text-3xl p-1 rounded-lg' style={{ backgroundColor: '#f0daa5', opacity: '.9' }} />
                  <div className=''>
                    <h3 className='text-sm font-semibold'>Bathroom maintenance has been completed</h3>
                    <p className='text-xs text-gray-500'>yesterday 04.30 pm</p>
                  </div>
                </div>
                <div className="h-px bg-yellow-400 opacity-14 my-4"></div>




              </div>
            </div>
            {/* family members & helpers*/}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-5'>

              <div className=' border rounded-2xl p-4' style={{ borderColor: '#e5c185' }}>
                <div className='flex justify-between mb-4'>
                  <div>
                    <h2 className='text-xl font-bold'>Family Members</h2>
                    <h6 className='text-xs text-gray-500'>4 members connected</h6>
                  </div>

                  <h6 className='text-xs text-center text-green-600 border rounded-3xl p-2 w-16 h-8' style={{ borderColor: '#e5c185' }}>Invite</h6>
                </div>
                <div className='flex justify-start items-center  gap-2 flex-wrap'>
                  <div className='border rounded-2xl flex flex-col justify-center items-center gap-2 p-2 w-32' style={{ borderColor: '#e5c185' }} >
                    <div className='flex gap-2 items-center '>
                      <h1 className='text-2xl bg-blue-400 rounded-full p-2 w-12 h-12 text-center text-white'>A</h1>
                      <div>
                        <h3 className='text-md font-semibold'>Antony</h3>
                        <h6 className='text-xs text-gray-500'>Father</h6>

                      </div>
                    </div>
                    <div className='flex gap-2  items-center'>
                      <IoLocation className='text-red-500' />
                      <h6 className='text-xs'>Ernakulam</h6>
                    </div>
                    <div>
                      <h6 className='text-xs text-green-600'>Active now</h6>
                    </div>

                  </div>
                  <div className='border rounded-2xl flex flex-col justify-center items-center gap-2 p-2 w-32' style={{ borderColor: '#e5c185' }} >
                    <div className='flex gap-2 items-center '>
                      <h1 className='text-2xl bg-green-400 rounded-full p-2 w-12 h-12 text-center text-white'>J</h1>
                      <div>
                        <h3 className='text-md font-semibold'>Jose</h3>
                        <h6 className='text-xs text-gray-500'>Brother</h6>

                      </div>
                    </div>
                    <div className='flex gap-2  items-center'>
                      <IoLocation className='text-red-500' />
                      <h6 className='text-xs'>Italy</h6>
                    </div>
                    <div>
                      <h6 className='text-xs text-green-600'>Active now</h6>
                    </div>

                  </div>
                  <div className='border rounded-2xl flex flex-col justify-center items-center gap-2 p-2 w-32' style={{ borderColor: '#e5c185' }} >
                    <div className='flex gap-2 items-center '>
                      <h1 className='text-2xl bg-gray-400 rounded-full p-2 w-12 h-12 text-center text-white'>M</h1>
                      <div>
                        <h3 className='text-md font-semibold'>Mary</h3>
                        <h6 className='text-xs text-gray-500'>Mother</h6>

                      </div>
                    </div>
                    <div className='flex gap-2  items-center'>
                      <IoLocation className='text-red-500' />
                      <h6 className='text-xs'>Ernakulam</h6>
                    </div>
                    <div>
                      <h6 className='text-xs text-green-600'>Active now</h6>
                    </div>

                  </div>
                  <div className='border rounded-2xl flex flex-col justify-center items-center gap-2 p-2 w-32' style={{ borderColor: '#e5c185' }} >
                    <div className='flex gap-2 items-center '>
                      <h1 className='text-2xl bg-yellow-400 rounded-full p-2 w-12 h-12 text-center text-white'>A</h1>
                      <div>
                        <h3 className='text-md font-semibold'>Aneeta</h3>
                        <h6 className='text-xs text-gray-500'>Sister</h6>

                      </div>
                    </div>
                    <div className='flex gap-2  items-center'>
                      <IoLocation className='text-red-500' />
                      <h6 className='text-xs'>Thrissur</h6>
                    </div>
                    <div>
                      <h6 className='text-xs text-green-600'>offline</h6>
                    </div>

                  </div>
                </div>
              </div>
              {/* helpers details */}
              <div className=' border rounded-2xl p-4 ' style={{ borderColor: '#e5c185' }}>
                <div className='flex justify-between mb-4'>
                  <div>
                    <h2 className='text-xl font-bold'>Available Helpers</h2>
                    <h6 className='text-xs text-gray-500'>4 Helpers Available</h6>
                  </div>

                  <h6 className='text-xs text-center text-green-600 border rounded-3xl p-2 w-16 h-8' style={{ borderColor: '#e5c185' }}>Connect</h6>
                </div>
                <div className='flex justify-start items-center  gap-2 flex-wrap'>
                  {
                    helpers.length > 0 ?
                      helpers.map(item => (

                        <div className='border rounded-2xl flex flex-col justify-center items-center gap-2 p-2 w-40 h-32 hover:shadow-xl' style={{ borderColor: '#e5c185' }} >
                          <div className='flex gap-2 items-center '>
                            <h1 className='text-2xl bg-blue-400 rounded-full p-2 w-12 h-12 text-center text-white'>{item.username.slice(0, 1).toUpperCase()}</h1>
                            <div>
                              <h3 className='text-md font-semibold '>{item.username}</h3>
                              <h6 className='text-xs text-gray-500'>{item.bio || "Care Helper"}</h6>

                            </div>
                          </div>
                          <div className='flex gap-2  items-center'>
                            <IoLocation className='text-red-500' />
                            <h6 className='text-xs'>{item.helperDetails.district || "Kerala"}</h6>
                          </div>
                          <div>
                            <h6 className='text-xs text-green-600'>Active now</h6>
                          </div>

                        </div>


                      ))
                      : "no helpers joined"
                  }




                </div>
              </div>

            </div>




          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard
