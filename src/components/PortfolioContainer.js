import { useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import PortfolioDetail from './PortfolioDetail'
import cafe from "../assets/cafe.jpg";
import movie from "../assets/movie.jpg";
import shelter from "../assets/shelter.jpg";


import "./PortfolioContainer.css";

function PortfolioCard(props){
    return(
    <div className="portfolio-card">
    <Card sx={{ maxWidth: 345 }} id={props.title} onClick={()=>props.portfolioSelected(props.title)}>
      <CardMedia
        component="img"
        image={props.img}
        alt="portfolio Summary"
        className="cardImg"
      />
    <CardContent>
        <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
        <Typography gutterBottom variant="h5" component="div">
            {props.title}
        </Typography>
        </Box>
      </CardContent>
      </Card>
      </div>
    )
}

export default function PortfolioContainer(){
  const [portfolioID, setPortfolioID] = useState("");
  const portfolioSelected=(id) =>{
    setPortfolioID(id);
    window.scrollTo({behavior: "smooth", top: 1500});
  }
    return(
      <div className="portfolio-container">
        <div className="portfolio-summary">
            <PortfolioCard title="Coffee&Biscuits" img={cafe} portfolioSelected={portfolioSelected} />
            <PortfolioCard title="Moviez" img={movie} portfolioSelected={portfolioSelected}/>
            <PortfolioCard title="Shelter" img={shelter} portfolioSelected={portfolioSelected}/>
        </div>
        <hr/>
          <PortfolioDetail  portfolioID={portfolioID}/>
      </div>
    )
}
