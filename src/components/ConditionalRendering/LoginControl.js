import React from 'react';
import GuestConditional from "./ConditionalRendering";
import LogOutButton from './LogOut';
import LogInButton from './LogIn';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogOutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LogInButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <GuestConditional isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

export default LoginControl
