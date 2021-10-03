'use strict';

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

// Inizializations

const app = express();

//CORS
app.use(cors());

// settings

app.set('port', port);

// middlewares

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes

app.use(require('./routes/dogs.route'));

module.exports = app;
