// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const EmpDetail = () => {
    // const [empdata, empdatachange] = useState([]);
    // console.log(empdata);
    // useEffect(() => {
    //     fetch("http://localhost:3001/employees/").then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         empdatachange(resp);
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // }, []);
    const empdata=[
        {
            "id": "1",
            "firstName": "Tom",
            "lastName": "Cruise"
        },
        {
            "id": "2",
            "firstName": "Maria",
            "lastName": "Sharapova"
        },
        {
            "id": "3",
            "firstName": "James",
            "lastName": "Bond"
        }
    ]
    return (
        <div style={{width: "83%"}}>
               <div className="container" style={{margin: "8px 0 0 0",}}>
                
            <div className="card row" style={{ "textAlign": "center" }}>
                <div className="card-title">
                    <h2>Employee Detail</h2>
                </div>
           { empdata &&
                empdata.map((elem) => (
                    // console.log(elem);
                    <div className="card-row">
                        <h2>FirstName : {elem.firstName}</h2>
                        <h5>last is : {elem.lastName}</h5>
                        <h5>username is : {elem.username}</h5>
                        <Link className="btn btn-danger" to="/general/employees">Back to Listing</Link>
                    </div>
                ))
            }





                {/* {empdata &&
                    <div>
                        <h2>FirstName : {empdata.firstName}</h2>
                        <h3>Contact Details</h3>
                        <h5>last is : {empdata.lastName}</h5>
                        <h5>username is : {empdata.username}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                } */}
            </div>
            </div>
         </div >
    );
}

export default EmpDetail;