import React, { useState, useRef } from 'react'
import styles from '../Todoinput/Todoinput.module.css';

const Todoinput = (props) => {
    const { updateTodo } = props;

    const newTask = useRef("");

    const btnClickHandler = () => {
        console.log(newTask);
        updateTodo(newTask.current.value);
        newTask.current.value = "";
    }
    return (
        <div>
            <input type="text" placeholder='Enter New Task' ref={newTask} className={styles.inp} />
            <button onClick={btnClickHandler} className={styles.addBtn}>Add Task</button>
        </div>
    )
}

// const Todoinput = (props) => {
//     const { updateTodo } = props;
//     const [newTask, setNewTask] = useState("");

//     const btnClickHandler = () => {
//         updateTodo(newTask);
//         setNewTask("");
//     }

//     const inputChangeHandler = (ev) => {
//         // console.log(ev.target.value);
//         setNewTask(ev.target.value);
//     }
//   return (
//       <div>
    // <input
    //     type="text"
    //     placeholder='Enter New Task'
    //     value={newTask}
    //     onChange={inputChangeHandler}
    //     className={styles.inp}
    // />
//           <button onClick={btnClickHandler} className={ styles.addBtn }>Add Task</button>
//     </div>
//   )
// }

export default Todoinput
