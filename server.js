const express = require('express');
const cors = require('cors');
const productsData = require('./data');

const app = express();

app.use(cors());

app.get('/products', (req, res)=>{
    res.send(productsData);
});

// app.post()

// app.put()

// app.delete();

app.listen(5000, ()=>{
    console.log('Server Started at Port 5000');
});