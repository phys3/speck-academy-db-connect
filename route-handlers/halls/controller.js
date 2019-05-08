const db = require('../../db/connect');
const getHalls = (req, res, next) => {
    db.query('SELECT * FROM halls', (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}

const getSingleHall = (req, res, next) => {
    const values = [req.params.hallUId];
    const text = 'SELECT * FROM halls WHERE hall_uid=($1)'
    db.query(text, values, (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}
const postHall = (req, res, next) => {
    const values = [req.params.hallUId];
    const text = 'INSERT INTO halls (hall_uid) VALUES ($1)'
    db.query(text, values, (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}

module.exports = {
    getHalls,
    getSingleHall,
    postHall,
};