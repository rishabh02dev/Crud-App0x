import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
  dateStrings: "date",
});

//GET API
app.get("/", (req, res) => {
  const sql = "SELECT * FROM book";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
});

//Post api
app.post("/create", (req, res) => {
  const sql = "INSERT INTO book (publisher, name, date) VALUES (?) ";
  const values = [req.body.publisher, req.body.name, req.body.date];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
});

//Patch api
app.put("/update/:id", (req, res) => {
  const sql =
    "update book set publisher = ? , name = ? , date = ? where id = ?";
  const values = [req.body.publisher, req.body.name, req.body.date];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
});

//delete api
app.delete("/delete/:id", (req, res) => {
  const sql = "delete from book where id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, res) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
});

//getting api according to a particular id
app.get("/getrecord/:id", (req, res) => {
  const id = req.params.id;
  const sql = "select * from where book where id = ?";
  db.query(sql, [id], (err, res) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
});

app.listen(3030, () => {
  console.log("App Running");
});
