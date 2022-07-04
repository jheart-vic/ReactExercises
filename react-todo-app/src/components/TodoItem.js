import React, { useState } from "react";

import styles from "./TodoItem.module.css"

function TodoItem(props) {

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  const { completed, id, title } = props.todo
 const [state, setState] = useState ({

   state: {
     editing: false,
   }
  })
   const handleEditing = () => {
    setState({
      editing: true,
    })
  }
 const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setState({ editing: false })
    }
  }
  let viewMode = {}
let editMode = {}

if (state.editing) {
  viewMode.display = "none"
} else {
  editMode.display = "none"
}

  return (
  <li  className={styles.item}>
     <div style={viewMode} onDoubleClick={handleEditing}>
     <input type="checkbox"   onChange={() => props.handleChangeProps(id)}
      className={styles.checkbox}
     checked={completed}/>
     <button onClick={() => props.deleteTodoProps(id)}>
    Delete
  </button>
  <span style={completed ? completedStyle : null}>
      {title}
   </span>
   </div>
     <input type="text" style={editMode}   value={title}
       onChange={e => {
        props.setUpdate(e.target.value, id)
      }}
       className={styles.textInput} 
       onKeyDown={handleUpdatedDone}
       />
  </li>
  )
}
export default TodoItem;