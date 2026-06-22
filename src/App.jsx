
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
import PaymentSuccess from './users/pages/PaymentSuccess'
import PaymentError from './users/pages/PaymentError'
import ProtectedRoute from './users/components/ProtectedRoute'



function App() {




  return (
    <>
   



    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/register' element={<Auth mode='register' role='user'/>}/>
       <Route path='/helper-register' element={<Auth mode='register' role='helper'/>}/>
      <Route path='/login' element={<Auth />}/>
      {/* user pages */}

      <Route path='/dashboard' element={
        <ProtectedRoute>
           <Dashboard/>
        </ProtectedRoute>   
        }/>
      <Route path='/caretask' element={
          <ProtectedRoute>
            <CareTask/>
          </ProtectedRoute>
        
        }/>
      <Route path='/appointment' element={
       <ProtectedRoute>
         <Appointment appointment/>
      </ProtectedRoute>
     }/>
      <Route path='/medicines' element={
         <ProtectedRoute><Medicines medicine/></ProtectedRoute>}/>

      {/* payment */}

      <Route path='/paymentsuccess' element={<ProtectedRoute><PaymentSuccess/></ProtectedRoute>}/>
        <Route path='/paymenterror' element={<ProtectedRoute><PaymentError/></ProtectedRoute>}/>

      {/* admin pages */}

      <Route path='/admin-home' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/>
      {/* helper pages */}

       <Route path='/helperdashboard' element={<ProtectedRoute><HelperDashboard/></ProtectedRoute>}/>
        <Route path='/helpertask' element={<ProtectedRoute><HelperTask/></ProtectedRoute>}/>
         {/* <Route path='/helperprofile' element={<HelperProfile/>}/> */}
         <Route path='/helperprofile' element={<ProtectedRoute><HelperLayout/></ProtectedRoute>}/>
            <Route path='/helpercompleted' element={<ProtectedRoute><HelperCompleted/></ProtectedRoute>}/>


       <Route path='*' element={<PageNotFound/>}/>


    </Routes>
      
    

    </>
  )
}

export default App
