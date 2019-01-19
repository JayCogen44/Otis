const db = require("../models/database");

function getDocs(req, res, next) {
  const queryText = "SELECT * FROM documents";
  db.query(queryText)
    .then(response => {
      res.locals.doc_data = response.rows;
      next();
    })
    .catch(err => console.log(err));
}

//=================================================================

function getSections(req, res, next) {
  const queryText = "SELECT * FROM sections";
  db.query(queryText)
    .then(response => {
      res.locals.sections = response.rows;
      next();
    })
    .catch(err => console.log(err));
}

//=================================================================

function getAllMatch(req, res, next) {
  let queryText =
    "SELECT sections.id, sections.title,sections.category, sections.content FROM sections INNER JOIN documents ON  sections.doc_id = documents.id";

  db.query(queryText)
    .then(response => {
      res.locals.data = response.rows;
      next();
    })
    .catch(err => console.log(err));
}

//=================================================================

function signUp(req, res, next) {
  let { email, name, password } = req.body;
  //hashing password on insert
  let queryText = `INSERT INTO users(email,name,password,joined) VALUES ('${email}', '${name}', crypt('${password}', gen_salt('md5')),to_timestamp(${Date.now()} / 1000.0))`;
  db.query(queryText)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}

//=================================================================

function verifyUser(req, res, next) {
  let { email, password } = req.body;

  //hashing password on login
  let queryText = `SELECT email,password,name FROM users WHERE email=$1 AND password=crypt($2,password)`;
  const values = [email, password];
  db.query(queryText, values)
    .then(response => {
      res.locals.user = response.rows[0].name;

      next();
    })
    .catch(err => {
      console.log(err);
    });
}
//=================================================================

function postDoc(req, res, next) {
  let { title } = req.body;
  let queryText = `INSERT INTO documents(title) VALUES ('${title}')`;

  db.query(queryText)
    .then(response => {
      next();
    })
    .catch(err => console.log(err));
}

function postSection(req, res, next) {}

module.exports = {
  getDocs,
  getSections,
  getAllMatch,
  signUp,
  verifyUser,
  postDoc,
  postSection
};
