import React, { useEffect } from 'react'

import axios from 'axios'


console.log(localStorage.getItem('token'))
const Homepage = () => {

  // login user data 
//   const getUserData=async()=>{
// try {
//   const res = await axios.get('/users',{},{

//     headers:{
//       // Authorization:"Bearer" +localStorage.getItem('token')
//       'Accept': 'application/json',

//     }

//   })
// } catch (error) {
//   console.log(error)
// }
//   }
//   useEffect(()=>{
//     getUserData()
//   },[])


  return (
    <div>Homepage</div>
  )
}

export default Homepage