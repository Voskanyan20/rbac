import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HeaderModuleList() {
    const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
         <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Modules
        </ListSubheader>
      }
    >
      <Link to={"/LOGIN"}>
      <ListItemButton>
        <ListItemText primary="Project Matrix" />
      </ListItemButton>
      </Link>
      <ListItemButton>
        <ListItemText primary="Skills Matrix" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Intranet" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Submodule 1" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>

    </div>
  )
}
