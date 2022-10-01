import React from 'react'
import { Link } from 'react-router-dom';
import { auth, db, logout } from "../Firebase/Firebase";


function LogoutAuth() {

    // useEffect(() => {
    //     if (loading) return;
    //     if (!user) return navigate("/");
    
    //     fetchUserName();
    //   }, [user, loading]);

  return (
    <div>
         {/* <Link to="/logoutPage"><button>Logout</button></Link> */}
         <button onClick={logout}>Logout</button>
    </div>
  )
}

export default LogoutAuth