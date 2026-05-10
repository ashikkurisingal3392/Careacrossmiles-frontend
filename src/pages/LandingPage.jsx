import React from 'react'
import Header from '../components/Header'
import { Button } from 'flowbite-react'
import { FcBusinessman } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcLock } from "react-icons/fc";
import { FcSurvey } from "react-icons/fc";
import { IoIosNotifications } from "react-icons/io";
import { MdLocalHospital } from "react-icons/md";
import { RiMedicineBottleFill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FcOnlineSupport } from "react-icons/fc";
import FooterMain from '../components/FooterMain';
import { Rating, RatingStar } from "flowbite-react";
import { Link } from 'react-router-dom';



function LandingPage() {
    return (
        <div>
            <Header />
            {/* top section */}
            <section id='home' >
                <div className='bg-[url(https://cdn.pixabay.com/photo/2020/05/24/23/44/hands-5216585_1280.jpg)] bg-bg-local bg-cover bg-center' style={{ backgroundColor: '#f0ead2' }}>
                    <div className='grid sm:grid-cols-1 md:grid-cols-4 h-scree items-center'>
                        <div></div>
                        <div className='col-span-2 mt-16'>
                          {/* main head */}
                            <div>
                                <div className='flex flex-col gap-7 justify-center h-full items-center'>
                                    <h1 className='text-2xl md:text-7xl text-center text-white opacity-100'>Caring for your family  in <span className='text-yellow-500 opacity-100'>Kerala</span> , <br /> <span className='font-extrabold'>from the uk</span> </h1>
                                    <p className='text-lg md:text-xl text-yellow-600 opacity-100'>കുടുംബം ഒന്നിച്ചു നിൽക്കണം</p>
                                    <p className='text-justify text-xs md:text-md text-gray-100 w-full mb-5 opacity-100'>A dedicated platform for UK-based Malayalis to manage their family’s health, finances, and daily care in Kerala — while connecting with trusted local support, all in one place.</p>
                                </div>

                            </div>

                            {/* buttons */}
                            <div className='grid grid-cols-1  md:grid-cols-2  gap-3'>
                               <Link to={'/register'}><Button className='w-full h-14 text-sm sm:text-lg md:h-16  font-bold rounded-2xl bg-green-900! hover:bg-green-600! transition duration-300 hover:translate-y-1 ease-in-out'>Start for UK families - Free</Button></Link> 
                               <Link to={'/helper-register'}><Button outline className='w-full h-14 text-sm sm:text-lg md:h-16 lg:text-xl rounded-2xl text-white! hover:bg-green-800! hover:border-2! hover:text-white! transition duration-300 hover:translate-y-1 ease-in-out' style={{ borderColor: '#e5c185' }}>Become A Kerala Helper</Button></Link>   
                            </div>

                            {/* color-icons */}
                            <div className='grid grid-cols-2 md:grid-cols-4 items-center h-36 '>
                                <div className='flex gap-2'>
                                    <FcOk />
                                    <p className='text-gray-100 text-sm'>Flexible payments</p>
                                </div>
                                <div className='flex gap-2'>
                                    <FcBusinessman />
                                    <p className='text-gray-100 text-sm'>ID -verified helpers</p>
                                </div>
                                <div className='flex gap-2'>
                                    <FcLock />
                                    <p className='text-gray-100 text-sm'>End-to-end encryption</p>
                                </div>
                                <div className='flex gap-2'>
                                    <FcAbout />
                                    <p className='text-gray-100 text-sm'>Real-time notifications</p>
                                </div>


                            </div>

                        </div>
                        <div></div>      


                    </div>




                </div>

            </section>

            {/* how it works section */}

            <section id='how-works' className='h-full' style={{backgroundColor:'#fff6e6'}}>
                <div className=' px-5 py-2 sm:px-8 lg:px-16'>
                     <div className='flex flex-col items-start'>
                    <h3 className='text-sm font-bold text-yellow-500 mb-5 '>HOW IT WORKS</h3>
                    <h4 className='text-2xl md:text-5xl mb-2'>Simple. <span className='text-yellow-500'>Transparent.</span> </h4>
                    <h4 className='text-2xl md:text-5xl mb-5'>Designed for Overseas families.</h4>
                    <p className='text-sm text-justify text-gray-700'>Three roles. One seamless platform — connecting UK families, <br /> Kerala elders, and verified local helpers.</p>
                    </div>

                    <div className='grid grid-cols-1  md:grid-cols-3  mt-10 gap-3'>
                        <div className='flex flex-col gap-2 rounded-2xl border bg-white hover:shadow-2xl p-6 w-full  ' style={{borderColor:'#e5c185'}}>
                            <h1 className='text-gray-500 text-2xl font-extrabold mt-5'>01</h1>
                            <h2 className='text-3xl'>🇬🇧</h2>
                            <h3 className='text-xl font-bold'>UK Family signs up</h3>
                            <p className='text-sm text-justify mb-3'>Create your family group, invite your loved ones in Kerala, set a monthly budget, and add your home address there.
                                 Your dashboard is ready in minutes.</p>
                        </div>
                        <div className='flex flex-col gap-2 rounded-2xl border bg-white hover:shadow-2xl p-6  w-full ' style={{borderColor:'#e5c185'}}>
                            <h1 className='text-gray-500 text-2xl font-extrabold mt-5'>02</h1>
                            <h2 className='text-3xl'><FcSurvey /></h2>
                            <h3 className='text-xl font-bold'>Create & assign tasks</h3>
                            <p className='text-sm text-justify mb-3'>Add tasks such as hospital visits, medicine collection, bill payments, or groceries, and connect with trusted local helpers who handle them for you.</p>
                        </div>
                        <div className='flex flex-col gap-2 rounded-2xl border bg-white hover:shadow-2xl p-6 w-full' style={{borderColor:'#e5c185'}}>
                            <h1 className='text-gray-500 text-2xl font-extrabold mt-5'>03</h1>
                            <h2 className='text-3xl'><IoIosNotifications className='text-yellow-400'/></h2>
                            <h3 className='text-xl font-bold'>Get real-time updates </h3>
                            <p className='text-sm text-justify mb-3'>Once tasks are completed, helpers upload proof, your family confirms, and you’re instantly notified in London and enjoy total peace of mind..</p>
                        </div>
                       

                    </div>
                

                </div>
               

            </section>

            {/* features */}
            <section id="features" className='h-full bg-linear-to-r from-green-800 from-10% to-green-900 to-90%'  style={{backgroundColor:'#004343'}}>
                <div className='p-20'>
                     <div className=''>
                    <h3 className='text-sm font-bold text-yellow-500 mb-5 '>FEATURES</h3>
                    <h4 className='text-5xl mb-2 text-white'>Everything a  <span className='text-yellow-500'>UK Malayali</span> </h4>
                    <h4 className='text-5xl mb-5 text-white'>family needs..</h4>
                    <p className='text-sm text-justify text-gray-400'>Designed specifically for the British-Malayali community — built for your needs, <br /> not adapted from generic tools or workarounds.</p>
                    </div>

                    <div className='grid sm:grid-cols-1 md:grid-cols-3 mt-10 gap-3'>
                        <div className='flex flex-col gap-2 rounded-2xl border bg-green-900 hover:shadow-2xl hover:bg-green-800 p-6  ' style={{borderColor:'#e5c185'}}>
                            <h2 className='text-3xl mt-5 '><FcOk className='rounded-xl w-12 h-12 p-1 ' style={{backgroundColor:'#879e82'}}/></h2>
                            <h3 className='text-xl font-bold text-white'>Care Task</h3>
                            <p className='text-sm text-justify mb-3 text-gray-400'>Create and assign care tasks in seconds — from hospital visits and medicine pickups to bill payments and grocery shopping. Trusted local helpers in Kerala receive the requests, 
                                complete them, and keep you updated every step of the way.</p>
                        </div>
                         <div className='flex flex-col gap-2 rounded-2xl border bg-green-900 hover:shadow-2xl hover:bg-green-800 p-6  ' style={{borderColor:'#e5c185'}}>
                            <h2 className='text-3xl mt-5 '><MdLocalHospital className='rounded-xl w-12 h-12 p-1 text-red-700 ' style={{backgroundColor:'#a3b7ca'}}/></h2>
                            <h3 className='text-xl font-bold text-white'>Appointment Booking</h3>
                            <p className='text-sm text-justify mb-3 text-gray-400'>Book Kerala doctor appointments remotely, arrange escorts, pay fees online , and get updates from the doctor's visit .</p>
                        </div>
                         <div className='flex flex-col gap-2 rounded-2xl border bg-green-900 hover:shadow-2xl hover:bg-green-800 p-6  ' style={{borderColor:'#e5c185'}}>
                            <h2 className='text-3xl mt-5 '><RiMedicineBottleFill className='rounded-xl w-12 h-12 p-1 text-yellow-700 ' style={{backgroundColor:'#968972'}}/></h2>
                            <h3 className='text-xl font-bold text-white'>Pharmacy & Medicine Support</h3>
                            <p className='text-sm text-justify mb-3 text-gray-400'>Book Kerala doctor appointments remotely, arrange escorts, pay fees online , and get updates from the doctor's visit .</p>
                        </div>
         
                    </div>
                     <div className='grid sm:grid-cols-1 md:grid-cols-3 mt-10 gap-3'>
                        <div className='flex flex-col gap-2 rounded-2xl border bg-green-900 hover:shadow-2xl hover:bg-green-800 p-6  ' style={{borderColor:'#e5c185'}}>
                            <h2 className='text-3xl mt-5 '><FcBusinessman className='rounded-xl w-12 h-12 p-1 ' style={{backgroundColor:'#c1d3fe'}}/></h2>
                            <h3 className='text-xl font-bold text-white'>Verified Helper Network</h3>
                            <p className='text-sm text-justify mb-3 text-gray-400'>Connect with trusted, background-checked local helpers in Kerala who complete tasks reliably and transparently.</p>
                        </div>
                         <div className='flex flex-col gap-2 rounded-2xl border bg-green-900 hover:shadow-2xl hover:bg-green-800 p-6  ' style={{borderColor:'#e5c185'}}>
                            <h2 className='text-3xl mt-5 '><BiSolidMessageSquareDetail className='rounded-xl w-12 h-12 p-1 text-blue-700 ' style={{backgroundColor:'#f0ead2'}}/></h2>
                            <h3 className='text-xl font-bold text-white'>Family Messaging</h3>
                            <p className='text-sm text-justify mb-3 text-gray-400'>Stay connected in real time with your family in Kerala through simple, secure in-app messaging.</p>
                        </div>
                         <div className='flex flex-col gap-2 rounded-2xl border bg-green-900 hover:shadow-2xl hover:bg-green-800 p-6  ' style={{borderColor:'#e5c185'}}>
                            <h2 className='text-3xl mt-5 '><FcOnlineSupport className='rounded-xl w-12 h-12 p-1 text-blue-700 ' style={{backgroundColor:'#557174'}}/></h2>
                            <h3 className='text-xl font-bold text-white'>Online Support</h3>
                            <p className='text-sm text-justify mb-3 text-gray-400'>Get instant help whenever you need it. Our support team is available online to assist with tasks, updates, and any issues in real time.</p>
                        </div>
                         
         
                    </div>
                

                </div>
               

            </section>

            {/* reviews */}

            <section style={{ backgroundColor: '#f0ead2'  }} className=''>
                <div className='flex flex-col items-center gap-2 justify-center '>
                    <h1 className='text-sm text-yellow-600 font-bold mt-5 mb-3'>WHAT FAMILIES SAY</h1>
                    <h2 className='text-xl md:text-4xl'>Real stories from</h2>
                    <h2 className='text-2xl md:text-5xl text-yellow-600 text-center'>UK Malayali Families.</h2>
                </div>
                <div className='grid  grid-cols-1 md:grid-cols-3  p-5 place-items-center  gap-1 mt-5'>

                        <div className='border-2  rounded-3xl p-3 bg-white w-full max-w-sm lg:h-64 ' style={{borderColor:'#e5c185'}}>
                            {/* <h6 className='flex items-center text-white text-xs bg-gray-400 text-center rounded-full w-18 h-8  p-3'>Manchester</h6> */}
                            <p className='text-justify text-sm mt-2 '>“This platform has made it so much easier to care for my parents in Kerala. From hospital visits to groceries, everything is handled smoothly. The updates 
                                and proof give me real peace of mind.”</p>
                                <div className="h-px bg-yellow-600 my-4 opacity-20"></div>
                                <div className='flex justify-start mx-4  items-center gap-5'>
                                    <div >
                                        <h1 className='text-lg font-bold text-white bg-gray-400 text-center rounded-full w-12 h-12 p-3'>RM</h1>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-extrabold'>Rahul Menon</h3>
                                        <h4 className='text-sm text-gray-700'>Software Engineer</h4>
                                        <h4 className='text-xs'>London . Thrissur family</h4>
                                        <Rating>
                                            <RatingStar/>
                                            <RatingStar/>
                                            <RatingStar/>
                                            <RatingStar/>
                                            <RatingStar filled={false}/>
                                        </Rating>

                                    </div>
                                </div>
                        </div>
                        <div className='border-2  rounded-3xl p-3 bg-white w-full max-w-sm lg:h-64 ' style={{borderColor:'#e5c185'}}>
                            {/* <h6 className='flex items-center text-white text-xs bg-gray-400 text-center rounded-full w-18 h-8  p-3'>Manchester</h6> */}
                            <p className='text-justify text-sm mt-2 '>“This platform has made it so much easier to care for my parents in Kerala. From hospital visits to groceries, everything is handled smoothly. The updates 
                                and proof give me real peace of mind.”</p>
                                <div className="h-px bg-yellow-600 my-4 opacity-20"></div>
                                <div className='flex justify-start mx-4   items-center gap-5'>
                                    <div >
                                        <h1 className='text-lg font-bold text-white bg-gray-400 text-center rounded-full w-12 h-12 p-3'>RM</h1>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-extrabold'>Rahul Menon</h3>
                                        <h4 className='text-sm text-gray-700'>Software Engineer</h4>
                                        <h4 className='text-xs'>London . Thrissur family</h4>
                                        <Rating>
                                            <RatingStar/>
                                            <RatingStar/>
                                            <RatingStar/>
                                            <RatingStar/>
                                            <RatingStar filled={false}/>
                                        </Rating>

                                    </div>
                                </div>
                        </div>
                        <div className='border-2  rounded-3xl p-3 bg-white w-full max-w-sm lg:h-64 ' style={{borderColor:'#e5c185'}}>
                            {/* <h6 className='flex items-center text-white text-xs bg-gray-400 text-center rounded-full w-18 h-8  p-3'>Manchester</h6> */}
                            <p className='text-justify text-sm mt-2 '>“This platform has made it so much easier to care for my parents in Kerala. From hospital visits to groceries, everything is handled smoothly. The updates 
                                and proof give me real peace of mind.”</p>
                                <div className="h-px bg-yellow-600 my-4 opacity-20"></div>
                                <div className='flex justify-start mx-4   items-center gap-5'>
                                    <div >
                                        <h1 className='text-lg font-bold text-white bg-gray-400 text-center rounded-full w-12 h-12 p-3'>RM</h1>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-extrabold'>Rahul Menon</h3>
                                        <h4 className='text-sm text-gray-700'>Software Engineer</h4>
                                        <h4 className='text-xs'>London . Thrissur family</h4>
                                        <Rating>
                                            <RatingStar/>
                                            <RatingStar/>
                                            <RatingStar/>
                                            <RatingStar/>
                                            <RatingStar filled={false}/>
                                        </Rating>

                                    </div>
                                </div>
                        </div>

                    

                </div>

            </section>

          
          <FooterMain/>


        </div>
    )
}

export default LandingPage
