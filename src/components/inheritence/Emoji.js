import React from 'react';

export default class Emoji extends React.Component {
    appEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(override) {
        let text = 'i am the Emoji content';
        if (override) {
            text = override;
        }
        return <div>{text}</div>;
    }
}
