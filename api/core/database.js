// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.USER_HOST,
    user: 'root',
    database: 'user_db'
});

