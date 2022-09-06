import {
    useState,
    useEffect
} from 'react';
import {
    useDispatch
} from 'react-redux';
import {
    setProducts
} from "../store/actionCreators"

export const useSubscribeMainEvent = (socket) => {
    const dispatch = useDispatch();
    const [called, setCalled] = useState(false);
    if (socket && !called) {
        socket.emit("start");
        socket.on("ticker", (message) => dispatch(setProducts(message)));
        setCalled(true)
    }
}