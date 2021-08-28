import ClockEvent from './EventHandling';

export default function ClockList({ quantities }) {
    return (
        <div>
            {quantities.map(() => (
                <ClockEvent key={Math.random()} />
            ))}
        </div>
    );
}
