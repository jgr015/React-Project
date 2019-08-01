import React, { Component } from "react";
import ReactModal from "react-modal";
import blogForm from "../blog/blog-form";
import BlogForm from "../blog/blog-form";

ReactModal.setAppElement(".app-wrapper");

export default class BlogModal extends Component{
    constructor(props){
        super(props);

        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%",
                width: "800px"
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)"
            }
        };

        this.handleSuccessfullFormSubmission = this.handleSuccessfullFormSubmission.bind(this);
    }

    handleSuccessfullFormSubmission(blog){
        console.log("blog from BlogFrom", blog);
    }

    render(){
        return(
            <ReactModal 
                style= {this.customStyles}
                onRequestClose = {() => {
                 this.props.handleModalClose();
            }}
             isOpen = {this.props.blogModalIsOpen}>
                <BlogForm handleSuccessfullFormSubmission = {this.handleSuccessfullFormSubmission} />
            </ReactModal>
        )
    }
}