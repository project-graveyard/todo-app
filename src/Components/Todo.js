import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import '../Styles/Todo.css'



function Todo(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText primary={props.todo} secondary={'Deadline Time'} />
                </ListItem>
            </List>
        </div>
    )
}

export default Todo
