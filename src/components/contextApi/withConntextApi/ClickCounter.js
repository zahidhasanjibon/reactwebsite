export default function ClickCounter({ count, counterFunc }) {
    return (
        <button onClick={() => counterFunc()} type="button">
            Clicked {count} times
        </button>
    );
}
