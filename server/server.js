const express = require('express');
const app = express();
const db = require('../db/db.js');

const port = 4000;

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


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



app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
})