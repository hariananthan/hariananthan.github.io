import React,{useRef} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled, ThemeProvider,createTheme } from '@mui/material/styles';
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
  }
});

function App() {

  const projectsRef = useRef(null);
  const homeRef = useRef(null);
  const scrollToRef = (ref,offset) => window.scrollTo({behavior: "smooth", top: offset});
  return (
    <ThemeProvider theme={THEME}>
    <div className="App">
     <AppBar position="fixed" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <img src={Logo} alt="logo" className="icon" /> 
          <Typography
            variant="h6"          
            component="div"
          >
            HARIANANTHAN          
          </Typography>
          <Box       
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >          
          </Box>
          <StyledButton variant="text"   onClick={()=>scrollToRef(homeRef, 0)}>Home</StyledButton>
          <StyledButton variant="text" onClick={()=>scrollToRef(projectsRef, (projectsRef.current.offsetTop-100))} >Projects</StyledButton>
          <StyledButton variant="text" >Portfolio</StyledButton>  
        </Toolbar>
      </AppBar>
      <Home projectsRef={projectsRef}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
