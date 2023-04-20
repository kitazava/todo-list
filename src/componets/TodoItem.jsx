import React from "react"
import "../css/style.css"
import { Button } from "@material-ui/core"
import { TextField } from "@material-ui/core"
const TodoItem = ({items,itemEdit,deleteItem,editItem,setItemEdit,setEditText}) =>{
    return(
        <div style={{textAlign: "center"}}>
            {
                items.map(item =>(
                <span className="page_text_todo" key={item.id}>
                {item.id === itemEdit
                ? 
                (
                <TextField 
                    id="outlined-basic" 
                    variant="outlined" 
                    onChange={(e) => setEditText(e.target.value)}
                />
                ) 
                : 
                (<p>{item.value}</p>)
                }
                {
                item.id === itemEdit 
                ? 
                (
                <Button variant="contained" color="primary" onClick={() => editItem(item.id)}>Save</Button>
                ) 
                : 
                (
                <Button variant="contained" onClick={() => setItemEdit(item.id)}>Edit</Button>
                )
                }
                <Button variant="contained" color="secondary" onClick={() => deleteItem(item.id)}>Delete</Button>
                </span>                   
                ))
            }
        </div>
    )
}

export default TodoItem