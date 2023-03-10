import React from 'react'
import { List, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HeaderModuleList() {
  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}component="nav">

        <Link to={"employees"}>
          <ListItemButton>
            <ListItemText primary="Employees" />
          </ListItemButton>
        </Link>
        
        <Link to={"client"}>
        <ListItemButton>
          <ListItemText primary="Clients" />
        </ListItemButton>
        </Link>
        
        <ListItemButton>
          <ListItemText primary="Modules" />
        </ListItemButton>
        
        <ListItemButton>
          <ListItemText primary="Permisions" />
        </ListItemButton>
        
        <ListItemButton>
          <ListItemText primary="Roles" />
        </ListItemButton>
      
      </List>

    </div>
  )
}
