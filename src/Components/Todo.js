import { List, ListItem, ListItemText } from '@material-ui/core'
import React, { useState } from 'react'
import '../Styles/Todo.css'

function Todo(props) {
    const [time, setTime] = useState(new Date())
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText primary={props.todo} secondary={`Date created: ${time.toUTCString()}`} />
                </ListItem>
            </List>
        </div>
    )
}

export default Todo
