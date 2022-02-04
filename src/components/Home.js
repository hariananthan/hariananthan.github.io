import React from "react";
import AboveFold from "./AboveFold";
import About from "./About";
import Projects from "./Projects";
import './Home.css';

export default function Home(){

    return(
        <div className="home">
          <AboveFold/>
          <About/>
          <br/><br/>
          <hr style={{ width:'75%',  margin: '0 auto'}}/>
          <br/><br/>
          <Projects/>
        </div>
      );  
}
