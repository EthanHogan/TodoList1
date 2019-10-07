const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'pineapple',
  database : 'TodosDB'
})

connection.connect()

// function that can get all todos from DB and returns them with their id's
function getAllTodos(){
  return new Promise ((resolve, reject) => {
    connection.query('SELECT * FROM Todos;', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}

// function that can post a new todo to the DB. Also needs to return insertID
function postATodo(todo){
  return new Promise ((resolve, reject) => {
    connection.query('INSERT INTO Todos (todo) VALUES (?);', [todo], function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result.insertId);
      }
    })
  })
}

//function that deletes a todo from the DB at a given id
function deleteATodo(id) {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM Todos WHERE id = (?)', [id], (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}
module.exports = {getAllTodos, postATodo, deleteATodo}


// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  //   if (error) throw error;
  //   console.log('The solution is: ', results[0].solution);
  // });