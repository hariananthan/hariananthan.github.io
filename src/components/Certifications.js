import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Certifications.css";

export default function Certifications(){
    return(
        <div className="certifications">
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                },
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}
            >          
                <Typography
                variant="h3"          
                component="div"
                className="textShadowBlue"
                >
                    Certifications
                </Typography>
                <span className="certificates">
                    * Microsoft Azure - Developing Solutions (Az-204) <br/>
                    * Google UX Design <br/>
                    * Cambridge English - Business English Certificate (BEC) Preliminary
                </span>
          </Box>
        </div>
    )
}