import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor (){
        super();

        this.state = {
            pageTitle: "Welcome to this portfolio.",
            isLoading: false,
            data: [
                {title: "yes", category: ":)", slug: "yes"},
                {title: "maybe", category: ":l", slug: "maybe"}, 
                {title: "no", category: ":(", slug: "no"},
                {title: "I don't know", category: ":l", slug: "i-don't-know"}
            ]
        };

    this.HandleFilter = this.HandleFilter.bind(this);
    }

    HandleFilter(filter){
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems(){
        
        return this.state.data.map(item => {
            return(
                <PortfolioItem title = {item.title} slug={item.slug}/>
            );
        });
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.HandleFilter(':)')}>
                    :)
                </button>
                <button onClick={() => this.HandleFilter(':l')}>
                    :l
                </button>
                <button onClick={() => this.HandleFilter(':(')}>
                    :(
                </button>

                {this.portfolioItems()}

            </div>
        );
    }
}
      