// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Modules = () => {
    // const [empdata, empdatachange] = useState(null);
    // const navigate = useNavigate();

    // const LoadDetail = (id) => {
    //     navigate("/employee/detail/" + id);
    // }

    // useEffect(() => {
    //     fetch("http://localhost:8080/employees").then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         empdatachange(resp);
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // }, [])
    return (
        <div style={{display:"flex",flexDirection:"column",marginRight:"10px", marginTop:"10px",width:"100vw",height:"85vh"}}>
            <div className="card-title">
                <h2>Modules</h2>
            </div>
            <Box sx={{border: 1, backgroundColor:"white",borderColor: 'primary.main', borderRadius:4, boxShadow:4,width:"100%",height:"100%"}}>
                <Box sx={{margin:4}}>
                    <div className="card-body">
                    <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disabled>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
      </Accordion>
                    </div>
                </Box>
            </Box>
        </div>

    );
}

export default Modules;