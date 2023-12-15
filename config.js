import mysql from "mysql";

export const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '160516zr',
    database: 'hospital'
})