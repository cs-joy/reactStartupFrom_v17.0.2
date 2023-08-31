import React from 'react';

const o = {p: 'hello how are you today?', q: 56}

const {p: foo, q: bar} = o;

function Assigning() {
    return (
        <div>
            <p>
                {foo}
            </p>
            <p>
                {bar}
            </p>

        </div>
    );
}

export default Assigning
