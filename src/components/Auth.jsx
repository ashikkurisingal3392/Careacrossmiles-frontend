import React, { useState } from 'react'
import { BsHospital } from "react-icons/bs";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { Button, Card, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { HRText } from "flowbite-react";
import { googleLoginAPI, loginAPI, registerAPI } from '../../service/allAPIs';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom"

function Auth({ mode,role }) {

    const isRegister =mode==="register"
    const isHelper =role==="helper"
    const isUser =role==="user"

    const [userDetails, setUserDetails] = React.useState({

        username: "",
        email: "",
        password: "",
        phone:"",
        family:"",
       helperDetails:{
        skills:"",
        availability:"",
        experience:""


       }
    })

    const navigate = useNavigate()
    //   clear all fields
    const clearInputFields = () => {
        setUserDetails({
            username: "",
            email: "",
            password: ""
        })

    }

    const handleRegister = async () => {

        console.log(userDetails);
        if (userDetails.username && userDetails.email && userDetails.password) {

            try {

                const updatedUserdetails={
                    ...userDetails,role:role || 'user'
                }
                console.log(updatedUserdetails);
                
                const response = await registerAPI(updatedUserdetails)
                console.log(response);
                if (response.status === 201) {
                    toast.success(response.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });

                    setTimeout(() => {
                        navigate('/login')
                        clearInputFields()

                    }, 4000);




                }
                else {
                    console.log(response);

                }

            }
            catch (err) {

                console.log(err);
                console.log(err.response.data.message);
                toast.error(err.response.data.message, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

            }
        }
        else {
            toast.info('Please fill the forms!', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }

    }
    const handleLogin = async () => {
        console.log(userDetails);


        if (userDetails.email && userDetails.password) {

            try {

                const response = await loginAPI(userDetails)
                console.log(response);
                if (response.status === 200) {

                    toast.success(response.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });

                    sessionStorage.setItem('token', response.data.token)
                    sessionStorage.setItem('existingUser', JSON.stringify(response.data.existingUser))

                    if (response.data.existingUser.role === "user") {
                        setTimeout(() => {
                            navigate('/dashboard')
                            clearInputFields()

                        }, 2000);

                    }
                    else if(response.data.existingUser.role === "helper"){

                         setTimeout(() => {
                            navigate('/helperdashboard')
                            clearInputFields()

                        }, 2000);

                    }
                    else {
                        setTimeout(() => {
                            navigate('/admin-home')
                            clearInputFields()

                        }, 2000);
                    }


                }
            }
            catch (err) {

                console.log(err);
                toast.error(err.response.data.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

            }


        }
        else {
            toast.info('Please fill the forms!', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });

        }




    }

    const handleGoogleLogin = async (credential) => {

        console.log("google token", credential);
        const decoded = jwtDecode(credential);
        console.log(decoded);

        try {

            const response = await googleLoginAPI({
                username: decoded.name,
                email: decoded.email,
                password: "googlepassword",
                profile: decoded.picture
            })
            console.log(response);


            if (response.status === 200) {
                sessionStorage.setItem('token', response.data.token)
                sessionStorage.setItem('existingUser', JSON.stringify(response.data.existingUser))

            }
            else if (response.status === 201) {
                sessionStorage.setItem('token', response.data.token)
                sessionStorage.setItem('existingUser', JSON.stringify(response.data.newUser))


            }

            if (response.data.existingUser?.role === "user") {
                setTimeout(() => {
                    navigate('/dashboard')
                    clearInputFields()

                }, 2000);

            }
            else if (response.data.newUser?.role === "user") {
                setTimeout(() => {

                    navigate('/dashboard')
                    setUserDetails({
                        username: '', email: '', password: ''
                    })

                }, 2000);



            }
            else {
                setTimeout(() => {
                    navigate('/admin-home')
                    clearInputFields()

                }, 2000);
            }


        }
        catch (err) {

            console.log(err);

        }



    }



    return (
        <div>


            <section className='w-full  h-screen'>

                <div className='grid sm:grid-cols-1 md:grid-cols-3 h-full'>
                    {/* side bar design */}
                    <div className='p-10 h-full' style={{ backgroundColor: '#2c6e49' }}>
                        <div className='flex flex-col justify-start h-62  mt-5 '>
                            <div className='flex items-center text-white'>
                                <img style={{ width: 50, height: 50 }} src="https://png.pngtree.com/png-vector/20250802/ourlarge/pngtree-hand-drawn-green-coconut-tree-icon-elements-png-image_16966361.webp" alt="" />
                                <h1 className='text-2xl font-bold'>CARE ACROSS MILES</h1>

                            </div>

                            <h6 className='text-sm mx-13 text-gray-800'>KERALA UK FAMILY CARE</h6>

                        </div>
                        <div className='flex flex-col gap-4 mb-5'>
                            <h2 className='text-4xl text-white'>Caring for your family
                                in <span style={{ color: '#F9C74F' }}>Kerala</span> ,<br />
                                from the UK.</h2>
                            <p className='text-sm text-white text-justify'>The only platform built for UK-based Malayalis to manage their family's health,
                                finances, and daily care — all in one place.</p>
                        </div>

                        <div className='flex flex-col gap-5 justify-center  h-64 '>

                            <div className='flex gap-2 items-center'>
                                <BsHospital className='border text-3xl p-1 rounded-lg text-blue-200' style={{ borderColor: '#F9C74F' }} />
                                <div>
                                    <h5 className='text-md font-normal text-white'>Care Task Management</h5>
                                    <h6 className='text-sm text-gray-800'>Coordinate helpers, doctors, and medicines</h6>
                                </div>

                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaHandsHelping className='border text-3xl p-1 rounded-lg text-green-200' style={{ borderColor: '#F9C74F' }} />
                                <div>
                                    <h5 className='text-md font-normal text-white'>Helper Dashboard</h5>
                                    <h6 className='text-sm text-gray-800'>Assist family members for escort, home maintenance, and care </h6>
                                </div>

                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdOutlineFamilyRestroom className='border text-3xl p-1 rounded-lg text-yellow-200' style={{ borderColor: '#F9C74F' }} />
                                <div>
                                    <h5 className='text-md font-normal text-white'>Family Dashboard </h5>
                                    <h6 className='text-sm text-gray-800'>UK & Kerala members, connected in real time</h6>
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col justify-end h-48 '>
                            <h6 className='font-semibold' style={{ color: '#F9C74F' }}>കുടുംബം ഒന്നിച്ചു നിൽക്കണം</h6>
                            <h6 className='font-light text-gray-700 text-sm italic'>"Family must stand together"</h6>
                        </div>




                    </div>
                    {/* login/register design */}
                    <div className='col-span-2 ' style={{ backgroundColor: '#ffffea' }}>

                        <div className='flex  flex-col items-center justify-center w-full h-screen mt-6'>

                            <div className='flex flex-col items-center justify-center w-full'>
                                {/* top section */}
                                <div className='w-full max-w-lg  mb-5 '>
                                    <h1 className='text-3xl font-semibold'>{isRegister ? "Join CareAcrossMiles" : "Welcome back"}</h1>
                                    <h3 className='text-sm'>{isRegister ? "Your role in family" : "Sign in to your CareAcrossMiles account"}</h3>
                                    {isRegister ?

                                        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-2  mt-5'>

                                            <Button className='flex gap-3 border-2 rounded-lg p-4 h-full' style={{ borderColor: '#F9C74F', backgroundColor: 'white' }}>
                                                <div style={{ backgroundColor: '#fff0d4' }} className='text-2xl w-10 rounded-lg'>🇬🇧</div>
                                                <div>
                                                    <h1 className='text-md font-semibold text-black text-start'>UK member</h1>
                                                    <h6 className='text-sm text-gray-700'>Managing care from UK</h6>
                                                </div>

                                            </Button>
                                            <Button className='flex gap-3 border-2 rounded-lg p-4 h-full' style={{ borderColor: '#F9C74F', backgroundColor: 'white' }}>
                                                <div href='#' style={{ backgroundColor: '#fff0d4' }} className='text-2xl w-10 rounded-lg'>🇮🇳</div>
                                                <div>
                                                    <h1 className='text-md font-semibold text-black text-start'>Helper </h1>
                                                    <h6 className='text-sm text-gray-700'>Assist from India</h6>
                                                </div>
                                            </Button>
                                        </div>

                                        :
                                        <div className="mt-5">
                                            <GoogleLogin
                                                onSuccess={credentialResponse => {
                                                    console.log(credentialResponse);

                                                    handleGoogleLogin(credentialResponse.credential)
                                                }}
                                                onError={() => {
                                                    console.log('Login Failed');
                                                }}
                                            />

                                        </div>


                                        //<Button className='w-full mt-5 ' style={{ borderRadius: '5px', backgroundColor: '#fff0d4', color: 'black' }}><FcGoogle className='mx-3' />Continue with Google</Button>
                                    }

                                    {isRegister ?
                                        ""
                                        :
                                        <div className="flex items-center w-full mt-7">
                                            <div className="grow border-t border-gray-300"></div>
                                            <span className="mx-4 text-gray-500">or</span>
                                            <div className="grow border-t border-gray-300"></div>
                                        </div>

                                    }

                                </div>


                                {/* form section */}
                                <div className=' w-full max-w-lg mt-5'>
                                    <Card className="max-w-lg border-0" style={{ backgroundColor: '#ffffea' }}>
                                        <form className="flex flex-col gap-4">
                                            {isRegister ?
                                                <div>
                                                    <div className="mb-2 block">
                                                        <Label htmlFor="name" color='gray'>Full Name </Label>
                                                    </div>
                                                    <TextInput onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} id="name" color='white'
                                                        type="text" placeholder="Ashik Antony " required />
                                                </div>


                                                : ''}

                                            {isRegister && isUser?
                                                <div>
                                                    <div className="mb-2 block">
                                                        <Label htmlFor="familyGroup" color='gray'>Family group name  </Label>
                                                    </div>
                                                    <TextInput onChange={(e)=>setUserDetails({...userDetails,family:e.target.value})} id="familyGroup" color='white'
                                                        type="text" placeholder="eg: Ashik Family " required />
                                                </div>


                                                : ''}

                                               
                                            {isRegister ?
                                                <div>
                                                    <div className="mb-2 block">
                                                        <Label htmlFor="phone" color='gray'>Phone number  </Label>
                                                    </div>
                                                    <TextInput onChange={(e)=>setUserDetails({...userDetails,phone:e.target.value})} id="phone" color='white'
                                                        type='phone' placeholder="222 333 2222 " required />
                                                </div>


                                                : ''}

                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="email1" color='gray'>Email address </Label>
                                                </div>
                                                <TextInput onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} id="email1" color='white'
                                                    type="email" placeholder="name@gmail.com" required />
                                            </div>
                                             {
                                                    isRegister && isHelper?
                                                     <div>
                                                    <div className="mb-2 block">
                                                        <Label htmlFor="familyGroup" color='gray'>Experience   </Label>
                                                    </div>
                                                    <TextInput onChange={(e)=>setUserDetails({...userDetails,helperDetails:{...userDetails.helperDetails,experience:e.target.value}})} id="familyGroup" color='white'
                                                        type="text" placeholder="eg: 2 years "  />
                                                </div>
                                                    
                                                    :""
                                                }
                                                 {
                                                    isRegister && isHelper?
                                                     <div>
                                                    <div className="mb-2 block">
                                                        <Label htmlFor="familyGroup" color='gray'>Availability   </Label>
                                                    </div>
                                                    <Select onChange={(e)=>{
                                                        setUserDetails({...userDetails,helperDetails:{...userDetails.helperDetails,availability:e.target.value}})
                                                    }}  color='white'
                                                       placeholder="choose your option" 
                                                         >
                                                         <option>Full-time</option>
                                                         <option>part-time</option>
                                                         </Select>
                                                </div>
                                                    
                                                    :""
                                                }
                                                 {
                                                    isRegister && isHelper?
                                                     <div>
                                                    <div className="mb-2 block">
                                                        <Label htmlFor="familyGroup" color='gray'>Skills   </Label>
                                                    </div>
                                                    <TextInput  multiple color='white' placeholder='eg:driving,plumbing,carer' onChange={
                                                        (e)=>setUserDetails({...userDetails,helperDetails:{...userDetails.helperDetails,skills:e.target.value}})
                                                        
                                                    }
                                                       
                                                         >
                                                        
                                                         </TextInput>
                                                </div>
                                                    
                                                    :""
                                                }
                                            <div>
                                                <div className="mb-2 block " >
                                                    <Label htmlFor="password1" color='gray' style={{ borderColor: 'red' }} > Password</Label>
                                                </div>
                                                <TextInput onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} id="password1" color='white' type="password" required />
                                            </div>
                                            {/* {register?
                                        
                                        <div>
                                            <div className="mb-2 block " >
                                                <Label htmlFor="confirmPassword" color='gray' style={{borderColor:'red'}} >Confirm Password</Label>
                                            </div>
                                            <TextInput id="confirmPassword" color='white'  type="password" required />
                                        </div>
                                        :''} */}

                                        

                                            {isRegister ?
                                                <div className="flex items-center gap-2">
                                                    <Checkbox id="remember" style={{ backgroundColor: 'green', borderColor: 'whitesmoke' }} />
                                                    <Label htmlFor="remember" color='gray'>I agree to the <a href="" className='text-yellow-500 text-sm'>Terms of Service</a> and <a href="" className='text-yellow-500 text-sm'>Privacy Policy</a></Label>

                                                </div>

                                                :

                                                <div className='flex justify-between'>
                                                    <div className="flex items-center gap-2">
                                                        <Checkbox id="remember" style={{ backgroundColor: 'green', borderColor: 'whitesmoke' }} />
                                                        <Label htmlFor="remember" color='gray'>keep me signed in on this device</Label>

                                                    </div>
                                                    <h3 className='text-yellow-500 text-sm'>forgot password?</h3>
                                                </div>
                                            }

                                            {
                                                isRegister ? <Button onClick={handleRegister} type="button" color='green'>
                                                    Create Account</Button> :
                                                    <Button onClick={handleLogin} type="button" color='green'>
                                                        Sign in</Button>
                                            }


                                            <h3 className='text-sm text-center'>
                                                {isRegister ? "Already have an account?" : "New to CareAcrossMiles?"}
                                                <Link to={isRegister ? "/login" : "/register"} className='text-yellow-500'>{isRegister ? "Sign in" : "Create an account"}</Link></h3>
                                                {/* <a href={isRegister ? "/login" : "/register"} className='text-yellow-500'>{isRegister ? "Sign in" : "Create an account"}</a></h3> */}
                                        </form>
                                    </Card>
                                </div>

                            </div>



                        </div>






                    </div>

                </div>

            </section>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />

        </div>
    )
}

export default Auth
