const pg = require("pg");

const uri =
  "postgres://epgnoivo:p3_CvprPHgq3oeFQ9fErtCXs2sd41C8n@stampy.db.elephantsql.com:5432/epgnoivo";

const db = new pg.Client(uri);

db.connect((err, db_) => {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  console.log("Database connected");
});

module.exports = db;
