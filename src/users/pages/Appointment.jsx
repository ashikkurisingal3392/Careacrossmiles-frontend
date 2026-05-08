import React, { useEffect, useState } from 'react'
import UserSidebar from '../components/UserSidebar'
import CareHeader from '../components/CareHeader'
import { MdLocationPin } from "react-icons/md";
import { RiUser3Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { CiCreditCard1 } from "react-icons/ci";
import { Button, Label, Select, Textarea, TextInput } from 'flowbite-react';
import { Dropdown, DropdownItem } from "flowbite-react";
import { IoIosAdd } from "react-icons/io";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { bookAppointmentAPI, getAllAppointmentsAPI, getAllDoctorsAPI } from '../../../service/allAPIs';

function Appointment() {

  const [openModal, setOpenModal] = useState(false);
  const [doctors, setDoctors] = useState([])

  const [appointment, setAppointment] = useState({

    doctorID: "",
    patientName: "",
    appointmentDate: "",
    notes: ""

  })

  const [showAppointments, setShowAppointments] = React.useState([])

  const handleModal = () => {
    setOpenModal(true)
  }
  const handleModalClose = () => {
    setOpenModal(false)
  }

  const getAllDoctors = async () => {

    try {
      const token = sessionStorage.getItem('token')
      console.log("token :", token);

      const reqHeader = {
        Authorization: `Bearer ${token}`
      }

      const response = await getAllDoctorsAPI(reqHeader)
      console.log(response);
      setDoctors(response.data.allDoctors)

    }
    catch (err) {

      console.log(err);
      console.log(response.data.message);
    }
  }

  const handleBooking = async () => {

    console.log(appointment);

    const { doctorID, patientName, appointmentDate, notes } = appointment
    if (doctorID && patientName && appointmentDate && notes) {

      try {

        const token = sessionStorage.getItem('token')
        console.log("token :", token);

        const reqHeader = {
          Authorization: `Bearer ${token}`
        }

        const reqBody = {

          doctorID: appointment.doctorID,
          patientName: appointment.patientName,
          appointmentDate: appointment.appointmentDate,
          notes: appointment.notes

        }

        const response = await bookAppointmentAPI(reqBody, reqHeader)
        console.log(response);
        if (response.status === 200) {

          alert(response.data.message)

        }
      }
      catch (err) {

        console.log(err);
        alert(err.response.data.message)

        console.log(err.response.data.message)

      }

    }
    else {
      alert("please fill the forms")
    }


  }

  const getAllAppointments = async () => {

    try {
      const token = sessionStorage.getItem('token')
      console.log("token :", token);

      const reqHeader = {
        Authorization: `Bearer ${token}`
      }

      const response = await getAllAppointmentsAPI(reqHeader)
      console.log(response);
      setShowAppointments(response.data.allAppointments)

    }
    catch (err) {

      console.log(err);
      console.log(response.data.message);
    }
  }

  useEffect(() => {
    getAllDoctors()
    getAllAppointments()

  }, [])

  console.log(doctors);
  console.log(showAppointments);


  return (
    <div>
      <div className='flex min-h-screen'>

        {/* sidebar */}
        <div className='w-72'>
          <UserSidebar />

        </div>

        <div className='flex flex-col flex-1 '>
          {/* header */}
          <div className='w-full'>
            <CareHeader appointment />
          </div>
          {/* appointment content  */}
          <div className='flex-1 p-4' style={{ backgroundColor: '#ffffea' }}>

            {/* top section */}
            <div className='flex  justify-between mx-auto items-center bg-linear-to-r/srgb from-green-800 to-green-700 p-4 rounded-3xl' >
              <div className='mx-3'>
                <h3 className='text-xs text-yellow-500 mb-2'>UPCOMING APPOINTMENTS </h3>
                <h4 className='text-xl text-white mb-2'>Next visit:<span className='text-yellow-500'>Dr.Luffy</span>  tomorrow</h4>
                <div className='flex gap-1'>
                  <MdLocationPin className='text-red-700 text-lg' />
                  <h6 className='text-xs ' style={{ color: '#ced3d7' }}>Amrita Hospital,Kochi . 11.00 AM </h6>
                </div>

              </div>
              <div className='flex items-center  gap-2'>
                <div className='flex flex-col items-center gap-1 rounded-2xl p-3 w-24' style={{ borderColor: '#F9C74F', backgroundColor: '#e5c185', opacity: '.9' }}>
                  <button className='text-3xl ' >{new Date().getDate()}</button>
                  <h6 className='text-xs'>{new Date().toLocaleDateString("en-GB",{month:'short'})}</h6>
                </div>

                <div className='flex flex-col items-center gap-1 rounded-2xl p-3 w-24' style={{ borderColor: '#F9C74F', backgroundColor: '#e5c185', opacity: '.9' }}>
                  <button className='text-3xl '>{showAppointments.length}</button>
                  <h6 className='text-xs'>Total {new Date().toLocaleDateString("en-GB",{year:'numeric'})}</h6>
                </div>
                <div className='flex flex-col items-center gap-1 rounded-2xl p-3 w-24' style={{ borderColor: '#F9C74F', backgroundColor: '#e5c185', opacity: '.9' }}>
                  <button className='text-3xl '>{doctors.length}</button>
                  <h6 className='text-xs'>Doctors</h6>
                </div>

              </div>
            </div>

            {/* scheduled appointments */}

            <div className='mt-5'>
              <h1 className='text-md font-bold mb-3 mt-2'>Scheduled Appointments</h1>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-3'>
                {
                  showAppointments.length > 0 ?
                    showAppointments.map(item => (
                      <div className='border rounded-2xl p-3 border-white bg-white shadow-xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ' style={{ borderColor: "#e5c185" }}>
                        <div className='flex flex-col mb-2'>
                          <h3 className='text-xs text-green-600 mb-2'>{item.doctorID.specialization}</h3>
                          <h3 className='text-md font-bold mb-2'>{item.doctorID.fullName}</h3>
                          <h4 className='text-sm text-gray-700'>{item.doctorID.hospitalName},{item.doctorID.location}</h4>
                        </div>
                        <div className="h-px bg-yellow-900 opacity-25 my-4"></div>
                        <div className='flex gap-2 text-center mb-2'>
                          <SlCalender className='text-red-800 ' />
                          <h4 className='text-sm text-gray-500 font-semibold'>{new Date(item.appointmentDate).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}</h4>

                        </div>
                        {/* <div className='flex gap-1 text-center mb-2'>
                    <RiUser3Fill className='text-gray-700' />
                    <h4 className='text-sm text-gray-700'>Escort: Jose . confirmed</h4>
                  </div> */}
                        <div className='flex gap-1 text-center mb-2'>
                          <CiCreditCard1 className='text-gray-700 text-lg' />
                          <h4 className='text-sm text-gray-700'>Fee: ₹ {item.doctorID.fee}</h4>
                        </div>
                        <div>
                          <Button color="green" outline className='text-green-700'>Reschedule</Button>
                        </div>



                      </div>


                    ))
                    : "No appointments booked"
                }





              </div>


            </div>

            {/* our doctors & book appointment */}

            <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-4 gap-3'>
              {/* doctors list */}
              <div className='flex flex-col gap-3 border rounded-2xl p-4 bg-white' style={{ borderColor: "#e5c185" }}>
                <div className='flex justify-between items-center'>
                  <div >
                    <h1 className='text-md font-semibold'>Our Doctors</h1>
                    <p className='text-xs text-green-600'>Family Doctors List</p>

                  </div>
                  <div onClick={handleModal} className='flex  items-center justify-center border rounded-3xl p-2 w-24 h-8 text-green-700 hover:shadow-xl hover:bg-green-700 hover:text-white' style={{ borderColor: '#e5c185' }}>
                    <IoIosAdd className='font-bold' />
                    <h6 className='text-xs font-bold'>Add Doctor</h6>

                  </div>


                </div>
                {

                  doctors.length > 0 ?
                    doctors.map(item => (

                      <div className='flex justify-between gap-2 items-center border  rounded-2xl p-3' style={{ borderColor: "#e5c185" }}>
                        <div className='flex  gap-2'>
                          <h3 className='text-3xl text-center rounded-full text-white bg-blue-700 border h-16 w-16 p-3'>LM</h3>
                          <div>
                            <h4 className='text-lg'>{item.fullName}</h4>
                            <h5 className='text-xs text0gray-700'>{item.specialization}</h5>
                            <h6 className='text-gray-700 text-xs'>{item.hospitalName} . {item.location}</h6>
                          </div>

                        </div>

                        <h6 className='text-sm text-yellow-600'>₹ {item.fee}/visit</h6>

                      </div>


                    ))
                    : "No doctors added"
                }









              </div>
              {/* book appointment */}
              <div className='rounded-2xl border p-5' style={{ borderColor: "#e5c185" }}>
                <h3 className='text-md  font-semibold mb-3'  >Book Appointment</h3>


                <div>
                  <div className='flex justify-start gap-2'>
                    <div className='w-full '>
                      <Label className='text-black!'>Doctor</Label>
                      <Select onChange={(e) => setAppointment({ ...appointment, doctorID: e.target.value })} className='bg-white! text-black!   focus:border-green-800! focus:ring-0 ' label="Choose your doctor" dismissOnClick={false}>
                        {
                          doctors.map(item => (
                            <option className='text-white bg-green-800 w-48 hover:bg-green-950!' value={item._id}>{item.fullName}</option>


                          ))
                        }
                      </Select>
                    </div>
                    <div className='w-full'>
                      <Label className='text-black!'>Patients</Label>
                      <Select onChange={(e) => setAppointment({ ...appointment, patientName: e.target.value })} className='bg-white! text-black!   focus:ring-0 ' label="Choose your Patient" dismissOnClick={false}>

                        <option className='text-white bg-green-800 w-48 hover:bg-green-950!  '>Father</option>
                        <option className='text-white bg-green-800 w-48 hover:bg-green-950!'>Mother</option>

                      </Select>
                    </div>

                  </div>
                  <div className='mb-3 mt-2' >
                    <TextInput
                      onChange={(e) => setAppointment({ ...appointment, appointmentDate: e.target.value })}
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
                    <Label className='text-black! '>Note</Label>
                    <Textarea onChange={(e) => setAppointment({ ...appointment, notes: e.target.value })} className='mt-2 bg-gray-700! border-2 border-gray-600 focus:ring-0 focus:border-green-700! text-white!' placeholder='Note'></Textarea>
                  </div>


                  <div className='flex w-full justify-center mt-3'>
                    <Button onClick={handleBooking} color="gray" outline className='text-white w-full hover:bg-green-700!'>Book Appointment</Button>
                  </div>




                </div>


              </div>
            </div>

            {/* modal add doctor */}
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
              <ModalHeader className='bg-green-900!'>Add A Doctor</ModalHeader>
              <ModalBody className='bg-gray-700! h-full'>
                <div className="space-y-6">
                  <Label>Full Name </Label>
                  <TextInput placeholder='Mathew Devassey' className=' text-black! border-gray-300! placeholder:bg-white!'  ></TextInput>
                  <Label>Specialization  </Label>
                  <TextInput placeholder='Cardiologist' className=' text-black! border-gray-300! placeholder:bg-white!'  ></TextInput>
                  <Label>Hospital Name </Label>
                  <TextInput placeholder='Aster Medicity Hospital' className=' text-black! border-gray-300! placeholder:bg-white!'  ></TextInput>
                  <Label>Location  </Label>
                  <TextInput placeholder='eg:Kochi,Kerala' className=' text-black! border-gray-300! placeholder:bg-white!'  ></TextInput>
                  <Label>Fees  </Label>
                  <TextInput placeholder='eg: 1200' className=' text-black! border-gray-300! placeholder:bg-white!'  ></TextInput>




                </div>
              </ModalBody>
              <ModalFooter className='bg-green-900! gap-5'>
                <Button className='bg-green-700! hover:bg-green-950!' >Add doctor</Button>
                <Button className='bg-red-700! hover:bg-red-950!' onClick={handleModalClose} >Cancel</Button>

              </ModalFooter>
            </Modal>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Appointment
