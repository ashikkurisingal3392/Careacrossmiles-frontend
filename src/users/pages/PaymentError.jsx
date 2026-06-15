import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterMain from '../../components/FooterMain'
import { Button } from 'flowbite-react'

function PaymentError() {

  const navigate = useNavigate()

  const handleNavigation = () => {


    navigate('/dashboard')


  }
  return (
    <div>


        <section className='container p-5'>
        <div className='grid grid-cols-2 p-4 min-h-screen'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-4xl font-semibold text-red-500 mb-2'>Transaction Failed</h1>
            <h6 className='font-light text-lg'>Try again!</h6>
            <div>
              <Button onClick={handleNavigation} color={"red"} className='mt-3' size='md'>Home </Button>
            </div>
            
          </div>
          <div className='flex flex-col justify-center'>
            <img src="https://img.magnific.com/premium-vector/fail-payment-icon-flat-style-declined-money-vector-illustration-isolated-background-rejected-pay-sign-business-concept_157943-1355.jpg" alt="" />
          </div>
        </div>

      </section>
      <FooterMain></FooterMain>

    </div>
  )
}

export default PaymentError
