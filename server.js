const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const httpProxy = require('http-proxy');
// const proxy = require('http-proxy-middleware');
const path = require('path');
const proxy = httpProxy.createProxyServer();
const app = express();
// app.use(cors);
// const httpProxy = require('http-proxy');

// const apiProxy = httpProxy.createProxyServer();
const port = 8001;
app.use('/', express.static('dist'));
// http://localhost:8000/rooms/:id
// app.get('http://localhost:8000', (req, res) => {
//   proxy.web(req, res, { target: 'http://localhost:8000/ });
// });

// app.all('/', (req, res) => {
//   proxy.web(req, res, { target: 'http://localhost:8000/?1' });
// });

// app.use('/rooms/:id/photos', proxy({target: 'http://54.175.98.175/'}));
// app.use('/api/reviews/rooms/:roomid', proxy({target: 'http://54.202.111.150'}));
// app.use('/api/ratings/rooms/:roomid', proxy({target: 'http://54.202.111.150'}));
// app.use('/api/rooms/:id', proxy({target: 'http://54.67.99.254/'}));
// app.use('/house', proxy({target: 'http://18.223.185.89'}));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});