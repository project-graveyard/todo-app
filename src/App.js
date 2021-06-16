import './Styles/App.css';
import './Styles/Bootstrap/bootstrap.min.css'
import './Styles/bootstrap-icons-1.5.0/bootstrap-icons.css'
import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState(['Take the dog for a walk', 'Take out the rubbish'])
  const [input, setInput] = useState('')
  console.log(input)

  const addTodo = (event) => {
    // called when the button is clicked
    event.preventDefault() 
    console.log("It's working")
    setTodos([...todos, input])
    setInput('')  //clears the input field after submitting
  }

  let color = {
    color: "cornflowerblue",
  }

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="border-bottom">
          <span className="bi-card-checklist" style={color}></span>
        My Todo
        </h1>
        <form>
          <input type="text" placeholder="Enter a new task" className="input w-50" value={input} onChange={event => setInput(event.target.value)} />
          <button type="submit" className="btn btn-primary bi-plus-lg" onClick={addTodo} > Add Task</button>
        </form>
      </div>
      <br /><br /><br />
      <div className="alert alert-success">
        <h2><span className="bi-list-task" style={color}></span> Todo List Items</h2>
        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
