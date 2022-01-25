import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AboveFold from "./AboveFold";
import './Home.css';

export default function Home(){

    return(
        <div className="home">
          <AboveFold/>
          <Box>
          <Typography
            variant="h4"          
            component="div"
            align="center"
          >
            ABOUT ME          
          </Typography>
          <Typography
            variant="h6"          
            component="div"
            align="center"
          >
            I'm a full stack developer with 2.5+ years of experience. I'm Azure and Google UX certified with entry level experience in UX design.
          </Typography>
          </Box>
        </div>
      );
}
