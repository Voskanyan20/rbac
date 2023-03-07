import { ListItemButton, ListItemText } from '@mui/material'
import * as React from 'react';
import "./style.css"
import HeaderModuleList from './HeaderModuleList';
import HeaderParamLists from './HeaderParamLists';
import { Link } from 'react-router-dom';
import AdminInfo from './AdminInfo';

export default function Header() {
  return (
    <header id='header'>
        <div className='adminInfoHeader'>
            <AdminInfo/>
            <Link to={"/"}>
              <ListItemButton>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </Link>

            <HeaderModuleList/>
            <HeaderParamLists/>
        </div>
    </header>
  )
}
