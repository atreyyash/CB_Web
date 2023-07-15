import React from 'react'
import styles from '../Todoitem/Todoitem.module.css';

const Todoitem = ({item}) => {
  return (
    <>
      <div className={styles.todoItem}>
        <h3 className={styles.todoBtn}>{ item.name }</h3>
        <button className={styles.todoBtn}>⬆️</button>
        <button className={styles.todoBtn}>⬇️</button>
        <button className={styles.todoBtn}>🗑️</button>
      </div>
    </>
  )
}

export default Todoitem
