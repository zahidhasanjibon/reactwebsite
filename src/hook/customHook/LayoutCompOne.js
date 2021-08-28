// import React, { useEffect, useState } from 'react';
import CustomHook from './UseCustomHook';

export default function LayoutComponentOne() {
    const value = CustomHook(900);
    // const [onSmallScreen, setonSmallScreen] = useState(false);

    // const checkScreenSize = () => {
    //     setonSmallScreen(window.innerWidth < 768);
    // };

    // useEffect(() => {
    //     checkScreenSize();
    //     window.addEventListener('resize', checkScreenSize);

    //     return () => {
    //         window.removeEventListener('resize', checkScreenSize);
    //     };
    // }, []);

    return (
        <div>
            <h1>you are browsing on {value ? 'Small' : 'Large'} screen</h1>
            <img
                src="https://image.shutterstock.com/image-photo/silhouette-man-sitting-relaxing-under-600w-519411058.jpg"
                alt=""
            />
        </div>
    );
}
