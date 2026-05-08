import React, { useEffect } from 'react'
import HelperSidebar from '../components/HelperSidebar'
import HelperTopbar from '../components/HelperTopbar'
import { Button } from 'flowbite-react';
import { FcOk } from "react-icons/fc";
import {getHelperCompletedTasksAPI} from '../../../service/allAPIs'

function HelperCompleted() {

    const[completed,setCompleted]=React.useState([])


    useEffect(()=>{

        getHelperTasks()

    },[])


      const getHelperTasks = async () => {

        try {


            const token = sessionStorage.getItem('token')
            console.log("token :", token);

            const reqHeader = {
                Authorization: `Bearer ${token}`
            }

            const response = await getHelperCompletedTasksAPI(reqHeader)

            console.log(response);

            setCompleted(response.data.allTasks)

        }
        catch (err) {

            console.log(err);

        }

    }


  return (
    <div>

            <div className='flex flex-col  min-h-screen'>

            {/* header */}
            <div className='w-full'>
                 <HelperTopbar/>
               
            </div>
            <div className='flex flex-1 '>
                {/* sidebar */}
                 <div className='w-72 '>
                    <HelperSidebar/>
                </div>
                {/* Completed content */}
                <div className='flex-1 p-4' style={{backgroundColor:'#0d1e17'}}>

                      <div className='grid sm:grid-cols-1 md:grid-cols-1 mt-4 gap-3 border rounded-2xl p-4' style={{ borderColor: "#e5c185" }}>
                        {
                            completed.length>0?

                            completed.map(item=>(

                                <div className='flex flex-col gap-3 border border-green-300 rounded-2xl p-4 bg-green-950!' >
                         
                        <div className='flex justify-between gap-2 items-center  p-3' >
                          <div className='flex items-center  gap-4'>
                                <FcOk  className='text-5xl border border-yellow-500 bg-green-800 p-2 rounded-lg'/>
                           
                            <div>
                              <h4 className='text-lg text-white'>{item.title}</h4>
                              <h5 className='text-xs text-gray-400'>Proof Uploaded . Familiy Notified</h5>
                            </div>
                          </div>
                          <Button color="green" className='bg-green-600! hover:bg-green-800!'>View</Button>
                        </div>
                      </div>
                            ))
                            
                            :"No more task completed"
                        }
                    
                      
                    </div>


                    

                </div>
             
            </div>

        </div>

      
    </div>
  )
}

export default HelperCompleted
