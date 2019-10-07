import React from 'react';
import CreateTodo from './CreateTodo.jsx';
import TodoList from './TodoList.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data : []
    }
  }

  componentDidMount() {
    this.getTodosAndSetState();
  }

  getTodosAndSetState() {
    this.fetchAllTodos()
    .then(allTodos => {
      this.setStateWithTodos(allTodos)
    })
  }

  fetchAllTodos() {
    return new Promise ((resolve, reject) => {
      const url = 'http://localhost:4000/todo';
      fetch(url)
      .then(response => response.json())
      .then(allTodos => {
        resolve(allTodos)
      })
      .catch(err => reject(err))
    })
  }
  
  postATodo(todo) {
    return new Promise ((resolve, reject) => {
      axios.post('/todo', {
        todo: todo
      })
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
  
  setStateWithTodos(allTodos) {
    this.setState({
      data: allTodos
    })
  }
  
  saveTodo(todo) {
    this.postATodo(todo)
    .then(() => {
      this.getTodosAndSetState();
    })
  }

  deleteTodo(event){
    var id = event.target.value;
    axios.delete('/todo', { 
      data: {
        id: id
      } 
    })
    .then(() => {
      this.getTodosAndSetState();
    })
  }

  render() {
    return (
      <div>
        <CreateTodo submit={this.saveTodo.bind(this)} />
        <TodoList todos={this.state.data} deleter={this.deleteTodo.bind(this)}/>
      </div>
    )
  }
}

export default App;