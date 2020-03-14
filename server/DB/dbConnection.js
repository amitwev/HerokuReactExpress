const { Client } = require('pg');

module.exports = () =>{
    return new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    })
}