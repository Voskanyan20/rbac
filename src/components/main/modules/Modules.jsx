import "./modules.css"
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Link, Typography} from "@mui/material";
import TreeView from '@mui/lab/TreeView';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddModule from "./AddModule";
import { useEffect, useState } from "react";
import axios from "axios";
let JWTTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJhZG1pbiIsImlhdCI6MTY3ODQ0NjU1Mn0.vsg37gZ-pPRq4qDKrTg9mswSuZ3Ij1RjRBiJ9mafig4' ;

const Modules = () => {
    const [clientdata, clientdatachange] = useState(null);
    useEffect(() => {
        const instance = axios.create({
            baseURL: 'http://localhost:8080/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer '+ JWTTOKEN}
          });
          instance.get(`/client/`)
          .then(resp => {
              clientdatachange(resp.data);
          }).catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <div style={{display:"flex",flexDirection:"column",marginRight:"10px", marginTop:"10px",width:"100vw",height:"85vh"}}>
            <div className="card-title">
                <h2>Modules</h2> 
                <Button style={{marginRight: "5px"}}><AddModule/></Button>
            </div>
            <Box sx={{border: 1, backgroundColor:"white",borderColor: 'primary.main', borderRadius:4, boxShadow:4,width:"100%",height:"100%" , overflow : "scroll"}}>
                <Box sx={{margin:4}}>
                    <div className="card-body">
                    {clientdata &&
                                clientdata.map(item => (
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                            <div style={{ width: "100%",display: "flex" , justifyContent: "space-between"}}>
                                                <Typography>{item.title}</Typography>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            <TreeView
                                            aria-label="file system navigator"
                                            defaultCollapseIcon={<ExpandMoreIcon />}
                                            defaultExpandIcon={<ChevronRightIcon />}
                                            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                                            >
                                                <Button>Edit</Button>
                                                <TreeItem nodeId="1" label="ProjectMatrixHome">
                                                    <TreeItem nodeId="2" label="Edit">
                                                        <TreeItem nodeId="4" label="Update"/>
                                                    </TreeItem>
                                                    <TreeItem nodeId="3" label="ButtonDelete" />
                                                </TreeItem>
                                            </TreeView>
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))
                            }
            {/* <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>Client2</Typography>
                <div style={{ width: "100%",display: "flex" , justifyContent: "space-between"}}>
                        <Typography>Client1</Typography>
                        <Typography><Button style={{marginRight: "5px"}} variant="contained">Add</Button></Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                    >
                        <Button>Edit</Button>
                        <TreeItem nodeId="1" label="ProjectMatrixHome">
                            <TreeItem nodeId="2" label="Edit"/>
                            <TreeItem nodeId="3" label="ButtonDelete" />
                        </TreeItem>
                    </TreeView>
                </Typography>
                </AccordionDetails>
            </Accordion> */}
                    </div>
                </Box>
            </Box>
        </div>

    );
}

export default Modules;