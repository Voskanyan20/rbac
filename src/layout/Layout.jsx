import React from "react"
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
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