import React from 'react';

export default class HoverCounter extends React.Component {
    state = { count: 0 };

    countHandler = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { count } = this.state;
        return <h1 onMouseOver={this.countHandler}>Hover {count} times</h1>;
    }
}
