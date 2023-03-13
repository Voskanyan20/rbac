import * as React from 'react';
import "./style.css"
import NavbarModuleList from './NavbarModuleList';
import {Box} from "@mui/material";

export default function Navbar() {
  return (
    <nav  id='navbar'>
        <Box sx={{border: 1,backgroundColor:"white", borderColor: 'primary.main',borderRadius:4, boxShadow:4,height:"100%" }}>
            <NavbarModuleList/>
        </Box>
    </nav>
  )
}
