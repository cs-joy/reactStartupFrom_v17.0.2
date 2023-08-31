import React from 'react';


class SomeDiff extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    render() {
        return <input type="text" ref={this.inputRef} />;
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }
}

export default SomeDiff
