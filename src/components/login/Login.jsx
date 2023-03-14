import * as React from 'react';
import Button from '@mui/material/Button';
import {Box, Grid, Paper, TextField} from "@mui/material";
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className="LoginPage">
            <div>
                <h1 className={"loginText"} >LOGIN</h1>
                <Box className="SignIn" >
                <Paper>
                    <Grid container spacing={3} direction={'column'} justify={'center'} border={"blue"} borderRadius={"50px"} alignItems={'center'} >
                        <Grid item xs={12}>
                            <TextField
                                id="userName"
                                name="username"
                                placeholder="username"
                                type="text"
                                variant="outlined"
                                inputProps={{
                                autoComplete: 'on'
                            }}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                id='passWord'
                                name='password'
                                placeholder='password'
                                type='password'
                                variant='outlined'
                                inputProps={{
                                    autoComplete: 'off'
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Link to={"/general"}><Button  sx={{ width: 200, padding: 1, margin: 2 }} color="primary" variant="outlined">Button</Button></Link>
                        </Grid>
                    </Grid>
                </Paper>
                </Box>
            </div>

        </div>

    )
}

export default Login