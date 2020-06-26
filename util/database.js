const mysql = require('mysql2');

const pool =mysql.createPool({
       host: 'localhost',
       user: 'root',
       database: 'jimmy'


});

module.exports = pool.promise();