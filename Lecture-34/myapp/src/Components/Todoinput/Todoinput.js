import React, { useState, useRef } from 'react'
import styles from '../Todoinput/Todoinput.module.css';

const Todoinput = (props) => {
    const { updateTodo } = props;

    const newTask = useRef("");

    const btnClickHandler = () => {
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

export default Todoinput
