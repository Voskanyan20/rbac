// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Box} from "@mui/material";
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Button from "@mui/material/Button";

const Employees = () => {
    // const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();
    // const token = "Bearer"+ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJhZG1pbiIsImlhdCI6MTY3ODQ0NjU1Mn0.vsg37gZ-pPRq4qDKrTg9mswSuZ3Ij1RjRBiJ9mafig4 
    const LoadDetail = (id) => {
        navigate("/general/detail/" + id);
    }

    // useEffect(() => {
    //     fetch("http://localhost:3001/employees").then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         empdatachange(resp);
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // }, [])
    // console.log(empdata);
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
                <h2>Employees</h2>
            </div>
        <Box sx={{border: 1, backgroundColor:"white",borderColor: 'primary.main', borderRadius:4, boxShadow:4,width:"100%",height:"100%"}}>
            <Box sx={{margin:4}}>
                <div className="card-body">
                    <MDBTable>
                        <MDBTableHead>
                            <tr className='table-primary'>
                                <td>ID</td>
                                <td>username</td>
                                <td>firstName</td>
                                <td>lastname</td>
                                <td>Param</td>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.username}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>
                                            <Button onClick={() => { LoadDetail(item.id) }} sx={{borderRadius:"50px"}} color="primary"><span style={{marginLeft:"2px",marginRight:"2px"}}>Details</span></Button>
                                            {/*<a  className="btn btn-primary"></a>*/}
                                        </td>
                                    </tr>
                                ))
                            }

                        </MDBTableBody>

                    </MDBTable >
                </div>
            </Box>
        </Box>
            </div>
    );
}

export default Employees;








// .then((resp) => {
//     console.warn("Result" , resp);
//     localStorage.setItem('token' , JSON.stringify({
//         token
//     }))
// })