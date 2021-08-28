import React from 'react';

export default class SideEffects extends React.Component {
    state = {
        count: 0,
        time: new Date(),
    };

    componentDidMount = () => {
        const { count } = this.state;
        this.timer = setInterval(() => this.tick(), 1000);
        document.title = `clicked ${count} times`;
    };

    componentDidUpdate = () => {
        const { count } = this.state;
        document.title = `clicked ${count} times`;
    };

    tick = () => {
        this.setState({ time: new Date() });
    };

    counterHandler = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
    };

    render() {
        const { time } = this.state;
        return (
            <div>
                <p>{time.toLocaleTimeString()}</p>
                <button type="button" onClick={this.counterHandler}>
                    add
                </button>
            </div>
        );
    }
}
