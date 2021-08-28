import React from 'react';

export default class MainCounter extends React.Component {
    state = { count: 0 };

    incrementCounter = () => {
        this.setState((prevstate) => ({ count: prevstate.count + 1 }));
    };

    render() {
        const { count } = this.state;
        return this.props.children(count, this.incrementCounter);
    }
}
