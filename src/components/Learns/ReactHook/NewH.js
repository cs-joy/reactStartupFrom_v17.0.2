import { useState } from 'react';

function ScrollView({row}) {
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [prevRow, setPrevRow] = useState(null);

    if (row !== prevRow) {
        // Row changed since last render. Update isScrollingDown.
        setIsScrollingDown(prevRow !== null && row > prevRow);
        setPrevRow(row);
    }

    return `Scrolling down: ${isScrollingDown}`;
}

export default ScrollView
