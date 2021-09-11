import cls from '../../style/Button.module.css';

export default function Button({ className, children }) {
    return <div className={`${cls.button} ${className}`}>{children}</div>;
}
