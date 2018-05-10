const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('../db.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Connected to the database.');
});

exports.getAll = function (req, res) {
    let sql = `SELECT Id, Tekstas, A,B,C,D, Teisingas FROM Klausimas
    ORDER BY Id`;
    var questions = [];
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            questions.push(row);
        });
        res.send(questions);
    });
};
exports.getById = function () { };
exports.add = function (req, res) {
    let sql = `Insert into Klausimas(Tekstas, A, B, C, D, Teisingas) values('` +
        req.body.name + `','` + 
        req.body.a + `','` + 
        req.body.b + `','` + 
        req.body.c + `','` + 
        req.body.d + `', '` + 
        req.body.teisingas + `');`;
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
    });
    res.send(req.body);
};
exports.update = function () { };
exports.delete = function () { };