import React,{ useRef,useState} from "react";
import AboveFold from "./AboveFold";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import { styled, useTheme  } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from "../assets/Logo.png";
import About from "./About";
import Projects from "./Projects";
import Certifications from "./Certifications";
import './Home.css';

const StyledButton = styled(Button)(({ theme, color = '' }) => ({
  color:'white',
  ':hover': {
    color: '#008CBA',
  },
}));

export default function Home(){

  const projectsRef = useRef(null);
  const homeRef = useRef(null);
  const scrollToRef = (ref,offset) => window.scrollTo({behavior: "smooth", top: offset});

  const mobileTheme = useTheme();
  const isMobile = useMediaQuery(mobileTheme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => () => {
    setOpen(!open);
  };

    return(
      <>
      <AppBar position="fixed" style={{ background: '#2E3B55' }}>
      <Toolbar>
        <img src={Logo} alt="logo" className="icon" /> 
        { (isMobile && open) ? null : 
          <span className="title">
            HARIANANTHAN    
          </span>
        }
        <Box component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}/>          
       { !isMobile || (isMobile && open)?
        <div className="menu-navs">
          <StyledButton variant="text" onClick={()=>scrollToRef(homeRef, 0)}>Home</StyledButton>
          <StyledButton variant="text" onClick={()=>scrollToRef(projectsRef, (projectsRef.current.offsetTop-100))}>Projects</StyledButton>
          <StyledButton variant="text"><NavLink to="/portfolio" className="navLinks">Portfolio</NavLink></StyledButton>  
        </div>
        :null
       }
        {
          isMobile ?
            <div className="burger-menu" onClick={toggleDrawer(true)}>
              <div className={open ? "cancel1" : "bar1"}/>
              <div className={open ? "cancel2" : "bar2"}/>
              <div className={open ? "cancel3" : "bar3"}/>
            </div>
          : null
        }
      </Toolbar>
    </AppBar>
    <div className="home">
      <AboveFold/>
      {
      isMobile? null:
        <svg class="arrow">
          <path class="a1" d="M0 0 L30 22 L60 0"></path>
          <path class="a2" d="M0 20 L30 42 L60 20"></path>
          <path class="a3" d="M0 40 L30 62 L60 40"></path>
        </svg>
      }
      <About/>
      <br/><br/>
      <hr style={{ width:'75%',  margin: '0 auto'}}/>
      <br/><br/>
      <Projects projectsRef={projectsRef}/>
      <br/><br/>
        <hr style={{ width:'75%',  margin: '0 auto'}}/>       
      <br/><br/>
      <Certifications/>
      <br/><br/>
    </div>
  </>
  );  
}
