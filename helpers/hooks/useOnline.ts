import {useState, useEffect} from 'react';

export function useOnline() {
    const [online, setOnline] = useState(isClientSide() ? navigator.onLine : true);

    useEffect(() => {
        const updateOnlineStatus = () => {
            setOnline(navigator.onLine);
        }
        const goOffline = () => {
            setOnline(false)
        }
        if (isClientSide()) {
            window.addEventListener('online', updateOnlineStatus);
            window.addEventListener('offline', updateOnlineStatus);
            window.applicationCache.addEventListener('error', goOffline);
        }
        return () => {
            if (isClientSide()) {
                window.removeEventListener('online', updateOnlineStatus);
                window.removeEventListener('offline', updateOnlineStatus);
                window.applicationCache.removeEventListener('error', goOffline);
            }
        }
    }, []);

    return online;
}

function isClientSide() {
    return typeof window !== 'undefined';
}