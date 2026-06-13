import React, { useEffect, useState } from 'react'
import UserSidebar from '../components/UserSidebar'
import CareHeader from '../components/CareHeader'
import { SlCalender } from "react-icons/sl";
import { CiCreditCard1 } from "react-icons/ci";
import { Button, Label, Select, Textarea, TextInput ,FileInput } from 'flowbite-react';
import { IoIosAdd } from "react-icons/io";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { addPharmacyAPI, deletePharmacyAPI, getAllPharmacyAPI } from '../../../service/allAPIs';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'

function Medicines() {

   const [openModal, setOpenModal] = useState(false);
   const[pharmacy,setPharmacy]=useState({

    pharmacyName:"",
    address:''

   })

   const[pharmacyList,setPharmacyList]=useState([])

    const handleModalClose = () => {
    setOpenModal(false)
  }
      const handleModalOpen = () => {
    setOpenModal(true)
  }
  
  //add new pharmacy
  const handleAddPharmacy=async()=>{

    console.log(pharmacy);

    if(pharmacy.pharmacyName && pharmacy.address){

        try{

       const token = sessionStorage.getItem('token')
       console.log("token :", token);

      const reqHeader = {
        Authorization: `Bearer ${token}`
      }
     
      const reqBody ={

        pharmacyName:pharmacy.pharmacyName,
        address:pharmacy.address
      }
    
      console.log(reqHeader);
      console.log(reqBody);
      
      const response =await addPharmacyAPI(reqBody,reqHeader)
      
      console.log(response);

        if(response.status === 200){

          alert(response.data.message)

          getAllPharmacy();

          setPharmacy({
            pharmacyName:"",
            address:""
          })
        }


    }
    catch(err){
      console.log(err);
      
    }

    }
    else{

      alert("please fill forms")
    }

  

    
      

  }

    const getAllPharmacy = async () => {
  
      try {
        const token = sessionStorage.getItem('token')
        // console.log("token :", token);
  
        const reqHeader = {
          Authorization: `Bearer ${token}`
        }
  
        const response = await getAllPharmacyAPI(reqHeader)
         console.log(response);

         setPharmacyList(response.data.pharmacyList)
  
      }
      catch (err) {
  
        console.log(err);
        console.log(err.response.data.message);
      }
    }

     const deletePharmacy = async (id) => {
    
        console.log(id);
    
    
        try {
    
          const token = sessionStorage.getItem('token')
          console.log("token :", token);
    
          const reqHeader = {
            Authorization: `Bearer ${token}`
          }
    
          const response = await deletePharmacyAPI(id, reqHeader)
          console.log(response);
          if (response.status == 200) {
    
    
            Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            }).fire({
              icon: "success",
              title: response.data.message
            });
            getAllPharmacy()
          }
    
        }
        catch (err) {
           Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            }).fire({
              icon: "error",
              title: err.response.data.message
            });
        }
      }

    useEffect(()=>{
      getAllPharmacy()
    },[])

    console.log(pharmacyList);
    

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
            <CareHeader medicine />
          </div>
          {/* medicine content  */}
          <div className='flex-1 p-4'>


            {/* top section */}
            <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-2 justify-evenly mt-5'>
              <div className='flex flex-col items-start p-4 border rounded-2xl bg-white gap-2 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                <div className='flex  items-center justify-between w-full'>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#a3b7ca', opacity: '.9' }}><img className='w-8 h-8' src='https://cdn-icons-png.flaticon.com/512/172/172835.png' /></button>


                </div>

                <h1 className='text-2xl font-bold'>3</h1>
                <h6 className='text-xs text-gray-500'>Active prescriptions </h6>
                <p className='text-xs  bg-green-200 text-green-700 p-1 rounded-xl'>All tracked</p>


              </div>
              <div className='flex flex-col items-start border rounded-2xl p-4 bg-white gap-2 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                <div className='flex  items-center justify-between w-full '>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#74a892', opacity: '.8' }}><img className='w-8 h-8' src='https://cdn-icons-png.flaticon.com/512/716/716225.png' /></button>
                  {/* <p className='text-xs  bg-green-200 text-green-700 p-1 rounded-xl'>Tomorrow</p> */}

                </div>

                <h1 className='text-2xl font-bold'>5</h1>
                <h6 className='text-xs text-gray-500'>Well stocked</h6>
                <p className='text-xs  bg-green-200 text-green-700 p-1 rounded-xl'>30+ days</p>


              </div>
              <div className='flex flex-col items-start border rounded-2xl p-4 gap-2 bg-white transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                <div className='flex  items-center justify-between w-full'>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#f0daa5', opacity: '.9' }}><img className='w-8 h-8' src="https://png.pngtree.com/png-clipart/20250417/original/pngtree-yellow-warning-sign-vector-png-image_20746332.png" /></button>

                </div>

                <h1 className='text-2xl font-bold'>5</h1>
                <h6 className='text-xs text-gray-500'>Running low </h6>
                <p className='text-xs  bg-green-200 text-orange-700 p-1 rounded-xl'>Reorder now</p>


              </div>
              <div className='flex flex-col items-start border rounded-2xl p-4 gap-2 bg-white transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl' style={{ borderColor: '#e5c185' }}>
                <div className='flex  items-center justify-between w-full'>
                  <button className='p-3 rounded-md' style={{ backgroundColor: '#ffadad', opacity: '.9' }}><img className='w-8 h-8' src='https://cdn-icons-png.flaticon.com/512/84/84426.png' /></button>
                  <p className='text-xs  bg-red-200 text-red-700 p-1 rounded-xl'>Spent this month</p>
                </div>

                <h1 className='text-2xl font-bold'>$120</h1>
                <h6 className='text-xs text-gray-500'>Overdue </h6>


              </div>

            </div>

            {/* scheduled Medicine order */}

            <div className='mt-5'>
              <h1 className='text-md font-bold mb-3 mt-2'>Medicine Orders </h1>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-3'>

                <div className='border rounded-2xl p-3 border-white bg-white shadow-xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ' style={{ borderColor: "#e5c185" }}>
                  <div className='flex flex-col mb-2'>
                    <h3 className='text-xs text-green-600 mb-2'>Pharmacy Name</h3>
                    <h3 className='text-md font-bold mb-2'>Medicine Name</h3>
                    <h4 className='text-sm text-gray-700'>Location</h4>
                  </div>
                  <div className="h-px bg-yellow-900 opacity-25 my-4"></div>
                  <div className='flex gap-2 text-center mb-2'>
                    <SlCalender className='text-red-800 ' />
                    <h4 className='text-sm text-gray-500 font-semibold'>22 may 2026</h4>

                  </div>
                  {/* <div className='flex gap-1 text-center mb-2'>
                                <RiUser3Fill className='text-gray-700' />
                                <h4 className='text-sm text-gray-700'>Escort: Jose . confirmed</h4>
                              </div> */}
                  <div className='flex gap-1 text-center mb-2'>
                    <CiCreditCard1 className='text-gray-700 text-lg' />
                    <h4 className='text-sm text-gray-700'>Paid: ₹ 300 </h4>
                  </div>
                  <div>
                    <Button color="red" outline className='text-red-700'>Cancel</Button>
                  </div>



                </div>
                <div className='border rounded-2xl p-3 border-white bg-white shadow-xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ' style={{ borderColor: "#e5c185" }}>
                  <div className='flex flex-col mb-2'>
                    <h3 className='text-xs text-green-600 mb-2'>Pharmacy Name</h3>
                    <h3 className='text-md font-bold mb-2'>Medicine Name</h3>
                    <h4 className='text-sm text-gray-700'>Location</h4>
                  </div>
                  <div className="h-px bg-yellow-900 opacity-25 my-4"></div>
                  <div className='flex gap-2 text-center mb-2'>
                    <SlCalender className='text-red-800 ' />
                    <h4 className='text-sm text-gray-500 font-semibold'>22 may 2026</h4>

                  </div>
                  {/* <div className='flex gap-1 text-center mb-2'>
                                <RiUser3Fill className='text-gray-700' />
                                <h4 className='text-sm text-gray-700'>Escort: Jose . confirmed</h4>
                              </div> */}
                  <div className='flex gap-1 text-center mb-2'>
                    <CiCreditCard1 className='text-gray-700 text-lg' />
                    <h4 className='text-sm text-gray-700'>Paid: ₹ 300 </h4>
                  </div>
                  <div>
                    <Button color="green" outline className='text-green-700'>Cancel</Button>
                  </div>



                </div>
                <div className='border rounded-2xl p-3 border-white bg-white shadow-xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ' style={{ borderColor: "#e5c185" }}>
                  <div className='flex flex-col mb-2'>
                    <h3 className='text-xs text-green-600 mb-2'>Pharmacy Name</h3>
                    <h3 className='text-md font-bold mb-2'>Medicine Name</h3>
                    <h4 className='text-sm text-gray-700'>Location</h4>
                  </div>
                  <div className="h-px bg-yellow-900 opacity-25 my-4"></div>
                  <div className='flex gap-2 text-center mb-2'>
                    <SlCalender className='text-red-800 ' />
                    <h4 className='text-sm text-gray-500 font-semibold'>22 may 2026</h4>

                  </div>
                  {/* <div className='flex gap-1 text-center mb-2'>
                                <RiUser3Fill className='text-gray-700' />
                                <h4 className='text-sm text-gray-700'>Escort: Jose . confirmed</h4>
                              </div> */}
                  <div className='flex gap-1 text-center mb-2'>
                    <CiCreditCard1 className='text-gray-700 text-lg' />
                    <h4 className='text-sm text-gray-700'>Paid: ₹ 300 </h4>
                  </div>
                  <div>
                    <Button color="green" outline className='text-green-700'>Cancel</Button>
                  </div>



                </div>
                <div className='border rounded-2xl p-3 border-white bg-white shadow-xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ' style={{ borderColor: "#e5c185" }}>
                  <div className='flex flex-col mb-2'>
                    <h3 className='text-xs text-green-600 mb-2'>Pharmacy Name</h3>
                    <h3 className='text-md font-bold mb-2'>Medicine Name</h3>
                    <h4 className='text-sm text-gray-700'>Location</h4>
                  </div>
                  <div className="h-px bg-yellow-900 opacity-25 my-4"></div>
                  <div className='flex gap-2 text-center mb-2'>
                    <SlCalender className='text-red-800 ' />
                    <h4 className='text-sm text-gray-500 font-semibold'>22 may 2026</h4>

                  </div>
                  {/* <div className='flex gap-1 text-center mb-2'>
                                <RiUser3Fill className='text-gray-700' />
                                <h4 className='text-sm text-gray-700'>Escort: Jose . confirmed</h4>
                              </div> */}
                  <div className='flex gap-1 text-center mb-2'>
                    <CiCreditCard1 className='text-gray-700 text-lg' />
                    <h4 className='text-sm text-gray-700'>Paid: ₹ 300 </h4>
                  </div>
                  <div>
                    <Button color="green" outline className='text-green-700'>Cancel</Button>
                  </div>



                </div>
              </div>
            </div>

            {/* our Pharmacys & order medicine */}

            <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-4 gap-3'>
              {/* Order medicines */}
              <div className='rounded-2xl border p-5' style={{ borderColor: "#e5c185" }}>
                <h3 className='text-md  font-semibold mb-3'  >Order Medicine</h3>


                <div>
                  <div className='flex justify-start gap-2'>
                    <div className='w-full '>
                      <Label className='text-black!'>Doctor</Label>
                      <Select className='bg-white! text-black!   focus:border-green-800! focus:ring-0 ' label="Choose your doctor">

                        <option className='text-white bg-green-800 w-48 hover:bg-green-950!' >Dr.Ashok Kumar</option>

                      </Select>
                    </div>
                    <div className='w-full'>
                      <Label className='text-black!'>Pharmacy</Label>
                      <Select className='bg-white! text-black!   focus:ring-0 ' label="Choose your Patient" >

                        <option className='text-white bg-green-800 w-48 hover:bg-green-950!  '>k&k Medicals</option>
                        <option className='text-white bg-green-800 w-48 hover:bg-green-950!'>Aster Pharama</option>

                      </Select>
                    </div>

                  </div>
                   <div className='mb-3 mt-2' >
                    <TextInput

                      type="text"
                      className="[&>input]:bg-white border-gray-600! border bg-white! mt-3 rounded-lg  w-full"
                      placeholder='Enter medicine name'
                    />
                  </div>
                  <div className='mb-3 mt-2' >
                    <TextInput

                      type="date"
                      className="[&>input]:bg-white border-gray-600! border bg-white! mt-3 rounded-lg  w-full"
                    />
                  </div>
                  {/* <Label className='text-black! '>Escort/Helper</Label>
                              <Dropdown className='bg-white! text-black! border-2 border-gray-600 focus:ring-0' label="Choose your Escort" dismissOnClick={false}>
                                <DropdownItem className='text-white bg-green-800 w-48 hover:bg-green-950!  '>Denson</DropdownItem>
                                <DropdownItem className='text-white bg-green-800 w-48 hover:bg-green-950!'>Nirmal</DropdownItem>
                                <DropdownItem className='text-white bg-green-800 w-48 hover:bg-green-950!'>Rohith</DropdownItem>
                              </Dropdown> */}
                  <div className='mt-4'>
                    <Label className='text-black! '>Prescription</Label>
                    <FileInput className='mt-2 bg-gray-700! border-2 border-gray-600 focus:ring-0 focus:border-green-700! text-white!' placeholder=''></FileInput>
                  </div>            
                  <div className='mt-4'>
                    <Label className='text-black! '>Note</Label>
                    <Textarea className='mt-2 bg-gray-700! border-2 border-gray-600 focus:ring-0 focus:border-green-700! text-white!' placeholder='Note'></Textarea>
                  </div>


                  <div className='flex w-full justify-center mt-3'>
                    <Button color="gray" outline className='text-white w-full hover:bg-green-700!'>Order Medicine</Button>
                  </div>




                </div>


              </div>
              {/* Our pharmacy list */}
              <div className='flex flex-col gap-3 border rounded-2xl p-4 bg-white' style={{ borderColor: "#e5c185" }}>
                <div className='flex justify-between items-center'>
                  <div >
                    <h1 className='text-md font-semibold'>Kerala  Pharmacies</h1>
                    <p className='text-xs text-green-600'>Near Thrissur · Quick order</p>

                  </div>
                  <button onClick={handleModalOpen} className='flex  items-center justify-center border rounded-3xl p-2 w-36 h-8 text-green-700 hover:shadow-xl hover:bg-green-700 hover:text-white' style={{ borderColor: '#e5c185' }}>
                    <IoIosAdd className='font-bold' />
                    <h6 className='text-xs font-bold '>Add pharamacy</h6>

                  </button>
                </div>
               {
                pharmacyList?.length > 0?

                pharmacyList.map((item,index)=>(

                   <div className='flex justify-between gap-2 items-center border  rounded-2xl p-3' style={{ borderColor: "#e5c185" }}>
                  <div className='flex  gap-2'>
                    <h3 className='text-3xl text-center rounded-full text-white bg-blue-700 border h-16 w-16 p-3'>AM</h3>
                    <div className=''>
                      <h4 className='text-lg'>{item.pharmacyName}</h4>
                      <h5 className='text-xs text-gray-700'>{item.address}</h5>
                      <h6 className='text-gray-700 text-xs'>open:8.00 AM </h6>
                    </div>

                  </div>
                 <div className='flex items-center gap-2'>

                   <h6 className='text-sm text-green-600'>open now</h6>
                   <MdDelete onClick={()=>deletePharmacy(item._id)} className='text-red-700!' />

                 </div>
                 

                </div>


                  
                ))
                
                
                
                :"NO pharmacy"
               }
               
                


              </div>


            </div>


             {/* modal add pharmacy */}
                        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                          <ModalHeader className='bg-green-900!'>Add A Doctor</ModalHeader>
                          <ModalBody className='bg-gray-700! h-full'>
                            <div className="space-y-6">
                              <Label>Pharmacy Name </Label>
                              <TextInput onChange={(e) => setPharmacy({ ...pharmacy, pharmacyName: e.target.value })} value={pharmacy.pharmacyName} placeholder='Aster medicines' className=' text-black! border-gray-300! placeholder:bg-white!'  ></TextInput>
                              <Label>Address  </Label>
                              <TextInput onChange={(e) => setPharmacy({ ...pharmacy, address: e.target.value })} value={pharmacy.address} placeholder='mg road,kochi' className=' text-black! border-gray-300! placeholder:bg-white!'  ></TextInput>
                            </div>
                          </ModalBody>
                          <ModalFooter className='bg-green-900! gap-5'>
                            <Button className='bg-green-700! hover:bg-green-950!' onClick={handleAddPharmacy}  >Add Pharmacy</Button>
                            <Button className='bg-red-700! hover:bg-red-950!' onClick={handleModalClose} >Cancel</Button>
            
                          </ModalFooter>
                        </Modal>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Medicines
