function Learn() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );

    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default Learn