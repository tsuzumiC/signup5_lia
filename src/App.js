import React, {Component} from 'react';
import LoginBoxComponent from './Components/LoginBoxComponent';
import OverlayComponent from './Components/OverlayComponent';
import "./App.css"
import InputComponent from './Components/InputComponent';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser: null,
            loginResult: null,
            users: [
                {
                    name:"Erik",
                    id: "0001",
                    email:"erik@eriksson.se",
                    password:"1234"
                },
                {
                    name:"Anna",
                    id: "0002",
                    email:"anna@hotmail.com",
                    password:"ab23"
                }
            ]
        };
        this.checkLogin = this.checkLogin.bind(this);
        this.signUp = this.signUp.bind(this);
        this.showLogin = this.showLogin.bind(this);
    }

    checkLogin(email, password) {
        let result = null;
        this.state.users.forEach(e => {
            if (e.email === email && e.password === password) {
                result = e;
            }
        });
        if (result) {
            this.setState({loggedUser: result});
        } else {
            this.setState({loginResult: "Wrong email or password."});
        };
    }

    signUp() {

    }

    showLogin() {

    }

    render() {
        let loginOverlay;
        if(condition == true) {
            loginOverlay = (
            <OverlayComponent>
                <LoginBoxComponent loginSubmit={checkLogin} loginResult={this.state.loginResult} />
            </OverlayComponent>);
        }
        return (
            <div className="app-body" >
                <div className="top-bar">
                    <InputComponent type="button" value="Sign up" onClick={this.signUp} />
                    <InputComponent type="button" value="Login" onClick={this.showLogin} />
                </div>
                {loginOverlay}
            </div>
            
        );
    }
}
export default App;

/*
    <OverlayComponent>
        <LoginBoxComponent loginSubmit={checkLogin} loginResult={this.state.loginResult} />
    </OverlayComponent>
*/