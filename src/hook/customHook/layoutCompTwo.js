import CustomHook from './UseCustomHook';

export default function LayoutComponentTwo() {
    const value = CustomHook(800);

    return (
        <div>
            <h1>i am {value ? 'Small' : 'Large'} screen</h1>
        </div>
    );
}
