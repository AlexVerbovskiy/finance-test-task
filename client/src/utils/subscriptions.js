import {
    setProducts
} from "../store/actionCreators"

export const subscribeTicker = (socket, dispatch, key) => {
    socket.on("ticker", (message) => dispatch(setProducts(message)));
    socket.emit("addTracker", {
        ticker: key,
        interval: 1000
    });

    const unsubscribe = () => {
        socket.emit("stop", key);
        socket.removeAllListeners("ticker");
    }

    return unsubscribe;
}

export const subscribeTickers = (socket, dispatch, addTracker = false) => {
    if (addTracker) socket.emit("addTracker");
    socket.on("tickers", (message) => dispatch(setProducts(message)));

    return () => {
        socket.emit("stop");
        socket.removeAllListeners("tickers");
    };
}