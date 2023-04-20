import React from "react"
import '../css/style.css'
import { Button } from "@material-ui/core"
const Events = ({itemsEvent,deleteItemEvent}) =>{
    var iE = itemsEvent.filter(item => item.type === "event")
    return(
      <div className="pages_block">
          {
             iE.map(i =>{
              return(
                  <p className="page_text" key={i.id}>{i.value} <br />
                    <Button variant="contained" color="secondary" onClick={() => deleteItemEvent(i.id)}>Delete</Button>
                  </p>
                  
              )
            })
          }
      </div>
    )
}

export default Events
