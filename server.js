const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const httpProxy = require('http-proxy');
// const proxy = require('http-proxy-middleware');
const path = require('path');
const app = express();
const port = 8001;
app.use('/', express.static('dist'));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});