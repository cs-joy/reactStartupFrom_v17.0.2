import React from 'react';
import UserGreeting from "./UserG";
import GuestGreeting from "./GuestG";

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default Greeting