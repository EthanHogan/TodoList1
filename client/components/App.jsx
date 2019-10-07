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
    //how to do a get request with axios!
    // axios.get('/todo')
    // .then(response => {
    //   this.setState({
    //     data: response.data
    //   })
    // })
    // .then(() => console.log(this.state.data))

    const url = 'http://localhost:4000/todo';
    fetch(url)
    .then(response => response.json())
    .then(allTodos => {
      this.setState({
        data: allTodos
      })
    })
    .then(() => console.log(this.state.data))
    .catch(err => console.log(err))
  }
  

  saveTodo(todo) {
    // how to do a post request with axios!
    // axios.post('/todo', {
    //   todo: todo
    // })
    // .then(response => console.log(response))

    // how to do the same post request with fetch!
    const url = 'http://localhost:4000/todo';
    let fetchData = {
      method: 'POST',
      body: JSON.stringify({todo: todo}),
      headers: { "Content-Type" : "application/json"}
    }
    fetch(url, fetchData)
    .then(() => {
      fetch(url)
      .then(response => response.json())
      .then(allTodos => {
        this.setState({
          data: allTodos
        })
      })
      .then(() => console.log(this.state.data))
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }

  deleteTodo(event){
    var id = event.target.value;
    axios.delete('/todo', { 
      data: {
        id: id
      } 
    })
    .then( () => {
      const url = 'http://localhost:4000/todo';
      fetch(url)
      .then(response => response.json())
      .then(allTodos => {
        this.setState({
          data: allTodos
        })
      })
      .then(() => console.log(this.state.data))
      .catch(err => console.log(err))
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