import * as React from 'react';

function Hello(props: { toWhat: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; }) {
    return (
        <div>
            <h1>Hello {props.toWhat}</h1>
        </div>
    )
}

class TypeScript extends React.Component {
    public render() {
        return (
            <div>
                <Hello toWhat={'TypeScript'} />
            </div>
        )
    }
}

export default TypeScript
