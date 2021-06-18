import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import React from 'react'
import '../Styles/Todo.css'



function Todo(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary={'Deadline Time'} />
                </ListItem>
                <Button><DeleteForever color='red' /> Delete Me</Button>
            </List>
        </div>
    )
}

export default Todo
