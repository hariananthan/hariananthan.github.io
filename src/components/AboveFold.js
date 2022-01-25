import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './AboveFold.css';

export default function AboveFold(){
    return(
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
            },
          }}
        >  
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
          },
        }}
      >  
        <div class="screen-container">
            <div class="stand">      
                <div class="monitor">      
                    <div class="typewriter">
                    <h1>
                        <span class="typewriter-text">
                        Hello World...      
                        </span>
                    </h1>
                </div>
        
                </div>
            </div>
        </div>
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 0,
          },
        }}
      >  
        <div class="duck">
            <div class="duck-head">
                <div class="duck-eye">
                    <div class="duck-pupil"></div>
                </div>
                <div class="duck-beak"></div>
            </div>
            <div class="duck-body">
                <div class="duck-wing"></div>
                <div class="duck-tail"></div>
            </div>
        </div>
        <div class="coffee-mug">
            <div class="coffee-container">
            <div class="coffee"></div>
            </div>
        </div>
        </Box>
      </Box>
    <Paper class="intro" elevation="10">         
     <Typography
            variant="h2"          
            component="div"
            fontWeight="800"
            lineHeight="2"
          >
            HI ! <br/>
            I'm Hariananthan,<br/>
            FULL STACK / UX Developer          
          </Typography></Paper>
    </Box>
    )
}