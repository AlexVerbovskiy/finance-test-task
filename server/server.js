'use strict';
const express = require('express');
const http = require('http');
const io = require('socket.io');
const cors = require('cors');

const FETCH_INTERVAL = 5000;
const PORT = process.env.PORT || 4000;

const tickers = [
  'AAPL', // Apple
  'GOOGL', // Alphabet
  'MSFT', // Microsoft
  'AMZN', // Amazon
  'FB', // Facebook
  'TSLA', // Tesla
];

function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min;
  return random.toFixed(precision);
}

function utcDate() {
  const now = new Date();
  return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
}

function getTicker(tickerName) {
  return ({
    ticker: tickerName,
    exchange: 'NASDAQ',
    price: randomValue(100, 300, 2),
    change: randomValue(0, 200, 2),
    change_percent: randomValue(0, 1, 2),
    dividend: randomValue(0, 1, 2),
    yield: randomValue(0, 2, 2),
    last_trade_time: utcDate(),
  })
}

function getQuotes(socket) {
  const quotes = tickers.map(ticker => getTicker(ticker));
  socket.emit('tickers', quotes);
}

function getQuote(socket, ticker) {
  const quotes = getTicker(ticker);
  socket.emit('ticker', quotes);
}

function startTrackTickers(socket) {
  const timers = {};

  function startTracker(ticker = null, interval = FETCH_INTERVAL) {
    const timer = setInterval(function () {
      if (ticker === null) getQuotes(socket);
      else getQuote(socket, ticker)
    }, interval);
    if (ticker)
      timers[ticker] = timer;
    else
      timers["main"] = timer;
  }

  function stopTrackTickers(ticker = null) {
    const key = ticker ? ticker : "main"
    if (ticker === null) clearInterval(timers[key]);
    else clearInterval(timers[key]);
    delete timers[key];
  }

  // run the first time immediately
  getQuotes(socket);
  startTracker();

  socket.on('stop', function (key = null) {
    stopTrackTickers(key);
  });

  socket.on("addTracker", message => {
    const ticker = message ? message.ticker : null;
    const interval = message ? message.interval : FETCH_INTERVAL;
    startTracker(ticker, interval);
  })

  socket.on('disconnect', function () {
    Object.keys(timers).forEach((key) => stopTrackTickers(timers[key]))
  });
}


const app = express();
app.use(cors());
const server = http.createServer(app);

const socketServer = io(server, {
  cors: {
    origin: "*",
  }
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

socketServer.on('connection', (socket) => {
  socket.on('start', () => {
    startTrackTickers(socket);
  });
});

server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`);
});