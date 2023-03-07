import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
import Main from "../components/main/Dashboard";

import Layout from '../layout/Layout';

// import { FORGOTPASSWORD, HOMEPAGE, LOGIN, REGISTRATION } from '../utils/constants/pages';



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route path={'/'} element={<Main/>} />
                <Route path={'/LOGIN'} element={'<Login />'} />
                <Route path={'/REGISTRATION'} element={'<Registracion/>'}/>
            </Route>
        </>
    )
);


export default router;