import React, { useState, useEffect } from 'react';

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return width;
}

function useWindowHeight() {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => setHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);

        return () => {
            window.addEventListener('resize', handleResize);
        };
    });

    return height;
}

function MyResponsiveComponent() {
    const width = useWindowWidth();
    const height = useWindowHeight();

    return (
        <div>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>
        </div>
    );
}

export default MyResponsiveComponent
