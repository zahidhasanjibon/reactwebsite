import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, lang: currentLang } = this.props;
        const { change: nextChange, lang: nextLang } = nextProps;
        if (currentChange === nextChange && currentLang === nextLang) {
            return false;
        }
        return true;
    }

    render() {
        const { change, lang } = this.props;
        // if (!enable) {
        //     return null;
        // }
        return (
            <>
                <button type="button" onClick={(e) => change(e, lang)}>
                    {lang === 'bn-BD' ? 'Change CLock' : 'ঘড়ি পরিবর্তন'}
                </button>
            </>
        );
    }
}
export default Button;
