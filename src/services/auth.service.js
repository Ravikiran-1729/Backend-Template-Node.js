const {getDB} = require('../config/db.config');

const findUser = async () =>{
    const db = getDB();

    const [rows] = await db.execute('SELECT 1');

    return rows[0];
};

module.exports = {
    findUser
};