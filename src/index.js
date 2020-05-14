const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

const app = express();

// importing routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));

// Initialize DB
var databaseName = process.env.DB_NAME || 'nodejs2';
var con = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PW || 'root'
});
con.connect((err)=>{
    if(err) throw err;
    con.query("CREATE DATABASE IF NOT EXISTS "+databaseName+";", (err, result)=>{
        if(err) throw err;
		var con = mysql.createConnection({
				  host: process.env.DB_HOST || 'localhost',
				  port: process.env.DB_PORT || 3306,
				  user: process.env.DB_USER || 'root',
				  password: process.env.DB_PW || 'root',
				  database: databaseName
	    });
        con.query("CREATE TABLE IF NOT EXISTS customer (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, address VARCHAR(100) NOT NULL, phone VARCHAR(15));", (err, result)=>{
            if(err) throw err;
app.use(myConnection(mysql, {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PW || 'root',
    port: process.env.DB_PORT || 3306,
    database: databaseName
}, 'pool'));
app.use(express.urlencoded({extended: false}));


// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
        });
    });
});


