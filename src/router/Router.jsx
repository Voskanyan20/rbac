import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Login from "../components/login/Login";
import PrivateRoutes from "../utils/PrivateRoutes";
import General from "../components/main/General";
import Employees from "../components/main/employees/Employees";
import EmpDetail from "../components/main/employees/EmpDetail";
import Client from "../components/main/client/Client"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route>
                <Route  element={<PrivateRoutes />}>
                    <Route path="/general" element={<General />}>
                        <Route path='employees' element={<Employees />} />
                        <Route path='detail/:id' element={<EmpDetail />}></Route>
                        <Route path="client" element={<Client />} />
                        </Route>
                    </Route>
                <Route path="/" element={<Login />} />
            </Route>
        </>
    )
);
export default router;

