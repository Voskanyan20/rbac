import React, {useMemo} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import MaterialReactTable from 'material-react-table';
import {ListItemIcon, MenuItem} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
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