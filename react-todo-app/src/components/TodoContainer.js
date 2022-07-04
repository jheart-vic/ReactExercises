import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./inputTodo";


const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  const handleChange = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const deleteTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }
  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [])

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodoList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={deleteTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  )
}

export default TodoContainer
// class TodoContainer extends React.Component {
//   handleChange = (id) => {
//     this.setState(prevState => ({
//       todos: prevState.todos.map(todo => {
//         if (todo.id === id) {
//           return {
//             ...todo,
//             completed: !todo.completed,
//           }
//         }
//         return todo
//       }),
//     }))
//   };
  
 
//   state = {
//     todos: [
//       {
//         id: uuidv4(),
//         title: "Setup development environment",
//         completed: true
//       },
//       {
//         id: uuidv4(),
//         title: "Develop website and add content",
//         completed: false
//       },
//       {
//         id: uuidv4(),
//         title: "Deploy to live server",
//         completed: false
//       }
//     ]
//    };

//    deleteTodo = id => {
//     console.log(id, 'hello')
//     this.setState({
//       todos: [
//         ...this.state.todos.filter(todo => {
//           return todo.id !== id;
//         })
//       ]
//     });
//  }
//  addTodoItem = title => {
//   const newTodo = {
//     id: uuidv4(),
//     title: title,
//     completed: false
//   };
//   this.setState({
//     todos: [...this.state.todos, newTodo]
//   });
// };
// setUpdate = (updatedTitle, id) => {
//   this.setState({
//     todos: this.state.todos.map(todo => {
//       if (todo.id === id) {
//         todo.title = updatedTitle
//       }
//       return todo
//     }),
//   })
// }
//   render() {
//     return (
//       <div>
//         <Header />
//        <InputTodo  addTodoProps={this.addTodoItem}/>
//       <TodoList todos={this.state.todos}
//        handleChangeProps={this.handleChange}
//        deleteTodoProps={this.deleteTodo}
//        setUpdate={this.setUpdate}
//        />
//     </div>
//     //   <ul>
//     //   {this.state.todos.map(todo => (
//     //     <li>{todo.title}</li>
//     //   ))}
//     // </ul>

//     )
//   }
// }