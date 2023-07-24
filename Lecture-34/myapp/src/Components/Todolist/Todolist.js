import React from 'react'
import Todoitem from '../Todoitem/Todoitem';

const Todolist = (props) => {
    const { todos } = props;
  return (
    <div>
          {todos.map((t, indx) => {
            return <Todoitem
              updateCheckbox={props.updateCheckbox}
              key={t.id}
              item={t}
              deleteItem={props.deleteItem}
              upShow={indx != 0 ? true : false}
              downShow={indx != todos.length - 1 ? true : false}
            />
        })}
    </div>
  )
}

export default Todolist
