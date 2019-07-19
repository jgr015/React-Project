import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            errorText: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    handleSubmit(event){
        axios.post("https://api.devcamp.space/sessions",
        {
            client: {
                email: this.state.email,
                password: this.state.password
            }
        },
        {withCredentials: true}
        ).then(response => {
            if (response.data.status === "created"){
                this.props.handleSuccessfulAuth();
            } else{
                this.setState({
                    errorText: "Your Pokeball Bounces back. It appears you did something wrong."
                });
                this.props.handleUnsuccessfulAuth();
            }
        }).catch(error => {
            this.setState({
                errorText: "A Wild Error Appears"
            });
            this.props.handleUnsuccessfulAuth();
        });
        event.preventDefault()
    }
    render(){
        return (
            <div>
                <h1>LOGIN TO ACCESS THY DASHBOARD</h1> 

                <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type = "email"
                        name = "email"
                        placeholder = "Thy Email"
                        value = {this.state.email}
                        onChange = {this.handleChange}
                    />
                    <input 
                        type = "password"
                        name = "password"
                        placeholder = "Thy Password"
                        value = {this.state.password}
                        onChange = {this.handleChange}
                    />

                    <div>
                        <button type = "submit">Login</button>
                    </div>
                </form>

            </div>
        );
    }
}