import React from "react"
import '../css/style.css'
const Reminder = ({itemsReminder,deleteItemReminder}) =>{
    var iR = itemsReminder.filter(item => item.type === "reminder")
    return(
        <div>
            {
              iR.map(i =>{
                return(
                    <p className="page_text" key={i.id}>{i.value} <button onClick={()=> deleteItemReminder(i.id)}>Удалить</button></p>
                )
              })
            }
        </div>
    )
}

export default Reminder

