import * as React from 'react';
import "./style.css"
import NavbarModuleList from './NavbarModuleList';
import {Box} from "@mui/material";

export default function Navbar() {
  return (
    <nav  id='navbar'>
        <Box sx={{border: 1,backgroundColor:"white", borderColor: 'primary.main',borderRadius:1, boxShadow:1,height:"100%" }}>
            <NavbarModuleList/>
        </Box>
    </nav>
  )
}
