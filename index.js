const express = require('express');
const axios = require('axios');
var cors = require('cors');
const app = express();
require('dotenv').config();

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
    res.send('InterConnecta The Shop');
});

app.get('/stores', (req, res) => {
    axios.get(`${process.env.API_URL}/api/stores`, {
        headers: {
            Authtoken: 'MviiQWviQau7WjykWsuj'
        }
       })
      .then((response) => {
        console.log(response.data)
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
});

app.post('/store', (req, res) => {
    axios.post(`${process.env.API_URL}/api/stores`, {
        name: 'Adidas',
    }, {
        headers: {
            Authtoken: 'MviiQWviQau7WjykWsuj'
        }
       })
      .then((response) => {
        console.log(response.data)

        res.send(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
});

app.get('/products', (req, res) => {
    axios.get(`${process.env.API_URL}/api/products`, {
        headers: {
            Authtoken: 'MviiQWviQau7WjykWsuj'
        }
       })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
});

app.post('/product', (req, res) => {
    axios.post(`${process.env.API_URL}/api/products`, {
        store_id: 1,
        name: 'ZAPATILLAS MANDALORIAN SUPERSTAR',
        description: 'test',
        price: '329'
    }, {
        headers: {
            Authtoken: 'MviiQWviQau7WjykWsuj'
        }
       })
      .then((response) => {
        console.log(response.data)

        res.send(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});
