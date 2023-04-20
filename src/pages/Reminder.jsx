import React from "react"
import '../css/style.css'
import { Button } from "@material-ui/core"
const Reminder = ({itemsReminder,deleteItemReminder}) =>{
    var iR = itemsReminder.filter(item => item.type === "reminder")
    return(
        <div className="pages_block">
            {
              iR.map(i =>{
                return(
                    <p className="page_text" key={i.id}>{i.value} <br />
                    <Button variant="contained" color="secondary" onClick={() => deleteItemReminder(i.id)}>Delete</Button>
                    </p>
                )
              })
            }
        </div>
    )
}

export default Reminder

