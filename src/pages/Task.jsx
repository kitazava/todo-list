import React from "react"
import '../css/style.css'
import { Button } from "@material-ui/core"
const Task = ({itemsTask,deleteItemTask}) =>{
    var iT = itemsTask.filter(item => item.type === "task")
    return(
        <div className="pages_block">
             {
              iT.map(i =>{
                return(
                    <p className="page_text" key={i.id}>{i.value} <br />
                    <Button variant="contained" color="secondary" onClick={() => deleteItemTask(i.id)}>Delete</Button>
                    </p>
                )
              })
            }
        </div>
    )
}

export default Task
