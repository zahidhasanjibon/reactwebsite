class Context {
    constructor(value) {
        this.value = value;
    }

    Provider = ({ children, value }) => {
        this.value = value;
        return children;
    };

    Consumer = ({ children }) => children(this.value);
}

export default function themeContext(value = null) {
    const newContext = new Context(value);
    return {
        Provider: newContext.Provider,
        Consumer: newContext.Consumer,
    };
}
