import { useState } from 'react';

export default function Input() {
    const [msg, setMsg] = useState({
        title: '',
        descr: '',
    });

    const { title, descr } = msg;

    return (
        <div>
            <p>{title}</p>
            <input
                value={title}
                onChange={(e) =>
                    setMsg({
                        ...msg,
                        title: e.target.value,
                    })
                }
            />
            <br />
            <br />
            <textarea
                value={descr}
                onChange={(e) =>
                    setMsg({
                        ...msg,
                        descr: e.target.value,
                    })
                }
            />
        </div>
    );
}
