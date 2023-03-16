<<<<<<< HEAD
import React, {useMemo} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import MaterialReactTable from 'material-react-table';
import {ListItemIcon, MenuItem} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
let JWTTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJhZG1pbiIsImlhdCI6MTY3ODQ0NjU1Mn0.vsg37gZ-pPRq4qDKrTg9mswSuZ3Ij1RjRBiJ9mafig4';
=======
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
let JWTTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJhZG1pbiIsImlhdCI6MTY3ODQ0NjU1Mn0.vsg37gZ-pPRq4qDKrTg9mswSuZ3Ij1RjRBiJ9mafig4' ;
>>>>>>> 50c7820f4a4b397ed028db84c10c5b508c8ae421

const Employees = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/general/detail/" + id);
    }

    useEffect(() => {
        const instance = axios.create({
            baseURL: 'http://localhost:8080/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer '+ JWTTOKEN}
          });
          instance.get(`/employees/`)
          .then(resp => {
              empdatachange(resp.data);
          }).catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <div style={{display:"flex",flexDirection:"column",marginRight:"10px", marginTop:"10px",width:"100vw",height:"85vh"}}>
        <div className="card-title">
            <h2>Employees</h2>
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
<<<<<<< HEAD
    if(empdata===null){
        return null
    }
    return <MaterialReactTable
        data={empdata.data}
        columns={columns}
    />

};

export default Employees;



// .then((resp) => {
//     console.warn("Result" , resp);
//     localStorage.setItem('token' , JSON.stringify({
//         token
//     }))
// })
=======
}
export default Employees;
>>>>>>> 50c7820f4a4b397ed028db84c10c5b508c8ae421
