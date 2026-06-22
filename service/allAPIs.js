import { SiSyncthing } from "react-icons/si";
import commonAPI from "./commonAPIs";
import { serverURL } from "./serverURL";

//1.register -POST

export const registerAPI=async(reqBody)=>{

    return await commonAPI("POST",`${serverURL}/api/register`,reqBody,"")

}

//2. login -POST

export const loginAPI=async(reqBody)=>{

    return await commonAPI("POST",`${serverURL}/api/login`,reqBody,"")

}

//3.google login

export const googleLoginAPI=async(reqBody)=>{

    return await commonAPI("POST",`${serverURL}/api/googlelogin`,reqBody,"")

}

//add task

export const addTaskAPI=async(reqBody,reqHeader)=>{

    return await commonAPI("POST",`${serverURL}/api/addtask`,reqBody,reqHeader)

}

//getAllTasks

export const getTasksAPI =async(reqHeader)=>{

    return await commonAPI("GET",`${serverURL}/api/gettasks`,"",reqHeader)


}

//get all helpers
export const getAllHelpersAPI =async(reqHeader)=>{

    return await commonAPI("GET",`${serverURL}/api/gethelpers`,"",reqHeader)

}

//get all helpers
export const getAllTasksHelperAPI =async(reqHeader)=>{

    return await commonAPI("GET",`${serverURL}/api/gettaskshelper`,"",reqHeader)


}
//accept a task by helper
export const acceptTaskAPI =async(id,reqHeader)=>{

    return await commonAPI("PUT",`${serverURL}/api/taskaccept/${id}`,"",reqHeader)
}

//all tasks accepted by helper

export const getHelperAcceptedTasksAPI =async(reqHeader)=>{

    return await commonAPI("GET",`${serverURL}/api/mytask`,"",reqHeader)
}

//release a task by helper
export const releaseTaskAPI =async(id,reqHeader)=>{

    return await commonAPI("PUT",`${serverURL}/api/releasetask/${id}`,"",reqHeader)
}

//complete a task by helper
export const completeTaskAPI =async(id,reqBody,reqHeader)=>{

    return await commonAPI("PUT",`${serverURL}/api/completetask/${id}`,reqBody,reqHeader)
}

//Tasks completed by helper

export const getHelperCompletedTasksAPI =async(reqHeader)=>{

    return await commonAPI("GET",`${serverURL}/api/mytaskscompleted`,"",reqHeader)
}

//update helper profile

export const updateHelperProfileAPI =async(id,reqBody,reqHeader)=>{

    return await commonAPI("PUT",`${serverURL}/api/updateHelper/${id}`,reqBody,reqHeader)
}


//add doctor
export const addDoctorAPI=async(reqBody,reqHeader)=>{

    return await commonAPI("POST",`${serverURL}/api/adddoctor`,reqBody,reqHeader)

}
// get doctors list
export const getAllDoctorsAPI=async(reqHeader)=>{

    return await commonAPI("GET",`${serverURL}/api/getdoctors`,"",reqHeader)

}
//book a doctor appointment

export const bookAppointmentAPI=async(reqBody,reqHeader)=>{

    return await commonAPI("POST",`${serverURL}/api/addappointment`,reqBody,reqHeader)

}

//delete a doctor

export const deleteDoctorAPI=async(id,reqHeader)=>{

    return await commonAPI("DELETE",`${serverURL}/api/doctor/${id}`,"",reqHeader)

}

//all appointments list

export const getAllAppointmentsAPI=async(reqHeader)=>{

    return await commonAPI("GET",`${serverURL}/api/getAppointments`,"",reqHeader)

}
//reschedule/update  appointments 

export const updateAppointmentAPI=async(id,reqBody,reqHeader)=>{

    return await commonAPI("PUT",`${serverURL}/api/updateappointment/${id}`,reqBody,reqHeader)

}

//delete  appointments 

export const deleteAppointmentAPI=async(id,reqHeader)=>{

    return await commonAPI("DELETE",`${serverURL}/api/deleteappointment/${id}`,"",reqHeader)

}

//delete user tasks

export const deleteTasksAPI =async(id,reqHeader)=>{

    return await commonAPI("DELETE",`${serverURL}/api/deletetask/${id}`,"",reqHeader)
}


//add pharmacy
export const addPharmacyAPI=async(reqBody,reqHeader)=>{

    return await commonAPI("POST",`${serverURL}/api/pharmacy`,reqBody,reqHeader)

}

// get pharmacy list
export const getAllPharmacyAPI=async(reqHeader)=>{

    return await commonAPI("GET",`${serverURL}/api/pharmacy`,"",reqHeader)

}

// delete pharmacy list
export const deletePharmacyAPI=async(id,reqHeader)=>{

    return await commonAPI("DELETE",`${serverURL}/api/pharmacy/${id}`,"",reqHeader)

}


//make payment by user

export const makePaymentAPI=async(id,reqBody,reqHeader)=>{

    return await commonAPI("PUT",`${serverURL}/api/makepayment/${id}`,reqBody,reqHeader)

}

export const sendEmailAPI=async(reqBody,reqHeader)=>{

    return await commonAPI("POST",`${serverURL}/api/sendemail`,reqBody,reqHeader)

}