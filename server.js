const express = require('express');
const morgan = require('morgan');
const app = express();
const proxy = require('http-proxy-middleware');

const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const port = 8001;

app.use('/', express.static('./dist'));

app.get('http://localhost:8000/rooms/:id', (req, res) => {
  apiProxy.web(req, res, { target: 'http://localhost:8000' });
});

// app.use('/rooms/:id/photos', proxy({target: 'http://54.175.98.175/'}));
// app.use('/api/reviews/rooms/:roomid', proxy({target: 'http://54.202.111.150'}));
// app.use('/api/ratings/rooms/:roomid', proxy({target: 'http://54.202.111.150'}));
// app.use('/api/rooms/:id', proxy({target: 'http://54.67.99.254/'}));
// app.use('/house', proxy({target: 'http://18.223.185.89'}));

app.listen(port, () => {
  console.log(`server running at: htttp://localhost:${port}`);
});