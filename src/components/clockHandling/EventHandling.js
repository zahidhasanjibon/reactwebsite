import React from 'react';
import Button from './Button';

class ClockEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            lang: 'bn-BD',
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleClick = (e, lang) => {
        this.setState({ lang });
    };

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        const { date, lang } = this.state;

        return (
            <div>
                <h1>
                    <span>{date.toLocaleTimeString(lang)}</span>
                    <p>
                        {lang === 'bn-BD' ? (
                            <Button change={this.handleClick} lang="en-US" show={false} />
                        ) : (
                            <Button change={this.handleClick} lang="bn-BD" show />
                        )}
                    </p>
                </h1>
            </div>
        );
    }
}

export default ClockEvent;
