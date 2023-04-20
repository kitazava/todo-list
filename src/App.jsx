import React,{useState} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Todo from "./pages/Todo"
import Events from "./pages/Events"
import Reminder from "./pages/Reminder"
import Task from "./pages/Task"
import Header from "./componets/Header"
const App = () => {
  const [items, setItems] = useState([])
  
  function deleteItem(id){
    const newArr = items.filter(item => item.id !== id)
    setItems(newArr)
    
  }
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/todo" element={<Todo items={items} setItems={setItems} deleteItem={deleteItem}/>}/>
          <Route path="/events" element={<Events itemsEvent={items} deleteItemEvent={deleteItem}/>}/>
          <Route path="/reminder" element={<Reminder itemsReminder={items} deleteItemReminder={deleteItem}/>}/>
          <Route path="/task" element={<Task itemsTask={items} deleteItemTask={deleteItem}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;


      