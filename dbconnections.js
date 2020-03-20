/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/


//creating a table//

/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "system",
  password: "system"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});*/

// creating my sql table

/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "system",
  password: "system",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (id VARCHAR(255), name VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/

//my sql insert into

/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "system",
  password: "system",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (id, name) VALUES ('1', 'naveen')";
  var sql = "INSERT INTO customers (id, name) VALUES ('2', 'harish')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("2 record inserted");
  });
});*/

//selecting the row

/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "system",
  password: "system",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});*/

//delete the row

/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "system",
  password: "system",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE id = '2'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});*/

//select by id

/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "system",
  password: "system",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE id = '1'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});*/
 
//update
/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "system",
  password: "system",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  
  var sql = "UPDATE customers SET name = 'sai' WHERE id = '1'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});*/

//drop table

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "system",
  password: "system",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});







