import React, { useState, useEffect } from 'react';

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        //Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default Counter
