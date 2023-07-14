import React from 'react'

const Todoitem = (props) => {
  let task = props.task;
  return (
    <li>
      {task.name}
      <button>⬆️</button>
      <button>⬇️</button>
      <button>🗑️</button>
    </li>
  )
}

export default Todoitem
