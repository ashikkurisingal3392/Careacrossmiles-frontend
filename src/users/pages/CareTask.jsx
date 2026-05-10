import React, { useEffect, useEffectEvent } from 'react'
import UserSidebar from '../components/UserSidebar'
import CareHeader from '../components/CareHeader'
import { LiaClipboardListSolid } from "react-icons/lia";
import { TiTick } from "react-icons/ti";
import { FaHourglassHalf } from "react-icons/fa6";
import { TbUrgent } from "react-icons/tb";
import { Button, Checkbox, FileInput, Label, Select, Textarea, TextInput } from 'flowbite-react';
import { GrLocationPin } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { Datepicker } from "flowbite-react";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { addTaskAPI, getAllHelpersAPI, getTasksAPI } from '../../../service/allAPIs';




function CareTask() {

    const [openModal, setOpenModal] = useState(false);

    const [preview, setPreview] = React.useState('')
    const [previewList, setPreviewList] = React.useState([])

    const [task, setTask] = React.useState({


        title: "",
        payment: "",
        location: "",
        helper: "",
        carerecipient: "",
        date: "",
        description: "",
        category: "",
        userEmail: "",
        family: '',
        uploadedImages: [],
        budget:""
    })

    const [helpers, setHelpers] = React.useState([])
    const [showTasks, setShowTasks] = React.useState([])

    useEffect(() => {

        getAllHelpers()
        getAllTasks()


    }, [])

    // console.log(showTasks);

    //image upload to uplodImages 
    const handleUpload = (e) => {
        // console.log(e.target.files[0]);

        let imgArray = task.uploadedImages

        let imgUrl = URL.createObjectURL(e.target.files[0])

        setPreview(imgUrl)

        if (imgArray.length < 3) {

            imgArray.push(e.target.files[0])

            setTask({ ...task, uploadedImages: imgArray })

            let imgListArray = previewList
            imgListArray.push(imgUrl)
            setPreviewList(imgListArray)
            // console.log(previewList);
        }
        else {
            alert('no more images')
        }



    }
    //to create a new task
    const handleAddTask = async () => {
       

        // console.log(task);

        const { title, payment, location, helper, carerecipient, date, description, category, family, uploadedImages } = task

        if (title && payment && location && date && helper && carerecipient && description && category && family && uploadedImages.length > 0) {



            try {

                const token = sessionStorage.getItem('token')
                // console.log("token :", token);

                const reqHeader = {
                    Authorization: `Bearer ${token}`
                }

                const reqBody = new FormData()

                for (let key in task) {

                    if (key != 'uploadedImages') {
                        reqBody.append(key, task[key])
                    }
                    else {
                        task.uploadedImages.forEach(item => reqBody.append("uploadedImages", item))
                    }
                }

                const response = await addTaskAPI(reqBody, reqHeader)
                console.log(response);
                if (response.status == 200) {
                    alert(response.data.message)

                      // reset everything
                setTask({
                    title: "",
                    payment: "",
                    location: "",
                    helper: "",
                    carerecipient: "",
                    date: "",
                    description: "",
                    category: "",
                    userEmail: "",
                    family: "",
                    budget: "",
                    uploadedImages: []
                });

                setPreview('');
                setPreviewList([]);
                 getAllTasks();

                     setOpenModal(false)
                } else {
                    alert("error while adding book")

                }
                // reset everything
                setTask({
                    title: "",
                    payment: "",
                    location: "",
                    helper: "",
                    carerecipient: "",
                    date: "",
                    description: "",
                    category: "",
                    userEmail: "",
                    family: "",
                    budget: "",
                    uploadedImages: []
                });

                setPreview('');
                setPreviewList([]);
                 getAllTasks();

            }
            catch (err) {
                console.log(err);
                console.log(response.data.message);
                alert(err.response.data.message)

            }

        }
        else {
            alert("please fill the forms")
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
            // console.log(response);
            setHelpers(response.data.allHelpers)

        }
        catch (err) {

            console.log(err);
            console.log(response.data.message);



        }
    }
  //to get all  task created by user
    const getAllTasks = async () => {

        try {


            const token = sessionStorage.getItem('token')
            // console.log("token :", token);

            const reqHeader = {
                Authorization: `Bearer ${token}`
            }

            const response = await getTasksAPI(reqHeader)

            // console.log(response);

            setShowTasks(response.data.allTasks)

        }
        catch (err) {

            console.log(err);

        }

    }
  
    //delete a task

    const handleDelete=async()=>{

        // console.log(checkBox);
        

    }


    return (
        <div>

            <div className='flex min-h-screen'>

                {/* sidebar */}
                <div className=' hidden md:block w-72'>
                    <UserSidebar />

                </div>

                <div className='flex flex-col flex-1 '>
                    {/* header */}
                    <div className='w-full'>
                        <CareHeader />
                    </div>
                    {/* Task content  */}
                    <div className='flex-1 p-4 ' style={{ backgroundColor: '#ffffea' }}>
                        {/* Task top section */}
                        <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-2 justify-evenly mt-5'>
                            <div className='flex flex-col items-start p-4 border rounded-2xl bg-white gap-2 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                                <div className='flex  items-center justify-between w-full'>
                                    <button className='p-3 rounded-md' style={{ backgroundColor: '#a3b7ca', opacity: '.9' }}><LiaClipboardListSolid className='text-white' /></button>
                                    <p className='text-xs  bg-green-200 text-green-700 p-1 rounded-xl'>This week</p>

                                </div>

                                <h1 className='text-2xl font-bold'>{showTasks.length}</h1>
                                <h6 className='text-xs text-gray-500'>Total task</h6>


                            </div>
                            <div className='flex flex-col items-start border rounded-2xl p-4 bg-white gap-2 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                                <div className='flex  items-center justify-between w-full '>
                                    <button className='p-3 rounded-md' style={{ backgroundColor: '#74a892', opacity: '.9' }}>< TiTick className='text-green-800 ' /></button>
                                    {/* <p className='text-xs  bg-green-200 text-green-700 p-1 rounded-xl'>Tomorrow</p> */}

                                </div>

                                <h1 className='text-2xl font-bold'>{showTasks.filter(task=>task.status==="completed").length}</h1>
                                <h6 className='text-xs text-gray-500'>Completed</h6>


                            </div>
                            <div className='flex flex-col items-start border rounded-2xl p-4 gap-2 bg-white transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                                <div className='flex  items-center justify-between w-full'>
                                    <button className='p-3 rounded-md' style={{ backgroundColor: '#f0daa5', opacity: '.9' }}><FaHourglassHalf className='text-white' /></button>
                                    <p className='text-xs  bg-orange-200 text-orange-700 p-1 rounded-xl'>Active</p>
                                </div>

                                <h1 className='text-2xl font-bold'>{showTasks.filter(task=>task.status==="inprogress").length}</h1>
                                <h6 className='text-xs text-gray-500'>Care tasks Inprogress  </h6>


                            </div>
                            <div className='flex flex-col items-start border rounded-2xl p-4 gap-2 bg-white transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                                <div className='flex  items-center justify-between w-full'>
                                    <button className='p-3 rounded-md' style={{ backgroundColor: '#ffadad', opacity: '.9' }}><TbUrgent className='text-red-600' /></button>
                                    <p className='text-xs  bg-red-200 text-red-700 p-1 rounded-xl'>Urgent</p>
                                </div>

                                <h1 className='text-2xl font-bold'>2</h1>
                                <h6 className='text-xs text-gray-500'>Overdue </h6>


                            </div>

                        </div>
                        {/* task board section*/}
                        <div className='mt-5'>
                            <h1 className='text-md font-bold mb-4'>Task Board</h1>
                            <div className='grid xs:grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-2'>
                                {/* Todo */}
                                <div className='border rounded-xl p-3 ' style={{ borderColor: '#e5c185', backgroundColor: '#fff0d4' }}>
                                    <div className='flex justify-between '>

                                        <div className='flex items-center gap-2'>
                                            <GoDotFill className='text-xl text-gray-700' />
                                            <h2 className='text-md font-semibold text-gray-800'>TO DO</h2>
                                        </div>

                                        <h6 className='text-xs text-center bg-gray-200 p-1 rounded-full h-6 w-6'>{
                                             showTasks.filter(task=>task.status==="open").length
                                            }</h6>
                                            
                                    </div>
                                    <div className='flex flex-col gap-2 mt-4 '>
                                        {
                                            showTasks.length > 0 ?
                                                showTasks.filter(task => task.status.trim() === "open")

                                                    .map((item, index) => (
                                                        <div key={index} className='border rounded-2xl p-3 border-white bg-white shadow-xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100  '>
                                                            <div className='flex justify-between mb-2'>
                                                                <h3 className='text-md font-bold'>{item.title}</h3>
                                                                <Checkbox  className='w-6' color='green' style={{ borderColor: '#e5c185', backgroundColor: '#74a892' }} />
                                                            </div>
                                                            <div className='flex gap-1 text-center mb-2'>
                                                                <GrLocationPin className='text-red-700' />
                                                                <h4 className='text-sm text-gray-700'>{item.location}</h4>
                                                            </div>
                                                            <div className='flex gap-2 text-center mb-2'>
                                                                <SlCalender className='text-green-900' />
                                                                <h4 className='text-sm text-gray-500'>{new Date(item.date).toLocaleDateString('en-GB', {
                                                                    day: 'numeric',
                                                                    month: 'short', year: 'numeric'
                                                                })}</h4>

                                                            </div>

                                                            <div className='flex justify-between'>
                                                                <div className='flex'>
                                                                    <h5 className='bg-green-500 text-xs text-white w-6 h-6 text-center  rounded-full me-1 p-1'>{item.carerecipient.slice(0, 1).toUpperCase()}</h5>
                                                                    <h5 className='text-sm text-gray-500'>{item.carerecipient}</h5>

                                                                </div>
                                                                <div className='flex items-center  gap-3'>
                                                                     <h6 className='flex items-center justify-cente text-sm bg-red-200 text-red-700 h-8 rounded-xl p-1'>{item.helper}</h6>
                                                                <Button onClick={handleDelete} color="red" className=' h-8 px-3 text-sm flex items-center justify-center'>Delete</Button>

                                                                </div>
                                                               
                                                            </div>
                                                        </div>

                                                    ))
                                                : "No task assigned"
                                        }

                                        {/* add task button */}
                                        <div>
                                            <Button onClick={() => setOpenModal(true)} color="green" className='w-full' outline>Add Task</Button>
                                        </div>

                                    </div>

                                </div>
                                {/* In progress */}
                                <div className='border rounded-xl p-3 ' style={{ borderColor: '#e5c185', backgroundColor: '#fff0d4' }}>
                                    <div className='flex justify-between'>

                                        <div className='flex items-center gap-2'>
                                            <GoDotFill className='text-xl text-yellow-500' />
                                            <h2 className='text-md font-semibold text-gray-800'>IN PROGRESS</h2>
                                        </div>

                                        <h6 className='text-xs text-center bg-gray-200 p-1 rounded-full h-6 w-6'>{
                                            
                                            showTasks.filter(task=>task.status==="inprogress").length
                                            
                                            }</h6>
                                    </div>
                                    <div className='flex flex-col gap-2 mt-4 '>

                                        {
                                            showTasks.length > 0 ?
                                                showTasks.filter(task => task.status === "inprogress")
                                                    .map((item, index) => (
                                                        <div className='border rounded-2xl p-3 border-white bg-white shadow-xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 '>
                                                            <div className='flex justify-between mb-2'>
                                                                <h3 className='text-md font-bold'>{item.title}</h3>
                                                                <Checkbox className='w-6' color='green' style={{ borderColor: '#e5c185', backgroundColor: '#74a892' }} />
                                                            </div>
                                                            <div className='flex gap-1 text-center mb-2'>
                                                                <GrLocationPin className='text-red-700' />
                                                                <h4 className='text-sm text-gray-700'>{item.location}</h4>
                                                            </div>
                                                            <div className='flex gap-2 text-center mb-2'>
                                                                <SlCalender className='text-green-900' />
                                                                <h4 className='text-sm text-gray-500'>{new Date(item.date).toLocaleDateString('en-GB', {
                                                                    day: 'numeric',
                                                                    month: 'short',
                                                                    year: 'numeric'
                                                                })}</h4>

                                                            </div>

                                                            <div className='flex justify-between'>
                                                                <div className='flex'>
                                                                    <h5 className='bg-green-500 text-xs text-white w-6 h-6 text-center  rounded-full me-1 p-1'>{item.carerecipient.slice(0, 1).toUpperCase()}</h5>
                                                                    <h5 className='text-sm text-gray-500'>{item.carerecipient}</h5>

                                                                </div>
                                                                <h6 className='flex items-center justify-cente text-sm bg-red-200 text-red-700 h-8 rounded-xl p-1'>{item.helper ||"no helper"}</h6>
                                                            </div>
                                                        </div>


                                                    ))
                                                : "no inprogress tasks"

                                        }



                                    </div>

                                </div>
                                {/* completed */}

                                <div className='border rounded-xl p-3' style={{ borderColor: '#e5c185', backgroundColor: '#fff0d4', }}>
                                    <div className='flex justify-between'>

                                        <div className='flex items-center gap-2'>
                                            <GoDotFill className='text-xl text-green-500' />
                                            <h2 className='text-md font-semibold text-gray-800'>COMPLETED</h2>
                                        </div>

                                        <h6 className='text-xs text-center bg-gray-200 p-1 rounded-full h-6 w-6'>{

                                            showTasks.filter(item=>item.status==='completed').length
                                            
                                            }</h6>
                                    </div>
                                    <div className='flex flex-col gap-2 mt-4 '>
                                        {
                                            showTasks.length>0?
                                            showTasks.filter(task=>task.status==="completed")
                                            .map(item=>(
                                                 <div className='border rounded-2xl p-3 border-white bg-white shadow-xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 '>
                                            <div className='flex justify-between mb-2'>
                                                <h3 className='text-md font-bold'>{item.title}</h3>
                                                <Checkbox className='w-6' color='green' style={{ borderColor: '#e5c185', backgroundColor: '#74a892' }} />
                                            </div>
                                            <div className='flex gap-1 text-center mb-2'>
                                                <GrLocationPin className='text-red-700' />
                                                <h4 className='text-sm text-gray-700'>{item.location}</h4>
                                            </div>
                                            <div className='flex gap-2 text-center mb-2'>
                                                <SlCalender className='text-green-900' />
                                                <h4 className='text-sm text-gray-500'>{new Date(item.date).toLocaleDateString('en-GB', {
                                                                    day: 'numeric',
                                                                    month: 'short',
                                                                    year: 'numeric'
                                                                })}</h4>

                                            </div>

                                            <div className='flex justify-between'>
                                                <div className='flex'>
                                                    <h5 className='bg-green-500 text-xs text-white w-6 h-6 text-center  rounded-full me-1 p-1'>A</h5>
                                                    <h5 className='text-sm text-gray-500'>{item.carerecipient}</h5>

                                                </div>
                                                <h6 className='flex items-center justify-cente text-sm bg-red-200 text-red-700 h-8 rounded-xl p-1'>{item.helper}</h6>
                                            </div>
                                        </div>


                                            ))
                                            :"no more completed tasks"
                                        }
                                       
                                       

                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* modal:add task */}
                        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                            <ModalHeader className='bg-green-900!'>Create A Task</ModalHeader>
                            <ModalBody className='bg-gray-700! h-full'>
                                <div className="space-y-6">
                                    <Label>Task Title</Label>
                                    <TextInput placeholder='Task title' onChange={e => setTask({ ...task, title: e.target.value })} value={task.title} className=' text-black! border-gray-300! placeholder:bg-white!'  ></TextInput>
                                    <Label>Task Payment</Label>
                                    <TextInput placeholder='Task payment in rupees' onChange={e => setTask({ ...task, payment: e.target.value })} value={task.payment} ></TextInput>
                                    <Label>Task Location</Label>
                                    <TextInput onChange={e => setTask({ ...task, location: e.target.value })} value={task.location} placeholder='Enter the Address'></TextInput>
                                    <Label>Task Assign for?</Label>
                                    <Select onChange={e => setTask({ ...task, carerecipient: e.target.value })} value={task.carerecipient} placeholder='choose your option' >
                                       <option value="">Choose CareRecipient</option>
                                        <option value="Father">Father</option>
                                        <option value="Mother">Mother</option>
                                        <option value="Family">Family</option>
                                    </Select>
                                    <Label>Task Assign to?</Label>
                                    <Select onChange={e => setTask({ ...task, helper: e.target.value })} value={task.helper} placeholder='choose your helper' >
                                        <option value="">Choose Helper</option>
                                        {
                                            helpers ?
                                                helpers.map((item, index) => (
                                                    <option>{item.username}</option>


                                                ))

                                                : "no helper online"
                                        }
                                        {/* 
                                        <option>Denson</option>
                                        <option>Nirmal</option>
                                        <option>Manu</option> */}
                                    </Select>
                                    <Label>Category</Label>
                                    <Select onChange={e => setTask({ ...task,category:e.target.value })} value={task.category} >
                                         <option value="">Choose category</option>
                                        <option value="Home Maintenance">Home Maintenance</option>
                                        <option value="Hospital & Medical">Hospital & Medical</option>
                                        <option value="Bills & Payments">Bills & Payments</option>
                                        <option value="grocery shopping">grocery shopping</option>
                                        <option value="Other">Other </option>
                                    </Select>
                                    <Label>Family</Label>
                                    <TextInput onChange={e => setTask({ ...task, family: e.target.value })} value={task.family} placeholder='Enter your family name' ></TextInput>
                                    <Label>Budget</Label>
                                    <TextInput onChange={e => setTask({ ...task, budget: e.target.value })} value={task.budget} placeholder='Enter your budget in rupees'></TextInput>
                                    <Label>Task date</Label>
                                    <Datepicker onChange={e => setTask({ ...task, date: e })}  />

                                    {
                                        preview && previewList.length <= 3 ?
                                            <div className='flex flex-row gap-3  justify-evenly'>
                                                {previewList.map((item, index) =>
                                                    <img key={index} src={item} className='w-40 h-40' alt="" />
                                                )}
                                            </div>

                                            : ""
                                    }
                                    <Label>Choose your files</Label>
                                    <FileInput id="file-upload" onChange={(e) => handleUpload(e)} />
                                    <Label>Task Description </Label>
                                    <Textarea onChange={e => setTask({ ...task, description: e.target.value })} value={task.description} placeholder="Enter details of task " rows={4} />

                                </div>
                            </ModalBody>
                            <ModalFooter className='bg-green-900!'>
                                <Button className='bg-green-700! hover:bg-green-950!' onClick={handleAddTask}>Submit</Button>

                            </ModalFooter>
                        </Modal>



                    </div>

                </div>

            </div>

        </div>
    )
}

export default CareTask
