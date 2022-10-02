import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db, logout } from "../Firebase/Firebase";
import LogoutPage from './LogoutPage';


function LogoutAuth() {

  const [user, loading, error] = useAuthState(auth);
  console.log(user.photoURL)
  const navigate=useNavigate()



  return (
    <div style={{display:"flex"}}>
        <button onClick={logout}>Logout</button>
         <div>
            <img src={user.photoURL===null?"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f4/5d/default-avatar-2020-32.jpg?w=100&h=-1&s=1":user.photoURl}/>
         </div>
    </div>
  )
}

export default LogoutAuth