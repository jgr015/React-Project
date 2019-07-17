import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component {
    constructor (){
        super();

        this.state = {
            pageTitle: "Welcome to this portfolio.",
            isLoading: false,
            data: []
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

    getPortfolioItems(){
        axios.get('https://joshuagrover.devcamp.space/portfolio/portfolio_items')
      .then (response =>  {
        this.setState({
            data: response.data.portfolio_items
        })
      })
      .catch (error => {
        console.log(error);
      })
      }

    portfolioItems(){
        return this.state.data.map(item => {
            return(
                <PortfolioItem key = {item.id} item = {item}/>
            );
        });
    }
    
    componentDidMount() {
        this.getPortfolioItems();
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
      