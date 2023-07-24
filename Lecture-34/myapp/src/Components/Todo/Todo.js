import {React, useState} from 'react'
import Todoinput from '../Todoinput/Todoinput'
import Todolist from '../Todolist/Todolist'
import { v4 as uuidv4 } from 'uuid';
import styles from '../Todo/Todo.module.css';

const initialTodos = [
    { name: "Cricket", id: 1 },
    { name: "Basketball", id: 2 },
    { name: "Dance", id: 3 },
    {name: "Swimming", id: 4}
];

const Todo = () => {
  let initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(initialTodos);
  
    const updateTodo = (newTask) => {
      let newtodos = JSON.parse(localStorage.getItem('todos')) || [];
      newtodos.unshift({ name: newTask, id: uuidv4(), checked: false });
      localStorage.setItem('todos', JSON.stringify(newtodos));

      setTodos(
        newtodos
      )
  }
  
  const updateCheckbox = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        return todo.id == id ?
          { name: todo.name, id: todo.id, checked: !todo.checked } :
          todo
      })
    )
  }

  const deleteItem = (id) => {
    setTodos((prevState) =>
      prevState.filter((item) => {
        return item.id === id ? false : true;
      })
    );
  }

  return (
    <div>
          <h1 className={styles.heading}>Todo List</h1>
          <Todoinput updateTodo={ updateTodo } />
      <Todolist
        updateCheckbox={updateCheckbox}
        todos={todos}
        deleteItem={deleteItem}
      />
    </div>
  )
}

export default Todo
