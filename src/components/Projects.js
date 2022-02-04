import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './Projects.css';

export default function Projects(){
    return(
        <div className="projects">
            <Box>
                <Typography
                variant="h4"          
                component="div"
                align="center"
                className="textShadowBlue"
                >
                    <u>Projects</u>
                </Typography>            
            </Box>
            <br/>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                },
                margin:'0 50px',
                flexDirection: 'column',
                align:"center",
                bgcolor:'#2e3b55'
            }}
            > 
                <Typography variant="h6"  component="div" align="center">
                    <b><u>Mortgage Leads generation.</u></b>
                </Typography>                  
                <Typography variant="h7"  component="div" align="center">
                    <b>Stack : </b> React, Dotnet Core
                </Typography>                        
                <Typography variant="h7"  component="div" align="center">
                - An application with UI and Rest APIs for the user to input/process data gathered from the customer and pass it downstream as part of loan 
                        origination flow. The UI is built with React + Dotnet core and the Data API is built with Dotnet core which connects to the SQL database
                </Typography>              
            </Box>
            <br/>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                },
                margin:'0 50px',
                flexDirection: 'column',
                align:"center",
                bgcolor:'#2e3b55'
            }}
            > 
                <Typography variant="h6"  component="div" align="center">
                    <b><u>Attribution Code generation</u></b>
                </Typography>  
                
                <Typography variant="h7"  component="div" align="center">
                    <b>Stack : </b> React, Dotnet Core
                </Typography>                        
                <Typography variant="h7"  component="div" align="center">
                    - A React+Dotnet core web application which facilitated users to generate Attribution codes to be used in the lead generation process.
                    The UI is built with React + Dotnet core and the Data API is built with Dotnet core which connects to the SQL database
                </Typography>              
            </Box>
            <br/>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                },
                margin:'0 50px',
                flexDirection: 'column',
                align:"center",
                bgcolor:'#2e3b55'
            }}
            > 
                <Typography variant="h6"  component="div" align="center">
                    <b><u>Loan Processor Dashboard</u></b>
                </Typography>  
                
                <Typography variant="h7"  component="div" align="center">
                    <b>Stack : </b> React
                </Typography>                        
                <Typography variant="h7"  component="div" align="center">
                - A React+Node web application which consolidates all loan related information in one place.
                </Typography>              
            </Box> 
            <br/>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                },
                margin:'0 50px',
                flexDirection: 'column',
                align:"center",
                bgcolor:'#2e3b55'
            }}
            > 
                <Typography variant="h6"  component="div" align="center">
                    <b><u>Data mapping and Database changes</u></b>
                </Typography>                  
                <Typography variant="h7"  component="div" align="center">
                <b>Stack : </b> Dotnet Core, SQL
                </Typography>        
                
                <Typography variant="h7"  component="div" align="center">
                    - A React+Dotnet core web application which facilitated users to generate Attribution codes to be used in the lead generation process.
                    The UI is built with React + Dotnet core and the Data API is built with Dotnet core which connects to the SQL database
                </Typography>              
            </Box>  
            <br/><br/>
            <hr style={{ width:'75%',  margin: '0 auto'}}/>       
            <br/><br/>
        </div>
    )
}