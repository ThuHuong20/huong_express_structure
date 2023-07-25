import dotenv from 'dotenv'
dotenv.config();

import mysql from 'mysql';

let mySQL = mysql.createConnection({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER_NAME,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DATABASE_NAME,
});
function mysqlConnect() {
    try {
        mySQL.connect(err => {
            if (err) {
                console.log("loi ve MySQL:", err.sqlMessage)
            } else {
                console.log("ket noi MySQL thanh cong!");
            }
        });
    } catch (err) {
        console.log("loi cu phap123567:");
    }
}


module.exports = {
    mysqlConnect,
    mySQL
}