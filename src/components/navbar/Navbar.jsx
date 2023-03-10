import * as React from 'react';
import "./style.css"
import NavbarModuleList from './NavbarModuleList';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav id='navbar'>
        <div>
            <NavbarModuleList/>
        </div>
    </nav>
  )
}
