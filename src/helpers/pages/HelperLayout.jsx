import React, { useEffect } from 'react'
import HelperTopbar from '../components/HelperTopbar'
import HelperSidebar from '../components/HelperSidebar'
import HelperProfile from './HelperProfile'

function HelperLayout() {

    const [helperDetails, setHelperDetails] = React.useState({
    
            id: "",
            username: "",
            email: "",
            password: "",
            cpassword: "",
            phone: "",
            bio: "",
            profile: "",
            helperDetails: {
                skills: "", availability: "",
                experience: "",
                transport: "",
                district: "",
                travelRadius: "",
                language: ""
            }
    
        })

    useEffect(() => {

        if (sessionStorage.getItem("existingUser")) {

            let helperData = JSON.parse(sessionStorage.getItem("existingUser"))

            if (helperData) {

                setHelperDetails({

                    id: helperData._id,
                    username: helperData.username,
                    email: helperData.email,
                    bio: helperData.bio,
                    password: "",
                    cpassword: "",
                    profile:helperData.profile,
                    phone: helperData.phone,
                    helperDetails: {
                        skills: helperData.helperDetails?.skills,
                        availability: helperData.helperDetails?.availability,
                        experience: helperData.helperDetails?.experience,
                        transport: helperData.helperDetails?.transport,
                        district: helperData.helperDetails?.district,
                        travelRadius: helperData.helperDetails?.travelRadius,
                        language: helperData.helperDetails?.language,

                    }
                })
            }
        }



    }, [])
  return (
    <div>
         <div className='flex flex-col  min-h-screen'>
           {/* top bar */}
            <HelperTopbar helperDetails={helperDetails}/>
               <div className='flex flex-1 '>
                {/* side bar */}
                <div className='w-72'>
             <HelperSidebar/>
                </div>
                
                {/* main content */}
                  <div className='flex-1 p-4' style={{ backgroundColor: '#0d1e17' }}>
                     <HelperProfile helperDetails={helperDetails} setHelperDetails={setHelperDetails} />

                  </div>
              

              
              </div>

         </div>


      
    </div>
  )
}

export default HelperLayout
