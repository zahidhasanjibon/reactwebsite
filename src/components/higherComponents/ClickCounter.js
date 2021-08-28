import React from 'react';

export default class ClickCounter extends React.Component {
    state = { count: 0 };

    counterHandler = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { count } = this.state;
        return (
            <button type="button" onClick={this.counterHandler}>
                Clicked {count} times
            </button>
        );
    }
}
