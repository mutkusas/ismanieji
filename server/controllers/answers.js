const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../db.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Connected to the database.');
});

exports.getAll = function (req, res) {
    let sql = `SELECT Id, Zaidejas, Klausimas, Atsakymas, Rezultatas FROM Lapelis
    ORDER BY Id`;
    var answers = [];
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        var answers = [];
        rows.forEach((row) => {
            answers.push(row);
        });
        res.send(answers);
    });
};
exports.getById = function () { };
exports.add = function (req, res) {
    let sql = `SELECT Id, Teisingas FROM Klausimas where Id =` + req.body.question + `;`;
    var answers = [];
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        var answers = [];
        console.log(rows);

            let sql = `Insert into Lapelis(Zaidejas, Klausimas, Atsakymas, Rezultatas) values('` +
                req.body.player + `','` +
                req.body.question + `','` +
                req.body.answer + `','` +
                checkAnswer(rows[0].Teisingas, req.body.answer) + `');`;
            db.run(sql, [], (err, rows) => {
                if (err) {
                    throw err;
                }
            });
            res.send(req.body);
    });

};

function checkAnswer(correct, answer) {
    return correct == answer ? 1 : 0;
}

exports.update = function () { };
exports.delete = function () { };