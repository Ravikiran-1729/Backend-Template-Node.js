const {getPool} = require('../config/db.config');

const findUser = async () =>{
    const db = getPool();

    const [rows] = await db.execute('SELECT 1');

    return rows[0];
};

module.exports = {
    findUser
};