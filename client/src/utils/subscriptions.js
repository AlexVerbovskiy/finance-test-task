import {
    setProducts,
    rewriteProduct
} from "../store/actionCreators"

export const subscribeTicker = (socket, dispatch, key) => {

    const listener = (message) => {
        dispatch(rewriteProduct(message))
    }

    socket.on("ticker", listener);
    socket.emit("addTracker", {
        ...key
    });

    const unsubscribe = () => {
        socket.emit("stop", key.ticker);
        socket.off("ticker", listener);
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