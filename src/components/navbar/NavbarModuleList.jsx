import React from 'react'
import {Box, List, ListItemButton} from '@mui/material';
import {Link} from 'react-router-dom';
import Button from "@mui/material/Button";

export default function HeaderModuleList() {
    return (
        <Box>
            <List sx={{
                width: '100%',
                maxWidth: 360,
                backgroundColor: 'background.paper',
                borderRadius: 1,
                borderColor: "inherit"
            }} component="nav">
                <Link className="btnStyle" to={"employees"}>
                    <ListItemButton sx={{width: "100%"}}>
                        <Button sx={{width: "100%"}} color="primary">Employees</Button>
                    </ListItemButton>
                </Link>
                <Link className="btnStyle" to={"clients"}>
                    <ListItemButton>
                        <Button sx={{width: "100%"}} color="primary">Clients</Button>
                    </ListItemButton>
                </Link>

                <Link className="btnStyle" to={"modules"}>
                    <ListItemButton sx={{width: "100%"}}>
                        <Button sx={{width: "100%"}} color="primary">Modules</Button>
                    </ListItemButton></Link>
                <Link className="btnStyle" to={"permissions"}>
                    <ListItemButton sx={{width: "100%"}}>
                        <Button sx={{width: "100%"}} color="primary">Permissions</Button>
                    </ListItemButton></Link>
                <Link className="btnStyle" to={"roles"}>
                    <ListItemButton sx={{width: "100%"}}>
                        <Button sx={{width: "100%"}} color="primary">Roles</Button>
                    </ListItemButton></Link>

            </List>

        </Box>
    )
}
