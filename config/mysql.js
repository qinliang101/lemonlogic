const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'qinliang',
    database: 'lemon',
})

exports.query = function(sql) {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                reject(error)
            } else {
                connection.query(sql, (error, results, fields) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(results)
                    }
                    connection.release()
                })
            }
        })
    })
}