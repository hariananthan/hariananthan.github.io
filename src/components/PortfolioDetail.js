import { portfolioData } from "../data/portfolioData";
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import "./PortfolioDetail.css";

const StyledButton = styled(Button)(({ theme, color = '' }) => ({
    color:'white',
    backgroundColor: '#2E3B55',
    textAlign: 'center',
    margin: '50px 30px',
    ':hover': {
      color: '#008CBA',
      backgroundColor: '#2E3B55',
    },
  }));


export default function PortfolioDetail(props){
    const selectedPortfolio = props.portfolioID !== "" ? portfolioData[props.portfolioID]: null;
    const scrollToTop = () => window.scrollTo({behavior: "smooth", top: 0});
    return(
        (selectedPortfolio)?
        <div className="portfolio-detail">
            <h1>{selectedPortfolio.title}</h1><br/>
            <img src={selectedPortfolio.titleImg} alt="error" className="title-img"/>
            <h2><u>Problem Statement</u></h2>
            <span>{selectedPortfolio.problemStatement}</span><br/>
            <div className="sub-section">
                <span><b>Duration : </b>{selectedPortfolio.projectDuration}</span><br/>
                <span><b>Role : </b>{selectedPortfolio.role}</span><br/>
                <span><b>Responsibilities : </b>{selectedPortfolio.responsibilities}</span><br/>
            </div>
            <h2><u>Goal Statement</u></h2>
            {selectedPortfolio.goalStatement}<br/>
            <h2><u>Research</u></h2>
            <div className="sub-section">
            <h3><u>Research Summary</u></h3>
            {selectedPortfolio.researchSummary}<br/>
            <h3><u>Pain points identified :</u></h3>
            <ul>
            {
                selectedPortfolio.painPoints.map((point)=>(<li>{point}</li>))
            }
            </ul>
            </div>
            <h2><u>Persona</u></h2>
            <span>Based on the user research conducted, a persona was created to best represent the user base and help inform design decisions</span>
            <span><b>Problem Statement : </b>{selectedPortfolio.personaStatement}</span><br/><br/>
            <img src={selectedPortfolio.personaImg} alt="error"/>

            <h2><u>Wire Framing</u></h2><br/>
            <img src={selectedPortfolio.wireFrameImg} alt="error" /><br/>
            <div className="wireframe-section">
            {selectedPortfolio.wireFraming.map((obj=>(
            <div><b><span>{obj.title}</span></b>
            <ul>
            <span>{obj.process.map(point=>(<li>{point}</li>))}</span>
            </ul>
            <br/>
            </div>)
            ))
            }
            </div>
            { (selectedPortfolio.responsive)?
            <div className="responsive-section">
            <h2><u>Responsive Design</u></h2>
            <h3><u>{selectedPortfolio.responsive.title}</u></h3>
            {selectedPortfolio.responsive.changes.map((point)=>(<li>{point}</li>))}<br/>
            <img src={selectedPortfolio.responsive.responsiveImg} alt="error"/>
            </div>: null
            }
            <h2><u>Low-Fidelity prototype</u></h2>
            {selectedPortfolio.lowfi}<br/><br/>
            <img src={selectedPortfolio.lowfiImg} alt="error"/>
            <h2><u>Testing</u></h2>
            <span>Two rounds of usability study were conducted. The first one was for low-fi designs which helped to identify enhancements early on to the design. The second one was for hi-fi mockups which was helpful to refine the designs to bring it to the final stage. The feedback from testing revealed the following,</span><br/>
            <div className="sub-section">
            <ul>
                {selectedPortfolio.testing.map((point)=>(<li>{point}</li>))}
            </ul>
            </div>
            <br/>

            <h2><u>Iteration and Mockups</u></h2>
            <span>The findings from the usability test prompted iteration of the designs to improve usability. Once the user feedback was incorporated , the polished mockups were created.</span><br/>
            <div className="mockup-section">
            <ul className="mockup-list">
            {selectedPortfolio.mockups.map((mockup)=>
            (<div>
                <li>{mockup.brief}</li><br/>
                <img src={mockup.mockupImg} className="mockupImg" alt="error"/>
                <br/><br/>
            </div>
            ))}
            </ul>
            </div>
            <h2><u>High fidelity prototype</u></h2>
            <span>A hi-fi prototype which simulates the main user flow from home page to booking confirmation was created with the finalized versions of the mockup</span><br/>
            <img src={selectedPortfolio.hifiImg} alt="error" /><br/>
            
            <h2><u>Takeaways</u></h2>
            <div className="sub-section">
                <h3><u>Impact</u></h3>
                {selectedPortfolio.impact}<br/>
                { (selectedPortfolio.quote)?
                    <><i>"{selectedPortfolio.quote}"</i><br/></>
                : null
                }
                <h3><u>Learning</u></h3>
                {selectedPortfolio.learning}<br/>
            </div>
            <div className="backtoTop-btn">
            <StyledButton variant="text" onClick={()=>scrollToTop()}>Back to Top</StyledButton>
            </div>

        </div>
        :
        <></>
    )
}