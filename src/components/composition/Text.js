export default function Text({ emojiFunc, bracketFunc }) {
    let text = 'javascript progarming language in Text';
    if (emojiFunc) {
        text = emojiFunc(text, '💜');
    }
    if (bracketFunc) {
        text = bracketFunc(text);
    }

    return <div>{text}</div>;
}
