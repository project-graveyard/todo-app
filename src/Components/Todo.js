import { Button, Input, List, ListItem, ListItemText, makeStyles, Modal } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import React, { useState } from 'react'
import { db } from '../firebase'
import '../Styles/Todo.css'


const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));




function Todo(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const updateTodo = () => {

        db.collection('todos').doc(props.todo.id).set({
            todoItem: input,
        }, { merge: true })

        setOpen(false)
        setInput('')
    }

    const [input, setInput] = useState('')

    return (
        <div>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                        <Input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                        <Button size='small' variant='contained' color='primary' onClick={updateTodo}>Update Todo</Button>
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary={'Deadline Time'} />
                </ListItem>
                <Button variant='contained' size='small' color='secondary' onClick={event => setOpen(true)}>Edit</Button>
                <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}><DeleteForever style={{ fill: '#ff0000' }} /> Delete Me</Button>
            </List>
        </div>
    )
}

export default Todo
