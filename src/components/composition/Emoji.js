import React from 'react';

export default class Emoji extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render() {
        return this.props.children({ addEmoji: this.addEmoji });
    }
}
