const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('db.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected to the database.');
});

function insertSchool(pavadinimas) {
  let sql = "INSERT INTO Mokykla(Pavadinimas) VALUES('" + pavadinimas + "')";

  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
}

function insertTeam(pavadinimas, mokyklosId) {
  let sql = "INSERT INTO Komanda(Pavadinimas, Mokykla) VALUES('" + pavadinimas + "', " + mokyklosId + ")";

  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
}

getAllSchools();
function getAllSchools() {
  let sql = `SELECT Id, Pavadinimas name FROM Mokykla
           ORDER BY name`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    var schools = [];
    rows.forEach((row) => {
      schools.push(row);
    });
    return schools;
  });
}

// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });