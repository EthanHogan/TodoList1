import React from 'react';
import TodoEntry from './TodoEntry.jsx';

var TodoList = ({todos, deleter}) => {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoEntry todo={todo.todo} key={todo.id} todoId={todo.id} deleter={deleter}/>
      })}
    </div>
  )
}

export default TodoList;