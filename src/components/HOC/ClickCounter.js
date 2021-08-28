import withCounter from './withCounter';

const ClickCounter = (props) => {
    const { count, counterFunc, send } = props;
    return (
        <div>
            <button onClick={() => counterFunc()} type="button">
                Clicked {count} {send} times
            </button>
        </div>
    );
};
export default withCounter(ClickCounter);
