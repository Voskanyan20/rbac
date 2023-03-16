// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {Box, Button} from "@mui/material";

// const Roles = () => {
//     const [empdata, empdatachange] = useState(null);
//     const navigate = useNavigate();

//     const LoadDetail = (id) => {
//         navigate("/employee/detail/" + id);
//     }

//     // useEffect(() => {
//     //     fetch("http://localhost:8080/employees").then((res) => {
//     //         return res.json();
//     //     }).then((resp) => {
//     //         empdatachange(resp);
//     //     }).catch((err) => {
//     //         console.log(err.message);
//     //     })
//     // }, [])
//     return (
//         <div style={{display:"flex",flexDirection:"column",marginRight:"10px", marginTop:"10px",width:"100vw",height:"85vh"}}>
//             <div className="card-title">
//                 <h2>Roles</h2>
//                 <Button>Add</Button>
//             </div>
//             <Box sx={{border: 1, backgroundColor:"white",borderColor: 'primary.main', borderRadius:4, boxShadow:4,width:"100%",height:"100%"}}>
//                 <Box sx={{margin:4}}>
//                     <div className="card-body">
//                         <table className="table table-bordered" >
//                             <thead className="bg-primary text-white">
//                             <tr>
//                                 <td>ID</td>
//                                 <td>title</td>
//                                 <td>Permissions</td>
//                                 <td>Params</td>                            </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>1</td>
//                                     <td>Engineer</td>
//                                     <td>from array [updatemodule , deletebutton , .....]</td>
//                                     <td>
//                                         <Button>Edit</Button>
//                                         <Button>Delete</Button>
//                                     </td>
//                                 </tr>
//                             {/* {empdata &&
//                                 empdata.map(item => (
//                                     <tr key={item.id}>
//                                         <td>{item.id}</td>
//                                         <td>{item.username}</td>
//                                         <td>{item.firstName}</td>
//                                         <td>{item.lastName}</td>
//                                         <td>
//                                             <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
//                                         </td>
//                                     </tr>
//                                 ))
//                             } */}

//                             </tbody>

//                         </table>
//                     </div>
//                 </Box>
//             </Box>
//         </div>

//     );
// }

// export default Roles;













import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios';
let JWTTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJhZG1pbiIsImlhdCI6MTY3ODQ0NjU1Mn0.vsg37gZ-pPRq4qDKrTg9mswSuZ3Ij1RjRBiJ9mafig4' ;

const Example = () => {
    const [empdata, empdatachange] = useState(null);
    useEffect(() => {
        const instance = axios.create({
            baseURL: 'http://localhost:8080/',
            setTimeout: 10000000,
            headers: {'Authorization': 'Bearer ' + JWTTOKEN}
        });
        instance.get('/role/')
            .then(resp => {
                empdatachange(resp);
            }).catch((err) => {
            console.log(err.message);
        });
    }, [])
    console.log(empdata);
  const [createModalOpen, setCreateModalOpen] = useState(false);
//   const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});

  const handleCreateNewRow = (values) => {
    empdata.push(values);
    empdata([...empdata]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      empdata[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      empdatachange([...empdata]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        window(`Are you sure you want to delete ${row.getValue('firstName')}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      empdata.splice(row.index, 1);
      empdatachange([...empdata]);
    },
    [empdata],
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === 'email'
              ? validateEmail(event.target.value)
              : cell.column.id === 'age'
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors],
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false,
      },
      {
        accessorKey: 'title',
        header: 'Title',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
    ],
    [getCommonEditTextFieldProps],
  );
  if (empdata === null) {
    return null
  }
  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        columns={columns}
        data={empdata.data}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Create New Account
          </Button>
        )}
      />
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
    }, {}),
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Account</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default Example;