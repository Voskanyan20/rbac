import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import EmpDetail from "../components/main/EmpDetail";
import Employees from "../components/main/Employees";
import Layout from '../layout/Layout';
import Login from "../components/login/Login";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route path={'/'} element={< Login />} />
                <Route path={'/Employees'} element={< Employees />} />
                <Route path='/employee/detail/:id' element={<EmpDetail />}></Route>
            </Route>
        </>
    )
);


export default router;