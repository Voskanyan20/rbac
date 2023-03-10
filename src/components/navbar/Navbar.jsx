import { ListItemButton, ListItemText } from '@mui/material'
import * as React from 'react';
import "./style.css"
import HeaderModuleList from './HeaderModuleList';
import HeaderParamLists from './HeaderParamLists';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header id='navbar'>
        <div className='adminInfoHeader'>
            <Link to={"/"}>
              <ListItemButton>
                <ListItemText primary="Employees" />
              </ListItemButton>
            </Link>

            <HeaderModuleList/>
            <HeaderParamLists/>
        </div>
    </header>
  )
}
