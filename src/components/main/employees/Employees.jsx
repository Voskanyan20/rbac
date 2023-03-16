import React, {useMemo} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import MaterialReactTable from 'material-react-table';
import {Box} from "@mui/material";

let JWTTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJhZG1pbiIsImlhdCI6MTY3ODQ0NjU1Mn0.vsg37gZ-pPRq4qDKrTg9mswSuZ3Ij1RjRBiJ9mafig4';

const Employees = () => {

    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();
    const LoadDetail = (id) => {
        navigate(`/general/detail/${id}`);
    }

    useEffect(() => {
        const instance = axios.create({
            baseURL: 'http://localhost:8080/',
            setTimeout: 10000000,
            headers: {'Authorization': 'Bearer ' + JWTTOKEN}
        });
        instance.get('/employees/')
            .then(resp => {
                empdatachange(resp);
            }).catch((err) => {
            console.log(err.message);
        });
    }, []);


    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
            },
            {
                accessorKey: 'username',
                header: 'Username',
            },
            {
                accessorKey: 'firstName',
                header: 'FirstName',
            },
            {
                accessorKey: 'lastName',
                header: 'Lastname',
            },

        ],
        [],
    );
    if (empdata === null) {
        return null
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "10px",
            marginTop: "10px",
            width: "100vw",
            height: "85vh"
        }}>
            <Box sx={{
                border: 1,
                backgroundColor: "white",
                borderColor: 'primary.main',
                borderRadius: 1,
                boxShadow: 1,
                width: "100%",
                height: "100%"
            }}>
                <MaterialReactTable
                    data={empdata.data}
                    columns={columns}
                    muiTablePaperProps={{
                        elevation: 0,
                        sx: {
                            margin:"10px !important",
                            borderRadius: '14px !important',
                        },
                    }}
                />
            </Box>
        </div>
    )

};

export default Employees;


// .then((resp) => {
//     console.warn("Result" , resp);
//     localStorage.setItem('token' , JSON.stringify({
//         token
//     }))
// })