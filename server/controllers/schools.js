const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../db.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Connected to the database.');
});

exports.getAll = function (req, res) {
    let sql = `SELECT Id, Pavadinimas name FROM Mokykla
    ORDER BY name`;
    var schools
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        var schools = [];
        rows.forEach((row) => {
            schools.push(row);
        });
        res.send(schools);
    });
};
exports.getById = function () { };
exports.add = function () {
    let sql = `Insert into Mokykla(Pavadinimas) values('` + req.body.name + `');`;
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
    });
    res.send(req.body);
};
exports.update = function () { };
exports.delete = function () { };