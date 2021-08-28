import React from 'react';

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        // eslint-disable-next-line no-useless-constructor
        constructor(props) {
            super(props);
        }

        state = { count: 0 };

        counterHandler = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        };

        render() {
            const { count } = this.state;
            return (
                <OriginalComponent
                    count={count}
                    counterFunc={this.counterHandler}
                    send={this.props.name}
                />
            );
        }
    }
    return NewComponent;
};

export default withCounter;
