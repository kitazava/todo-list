import React, { useState}from "react"
import TodoItem from "../componets/TodoItem";
import { Button, InputLabel } from "@material-ui/core"
import {TextField} from "@material-ui/core";
import { MenuItem} from "@material-ui/core";
import {FormControl} from "@material-ui/core";
import {Select} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
const Todo = ({items,setItems,deleteItem}) =>{
    const [newType, setNewType] = useState("")
    const [newItem, setNewItem] = useState("")
    const [itemEdit, setItemEdit] = useState(null);
    const [editText, setEditText] = useState("");

    const useStyles = makeStyles((theme) => ({
        formControl: {
            marginTop: 15,
            minWidth: 120,
        },   
        btn:{
            marginTop: 15,
            marginBottom: 15
        },
        todoItem:{
            marginTop: 15
        }
    }));
    
    const classes = useStyles()



    function addItem()
    {
        if(!newItem){
            return alert("Enter the element")
        }

        if(!newType){
            return alert("Enter the type")
        }

        const item = {
            id: Math.random(),
            value: newItem,
            type: newType
        }

        setItems([...items,item])
        setNewItem("")
        setNewType("")

    }

    function editItem(id) {
        const updatedItem = [...items].map((item) => {
          if (item.id === id) {
            item.value = editText
          }
          return item
        })

        if(!editText){
            return alert("Enter the changes")
        }

        setItems(updatedItem)
        setItemEdit(null)
    }
    
    
    return (
        <div className="todo">
            <div className="container">
                <div className="todo_block">
                    <div className="todo_main">
                        <div className="todo_content">
                            <h1>Todo List</h1>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Input item" 
                                    variant="outlined" 
                                    value={newItem}
                                    onChange={(e) => setNewItem(e.target.value)}
                                />
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="labelselect">Select type</InputLabel>
                                    <Select
                                        labelId="labelselect"
                                        id="labelselect"
                                        value={newType}
                                        onChange={(e) => setNewType(e.target.value)}
                                        label="Select type"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="event">Event</MenuItem>
                                        <MenuItem value="reminder">Reminder</MenuItem>
                                        <MenuItem value="task">Task</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button className={classes.btn} variant="contained" color="primary" onClick={(e)=>addItem()}>Add item</Button>
                                <TodoItem itemEdit={itemEdit} setEditText={setEditText} deleteItem={deleteItem} editItem={editItem} items={items} setItemEdit={setItemEdit} />
                               
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Todo