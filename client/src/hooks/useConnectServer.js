import {
    useState,
    useEffect
} from "react";
import io from "socket.io-client";

const API_URL = process.env.NODE_ENV === 'test' ? '' : "http://localhost:4000";

export const useConnectServer = () => {
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        const socket = io(API_URL, {
            cors: {
                origin: API_URL,
                credentials: true
            },
            transports: ["websocket"]
        });

        setSocket(socket);
    }, []);
    return socket;
}