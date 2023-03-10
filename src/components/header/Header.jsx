import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

export default function Header() {
  return (
    <div id='header'>
        <img src="#" alt="Logo" />
        <div style={{display : "flex"}}>
            <h5>Admin Name</h5>
            <Link to='/'> <Button>Logout</Button> </Link>
        </div>
    </div>
  )
}
