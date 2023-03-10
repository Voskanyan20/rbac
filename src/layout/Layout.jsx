import React from "react"
import { Outlet } from "react-router-dom";
import Header from "../components/navbar/Navbar";
import "../styles/index.css"

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
export default Layout;