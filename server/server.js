const express = require('express');
const app = express();
const db = require('../db/db.js');

const port = 4000;

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// get all todos from database and send them back with their id's
app.get('/todo', (req, res) => {
  (async () => {
    var todos = await db.getAllTodos()
    res.send(todos)
  })()
  .catch((err) => {
    console.log(err);
    res.send(err);
  });
})

// add a todo to the database, send back the insertId in response
app.post('/todo', (req, res) => {
  var todo = req.body.todo;
  (async () => {
    var insertId = await db.postATodo(todo);
    res.send(insertId+'');
  })()
  .catch((err) => {
    console.log(err);
    res.send(err);
  });
})

// need delete route for deleting todos from DB


app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
})