import * as React from 'react';
import Button from '@mui/material/Button';
import {Grid, Paper, TextField} from "@mui/material";
import { Link } from "react-router-dom";
const SignIn = () => {
    return (
        <box className="SignIn" >
            <Paper>
                <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    border={"blue"}
                    borderRadius={"50px"}
                    alignItems={'center'}
                >
                    <Grid item xs={12}>
                        <TextField label="Username"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" type={'password'}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button  sx={{ width: 200, padding: 1, margin: 2 }} color="primary" variant="outlined">
                            <Link to="home">Home</Link> </Button>
                    </Grid>
                </Grid>
            </Paper>
        </box>
    );
};

export default SignIn;
