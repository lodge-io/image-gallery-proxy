const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
// const proxy = require('http-proxy-middleware');
const app = express();
const port = 8001;

app.use(express.static(path.join(__dirname, 'dist')))
app.use('/rooms/:id', express.static(path.join(__dirname, '../dist')));

const imageGallery = axios.create({
  baseURL: 'http://localhost:8000'
});

const description = axios.create({
  baseURL: 'http://localhost:3116'
});

app.get('/rooms/:id/', (req, res) => {
  imageGallery.get(`/rooms/${req.params.id}`)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
});
   
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});