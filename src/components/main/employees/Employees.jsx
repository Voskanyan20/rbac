import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {light} from "@mui/material/styles/createPalette";
import {Box} from "@mui/material";

const Employees = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();
    // const token = "Bearer"+ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJhZG1pbiIsImlhdCI6MTY3ODQ0NjU1Mn0.vsg37gZ-pPRq4qDKrTg9mswSuZ3Ij1RjRBiJ9mafig4 
    const LoadDetail = (id) => {
        navigate("/general/detail/" + id);
    }

    useEffect(() => {
        fetch("http://localhost:8080/employees").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    console.log(empdata);
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
}

export default Employees;








// .then((resp) => {
//     console.warn("Result" , resp);
//     localStorage.setItem('token' , JSON.stringify({
//         token
//     }))
// })