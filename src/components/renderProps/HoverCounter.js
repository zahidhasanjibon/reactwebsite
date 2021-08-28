export default function HoverCounter({ count, incrementFunc }) {
    return <h1 onMouseOver={() => incrementFunc()}>Hovered {count} times</h1>;
}
