import React from 'react'
import Header from '../../components/Header'
import FooterMain from '../../components/FooterMain'
import { Button } from 'flowbite-react'
import CareHeader from '../components/CareHeader'
import UserSidebar from '../components/UserSidebar'
import { useNavigate } from 'react-router-dom'
import UserHeader from '../components/UserHeader'

function PaymentSuccess() {

     const navigate =useNavigate()

const handleNavigation=()=>{


    navigate('/dashboard')
   
    
}

  return (
    <div>

        <div>
              <UserHeader></UserHeader>

        </div>
        <div>

        </div>
      

         <section className='container p-5'>
        <div className='grid grid-cols-2 p-4 min-h-screen'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-4xl font-semibold text-green-500 mb-2'>Payment Completed</h1>
            <h6 className='font-light text-lg'>A payment to helper transfered successfully</h6>
            <div>
              <Button onClick={handleNavigation} color={"green"} className='mt-3' size='md'>Home </Button>
            </div>
            
          </div>
          <div className='flex flex-col justify-center'>
            <img src="https://static.vecteezy.com/system/resources/previews/015/876/264/non_2x/success-payment-in-hand-illustration-in-flat-style-approved-money-illustration-on-isolated-background-successful-pay-sign-business-concept-vector.jpg" alt="" />
          </div>
        </div>

      </section>
      <FooterMain></FooterMain>
    </div>
  )
}

export default PaymentSuccess
