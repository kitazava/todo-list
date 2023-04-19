import React from "react"
import '../css/style.css'
const Task = ({itemsTask,deleteItemTask}) =>{
    var iT = itemsTask.filter(item => item.type === "task")
    return(
        <div>
             {
              iT.map(i =>{
                return(
                    <p className="page_text" key={i.id}>{i.value} <button onClick={()=> deleteItemTask(i.id)}>Удалить</button></p>
                )
              })
            }
        </div>
    )
}

export default Task
