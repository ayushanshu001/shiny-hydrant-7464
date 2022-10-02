

export const handleRegister=(name,email,phone,password)=>{
    let data=JSON.parse(localStorage.getItem("userDetail")) || []
    const detail={
        email:email,
        name:name,
        number:phone,
        password:password,
        photo:"null",
        provider:"Self",
        userID:Date.now()
    }
    // console.log(detail)
    localStorage.setItem("userDetail",JSON.stringify(detail))
    data.push(detail)
    localStorage.setItem("userDetail", JSON.stringify(data))
   
}