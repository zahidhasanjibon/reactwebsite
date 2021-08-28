import withCounter from './withCounter';

const HoverCounter = (props) => {
    const { count, counterFunc } = props;
    return (
        <div>
            <h1 onMouseOver={(e) => counterFunc(e)}>Hover{count} times</h1>
        </div>
    );
};
export default withCounter(HoverCounter);
