import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './components/Auth'
import Dashboard from './users/pages/Dashboard'
import AdminDashboard from './admin/pages/AdminDashboard'
import CareTask from './users/pages/CareTask'
import Appointment from './users/pages/Appointment'
import Medicines from './users/pages/Medicines'
import PageNotFound from './pages/PageNotFound'
import LandingPage from './pages/LandingPage'
import HelperDashboard from './helpers/pages/HelperDashboard'
import HelperTask from './helpers/pages/HelperTask'
import HelperProfile from './helpers/pages/HelperProfile'
import HelperCompleted from './helpers/pages/HelperCompleted'
import HelperLayout from './helpers/pages/HelperLayout'


function App() {


  return (
    <>

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/register' element={<Auth mode='register' role='user'/>}/>
       <Route path='/helper-register' element={<Auth mode='register' role='helper'/>}/>
      <Route path='/login' element={<Auth />}/>
      {/* user pages */}

      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/caretask' element={<CareTask/>}/>
      <Route path='/appointment' element={<Appointment appointment/>}/>
      <Route path='/medicines' element={<Medicines medicine/>}/>

      {/* admin pages */}

      <Route path='/admin-home' element={<AdminDashboard/>}/>
      {/* helper pages */}

       <Route path='/helperdashboard' element={<HelperDashboard/>}/>
        <Route path='/helpertask' element={<HelperTask/>}/>
         {/* <Route path='/helperprofile' element={<HelperProfile/>}/> */}
         <Route path='/helperprofile' element={<HelperLayout/>}/>
            <Route path='/helpercompleted' element={<HelperCompleted/>}/>


       <Route path='*' element={<PageNotFound/>}/>


    </Routes>
      
    

    </>
  )
}

export default App
