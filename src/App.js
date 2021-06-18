import './Styles/App.css';
import './Styles/Bootstrap/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { PlaylistAddCheck, Add } from '@material-ui/icons';
import Todo from './Components/Todo'
import { db } from './firebase';
import firebase from 'firebase'



function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  //Getting data from database
  useEffect(() => {
    //runs when App.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => doc.data().todoItem))
    })
  }, []);

  const addTodo = (event) => {
    // called when the button is clicked
    event.preventDefault()

    db.collection('todos').add({
      todoItem: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input])
    setInput('')  //clears the input field after submitting
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
