import React, { useEffect, useEffectEvent } from 'react'
import HelperSidebar from '../components/HelperSidebar'
import HelperTopbar from '../components/HelperTopbar'
import { Button, Select, Textarea, TextInput } from 'flowbite-react';


import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { FileInput, Label } from "flowbite-react";
import { updateHelperProfileAPI } from '../../../service/allAPIs';
import { serverURL } from '../../../service/serverURL';



function HelperProfile({helperDetails,setHelperDetails}) {


    // const [helperDetails, setHelperDetails] = React.useState({

    //     id: "",
    //     username: "",
    //     email: "",
    //     password: "",
    //     cpassword: "",
    //     phone: "",
    //     bio: "",
    //     profile: "",
    //     helperDetails: {
    //         skills: "", availability: "",
    //         experience: "",
    //         transport: "",
    //         district: "",
    //         travelRadius: "",
    //         language: ""
    //     }

    // })

    const [preview, setPreview] = React.useState("")

    const [openModal, setOpenModal] = React.useState(false);

    const handleModal = () => {

        setOpenModal(true)
    }
    const handleModalClose = () => {

        setOpenModal(false)
    }

    const handleUpload = (e) => {

        console.log(e.target.files[0]);
        let file = e.target.files[0]
        if (file) {

            setPreview(URL.createObjectURL(file))

            setHelperDetails({ ...helperDetails, profile: file })
        }


    }

    const handleUpdate = async () => {

        console.log(helperDetails);

        const { id, username, email, phone, password, cpassword, bio, profile,
            helperDetails: { skills, availability, experience, transport, district, travelRadius, language }
        } = helperDetails

        if (password && password != cpassword) {
            alert("passwords are mismatch")
        }
        else {

            const token = sessionStorage.getItem('token')
            const reqHeader = {
                Authorization: `Bearer ${token}`
            }

            const reqBody = new FormData()

            // for (let key in helperDetails) {

            //     reqBody.append(key, helperDetails[key])

            // }

            reqBody.append("username", username)
            reqBody.append("email", email)
            reqBody.append("phone", phone)
            reqBody.append("bio", bio)

            if (password) {
                reqBody.append("password", password)
            }

            reqBody.append("profile", profile)

            reqBody.append("helperDetails.skills", skills)
            reqBody.append("helperDetails.availability", availability)
            reqBody.append("helperDetails.experience", experience)
            reqBody.append("helperDetails.transport", transport)
            reqBody.append("helperDetails.district", district)
            reqBody.append("helperDetails.travelRadius", travelRadius)
            reqBody.append("helperDetails.language", language)

            console.log(reqBody);


            try {

                const response = await updateHelperProfileAPI(id, reqBody, reqHeader)
                console.log(response);

                if (response.status === 200) {

                  
                  setHelperDetails(response.data.updateHelper)
                    sessionStorage.setItem("existingUser",JSON.stringify(response.data.updateHelper))
                      alert(response.data.message)
                }
                //clear fields
                // setHelperDetails({

                //     id: "",
                //     username: "",
                //     email: "",
                //     password: "",
                //     cpassword: "",
                //     phone: "",
                //     bio: "",
                //     profile: "",
                //     helperDetails: {
                //         skills: "", availability: "",
                //         experience: "",
                //         transport: "",
                //         district: "",
                //         travelRadius: "",
                //         language: ""
                //     }
                // })

                setOpenModal(false)

            }
            catch (err) {

                console.log(err);
                alert(response.data.message)

            }



        }






    }

    console.log(preview);

    // useEffect(() => {

    //     if (sessionStorage.getItem("existingUser")) {

    //         let helperData = JSON.parse(sessionStorage.getItem("existingUser"))

    //         if (helperData) {

    //             setHelperDetails({

    //                 id: helperData._id,
    //                 username: helperData.username,
    //                 email: helperData.email,
    //                 bio: helperData.bio,
    //                 password: "",
    //                 cpassword: "",
    //                 profile:helperData.profile,
    //                 phone: helperData.phone,
    //                 helperDetails: {
    //                     skills: helperData.helperDetails?.skills,
    //                     availability: helperData.helperDetails?.availability,
    //                     experience: helperData.helperDetails?.experience,
    //                     transport: helperData.helperDetails?.transport,
    //                     district: helperData.helperDetails?.district,
    //                     travelRadius: helperData.helperDetails?.travelRadius,
    //                     language: helperData.helperDetails?.language,

    //                 }
    //             })
    //         }
    //     }



    // }, [])

    console.log(helperDetails);


    return (
        <div>

            <div className='flex flex-col  min-h-screen'>

                {/* header */}
                {/* <div className='w-full'>
                    <HelperTopbar />

                </div> */}
                <div className='flex flex-1 '>
                    {/* sidebar */}
                    {/* <div className='w-72 '>
                        <HelperSidebar />
                    </div> */}
                    {/* profile content */}
                    <div className='flex-1 p-4' style={{ backgroundColor: '#0d1e17' }}>

                        <div className='grid sm:grid-cols-1 md:grid-cols-1 mt-4 gap-3 border rounded-2xl p-4' style={{ borderColor: "#e5c185" }}>

                            <div className='flex flex-col gap-3 border rounded-2xl p-4 bg-green-950!' >

                                <div className='flex justify-between gap-2 items-center  p-3' >
                                    <div className='flex  items-center gap-3'>
                                        {/* <h3 className='text-3xl bg-linear-to-r/srgb from-yellow-600 to-green-700 text-white rounded-full p-3'>LM</h3> */}
                                        <img className='w-20 h-20 bg-linear-to-r/srgb from-yellow-600 to-green-700  rounded-full p-3' src={
                                            preview ? preview : helperDetails?.profile ? `${serverURL}/Uploads/${helperDetails.profile}` : "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                                        } alt="" />
                                        <div>
                                            <h4 className='text-lg text-white'>{helperDetails?.username}</h4>
                                            <h5 className='text-xs text-gray-400'>{helperDetails?.helperDetails?.status} Helper . {helperDetails?.helperDetails?.district}</h5>

                                        </div>

                                    </div>

                                    <Button onClick={handleModal} color="red" className='bg-red-500!'>Edit</Button>

                                </div>


                            </div>
                            {/* profile data */}
                            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-3'>

                                <div className='border border-green-400 bg-green-900 rounded-xl p-3'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-gray-400 text-sm font-semibold'>EMAIL</h3>
                                        <h4 className='text-white text-md'>{helperDetails?.email}</h4>
                                    </div>
                                </div>
                                <div className='border border-green-400 bg-green-900 rounded-xl p-3'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-gray-400 text-sm font-semibold'>PHONE</h3>
                                        <h4 className='text-white text-md'>{helperDetails?.phone}</h4>
                                    </div>
                                </div>
                                <div className='border border-green-400 bg-green-900 rounded-xl p-3'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-gray-400 text-sm font-semibold'>DISTRICT</h3>
                                        <h4 className='text-white text-md'>{helperDetails?.helperDetails?.district}</h4>
                                    </div>
                                </div>
                                <div className='border border-green-400 bg-green-900 rounded-xl p-3'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-gray-400 text-sm font-semibold'>TRAVEL RADIUS</h3>
                                        <h4 className='text-white text-md'>{helperDetails?.helperDetails?.travelRadius} km</h4>
                                    </div>
                                </div>
                                <div className='border border-green-400 bg-green-900 rounded-xl p-3'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-gray-400 text-sm font-semibold'>TRANSPORT</h3>
                                        <h4 className='text-white text-md'>{helperDetails?.helperDetails?.transport}</h4>
                                    </div>
                                </div>
                                <div className='border border-green-400 bg-green-900 rounded-xl p-3'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-gray-400 text-sm font-semibold'>STATUS</h3>
                                        <h4 className='text-white text-md'>{helperDetails?.helperDetails?.status}</h4>
                                    </div>
                                </div>
                                <div className='border border-green-400 bg-green-900 rounded-xl p-3'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-gray-400 text-sm font-semibold'>LANGUAGE</h3>
                                        <h4 className='text-white text-md'>{helperDetails?.helperDetails?.language}</h4>
                                    </div>
                                </div>

                                <div className='border border-green-400 bg-green-900 rounded-xl p-3'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-gray-400 text-sm font-semibold'>Experience</h3>
                                        <h4 className='text-white text-md'>{helperDetails?.helperDetails?.experience}Year</h4>
                                    </div>
                                </div>
                                <div className='border border-green-400 bg-green-900 rounded-xl p-3'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-gray-400 text-sm font-semibold'>Availability</h3>
                                        <h4 className='text-white text-md'>{helperDetails?.helperDetails?.availability}</h4>
                                    </div>
                                </div>
                                <div className='border border-green-400 bg-green-900 rounded-xl p-3'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-gray-400 text-sm font-semibold'>MEMBER SINCE</h3>
                                        <h4 className='text-white text-md'>May 2026</h4>
                                    </div>
                                </div>



                            </div>

                        </div>

                        {/* profile skill section */}
                        <div className=' border rounded-2xl p-4 mt-5' style={{ borderColor: "#e5c185" }}>
                            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-3 mt-3'>
                                <h3 className='text-lg text-white'>My Skills</h3>
                                {
                                    helperDetails?.helperDetails?.skills.split(",")
                                        .map((item,index) => (

                                            <h5 key={index} className='border border-green-700 p-2 rounded-full text-sm text-green-400 text-center'>{item}</h5>


                                        ))

                                }

                            </div>
                        </div>

                        {/* modal user updation */}

                        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} className='rounded-2xl'>
                            <ModalHeader style={{ backgroundColor: '#0d1e17' }}>Update Profile</ModalHeader>
                            <ModalBody style={{ backgroundColor: '#0d1e17' }}>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Helper Name </Label>
                                    <TextInput onChange={(e) => setHelperDetails({ ...helperDetails, username: e.target.value })} value={helperDetails?.username} className='[&_input]:bg-green-950! [&_input]:border-green-600! [&_input]:focus:ring-green-500' placeholder='eg: Helper Name '></TextInput>
                                </div>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Helper Email </Label>
                                    <TextInput onChange={(e) => setHelperDetails({ ...helperDetails, email: e.target.value })} value={helperDetails?.email} className='[&_input]:bg-green-950! [&_input]:border-green-600! [&_input]:focus:ring-green-500' placeholder='eg: Helper Email address '></TextInput>
                                </div>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Password</Label>
                                    <TextInput onChange={(e) => setHelperDetails({ ...helperDetails, password: e.target.value })} value={helperDetails?.password} className='[&_input]:bg-green-950! [&_input]:border-green-600! [&_input]:focus:ring-green-500' type='password' placeholder='eg: password '></TextInput>
                                </div>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Confirm Password </Label>
                                    <TextInput onChange={(e) => setHelperDetails({ ...helperDetails, cpassword: e.target.value })} value={helperDetails?.cpassword} className='[&_input]:bg-green-950! [&_input]:border-green-600! [&_input]:focus:ring-green-500' type='password' placeholder='eg:confirm password'></TextInput>
                                </div>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Phone Number </Label>
                                    <TextInput onChange={(e) => setHelperDetails({ ...helperDetails, phone: e.target.value })} value={helperDetails?.phone} className='[&_input]:bg-green-950! [&_input]:border-green-600! [&_input]:focus:ring-green-500' placeholder='eg: 22334455 '></TextInput>
                                </div>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Helper Bio  </Label>
                                    <TextInput onChange={(e) => setHelperDetails({ ...helperDetails, bio: e.target.value })} value={helperDetails?.bio} className='[&_input]:bg-green-950! [&_input]:border-green-600! [&_input]:focus:ring-green-500' placeholder='eg: helper carer '></TextInput>
                                </div>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Skills</Label>
                                    <TextInput onChange={(e) => setHelperDetails({ ...helperDetails, helperDetails: { ...helperDetails.helperDetails, skills: e.target.value } })} value={helperDetails?.helperDetails?.skills} className='[&_input]:bg-green-950! [&_input]:border-green-600! [&_input]:focus:ring-green-500' placeholder='eg: document helper, escort,carer '></TextInput>
                                </div>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Availability</Label>
                                    <Select onChange={(e) => setHelperDetails({ ...helperDetails, helperDetails: { ...helperDetails.helperDetails, availability: e.target.value } })} className='[&_select]:bg-green-950! [&_select]:border-green-600! [&_select]:text-white
    [&_select]:focus:ring-green-500' placeholder='eg:'>
                                        <option>Part-time</option>
                                        <option>Full-time</option>
                                    </Select>
                                </div>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Experience</Label>
                                    <TextInput onChange={(e) => setHelperDetails({ ...helperDetails, helperDetails: { ...helperDetails.helperDetails, experience: e.target.value } })} value={helperDetails?.helperDetails?.experience} className='[&_input]:bg-green-950! [&_input]:border-green-600!' placeholder='eg: 2 year experience '></TextInput>
                                </div>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Transport</Label>
                                    <TextInput onChange={(e) => setHelperDetails({ ...helperDetails, helperDetails: { ...helperDetails.helperDetails, transport: e.target.value } })} value={helperDetails?.helperDetails?.transport} className='[&_input]:bg-green-950! [&_input]:border-green-600! [&_input]:focus:ring-green-500' placeholder='eg: Bike,car '></TextInput>
                                </div>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Travel radius</Label>
                                    <TextInput onChange={(e) => setHelperDetails({ ...helperDetails, helperDetails: { ...helperDetails.helperDetails, travelRadius: e.target.value } })} value={helperDetails?.helperDetails?.travelRadius} className='[&_input]:bg-green-950! [&_input]:border-green-600! [&_input]:focus:ring-green-500' placeholder='eg: 30 km '></TextInput>
                                </div>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Language</Label>
                                    <TextInput onChange={(e) => setHelperDetails({ ...helperDetails, helperDetails: { ...helperDetails.helperDetails, language: e.target.value } })} value={helperDetails?.helperDetails?.language} className='[&_input]:bg-green-950! [&_input]:border-green-600! [&_input]:focus:ring-green-500' placeholder='eg:malayalam,english,tamil'></TextInput>
                                </div>
                                <div className='mb-3 mt-5'>
                                    <Label className="mb-2 block">Location</Label>
                                    <TextInput onChange={(e) => setHelperDetails({ ...helperDetails, helperDetails: { ...helperDetails.helperDetails, district: e.target.value } })} value={helperDetails?.helperDetails?.district} className='[&_input]:bg-green-950! [&_input]:border-green-600! [&_input]:focus:ring-green-500' placeholder='eg: Enter your location'></TextInput>
                                </div>
                                <div className="mb-5 mt-5">
                                    <Label className="mb-2 block">
                                        Upload proof (receipt/photo/report)
                                    </Label>

                                    <label className="cursor-pointer inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                                        Choose File
                                        <input
                                            type="file"
                                            className="hidden"

                                            onChange={(e) => handleUpload(e)}

                                        />
                                    </label>
                                </div>

                            </ModalBody>
                            <ModalFooter style={{ backgroundColor: '#0d1e17' }}>
                                <Button onClick={handleUpdate} className='bg-green-700! text-white! hover:bg-green-500! hover:text-white!'>Update Profile</Button>
                                <Button color="red" onClick={handleModalClose} >
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

export default HelperProfile
