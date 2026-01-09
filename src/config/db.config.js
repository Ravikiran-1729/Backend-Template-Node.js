// Load environment variables from .env
require('dotenv').config();

/*

const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect(process.env.mongoURL)
}

module.exports = connectDB;

*/




// ================================
// MySQL Database Configuration
// ================================

const mysql = require('mysql2/promise');

let pool;

const connectDB = async () =>{
    if(pool) return pool;

    try {
        pool = mysql.createPool({
            host : process.env.DB_HOST,
            user : process.env.DB_USER,
            password : process.env.DB_PASSWORD,
            database : process.env.DB_NAME,
            waitForConnections : true,
            connectionLimit : 10,
            queueLimit : 0
        });

        const conn = await pool.getConnection();
        conn.release();

        console.log("MySQL connected successfully");

        return pool;
    } catch (error) {
        console.error("MySQL connection failed :", error.message);
        process.exit(1);
    }
};


const getDB = () =>{
    if(!pool){
        throw new Error("Database not initialized!");
    }
    return pool;
}



/*
Test Database Connection
Run: node src/config/db.config.js

connectDB();
*/


module.exports = {
    connectDB,
    getDB
};