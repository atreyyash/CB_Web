import React from 'react'
import Todo from './Components/Todo/Todo'
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Todo />
    </div>
  )
}

export default App
