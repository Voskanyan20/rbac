import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Box, Button} from "@mui/material";
import AddPermission from "./AddPermission";

const Permissions = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }

  //   useEffect(() => {
  //     const instance = axios.create({
  //         baseURL: 'http://localhost:8080/',
  //         timeout: 1000,
  //         headers: {'Authorization': 'Bearer '+ JWTTOKEN}
  //       });
  //       instance.get(`/permission/`)
  //       .then(resp => {
  //           empdatachange(resp.data);
  //       }).catch((err) => {
  //             console.log(err.message);
  //         })
  // }, []);

    return (
        <div style={{display:"flex",flexDirection:"column",marginRight:"10px", marginTop:"10px",width:"100vw",height:"85vh"}}>
            <div className="card-title">
                <h2>Permissions</h2>
                <AddPermission />
            </div>
            <Box sx={{border: 1, backgroundColor:"white",borderColor: 'primary.main', borderRadius:4, boxShadow:4,width:"100%",height:"100%"}}>
                <Box sx={{margin:4}}>
                    <div className="card-body">
                        <table className="table table-bordered" >
                            <thead className="bg-primary text-white">
                            <tr>
                                <td>ID</td>
                                <td>title</td>
                                <td>Module Title</td>
                                <td>Params</td>                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Engineer</td>
                                    <td>from array [updatemodule , deletebutton , .....]</td>
                                    <td>
                                        <Button>Edit</Button>
                                        <Button>Delete</Button>
                                    </td>
                                </tr>
                            {/* {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.username}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            } */}

                            </tbody>

                        </table>
                    </div>
                </Box>
            </Box>
        </div>

    );
}

export default Permissions;













