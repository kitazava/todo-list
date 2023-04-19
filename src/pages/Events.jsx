import React from "react"
import '../css/style.css'
const Events = ({itemsEvent,deleteItemEvent}) =>{
    var iE = itemsEvent.filter(item => item.type === "event")
    return(
        <div>
          {
             iE.map(i =>{
              return(
                  <p className="page_text" key={i.id}>{i.value} <button onClick={()=> deleteItemEvent(i.id)}>Удалить</button></p>
              )
            })

          }
        </div>
    )
}

export default Events
