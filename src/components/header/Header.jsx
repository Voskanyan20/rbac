import {Box, Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

export default function Header() {
  return (
   <div style={{padding:"10px 10px 0 10px ", width:"100vw", height:"10vh"}}>
       <Box sx={{ display:"flex",justifyContent:"center",alignItems:"center",border: 1,backgroundColor:"white", height:"100%", borderColor: 'primary.main',borderRadius:1, boxShadow:1,width:"100%" }}>
           <img src="#" alt="Logo" />
           <div style={{display : "flex"}}>
               <h5>Admin Name</h5>
               <Link to='/'> <Button>Logout</Button> </Link>
           </div>
       </Box>
   </div>
  )
}
