import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './Projects.css';

function ProjectBox(props){
    return(
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            },
            margin:'5px 50px',
            flexDirection: 'column',
            align:"center",
            bgcolor:'#2e3b55'
        }}
        > 
            <Typography variant="h6"  component="div" align="center">
                <b><u>{props.title}</u></b>
            </Typography>                  
            <Typography variant="h7"  component="div" align="center">
                <b>Stack : </b> {props.stack}
            </Typography>                        
            <Typography variant="h7"  component="div" align="center">
                {props.desc}
            </Typography>              
        </Box>
    )
}

export default function Projects(props){
    return(
        <div ref={props.projectsRef} className="projects">
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
            <ProjectBox title="Mortgage Leads generation" stack="React, Dotnet Core" desc="An application with UI and Rest APIs for the user to input/process data gathered from the customer and pass it downstream as part of loan 
                        origination flow. The UI is built with React + Dotnet core and the Data API is built with Dotnet core which connects to the SQL database"/>

            <ProjectBox title="Attribution Code generation" stack="React, Dotnet Core" desc="A React+Dotnet core web application which facilitated users to generate Attribution codes to be used in the lead generation process.
                    The UI is built with React + Dotnet core and the Data API is built with Dotnet core which connects to the SQL database"/>

            <ProjectBox title="Loan Processor Dashboard" stack="React" desc="A React+Node web application which consolidates all loan related information in one place. It is a dashboard which uses a central database to show
                various data points related to loans in a user-friendly and informative format"/>

            <ProjectBox title="Data mapping and Database changes" stack="Dotnet Core, SQL" desc="Minor Database changes and corresponding Data mapping updates in a central API used by many different services. The API changes were Dotnet Core
                    and the Database changes were done through Red Gate CI/CD process"/>
            
            <br/><br/>
            <hr style={{ width:'75%',  margin: '0 auto'}}/>       
            <br/><br/>
            <Box>
                <Typography
                variant="h4"          
                component="div"
                align="center"
                className="textShadowBlue"
                >
                    <u>Open Source / Volunteer Projects</u>
                </Typography>            
            </Box>
            <br/>
            <ProjectBox title="Katha Utsav Registration" stack="React" desc="Katha is an NGO that works on child welfare and education. Katha Utsav 2021 was an 
            event organized by Katha to find and mentor child writers. It involved children all over India to registering to the event by submitting a short story of
            their own writing. Katha mentors went through the submissions and picked selective students to mentor and improve their writing skills. We created a registration
            site using React which helped students to register their details and upload their stories. The documents were stored in AWS"/>

            <ProjectBox title="Katha Utsav Story Review Dashboard" stack="React" desc="As a part of Katha Utsav we were involved in creating a dashboard which was
            used by the mentors to review and approve the stories uploaded by children all over the country. The dashboard retrieved the documents in AWS and allowed the
            mentors to download and approve the submission"/>

            <ProjectBox title="Everest UX Challenge" stack="-" desc="Everest is an NGO that works on helping educate children through various programs. In order to
            improve web traffic and attract more volunteers and donators, Everest conducted a UX Challenge to get inspirational ideas for their website redesign.
            It was my first step into the world of UX and I designed 3 screens for which I was awarded a participation certificate"/>
        </div>
    )
}