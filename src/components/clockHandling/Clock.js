import React from 'react';

// function Clock(props) {
//     return (
//         <h1 className="head">
//             {' '}
//             Hello
//             <p className="text">{new Date().toLocaleTimeString(props.locale)} </p>
//         </h1>
//     );
// }

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // state = { date: new Date() };

    componentDidMount() {
        this.counter = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.counter);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>
                <h1>Digital Clock</h1>
                <p>{this.state.date.toLocaleTimeString(this.props.locale)}</p>
            </div>
        );
    }
}

export default Clock;
