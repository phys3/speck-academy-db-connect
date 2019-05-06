const db = require('../../db/connect');
const getHalls = (req, res, next) => {
    db.query('SELECT * FORM halls', (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}
module.exports = {
    getHalls,
};