'use strict'
require('dotenv').config();

const mysql = require('mysql');
      
const objectConnection = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};


var myConn = mysql.createPool(objectConnection);

module.exports = myConn;