// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Box} from "@mui/material";

const Roles = () => {
    // const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }

    // useEffect(() => {
    //     fetch("http://localhost:8080/employees").then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         empdatachange(resp);
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // }, [])
    const empdata=[
        {
            "id": "1",
            "username": "Tom",
            "firstName": "Tom",
            "lastName": "Cruise"
        },
        {
            "id": "2",
            "username": "Maria",
            "firstName": "Maria",
            "lastName": "Sharapova"
        },
        {
            "id": "3",
            "username": "James",
            "firstName": "James",
            "lastName": "Bond"
        }
    ]
    return (
        <div style={{display:"flex",flexDirection:"column",marginRight:"10px", marginTop:"10px",width:"100vw",height:"85vh"}}>
            <div className="card-title">
                <h2>Roles</h2>
            </div>
            <Box sx={{border: 1, backgroundColor:"white",borderColor: 'primary.main', borderRadius:4, boxShadow:4,width:"100%",height:"100%"}}>
                <Box sx={{margin:4}}>
                    <div className="card-body">
                        <table className="table table-bordered" >
                            <thead className="bg-primary text-white">
                            <tr>
                                <td>ID</td>
                                <td>username</td>
                                <td>firstName</td>
                                <td>lastname</td>
                                <td>Param</td>
                            </tr>
                            </thead>
                            <tbody>

                            {empdata &&
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
                            }

                            </tbody>

                        </table>
                    </div>
                </Box>
            </Box>
        </div>

    );
}

export default Roles;