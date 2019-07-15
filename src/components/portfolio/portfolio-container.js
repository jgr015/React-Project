import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor (){
        super();

        this.state = {
            pageTitle: "Welcome to this portfolio.",
            data: [
                {title: "yes"},
                 {title: "maybe"}, 
                {title: "no"}
            ]
        };
    }

    portfolioItems(){
        
        return this.state.data.map(item => {
            return <PortfolioItem title = {item} />;
        })
    }

    render() {
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
            </div>
        );
    }
}
      