import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./employees.css"
import axios from "axios";
import { Box } from "@mui/material";
let JWTTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJhZG1pbiIsImlhdCI6MTY3ODQ0NjU1Mn0.vsg37gZ-pPRq4qDKrTg9mswSuZ3Ij1RjRBiJ9mafig4' ;
const EmpDetail = () => {
    let empid = useParams();
    const [empdata, empdatachange] = useState([]);

    useEffect(() => {
        const instance = axios.create({
            baseURL: 'http://localhost:8080/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer '+ JWTTOKEN}
          });
          instance.get(`/employees/${empid.id}`)
          .then(resp => {
              empdatachange(resp.data);
          }).catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <div style={{display:"flex",flexDirection:"column",marginRight:"10px", marginTop:"10px",width:"100vw",height:"85vh"}}>
            <div className="card-title">
                <h2>Employee Detail</h2>
            </div>
            <Box sx={{border: 1, backgroundColor:"white",borderColor: 'primary.main', borderRadius:1, boxShadow:1,width:"100%",height:"100%"}}>
                <Box sx={{margin:4}}>
                    <div className="card-body">
                        {empdata &&
                            <div>
                                <h2>FirstName : {empdata.firstName}</h2>
                                <h5>LastName : {empdata.lastName}</h5>
                                <h5>username : {empdata.username}</h5>
                                <Link className="btn btn-danger" to="/general/employees">Back to Listing</Link>
                            </div>
                        }
                    </div>
                </Box>
            </Box>
        </div >
    );
}
export default EmpDetail;