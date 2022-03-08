import React,{useRef, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled, ThemeProvider,createTheme, useTheme  } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from "./assets/Logo.png";
import Home from "./components/Home";
import './App.css';

const StyledButton = styled(Button)(({ theme, color = '' }) => ({
  color:'white',
  ':hover': {
    color: '#008CBA',
  },
}));

const THEME = createTheme({
  typography: {
   "fontFamily": `"Nunito", "Helvetica", "Arial", sans-serif`,
   "fontSize": 16,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  },
});

THEME.typography.h4 = {
  fontSize: '1.8rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [THEME.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

THEME.typography.h6 = {
  fontSize: '1.2rem',
  margin: '10px',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [THEME.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
};
THEME.typography.h3 = {
  fontSize: '1.8rem',
  margin: '10px',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [THEME.breakpoints.up('md')]: {
    fontSize: '3.4rem',
  },
};


function App() {

  const projectsRef = useRef(null);
  const homeRef = useRef(null);
  const scrollToRef = (ref,offset) => window.scrollTo({behavior: "smooth", top: offset});
  const mobileTheme = useTheme();
  const isMobile = useMediaQuery(mobileTheme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={THEME}>
    <div className="App">
     <AppBar position="fixed" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <img src={Logo} alt="logo" className="icon" /> 
          { (isMobile && open)? null: <span className="title">
            HARIANANTHAN    
            </span>
}
          <Box       
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >          
          </Box>
         { !isMobile || (isMobile && open)?
         <div className="menu-navs">
                <StyledButton variant="text"   onClick={()=>scrollToRef(homeRef, 0)}>Home</StyledButton>
                <StyledButton variant="text" onClick={()=>scrollToRef(projectsRef, (projectsRef.current.offsetTop-100))} >Projects</StyledButton>
                <StyledButton variant="text" >Portfolio</StyledButton>  
              </div>
              :null
}
          {
            isMobile ?
              <div>
              <div className="burger-menu" onClick={toggleDrawer(true)}>
                <div className={open ? "cancel1" : "bar1"}/>
                <div className={open ? "cancel2" : "bar2"}/>
                <div className={open ? "cancel3" : "bar3"}/>
              </div>
              </div>
            : null

           }

        </Toolbar>
      </AppBar>
      <Home projectsRef={projectsRef}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
