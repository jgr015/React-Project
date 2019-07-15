import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor (){
        super();

        console.log("Portforlio container rendered")
    }

    portfolioItems(){
        const data = ["Yes", "Maybe", "No"];
        
        return data.map(item => {
            return <PortfolioItem title = {item} />;
        })
    }

    render() {
        return(
            <div>
                <h2>Portfolio Items</h2>

                {this.portfolioItems()}
            </div>
        );
    }
}
      