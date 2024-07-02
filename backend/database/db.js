import mysql2 from "mysql2";

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "e_nation",
});

db.connect((err) => {
  if (err) return console.log(err);
  console.log("database connected!");
});

export default db;
