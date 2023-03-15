import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Login from "../components/login/Login";
import PrivateRoutes from "../utils/PrivateRoutes";
import General from "../components/main/General";
import Employees from "../components/main/employees/Employees";
import EmpDetail from "../components/main/employees/EmpDetail";
import Client from "../components/main/client/Client"
import Modules from "../components/main/modules/Modules";
import Roles from "../components/main/roles/Roles";
import Permisions from "../components/main/permissions/Permissions";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route>
                <Route  element={<PrivateRoutes />}>
                    <Route path="/general" element={<General />}>
                        <Route index={'employees'} element={<Employees />} />
                        <Route path={'employees'} element={<Employees />} />
                        <Route path='detail/:id' element={<EmpDetail />}></Route>
                        <Route path="clients" element={<Client />} />
                        <Route path="modules" element={<Modules />} />
                        <Route path="permissions" element={<Permisions />} />
                        <Route path="roles" element={<Roles />} />
                        </Route>
                    </Route>
                <Route path="/" element={<Login />} />
            </Route>
        </>
    )
);
export default router;

