import {
    useDispatch
} from 'react-redux';

import {
    useState,
    useEffect
} from "react";

import {
    subscribeTickers
} from "../utils"
import {
    useConnectServer
} from './useConnectServer';

export const useMainSubscription = () => {
    const socket = useConnectServer();
    const dispatch = useDispatch();

    const [unsubscribe, setUnsubscribe] = useState(null);
    const [called, setCalled] = useState(false);

    useEffect(() => {
        if (socket && !called) {
            const unsubscribe = subscribeTickers(socket, dispatch);
            socket.emit("start");
            setUnsubscribe(() => unsubscribe);
            setCalled(true);
        }
    }, [socket])

    const unsubscribeHandle = () => {
        unsubscribe();
        setUnsubscribe(null);
    }

    const hasUnsubscribe = unsubscribe ? true : false;

    return [socket, unsubscribeHandle, hasUnsubscribe];
}

//socket.emit("start");