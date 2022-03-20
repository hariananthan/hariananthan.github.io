import { portfolioData } from "../data/portfolioData";
import "./PortfolioDetail.css";

export default function PortfolioDetail(props){
    const selectedPortfolio = props.portfolioID !== "" ? portfolioData[props.portfolioID]: null;

    return(
        (selectedPortfolio)?
        <div className="portfolio-detail">
            <h1>{selectedPortfolio.title}</h1><br/>
            <img src={selectedPortfolio.titleImg} className="title-img"/>
            <h2><u>Problem Statement</u></h2>
            <span>{selectedPortfolio.problemStatement}</span><br/>
            <div style={{margin: "20px 0px 20px -250px"}}>
            <span><b><u>Duration </u>: </b>{selectedPortfolio.projectDuration}</span><br/>
            <span><b><u>Role </u>: </b>{selectedPortfolio.role}</span><br/>
            <span><b><u>Responsibilities </u>: </b>{selectedPortfolio.responsibilities}</span><br/>
            </div>
            <h2><u>Goal Statement</u></h2>
            {selectedPortfolio.goalStatement}<br/>
            <h2><u>Research</u></h2><br/>
            <h2><u>Research Summary</u></h2>
            {selectedPortfolio.researchSummary}<br/>
            <h2><u>Pain points identified :</u></h2>
            <ul>
            {
                selectedPortfolio.painPoints.map((point)=>(<li>{point}</li>))
            }
            </ul>
            <br/>
            <h2><u>Persona</u></h2><br/>
            <span>Based on the user research conducted, a persona was created to best represent the user base and help inform design decisions</span>
            <div style={{margin: "20px 0px 20px -250px"}}>
            <span><b><u>Problem Statement </u>: </b>{selectedPortfolio.personaStatement}</span><br/>
            </div>
            <h2><u>Wire Framing</u></h2><br/>
            {selectedPortfolio.wireFraming.map((obj=>(
            <><span>{obj.title}</span><br/>
            <ul>
            <span>{obj.process.map(point=>(<li>{point}</li>))}</span>
            </ul>
            </>)
            ))
            }<br/>
            <h2><u>Low-Fidelity prototype</u></h2><br/>
            {selectedPortfolio.lowfi}<br/>
            <h2><u>Testing</u></h2><br/>
            <span>Two rounds of usability study were conducted. The first one was for low-fi designs which helped to identify enhancements early on to the design. The second one was for hi-fi mockups which was helpful to refine the designs to bring it to the final stage. The feedback from testing revealed the following,</span><br/>
            <ul>
                {selectedPortfolio.testing.map((point)=>(<li>{point}</li>))}
            </ul>
            <br/>
            <h2><u>Iteration and Mockups</u></h2><br/>
            <span>The findings from the usability test prompted iteration of the designs to improve usability. Once the user feedback was incorporated , the polished mockups were created.</span><br/>
            <ul>
            {selectedPortfolio.mockups.map((point)=>(<li>{point}</li>))}<br/>
            </ul>
            <h2><u>High fidelity prototype</u></h2><br/>
            <span>A hi-fi prototype which simulates the main user flow from home page to booking confirmation was created with the finalized versions of the mockup</span><br/>
            <h2><u>Takeaways</u></h2><br/>
            <h2><u>Impact</u></h2><br/>
            {selectedPortfolio.impact}<br/>
            {selectedPortfolio.quote}<br/>
            <h2><u>Learning</u></h2><br/>
            {selectedPortfolio.learning}<br/>
        </div>
        :
        <></>
    )
}