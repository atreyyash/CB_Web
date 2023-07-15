import {React, useState} from 'react'
import Todoinput from '../Todoinput/Todoinput'
import Todolist from '../Todolist/Todolist'
import { v4 as uuidv4 } from 'uuid';
import styles from '../Todo/Todo.module.css';
import Children from '../Children/Children';
import Wrapper from '../Wrapper/Wrapper';

const initialTodos = [
    { name: "Cricket", id: 1 },
    { name: "Basketball", id: 2 },
    { name: "Dance", id: 3 },
    {name: "Swimming", id: 4}
];

const Todo = () => {
    const [todos, setTodos] = useState(initialTodos);
    const updateTodo = (newTask) => {
        // console.log("Naya Taks: ", newTask);
        setTodos([{name: newTask, id: uuidv4()},...todos]);
    }
    // Yeh neeche wala sahi nahi hai krna
    // const newTodo = todos;
    // newTodo.push(newTask);
    // setTodos(newTodo);
  
    // Yeh neeche wala sahi hai krna
    // const newTodo =[];
    // todos.map((i)=>{
    //     newTodo.push(i);
    // })
    // newTodo.push(newTask);
  return (
    <>
      <h1 className={styles.heading}>Todo List</h1>
      <Todoinput updateTodo={updateTodo} />
      <Todolist todos={todos} />
    </>
  )
}

// Also inbuilt Fragment can written like this
{/* <>
  <h1 className={styles.heading}>Todo List</h1>
  <Todoinput updateTodo={updateTodo} />
  <Todolist todos={todos} />
  <Children>
    <h3>Hello</h3>
    <p>This is Child Component</p>
  </Children>
</> */}

// React Inbuilt Fragment
{/* <React.Fragment>
  <h1 className={styles.heading}>Todo List</h1>
  <Todoinput updateTodo={updateTodo} />
  <Todolist todos={todos} />
  <Children>
    <h3>Hello</h3>
    <p>This is Child Component</p>
  </Children>
</React.Fragment> */}

// User Defined Wrapper
{/* <Wrapper>
  <h1 className={styles.heading}>Todo List</h1>
  <Todoinput updateTodo={updateTodo} />
  <Todolist todos={todos} />
  <Children>
    <h3>Hello</h3>
    <p>This is Child Component</p>
  </Children>
</Wrapper> */}

export default Todo
