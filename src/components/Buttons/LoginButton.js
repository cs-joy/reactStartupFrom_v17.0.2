import React from 'react';

function LoginButton(props) {
    return (
        <div>
            <button onClick={props.onClick}>
                Login
            </button>
        </div>
    );
}

export default LoginButton