import {Box, Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
   <div style={{padding:"10px ", width:"100%", height:"80px"}}>
       <Box sx={{padding: "0 15px" , display:"flex",justifyContent:"space-between",alignItems:"center",border: 1,backgroundColor:"white", height:"100%", borderColor: 'primary.main',borderRadius:4, boxShadow:4,width:"100%" }}>
           <img src="../.././assets/Logo.png" alt="Instigate" />
           <div style={{display : "flex"}}>
               <h5>Arman</h5>
               <Link style={{marginLeft: "10px"}} to='/'>Logout</Link>
           </div>
       </Box>
   </div>
  )
}
