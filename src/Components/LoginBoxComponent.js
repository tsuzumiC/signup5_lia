import React, {Component} from 'react';
import InputComponent from './InputComponent';

class LoginBoxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.loginSubmit(...this.state.email, ...this.state.password);
    }


    handleChange(e) {
        this.setState({[e.target.name]: [e.target.value]});
    }

    render() {
        return (
            <div className="login-box">
                <form className="form-container" onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    <InputComponent type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    <InputComponent type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <div>{this.props.loginResult}</div>
                    <InputComponent type="submit" value="Login" />
                </form>
            </div>
        );
    }
}
export default LoginBoxComponent;