import { useState } from 'react'
import './App.css'
let counter = 4;
function App() {
  const [todos,setTodos] = useState([
    {
      id:1,
      title:"go to gym",
      description:"go to gym today"
    },
    {
      id:2,
      title:"go to gym",
      description:"go to gym today"
    },
    {
      id:3,
      title:"go to gym",
      description:"go to gym today"
    }
  ]);

  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title,description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
