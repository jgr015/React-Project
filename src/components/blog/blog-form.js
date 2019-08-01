import React, { Component } from "react";
import Axios from "axios";

export default class BlogForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            blog_status: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    buildForm(){
        let formData = new FormData();

        formData.append("portfolio_blog[title]", this.state.title)
        formData.append("portfolio_blog[blog_status]", this.state.blog_status)

        return formData;
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        axios.post("https://joshuagrover.devcamp.space/portfolio/portfolio_blogs", 
        this.buildForm(), 
        {withCredentials: true}
        ).then(response => {
            this.props.handleSuccessfullFormSubmission(response.data);
        }).catch(error => {
            console.log("handle submit error", error);
        })

        this.props.handleSuccessfullFormSubmission(this.state);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type = "text"
                onChange = {this.handleChange} 
                name = "title"
                placeholder = "Title"
                value = {this.state.title}
                />
            <input 
                type = "text"
                onChange = {this.handleChange} 
                name = "blog_status"
                placeholder = "Blog Status"
                value = {this.state.blog_status}
                />
            
                <button>save</button>
            </form>
        )
    }
}