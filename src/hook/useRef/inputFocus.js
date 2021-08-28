import { useEffect, useRef } from 'react';
import FormInput from './formInput';

export default function InputFocus() {
    const focusRef = useRef(null);

    useEffect(() => focusRef.current.focus(), []);
    return (
        <div>
            <form>
                <input type="text" placeholder="enter name" />
                <br />
                <br />
                <FormInput ref={focusRef} type="text" placeholder="jibon" />
            </form>
        </div>
    );
}
