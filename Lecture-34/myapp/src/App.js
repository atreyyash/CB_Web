import React, { useState } from 'react'
import Todo from './Components/Todo/Todo'
import styles from './App.module.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

const App = () => {
  const formSubmitHandler = (ev) => {
    ev.preventDefault();
    console.log(ev);
    
  }

  const [val, setVal] = useState("");


  return (
    <div className={styles.container}>
      {/* <Todo /> */}

      <nav>
        <div onClick={() => {setVal("home")}} >Home</div>
        <div onClick={() => {setVal("about")}} >About</div>
        <div onClick={() => {setVal("contact")}} >Contact</div>
      </nav>

      {val === 'home' && <Home />}
      {val === 'about' && <About />}
      {val === 'contact' && <Contact />}
      {/* <form onSubmit={formSubmitHandler}>
        <input type="text" name="username" placeholder='Enter Username'/>
        <button type="submit">Click Me</button>
      </form> */}
    </div>
  )
}

export default App
