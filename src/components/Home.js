import React from "react";
import AboveFold from "./AboveFold";
import About from "./About";
import Projects from "./Projects";
import Certifications from "./Certifications";
import './Home.css';

export default function Home(props){

    return(
        <div className="home">
          <AboveFold/>
          <About/>
          <br/><br/>
          <hr style={{ width:'75%',  margin: '0 auto'}}/>
          <br/><br/>
          <Projects projectsRef={props.projectsRef}/>
          <br/><br/>
            <hr style={{ width:'75%',  margin: '0 auto'}}/>       
          <br/><br/>
          <Certifications/>
          <br/><br/>
        </div>
      );  
}
