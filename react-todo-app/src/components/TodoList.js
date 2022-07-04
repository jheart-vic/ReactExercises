import React from "react";
import TodoItem from "./TodoItem";


 function TodoList (props) {

    return(
      <div>
        <ul>
        {props.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo}
           handleChangeProps={props.handleChangeProps}
           deleteTodoProps={props.deleteTodoProps}
           setUpdate={props.setUpdate}
           />
        ))}
      </ul>
      </div>
    )
  }

// class TodoList extends React.Component {

//   render() {
//     return(
//       <div>
//         <ul>
//         {this.props.todos.map(todo => (
//           <TodoItem key={todo.id} todo={todo} />
//         ))}
//       </ul>
//       </div>
//     )
//   }
// }
export default TodoList;