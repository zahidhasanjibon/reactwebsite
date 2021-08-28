export default function HoverCounter({ count, counterFunc, themeFunc, themeChangerFunc }) {
    const style =
        themeFunc === 'light'
            ? { backgroundColor: 'purple', color: 'white' }
            : { backgroundColor: 'black', color: 'white' };
    return (
        <>
            <h1 onMouseOver={() => counterFunc()} style={style}>
                Hovered {count} {themeFunc} times
            </h1>
            <button onClick={() => themeChangerFunc()} type="button">
                click to Change
            </button>
        </>
    );
}
