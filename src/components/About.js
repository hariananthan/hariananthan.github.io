import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import './About.css';

export default function About(){
    return(
        <div className="about">
            <Box>
                <Typography
                variant="h4"          
                component="div"
                align="center"
                className="textShadowBlue"
                >
                    ABOUT ME          
                </Typography>
                <Typography
                variant="h6"          
                component="div"
                align="center"
                >
                    I'm a full stack developer with <b>2.5+</b> years of experience. I'm <b> Microsoft Azure</b> and <b>Google UX</b> certified with entry level experience in UX design.
                </Typography>
          </Box>
          <br/><br/><br/>

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                },
                alignContent: 'stretch',
                flexDirection: 'row',
                justifyContent: 'center'
            }}
            >          
                <Typography
                variant="h4"          
                component="div"
                className="textShadowBlue"
                >
                    Experience |
                </Typography>
                <Typography
                variant="h6"          
                component="div"
                className="marginTop15"
                >
                    2.5+ years as Software Engineer in <b>Mr.Cooper</b>
                </Typography>
          </Box>
          <br/><br/>

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            '& > :not(style)': {
              m: 1,
            },            
            justifyContent: 'center'
          }}
        > 
            <Typography
            variant="h4"          
            component="div"
            className="textShadowBlue"
            >
                <u>Technologies / Skills</u>
            </Typography>
        </Box>
          <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                },
                
                flexDirection: 'row',
                justifyContent: 'center'
            }}
            > 

                <Chip label="HTML" variant="filled" color="primary" style={{backgroundColor:'#2E3B55'}} />
                <Chip label="CSS" variant="filled" color="primary" style={{backgroundColor:'#2E3B55'}} />
                <Chip label="Javascript" variant="filled" color="primary" style={{backgroundColor:'#2E3B55'}} />
                <Chip label="React" variant="filled" color="primary" style={{backgroundColor:'#2E3B55'}} />
                <hr/>
                <Chip label="C#" variant="filled" color="primary" style={{backgroundColor:'#2E3B55'}} />          
                <Chip label="Dotnet" variant="filled" color="primary" style={{backgroundColor:'#2E3B55'}} />
                <hr/>
                <Chip label="SQL" variant="filled" color="primary" style={{backgroundColor:'#2E3B55'}} />
                <hr/>
                <Chip label="Cloud" variant="filled" color="primary" style={{backgroundColor:'#2E3B55'}} />
                <Chip label="Azure" variant="filled" color="primary" style={{backgroundColor:'#2E3B55'}} />
                <hr/>
                <Chip label="User Research" variant="filled" color="primary" style={{backgroundColor:'#2E3B55'}} />
                <Chip label="WireFraming" variant="filled" color="primary" style={{backgroundColor:'#2E3B55'}} />
                <Chip label="Prototyping" variant="filled" color="primary" style={{backgroundColor:'#2E3B55'}} />
                <Chip label="Usability Testing" variant="filled" color="primary" style={{backgroundColor:'#2E3B55'}} />          
            </Box>
        <br/><br/>
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            '& > :not(style)': {
                m: 1,
            },            
            justifyContent: 'center'
            }}
        > 

            <Typography
                variant="h4"          
                component="div"
                className="textShadowBlue"
            >
                <u>Tools</u>
            </Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            '& > :not(style)': {
                m: 1,
            },            
            justifyContent: 'center'
        }}
        > 
            <Chip label="Visual Studio" variant="outlined" style={{backgroundColor:'#fff', color:'#2E3B55'}} />
            <Chip label="Visual Studio Code" variant="outlined" style={{backgroundColor:'#fff', color:'#2E3B55'}} />
            <Chip label="SQL Server" variant="outlined" style={{backgroundColor:'#fff', color:'#2E3B55'}} />
            <Chip label="Figma" variant="outlined" style={{backgroundColor:'#fff', color:'#2E3B55'}} />
            <Chip label="Adobe XD" variant="outlined" style={{backgroundColor:'#fff', color:'#2E3B55'}} />
        </Box>
        </div>
    )
}