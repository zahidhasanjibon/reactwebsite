import React from 'react';

export default class extends React.Component {
    state = { count: 0 };

    incrementCounter = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { render } = this.props;
        const { count } = this.state;
        return render(count, this.incrementCounter);
    }
}
