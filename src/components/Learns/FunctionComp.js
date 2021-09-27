import React from 'react';

function FunctionComp() {
    const user = {
        id: 42,
        displayName: 'jdoe',
        fullName: {
            firstName: 'John',
            lastName: 'Doe'
        }
    };

    function userId({id}) {
        return id;
    }

    function whois({displayName, fullName: {firstName: name}}) {
        return `${displayName} is ${name}`;
    }

    return (
        <div>
            <h4>{userId(user)}</h4>
            <p>{whois(user)}</p>
        </div>
    );
}

export default FunctionComp
