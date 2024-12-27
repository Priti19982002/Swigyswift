import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [data,setData] = useState({
        email : "",
        newPassword : "",
        confirmPassword : ""
    })

    useEffect(()=>{
        if(!(location?.state?.data?.success)){
            navigate("/")
        }

        if(location?.state?.email){
            setData((preve)=>{
                return{
                    ...preve,
                    email : location?.state?.email
                }
            })
        }
    },[])

    console.log("data reset password",data)


  return (
    <div>
        ResetPassword
    </div>
  )
}

export default ResetPassword
