var mysql = require("mysql");
class MySqlDb {
    dbConfig() {
        return {
            server: 'localhost',
            user: 'root',
            password: '',
            database: 'marlon_py_license',
            options: {
                encrypt: true // Use this if you're on Windows Azure
            }
        }
    }
    executeQuery(query) {
        var connection = mysql.createConnection(this.dbConfig());
        connection.connect();
        return new Promise((resolve, reject) => {
            connection.query(query, function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });

             connection.end();
        })
    }

}
module.exports = new MySqlDb;