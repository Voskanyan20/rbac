import { useEffect, useState } from "react";
import {Box} from "@mui/material";
import axios from "../../../utils/axios";
let JWTTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJhZG1pbiIsImlhdCI6MTY3ODQ0NjU1Mn0.vsg37gZ-pPRq4qDKrTg9mswSuZ3Ij1RjRBiJ9mafig4' ;


const Employees = () => {
    const [clientdata, clientdatachange] = useState(null);

    useEffect(() => {
        const instance = axios.create({
            baseURL: 'http://localhost:8080/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer '+JWTTOKEN}
        });
        instance.get('/client/').then(resp => {
            clientdatachange(resp.data);
        }).catch((err) => {
                console.log(err.message);
        });
    }, []);
    return (
        <div style={{display:"flex",flexDirection:"column",marginRight:"10px", marginTop:"10px",width:"100vw",height:"85vh"}}>
            <div className="card-title">
                <h2>Clients</h2>
            </div>
            <Box sx={{border: 1, backgroundColor:"white",borderColor: 'primary.main', borderRadius:4, boxShadow:4,width:"100%",height:"100%"}}>
                <Box sx={{margin:4}}>
                    <div className="card-body">
                        <table className="table table-bordered" >
                            <thead className="bg-primary text-white">
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                            </tr>
                            </thead>
                            <tbody>

                            {clientdata &&
                                clientdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
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

export default Employees;