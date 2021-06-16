import './Styles/App.css';
import './Styles/Bootstrap/bootstrap.min.css'
import { useState } from 'react'
import { Button } from '@material-ui/core'
import { PlaylistAddCheck, Add } from '@material-ui/icons';
import Todo from './Components/Todo'

function App() {

  const [todos, setTodos] = useState(['Take the dog for a walk', 'Take out the rubbish'])
  const [input, setInput] = useState('')
  // console.log(input)

  const addTodo = (event) => {
    // called when the button is clicked
    event.preventDefault() 
    // console.log("It's working")
    setTodos([...todos, input])
    setInput('')  //clears the input field after submitting
  }

  let color = {
    color: "cornflowerblue",
  }

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="border-bottom"><PlaylistAddCheck color="primary" fontSize="large" /> My Todo</h1>
        <form>
          <input type="text" placeholder="Enter a new task" className="input w-50" value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type="submit"  onClick={addTodo} ><Add /> Add Task</Button>
        </form>
      </div>
      <br /><br /><br />
      <div className="alert alert-success">
        <h2>Todo List Items</h2>
        <ul>
          {todos.map(todo => (
            <Todo todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
