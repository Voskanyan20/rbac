import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import EmpDetail from "../components/main/EmpDetail";
import Employees from "../components/main/Employees";
import Layout from '../layout/Layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route path={'/'} element={<Employees/>} />
                <Route path={'/LOGIN'} element={'<Login />'} />
                <Route path={'/REGISTRATION'} element={'<Registracion/>'}/>
                <Route path='/employee/detail/:id' element={<EmpDetail />}></Route>
            </Route>
        </>
    )
);


export default router;