import { useEffect, useState } from "react";
import {Box, Button} from "@mui/material";
import AddRole from "./AddRole"

const Roles = () => {
    const [empdata, empdatachange] = useState(null);

   

    
    return (
        <div style={{display:"flex",flexDirection:"column",marginRight:"10px", marginTop:"10px",width:"100vw",height:"85vh"}}>
            <div className="card-title">
                <h2>Roles</h2>
                <AddRole>Add</AddRole>
            </div>
            <Box sx={{border: 1, backgroundColor:"white",borderColor: 'primary.main', borderRadius:4, boxShadow:4,width:"100%",height:"100%"}}>
                <Box sx={{margin:4}}>
                    <div className="card-body">
                        <table className="table table-bordered" >
                            <thead className="bg-primary text-white">
                            <tr>
                                <td>ID</td>
                                <td>title</td>
                                <td>Permissions</td>
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

export default Roles;