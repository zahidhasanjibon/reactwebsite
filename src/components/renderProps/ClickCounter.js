export default function ClickCounter({ count, incrementFunc }) {
    return (
        <button onClick={() => incrementFunc()} type="button">
            Clicked {count} times
        </button>
    );
}
