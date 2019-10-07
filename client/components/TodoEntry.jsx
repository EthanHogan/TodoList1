import React from 'react';

var TodoEntry = ({todo, todoId, deleter}) => {
  return (
    <div>
      <li value={todoId}>{todo}     <button value={todoId} onClick={deleter}>Delete</button></li>
    </div>
  )
}

export default TodoEntry;