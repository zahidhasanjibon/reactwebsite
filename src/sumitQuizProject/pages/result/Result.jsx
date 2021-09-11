import cls from '../../style/Result.module.css';
import Analysis from './Analysis';
import Summary from './Summary';

export default function Result() {
    return (
        <>
            <div className={cls.resultcont}>
                <Summary />
                <Analysis />
            </div>
        </>
    );
}
