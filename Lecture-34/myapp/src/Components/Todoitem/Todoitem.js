import React from 'react'
import styles from '../Todoitem/Todoitem.module.css';

const Todoitem = ({ item, updateCheckbox, deleteItem, upShow, downShow }) => {
  const updateCheckboxHandler = (ev) => {
    let class_name = ev.target.className;
    let id = ev.target.parentElement.id;

    if (class_name == 'checkbox') {
      updateCheckbox(id);
    }
    else if (class_name == 'deleteItem') {
      deleteItem(id);
    }
  }

  let strikeOrNot = item.checked ? 'line-through' : '';
  
  return (
    <>
      <div className={styles.todoItem} id={item.id} onClick={updateCheckboxHandler}>
        <input type="checkbox" className='checkbox' id='checkbox'/>
        <h3 className={styles.todoBtn} style={{'textDecoration':strikeOrNot}}>{ item.name }</h3>
        {upShow && <button className={styles.todoBtn} id='upArrow'>⬆️</button>}
        {downShow && <button className={styles.todoBtn} id='downArrow'>⬇️</button>}
        <button className={styles.todoBtn}>🗑️</button>
      </div>
    </>
  )
}

export default Todoitem
