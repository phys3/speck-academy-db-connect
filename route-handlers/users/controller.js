const db = require('../../db/connect');
const getUsers = (req, res, next) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}
module.exports = {
    getUsers,
}