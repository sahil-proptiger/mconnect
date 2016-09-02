var mysql = require("mysql");

var con = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mconnect'
});

module.exports.execQuery = function(q) {
    console.time("Query time");
    return new Promise(function(resolve, reject) {
        con.query(q, function(err, rows) {
            if (err) {
                reject(err);
                throw err;
            }
            console.log(q)
            console.timeEnd("Query time");
            resolve(rows);

        });
    });
}

module.exports.execQueryParams = function(q, obj) {
    console.time("Query time");
    return new Promise(function(resolve, reject) {
        con.query(q, obj, function(err, rows) {
            if (err) {
                reject(err);
                throw err;
            }
            console.log(q)
            console.timeEnd("Query time");
            resolve(rows);
        });
    });
}