const db = require('../../db/connect');
const getUsers = (req, res, next) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}
const getSingleUser = (req, res, next) => {
    const values = [req.params.userid];
    const text = 'SELECT * FROM users WHERE user_uid=($1)'
    db.query(text, values, (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}
const postUser = (req, res, next) => {
    const values = [req.body.user_uid, req.body.first_name, req.body.last_name, req.body.email, req.body.user_password];
    const text = 'INSERT INTO users VALUES ($1,$2,$3,$4,$5)'
    db.query(text, values, (err, result) => {
        if (err) {
            return next(err);
        }
        res.status(200).send('Succesfully created');
    });
}
const deleteUser = (req, res, next)  => {
    const values = [req.params.userid];
    const text = 'DELETE FROM users WHERE user_uid=($1)'
    db.query(text, values, (err, result) => {
        if (err) {
            return next(err);
        }
        res.status(200).send('Succesfully DELETED');
    });
}
const updateUser = (req, res, next) => {
    const values = [req.params.userid, req.body.first_name, req.body.last_name, req.body.email, req.body.user_password];
    const text = 'UPDATE users SET first_name = $2, last_name = $3, email = $4, user_password = $5 WHERE user_uid = ($1);';
    db.query(text, values, (err, result) => {
        if (err) {
            return next(err);
        }
        res.status(200).send('Succesfully updated');
    });
}

module.exports = {
    getUsers,
    getSingleUser,
    postUser,
    deleteUser,
    updateUser,
};