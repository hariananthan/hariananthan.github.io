import React from "react";
import Logo from "../assets/Logo.png";
import AppBar from "@mui/material/AppBar";
import { styled, useTheme } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

const StyledButton = styled(Button)(({ theme, color = '' }) => ({
    color:'white',
    ':hover': {
      color: '#008CBA',
    },
  }));

export default function Portfolio(props){
    return(
        <>
            <AppBar position="fixed" style={{ background: '#2E3B55' }}>
                <Toolbar>                    
                    <img src={Logo} alt="logo" className="icon" /> 
                    <span className="title">
                        HARIANANTHAN    
                    </span>
                    <Box component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}/>  
                    <StyledButton variant="text"><NavLink to="/" className="navLinks">Home</NavLink></StyledButton>  
                </Toolbar>
          </AppBar>
        </>
    )
}