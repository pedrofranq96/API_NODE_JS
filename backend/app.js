const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.listen(3000, function() {
    console.log('online!')
});


const conn = require('./db/conn');
conn();

const routes = require('./routes/router');

app.use("/api", routes);

//pedrofranq96
//dlAeioNnGuePzGau