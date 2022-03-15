import { portfolioData } from "../data/portfolioData";
import "./PortfolioDetail.css";

export default function PortfolioDetail(props){
    const selectedPortfolio = props.portfolioID !== "" ? portfolioData[props.portfolioID]: null;
    return(
        (selectedPortfolio)?
        <div className="portfolio-detail">
            <h1>{selectedPortfolio.title}</h1><br/>
            <h3>{selectedPortfolio.description}</h3>
        </div>
        :
        <></>
    )
}