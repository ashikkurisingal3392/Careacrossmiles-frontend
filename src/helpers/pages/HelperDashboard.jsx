import React, { useEffect } from 'react'
import HelperSidebar from '../components/HelperSidebar'
import HelperTopbar from '../components/HelperTopbar'
import { FcCalendar } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { IoIosPerson } from "react-icons/io";
import { FcHome } from "react-icons/fc";
import { Button } from 'flowbite-react';
import { PiMoney } from "react-icons/pi";
import { FcBusinessContact } from "react-icons/fc";
import { acceptTaskAPI, getAllTasksHelperAPI, getHelperAcceptedTasksAPI, getTasksAPI } from '../../../service/allAPIs';


function HelperDashboard() {

     const[showTasks,setShowTasks]=React.useState([])
       const[acceptedTasks, setAcceptedTasks] = React.useState([])
      

        useEffect(()=>{
    
             getAllTasks()
             getHelperTasks()
     
     
         },[])


     const getAllTasks =async()=>{
         
             try{
         
         
                         const token = sessionStorage.getItem('token')
                         console.log("token :", token);
         
                         const reqHeader = {
                             Authorization: `Bearer ${token}`
                         }
         
                         const response =await getAllTasksHelperAPI(reqHeader)
         
                         console.log(response);
         
                         setShowTasks(response.data.allTasks)        
         
             }
             catch(err){
         
               console.log(err);
               
             }
         
           }

         const handleAccept =async(id)=>{

            console.log(id);

            try{
                 const token = sessionStorage.getItem('token')
                         console.log("token :", token);
         
                         const reqHeader = {
                             Authorization: `Bearer ${token}`
                         }

                const response =await acceptTaskAPI(id,reqHeader)
                console.log(response);
                getAllTasks()
                 getHelperTasks()
                

            }
            catch(err){
                console.log(err);
                
                alert(response.data.message)
            }
            
         }  

         const getHelperTasks = async () => {
         
                 try {
         
         
                     const token = sessionStorage.getItem('token')
                     console.log("token :", token);
         
                     const reqHeader = {
                         Authorization: `Bearer ${token}`
                     }
         
                     const response = await getHelperAcceptedTasksAPI(reqHeader)
         
                     console.log(response);
         
                     setAcceptedTasks(response.data.allTasks)
         
                 }
                 catch (err) {
         
                     console.log(err);
         
                 }
         
             }

     console.log(showTasks);
     console.log(acceptedTasks);
     
  return (

    
   
     <div>
         <div className='flex flex-col  min-h-screen'>

            {/* header */}
            <div className='w-full'>
                 <HelperTopbar/>
               
            </div>
            <div className='flex flex-1 '>
                {/* sidebar */}
                 <div className='hidden md:block w-72'>
                    <HelperSidebar/>
                </div>
                {/* dashboard content */}
                <div className='flex-1 p-4' style={{backgroundColor:'#0d1e17'}}>
                   
                     {/* top section */}
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-evenly mt-5'>
              <div className='flex flex-col items-start p-4 border  rounded-2xl bg-green-950 gap-2 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                <div className='flex  items-center justify-between w-full'>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#a3b7ca', opacity: '.9' }}><img className='w-8 h-8' src='https://cdn-icons-png.flaticon.com/512/4345/4345800.png'/></button>
                  <p className='text-xs  bg-orange-200 text-green-700 p-1 rounded-xl'>All tracked</p>

                </div>

                <h1 className='text-2xl text-white font-bold'>{showTasks.filter(item=>item.status==='open').length}</h1>
                <h6 className='text-xs text-gray-500'>Available Task</h6>
              </div>
              <div className='flex flex-col items-start border rounded-2xl p-4 bg-green-950 gap-2 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                <div className='flex  items-center justify-between w-full '>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#74a892', opacity: '.8' }}><img className='w-8 h-8' src='https://cdn-icons-png.flaticon.com/512/716/716225.png'/></button>
                    <p className='text-xs  bg-green-200 text-green-700 p-1 rounded-xl '>Active</p>


                </div>

                <h1 className='text-2xl text-white font-bold'>{acceptedTasks.length}</h1>
                <h6 className='text-xs text-gray-500'>My Tasks</h6>
              

              </div>
              <div className='flex flex-col items-start border rounded-2xl p-4 gap-2 bg-green-950 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                <div className='flex  items-center justify-between w-full'>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#f0daa5', opacity: '.9' }}><img className='w-8 h-8' src="https://png.pngtree.com/png-vector/20220614/ourmid/pngtree-vector-completed-stamp-illustration-background-grunge-vector-png-image_13888860.png"/></button>
                  <p className='text-xs  bg-green-200 text-orange-700 p-1 rounded-xl'>Completed</p>
                </div>

                <h1 className='text-2xl text-white font-bold'>{showTasks.filter(item=>item.status==='completed').length}</h1>
                <h6 className='text-xs text-gray-500'>Completed tasks</h6>
                


              </div>
              <div className='flex flex-col items-start border rounded-2xl p-4 gap-2 bg-green-950 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                <div className='flex  items-center justify-between w-full'>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#ffadad', opacity: '.9' }}><img className='w-8 h-8' src='https://cdn-icons-png.flaticon.com/512/9011/9011529.png'/></button>
                  <p className='text-xs  bg-red-200 text-red-700 p-1 rounded-xl'> This month</p>
                </div>

                <h1 className='text-2xl text-white font-bold'>$120</h1>
                <h6 className='text-xs text-gray-500'>Earnings </h6>


              </div>

            </div>

                  {/* Hospital & medical tasks */}

               <div>

                <div className='flex items-center gap-1 mt-4'>
                    <img src="https://cdn-icons-png.flaticon.com/512/13297/13297903.png" className='w-4 h-4' alt="" />
                    <h1 className='text-sm font-bold text-green-800'>HOSPITAL & MEDICAL</h1>   
                     <div className=" flex-1 h-px bg-gray-700 opacity-85 mx-2">

                    </div>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-4 gap-2'>
                    {
                        showTasks.length>0?
                        showTasks.filter(task=>task.category==='Hospital & Medical' && task.status=='open')
                        .map((item,index)=>(
                              <div key={index}  className='border rounded-3xl p-4 bg-green-950 border-green-600'>
                        <div className='flex justify-between'>
                             <img src="https://cdn-icons-png.flaticon.com/512/13297/13297903.png" className='w-6 h-6' alt="" />
                              <p className='text-xs  text-center  bg-yellow-200 text-yellow-600 p-1 rounded-xl  '>{item.status}</p>

                        </div>
                        <div>
                            <h1 className='text-md text-white mb-1'>{item.title}</h1>
                            <div className='flex items-center gap-1 mb-1'>
                                <FcCalendar />
                                <h6  className='text-sm text-gray-400'>{new Date(item.date).toLocaleDateString('en-GB',{
                                    day:'numeric',
                                    month:'short',
                                    year:'numeric'
                                })}</h6>

                            </div>
                            <div className='flex items-center gap-1 mb-1'>
                                <FaLocationDot className='text-red-500' />
                                <h6  className='text-sm text-gray-400'>{item.location}</h6>

                            </div>
                            <div className='flex items-center gap-1 mb-1'>
                                <IoIosPerson className='text-green-600' />
                                <h6  className='text-sm text-gray-400'>patient: {item.carerecipient}</h6>

                            </div>
                             <div className='flex items-center gap-1'>
                                <TbMoneybag className='text-yellow-500' />
                                <h6  className='text-sm text-gray-400'>Pay: ₹{item.payment}</h6>

                            </div>

                        </div>
                         <div className=" flex-1 h-px bg-gray-700 opacity-85 mx-2 my-2"></div>
                         <div className='flex justify-start gap-2 '>
                            <div className='flex gap-1 items-center  bg-yellow-200 text-yellow-600 p-1 rounded-xl'>
                                <FcHome />
                                  <p className='text-xs  text-center   '>{item.family} family</p>
                            </div>
                             <div className='flex gap-1 items-center  bg-yellow-200 text-yellow-600 p-1 rounded-xl'>
                                  <FcBusinessContact className='text-xl' />
                                  <p className='text-xs  text-center p-2  '>{item.userEmail}</p>
                            </div>
                         </div>
                         <div className='mt-4'>
                             <Button onClick={()=>handleAccept(item._id)} color='green' className='text-md bg-green-600! text-white! hover:bg-green-500! hover:text-white!' >Accept
                             </Button>
                            
                         </div>

                    </div>

                        ))
                        :"no more Hospital & medical tasks available "
                    }
                  
                    

                </div>
               </div>

               {/* bills & payments */}
                <div>

                <div className='flex items-center gap-1 mt-4'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png" className='w-4 h-4' alt="" />
                    <h1 className='text-sm font-bold text-green-800'>BILLS & PAYMENTS</h1>   
                     <div className=" flex-1 h-px bg-gray-700 opacity-85 mx-2">

                    </div>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-4 gap-2'>
                    {
                        showTasks.length>0?

                        showTasks.filter(task=>task.category==='Bills & Payments' && task.status=='open')
                        .map((item,index)=>(

                             <div key={index} className='border rounded-3xl p-4 bg-green-950 border-green-600'>
                        <div className='flex justify-between'>
                             <img src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png" className='w-6 h-6' alt="" />
                              <p className='text-xs  text-center  bg-yellow-200 text-yellow-600 p-1 rounded-xl  '>{item.status}</p>

                        </div>
                        <div>
                            <h1 className='text-md text-white mb-1'>{item.title}</h1>
                            <div className='flex items-center gap-1 mb-1'>
                                <FcCalendar />
                                <h6  className='text-sm text-gray-400'>{new Date(item.date).toLocaleDateString('en-GB',{
                                    day:'numeric',
                                    month:'short',
                                    year:'numeric'
                                })}</h6>

                            </div>
                            <div className='flex items-center gap-1 mb-1'>
                                <FaLocationDot className='text-red-500' />
                                <h6  className='text-sm text-gray-400'>{item.location}</h6>

                            </div>
                            {/* <div className='flex items-center gap-1 mb-1'>
                                <PiMoney className='text-green-600' />
                                <h6  className='text-sm text-gray-400'>Amount: ₹{item.payment}</h6>

                            </div> */}
                             <div className='flex items-center gap-1'>
                                <TbMoneybag className='text-yellow-500' />
                                <h6  className='text-sm text-gray-400'>Pay: ₹{item.payment}</h6>

                            </div>

                        </div>
                         <div className=" flex-1 h-px bg-gray-700 opacity-85 mx-2 my-2"></div>
                         <div className='flex justify-start gap-2 '>
                            <div className='flex gap-1 items-center  bg-yellow-200 text-yellow-600 p-1 rounded-xl'>
                                <FcHome />
                                  <p className='text-xs  text-center   '>{item.family} family</p>
                            </div>
                             <div className='flex gap-1 items-center  bg-yellow-200 text-yellow-600 p-1 rounded-xl'>
                               <FcBusinessContact className='text-xl' />
                                  <p className='text-xs  text-center   '>{item.userEmail}</p>
                            </div>
                         </div>
                         <div className='mt-4'>
                             <Button onClick={()=>handleAccept(item._id)} color='green' className='text-md bg-green-600! text-white! hover:bg-green-500! hover:text-white!' >Accept
                             </Button>
                            
                         </div>

                    </div>


                        ))
                        
                        :"No bills & payments Tasks"
                    }
                   
                  
                    

                </div>
               </div>

               {/*  Home & Maintenance*/}
                <div>

                <div className='flex items-center gap-1 mt-4'>
                    <img src="https://cdn-icons-png.flaticon.com/512/10751/10751558.png" className='w-4 h-4' alt="" />
                    <h1 className='text-sm font-bold text-green-800'>HOME & MAINTENANCE</h1>   
                     <div className=" flex-1 h-px bg-gray-700 opacity-85 mx-2">

                    </div>
                </div>
               <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-4 gap-2'>
                    {
                        showTasks.length>0?

                        showTasks.filter(task=>task.category==='Home Maintenance' && task.status=='open')
                        .map((item,index)=>(

                             <div key={index} className='border rounded-3xl p-4 bg-green-950 border-green-600'>
                        <div className='flex justify-between'>
                             <img src="https://cdn-icons-png.flaticon.com/512/10751/10751558.png" className='w-6 h-6' alt="" />
                              <p className='text-xs  text-center  bg-yellow-200 text-yellow-600 p-1 rounded-xl  '>{item.status}</p>

                        </div>
                        <div>
                            <h1 className='text-md text-white mb-1'>{item.title}</h1>
                            <div className='flex items-center gap-1 mb-1'>
                                <FcCalendar />
                                <h6  className='text-sm text-gray-400'>{new Date(item.date).toLocaleDateString('en-GB',{
                                    day:'numeric',
                                    month:'short',
                                    year:'numeric'
                                })}</h6>

                            </div>
                            <div className='flex items-center gap-1 mb-1'>
                                <FaLocationDot className='text-red-500' />
                                <h6  className='text-sm text-gray-400'>{item.location}</h6>

                            </div>
                            <div className='flex items-center gap-1 mb-1'>
                                <PiMoney className='text-green-600' />
                                <h6  className='text-sm text-gray-400'>Budget: ₹{item.budget}</h6>

                            </div>
                             <div className='flex items-center gap-1'>
                                <TbMoneybag className='text-yellow-500' />
                                <h6  className='text-sm text-gray-400'>Pay: ₹{item.payment}</h6>

                            </div>

                        </div>
                         <div className=" flex-1 h-px bg-gray-700 opacity-85 mx-2 my-2"></div>
                         <div className='flex justify-start gap-2 '>
                            <div className='flex gap-1 items-center  bg-yellow-200 text-yellow-600 p-1 rounded-xl'>
                                <FcHome />
                                  <p className='text-xs  text-center   '>{item.family} family</p>
                            </div>
                             <div className='flex gap-1 items-center  bg-yellow-200 text-yellow-600 p-1 rounded-xl'>
                                   <FcBusinessContact className='text-xl' />
                                  <p className='text-xs  text-center   '>{item.userEmail}</p>
                            </div>
                         </div>
                         <div className='mt-4'>
                             <Button onClick={()=>handleAccept(item._id)} color='green' className='text-md bg-green-600! text-white! hover:bg-green-500! hover:text-white!' >Accept
                             </Button>
                            
                         </div>

                    </div>


                        ))
                        
                        :"No bills & payments Tasks"
                    }
                   
                  
                    

                </div>
               </div>

               {/* other */}
               <div>

                <div className='flex items-center gap-1 mt-4'>
                    <img src="https://cdn-icons-png.flaticon.com/512/10751/10751558.png" className='w-4 h-4' alt="" />
                    <h1 className='text-sm font-bold text-green-800'>Other Category</h1>   
                     <div className=" flex-1 h-px bg-gray-700 opacity-85 mx-2">

                    </div>
                </div>
               <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-4 gap-2'>
                    {
                        showTasks.length>0?

                        showTasks.filter(task=>(task.category==='Other'|| task.category ==="Grocery Shopping") && task.status==='open')
                        .map((item,index)=>(

                             <div key={index} className='border rounded-3xl p-4 bg-green-950 border-green-600'>
                        <div className='flex justify-between'>
                             <img src="https://cdn-icons-png.flaticon.com/512/10751/10751558.png" className='w-6 h-6' alt="" />
                              <p className='text-xs  text-center  bg-yellow-200 text-yellow-600 p-1 rounded-xl  '>{item.status}</p>

                        </div>
                        <div>
                            <h1 className='text-md text-white mb-1'>{item.title}</h1>
                            <div className='flex items-center gap-1 mb-1'>
                                <FcCalendar />
                                <h6  className='text-sm text-gray-400'>{new Date(item.date).toLocaleDateString('en-GB',{
                                    day:'numeric',
                                    month:'short',
                                    year:'numeric'
                                })}</h6>

                            </div>
                            <div className='flex items-center gap-1 mb-1'>
                                <FaLocationDot className='text-red-500' />
                                <h6  className='text-sm text-gray-400'>{item.location}</h6>

                            </div>
                            <div className='flex items-center gap-1 mb-1'>
                                <PiMoney className='text-green-600' />
                                <h6  className='text-sm text-gray-400'>Budget: ₹{item.budget}</h6>

                            </div>
                             <div className='flex items-center gap-1'>
                                <TbMoneybag className='text-yellow-500' />
                                <h6  className='text-sm text-gray-400'>Pay: ₹{item.payment}</h6>

                            </div>

                        </div>
                         <div className=" flex-1 h-px bg-gray-700 opacity-85 mx-2 my-2"></div>
                         <div className='flex justify-start gap-2 '>
                            <div className='flex gap-1 items-center  bg-yellow-200 text-yellow-600 p-1 rounded-xl'>
                                <FcHome />
                                  <p className='text-xs  text-center   '>{item.family} family</p>
                            </div>
                             <div className='flex gap-1 items-center  bg-yellow-200 text-yellow-600 p-1 rounded-xl'>
                                   <FcBusinessContact className='text-xl' />
                                  <p className='text-xs  text-center   '>{item.userEmail}</p>
                            </div>
                         </div>
                         <div className='mt-4'>
                             <Button onClick={()=>handleAccept(item._id)} color='green' className='text-md bg-green-600! text-white! hover:bg-green-500! hover:text-white!' >Accept
                             </Button>
                            
                         </div>

                    </div>


                        ))
                        
                        :"No bills & payments Tasks"
                    }
                   
                  
                    

                </div>
               </div>

                </div>

             
            </div>

        </div>

     </div>
       
      

  )
}

export default HelperDashboard
