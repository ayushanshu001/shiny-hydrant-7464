import React, { useEffect } from 'react'
import { auth, logout } from "../Firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate} from 'react-router-dom'

function LogoutPage() {
    const [user, loading, error] = useAuthState(auth);
    console.log(user.photoURL)
    const navigate=useNavigate()

 useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
      }, [user, loading]);




  return (
    <div>
         <img src={user.profile} alt="userimage"/>
    </div>
  )
}

export default LogoutPage