import React, { useState } from 'react';

function NewB() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click The NewB!
            </button>
        </div>
    );
}

export default NewB
