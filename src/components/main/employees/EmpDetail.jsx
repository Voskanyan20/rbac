import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
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
        <div style={{width: "83%"}}>
            <div className="container" style={{margin: "8px 0 0 0",}}>    
                <div className="card row" style={{ "textAlign": "center" }}>
                    <div className="card-title">
                        <h2>Employee Detail</h2>
                    </div>
                    
                    {empdata &&
                        <div>
                            <h2>FirstName : {empdata.firstName}</h2>
                            <h3>Contact Details</h3>
                            <h5>last is : {empdata.lastName}</h5>
                            <h5>username is : {empdata.username}</h5>
                            <Link className="btn btn-danger" to="/general/employees">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}
export default EmpDetail;