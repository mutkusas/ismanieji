const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../db.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Connected to the database.');
});

exports.getAll = function (req, res) {
    let sql = `SELECT Id, Pilnas_Vardas name, Komanda team FROM Zaidejas
    ORDER BY name`;
    var players = [];
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        var schools = [];
        rows.forEach((row) => {
            players.push(row);
        });
        res.send(players);
    });
};
exports.getById = function () { };
exports.add = function () {
    let sql = `INSERT INTO Zaidejas Id, Pilnas_Vardas name, Komanda team FROM Zaidejas
    ORDER BY name`;
    var players = [];
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        var schools = [];
        rows.forEach((row) => {
            players.push(row);
        });
        res.send(players);
    });
};
exports.update = function () { };
exports.delete = function () { };