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
    const values = [req.params.hallid];
    const text = 'SELECT * FROM halls WHERE hall_uid=($1)'
    db.query(text, values, (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}
const postHall = (req, res, next) => {
    const values = [req.body.hall_uid, req.body.hall_name, req.body.hall_adress, req.body.img, req.body.size, req.body.datecreated, req.body.dateupdated];
    const text = 'INSERT INTO halls VALUES ($1,$2,$3,$4,$5,$6,$7)'
    db.query(text, values, (err, result) => {
        if (err) {
            return next(err);
        }
        res.status(200).send('Succesfully created');
    });
}
const deleteHall = (req, res, next)  => {
    const values = [req.params.hallid];
    const text = 'DELETE FROM halls WHERE hall_uid=($1)'
    db.query(text, values, (err, result) => {
        if (err) {
            return next(err);
        }
        res.status(200).send('Succesfully DELETED');
    });
}
const updateHall = (req, res, next) => {
    const values = [req.body.hall_name, req.body.hall_adress, req.body.img, req.body.size, req.body.datecreated, req.body.dateupdated, req.params.hallid];
    const text = 'UPDATE halls SET hall_name = $1, hall_address = $2, img = $3, size = $4, datecreated = $5, dateupdated = $6 WHERE hall_uid = ($7);';
    db.query(text, values, (err, result) => {
        if (err) {
            return next(err);
        }
        res.status(200).send('Succesfully updated');
    });
}

module.exports = {
    getHalls,
    getSingleHall,
    postHall,
    deleteHall,
    updateHall,
};