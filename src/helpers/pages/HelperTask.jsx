import React, { useEffect, useEffectEvent } from 'react'
import HelperSidebar from '../components/HelperSidebar'
import HelperTopbar from '../components/HelperTopbar'
import { FcCalendar } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { IoIosPerson } from "react-icons/io";
import { FcHome } from "react-icons/fc";
import { Button, Textarea, TextInput } from 'flowbite-react';
import { PiMoney } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { completeTaskAPI, getHelperAcceptedTasksAPI, releaseTaskAPI } from '../../../service/allAPIs';
import { FcInspection } from "react-icons/fc";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { FileInput, Label } from "flowbite-react";

function HelperTask() {

    const [openModal, setOpenModal] = React.useState(false);

    const [acceptedTasks, setAcceptedTasks] = React.useState([])

    const[selectedTask,setSelectedTask]=React.useState({})

    const[task,setTask]=React.useState({
       proof:[],
        completeNote:""

    })


    useEffect(() => {

        getHelperTasks()


    }, [])

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

    const handleRelease = async (id) => {
        console.log(id);

        try {
            const token = sessionStorage.getItem('token')
            console.log("token :", token);

            const reqHeader = {
                Authorization: `Bearer ${token}`
            }

            const response = await releaseTaskAPI(id, reqHeader)
            console.log(response);
            getHelperTasks()
            if (response.status === 200) {
                alert(response.data.message)
            }


        }
        catch (err) {
            console.log(err);

            alert(response.data.message)
        }

    }

    const handleUpload =(e)=>{

        console.log(e.target.files[0]);
        let imgArray =task.proof
        
        if(imgArray.length<2){

            imgArray.push(e.target.files[0])
            setTask({...task,proof:imgArray})

        }
        else{

            alert('no more images')

        }

    }

    const handleComplete = async () => {

        const{proof,completeNote}=task

        try{

            const reqBody=new FormData()

           if(completeNote) reqBody.append("completeNote",completeNote)
            if(proof) task.proof.forEach(item=>reqBody.append("proof",item))

             const token = sessionStorage.getItem('token')
             console.log("token :", token);

            const reqHeader = {
                Authorization: `Bearer ${token}`
            }

            const id=selectedTask._id

            console.log(id);
            console.log(reqBody);
             console.log(reqHeader);
            
            

            const response= await completeTaskAPI(id,reqBody,reqHeader)
            console.log(response);
            if(response.status ===200){
                alert(response.data.message)
            }

            setTask({
                proof:[],
                completeNote:''
            })
            
            setOpenModal(false)
             getHelperTasks()
            
        }
        catch(err){
            console.log(err);
            console.log(response.data.message);
            alert(response.data.message);
            
            
            
        }


    }

    console.log(selectedTask);
    


    return (
        <div>

            <div className='flex flex-col  min-h-screen'>

                {/* header */}
                <div className='w-full'>
                    <HelperTopbar />

                </div>
                <div className='flex flex-1 '>
                    {/* sidebar */}
                    <div className='hidden md:block w-72 '>
                        <HelperSidebar />
                    </div>
                    {/* dashboard content */}
                    <div className='flex-1 p-4' style={{ backgroundColor: '#0d1e17' }}>

                        {/* top section */}

                        <div className='mt-3'>
                            <div className='flex  border border-green-300 rounded-2xl p-1 w-80 bg-green-900'>
                                <GoDotFill className='text-green-500' />
                                <h6 className='text-xs text-green-200  text-center'>Your accepted tasks - family can see your progress live</h6>
                            </div>

                        </div>

                        {/* tasks accepted */}

                        <div className='border rounded-3xl p-4 border-green-600 mt-5'>

                            <div className='flex items-center gap-1 mt-4'>
                                <h1 className='text-xl font-bold text-white'>Tasks I've Accepted</h1>
                                {/* <div className=" flex-1 h-px bg-gray-700 opacity-85 mx-2">

                    </div> */}
                            </div>
                            <div className='grid sm:grid-cols-1 md:grid-cols-1 mt-4 gap-2'>
                                {
                                    acceptedTasks.length > 0 ?

                                        acceptedTasks.map((item, index) => (
                                            <div key={index} className='border rounded-3xl p-4 bg-green-950 border-green-600'>
                                                <div className='flex justify-between'>
                                                    <img src="https://cdn-icons-png.flaticon.com/512/7871/7871335.png" className='w-6 h-6 mb-2' alt="" />


                                                </div>
                                                <div>
                                                    <h1 className='text-md text-white mb-1'>{item.title}</h1>
                                                    <div className='flex items-center gap-1 mb-1'>
                                                        <FcCalendar />
                                                        <h6 className='text-sm text-gray-400'>{new Date(item.date).toLocaleDateString('en-GB', {
                                                            day: 'numeric',
                                                            month: 'short',
                                                            year: 'numeric'
                                                        })}</h6>

                                                    </div>
                                                    <div className='flex items-center gap-1 mb-1'>
                                                        <FaLocationDot className='text-red-500' />
                                                        <h6 className='text-sm text-gray-400'>{item.location}</h6>

                                                    </div>
                                                    <div className='flex items-center gap-1 mb-1'>
                                                        <IoIosPerson className='text-gray-300' />
                                                        <h6 className='text-sm text-gray-400'>{item.carerecipient}</h6>

                                                    </div>
                                                    <div className='flex items-center gap-1'>
                                                        <TiTick className='text-green-500 text-lg' />
                                                        <h6 className='text-sm text-gray-400'>Accepted by you</h6>

                                                    </div>

                                                </div>
                                                <div className=" flex-1 h-px bg-gray-700 opacity-85 mx-2 my-2"></div>
                                                <div className='flex justify-start gap-2 '>
                                                    <div className='flex gap-1 items-center  bg-green-800 text-yellow-600 p-2 rounded-xl'>
                                                        <FcHome />
                                                        <p className='text-xs  text-center text-yellow-300   '>{item.family} family</p>
                                                    </div>
                                                    <div className='flex gap-1 items-center  bg-green-800 text-yellow-600 p-2 rounded-xl'>
                                                        <TbMoneybag className='text-yellow-500' />
                                                        <p className='text-xs  text-center text-green-300   '>₹ {item.payment}</p>
                                                    </div>
                                                </div>
                                                <div className='mt-4 flex gap-3'>
                                                    <Button onClick={() =>{ setOpenModal(true);
                                                                         setSelectedTask(item);

                                                    }} color='green' className='text-md bg-green-600! text-white! hover:bg-green-500! hover:text-white!' >Mark complete & upload proof
                                                    </Button>
                                                    <Button onClick={() => handleRelease(item._id)} color='red' className='text-md bg-red-600! text-white! hover:bg-green-500! hover:text-white!' >Release
                                                    </Button>

                                                </div>

                                            </div>

                                        ))


                                        : "no tasks accepted"
                                }




                            </div>
                        </div>



                        {/* modal complete */}
                        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} className='rounded-2xl'>
                            <ModalHeader style={{ backgroundColor: '#0d1e17' }}>Mark Task Complete</ModalHeader>
                            <ModalBody style={{ backgroundColor: '#0d1e17' }}>
                                <div className='flex gap-2 items-center mb-3 shadow-2xl p-3 border border-green-600 rounded-2xl bg-green-950!'>
                                    <FcInspection className='text-2xl' />
                                    <div className='flex flex-col'>
                                        <h3 className='text-xl text-white font-bold'>{selectedTask.title}</h3>
                                        <h6 className='text-sm text-gray-500'>₹ {selectedTask.payment}</h6>
                                    </div>

                                </div>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Complete Note</Label>
                                    <Textarea onChange={(e)=>setTask({...task,completeNote:e.target.value})} className='bg-green-950! border-green-600!' placeholder='eg: appointment done at 11.00 am amritha hospital '></Textarea>
                                </div>
                                {/* <div className='mb-5 mt-5'>
                                  <Label className="mb-2 block" htmlFor="file-upload">
                                    Upload proof(receipt/photo/report)
                                </Label>
                                <FileInput id="file-upload" className='bg-green-950! border-green-600!' style={{ backgroundColor: '#0d1e17' }}/>
                                </div> */}
                                <div className="mb-5 mt-5">
                                    <Label className="mb-2 block">
                                        Upload proof (receipt/photo/report)
                                    </Label>

                                    <label className="cursor-pointer inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                                        Choose File
                                        <input
                                            type="file"
                                            className="hidden"
                                            onChange={(e)=>handleUpload(e)}
                                        />
                                    </label>
                                </div>

                            </ModalBody>
                            <ModalFooter style={{ backgroundColor: '#0d1e17' }}>
                                <Button onClick={ handleComplete} className='bg-green-700! text-white! hover:bg-green-500! hover:text-white!'>Submit & Notify Family</Button>
                                <Button color="red" onClick={() => setOpenModal(false)}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>


                    </div>


                </div>

            </div>

        </div>
    )
}

export default HelperTask
