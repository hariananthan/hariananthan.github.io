
import './App.css';
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Logo from "./assets/Logo.png";
import Home from "./components/Home";


const StyledButton = styled(Button)(({ theme, color = '' }) => ({
  color:'white',
  ':hover': {
    color: '#008CBA',
  },
}));

function App() {
  return (
    <div className="App">
     <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <img src={Logo} className="icon" /> 
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
          <StyledButton variant="text" >Home</StyledButton>
          <StyledButton variant="text" >Projects</StyledButton>
          <StyledButton variant="text" >Portfolio</StyledButton>  
        </Toolbar>
      </AppBar>
      <Home/>
    </div>
  );
}

export default App;
