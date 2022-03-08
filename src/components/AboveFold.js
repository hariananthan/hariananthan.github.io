import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import './AboveFold.css';

export default function AboveFold(){
    return(
        <div class="above-the-fold">
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
            <span className="intro-text">
                HI ! <br/>
                I'm Hariananthan,<br/>
                FULL STACK / UX Developer          
            </span>

        </Paper>
        <svg class="arrow">
            <path class="a1" d="M0 0 L30 22 L60 0"></path>
            <path class="a2" d="M0 20 L30 42 L60 20"></path>
            <path class="a3" d="M0 40 L30 62 L60 40"></path>
        </svg>
    </Box>
    </div>
    )
}