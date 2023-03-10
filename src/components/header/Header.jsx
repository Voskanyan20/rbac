import { Button } from '@mui/material'
import React from 'react'
import "./style.css"

export default function Header() {
  return (
    <div id='header'>
        <img src="#" alt="Logo" />
        <div style={{display : "flex"}}>
            <h4>Admin Name</h4>
            <Button>Logout</Button>
        </div>
    </div>
  )
}
