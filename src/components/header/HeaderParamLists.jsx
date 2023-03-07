import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

export default function HeaderParamLists() {
  return (
    <div>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Roles" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Permissions" />
            </ListItemButton>
          </ListItem>
        </List>
    </div>
  )
}
