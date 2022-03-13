import React from "react";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import { ThemeProvider,createTheme } from '@mui/material/styles';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import './App.css';

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
  return (
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio />}/>            
          </Routes>      
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
